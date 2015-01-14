(function($root, $dom) {
    /**
     * @apiVersion 2.0.0
     * @apiGroup DOMList
     *
     * @api $dom.data(name,value,context); $dom.data()
     * @apiName DOMData
     * @apiDescription Select elements that has data-attribute name or has data-attribute name with equal value. Using without arguments will select all elements that has data-attribute.
     *
     * @apiParam {Multi} name String data-attribute name. Use space-delimiter to select multiple name. Object contains data-attribute name and value. Array contains attributes name.
     * @apiParam {Multi} [value] Compare with value if you use string in 'name'. If value is HTML element or DOMList, it's used as context.
     * @apiParam {Multi} [context] HTML Element or DOMList as context.
     *
     * @apiExample {js} Sample #1
     * $dom.data(); // Select elements that has data-attribute.
     *
     * @apiExample {js} Sample #2
     * // It's like $dom('[data-foo="bar"]');
     *
     * $dom.data('foo', 'bar'); // Select elements that has data-attribute 'data-foo' and 'data-foo' value is 'bar'.
     *
     * $dom.data('foo bar'); // Select elements that has 'data-foo' or 'data-bar'.
     * $dom.data(['foo', 'bar']); // Select elements that has 'data-foo' or 'data-bar'.
     *
     * @apiExample {js} Sample #3
     * // It's like $dom('[data-foo="bar"], [data-bar="bar"]');
     *
     * $dom.data('foo bar', 'bar'); // Select elements that has 'data-foo' or 'data-bar' and both value is 'bar'.
     *
     * @apiExample {js} Sample #4
     * // It's like $dom('[data-foo], [data-bar]', div);
     *
     * var div = $dom('.foobar');
     * $dom.data('foo bar', div); // Select elements that has 'data-foo' or 'data-bar' from 'div' above.
     *
     * @apiExample {js} Sample #5
     * // Using object as name will find elements that has both condition.
     * // It's like $dom('[data-foo="bar"][data-bar]');
     *
     * $dom.data({ 'foo': 'bar', 'data-bar': '' }); // Select elements that has 'data-foo' and 'data-bar' and 'data-foo' value is 'bar'.
     */
    var DOMData = function(name, value, context) {
        /* Converting Value to JSON if object or array */
        if (isObject(value) || isArray(value)) {
            value = JSON.stringify(value);
        }

        /* Parsing Data Attribute Names */
        if (isString(name)) {
            /* If name contains space, do multi query */
            if (name.match(/\s+/)) {
                var sname = name.split(/\s+/);

                /* Creating Query String */
                var query = '';

                foreach(sname, function (cquery, i) {
                    /* If value defined, use it in query */
                    if (value && value !== '') {
                        /* If current query is not last, add comma to current query. */
                        if (i < sname.length) {
                            query += '[data-' + cquery + '="' + value + '"], ';
                        }

                        /* Else query without without comma */
                        else {
                            query += '[data-' + cquery + '="' + value + '"]';
                        }
                    }

                    /* Else query without value */
                    else {
                        /* If current query is not last, add comma to current query. */
                        if (i < sname.length) {
                            query += '[data-' + cquery + '], ';
                        }

                        /* Else query without without comma */
                        else {
                            query += '[data-' + cquery + ']';
                        }
                    }
                });

                /* Replacing name with query string */
                name = query;
            }

            /* If string without space, do single query */
            else {
                /* If value defined, use it in query */
                if (value && value !== '') {
                    name = '[data-' + name + '="' + value + '"]';
                }

                /* Else query without value */
                else {
                    name = '[data-' + name + ']';
                }
            }
        }

        else if (isArray(name)) {
            /* Creating query string */
            var query = '';

            foreach(name, function (cquery, i) {
                /* If value defined, use it in query */
                if (value && value !== '') {
                    /* If current query is not last, add comma to current query. */
                    if (i < name.length) {
                        query += '[data-' + cquery + '="' + value + '"], ';
                    }

                    /* Else query without without comma */
                    else {
                        query += '[data-' + cquery + '="' + value + '"]';
                    }
                }

                /* Else query without value */
                else {
                    /* If current query is not last, add comma to current query. */
                    if (i < name.length) {
                        query += '[data-' + cquery + '], ';
                    }

                    /* Else query without without comma */
                    else {
                        query += '[data-' + cquery + ']';
                    }
                }
            });

            /* Replacing name with query */
            name = query;
        }

        else if (isObject(name)) {
            /* Creating query string */
            var query = '';

            foreach(name, function (cquery, value) {
                /* Convert value to JSON if is object or is array */
                if (isObject(value) || isArray(value)) {
                    value = JSON.stringify(value);
                }

                /* If value exist, then use it in query */
                if (value && value !== '') {
                    cquery = '[data-' + cquery + '="' + value + '"]';
                }

                /* Else query with without value */
                else {
                    cquery = '[data-' + cquery + ']';
                }

                /* Adding current query to main query */
                query += cquery;
            });

            /* Replacing name with query */
            name = query;

            /* Use value as context if defined*/
            if (isString(value) || isHTML(value) || isDOMList(value)) {
                context = value;
            }
        }

        /* If no arguments defined, select elements that has data-attribute */
        else {
            /* Select all elements inside html */
            var alls = $dom('html *');

            /* Creating Array Result */
            var result = [];

            /* Iterate each elements does has data attribute */
            alls.each(function() {
                /* Get all attributes */
                var atr = $dom(this).attr();

                /* Set has to false */
                var has = false;

                foreach(atr, function (key) {
                    if (key.search(/data-/) > -1) {
                        /* If has data-attribute, set has to true */
                        has = true;
                    }
                });

                /* If has data-attribute, push current element to result */
                if (has) result.push(this);
            });

            /* Wrap result as DOMList and return it */
            return $dom(result);
        }

        /* Creating Result */
        var result;

        /* If context is defined, use as context */
        if (context) {
            result = $dom(name, context);
        }

        // If value is HTML or DOMList, use as context.
        else if (isHTML(value) || isDOMList(value)) {
            result = $dom(name, value);
        }

        /* If no value or no context, query with query string only */
        else {
            result = $dom(name);
        }

        /* Returning result */
        return result;
    };

    /* Registering DOMData to DOMList */
    $dom.data = $root.DOMData = function(name, value, context) { return new DOMData(name, value, context) };
})(window, DOMList);