/**
 * Modules That's Returns Boolean.
 */

(function($dom) {
    /**
     * @apiVersion 2.0.0
     * @apiGroup Checker
     *
     * @api {hasattr} DOMList.hasAttr(name); .hasAttr()
     * @apiName HasAttr
     * @apiDescription Check does the first selected element has specific attribute or not.
     *
     * @apiParam {Any} name String attribute name to check.<br>Use array to check does have one of attributes, or string separated by space to check does has both attribute.
     *
     * @apiExample {js} Sample #1
     * $dom('span').hasAttr('foo'); // Does has attribute foo.
     * $dom('span').hasAttr(['foo', 'bar']); // Does has attribute foo or bar.
     * $dom('span').hasAttr('foo bar'); // Does has attribute foo and bar.
     */
    $dom.module.hasAttr = function(name) {
        var has = false, hasfalse = false;

        var atrs = Object.keys(this.attr());

        if (isString(name)) {
            if (name.match(/\s+/)) {
                name = name.split(/\s+/);

                foreach(name, function(key) {
                    if (atrs.indexOf(key) > -1) {
                        has = true;
                    } else {
                        hasfalse = true;
                    }
                });

                return has === true && hasfalse === false ? true : false;
            } else {
                if (atrs.indexOf(name) > -1) {
                    has = true;
                }
            }
        } else if (isArray(name)) {
            foreach(name, function(key) {
                if (atrs.indexOf(key) > -1) {
                    has = true;
                }
            });
        }

        return has;
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup Checker
     *
     * @api {hasdata} DOMList.hasData(name); .hasData()
     * @apiName HasData
     * @apiDescription Check does first selected element has specific data attribute.
     *
     * @apiParam {Any} String data-attribute name. Use array to check does has one of data-attribute, or use string to check does has both data-attribute.
     *
     * @apiExample Sample #1
     * $dom('span').hasData('foo'); // Check does has data-attribute 'data-foo'.
     * $dom('span').hasData(['foo', 'bar']); // Check does has data-attribute 'data-foo' or 'data-bar'.
     * $dom('span').hasData('foo bar'); // Check does has data-attribute 'data-foo' and 'data-bar'.
     */
    $dom.module.hasData = function(name) {
        var has = false, hasfalse = false;

        if (isString(name)) {
            if (name.match(/\s+/)) {
                var ns = name.split(/\s+/);

                foreach(ns, function (value, i) {
                    name = name.replace(value, 'data-' + value);
                });
            } else {
                name = 'data-' + name;
            }
        } else if (isArray(name)) {
            foreach(name, function (value, i) {
                name[i] = 'data-' + value;
            });
        }

        return this.hasAttr(name);
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup Checker
     *
     * @api {hasclass} DOMList.hasClass(name); .hasClass()
     * @apiName HasClass
     * @apiDescription Check does first selected element has specific class.
     *
     * @apiParam {Any} name String class name. Use array to check does has on of class, or use string space-delimiter to check does has both class.
     *
     * @apiExample Sample#1
     * $dom('span').hasClass('foo'); // Check does has class foo.
     * $dom('span').hasClass(['foo', 'bar']); // Check does has class foo or bar.
     * $dom('span').hasClass('foo bar'); // Check does has class foo and bar.
     */
    $dom.module.hasClass = function(name) {
        var has = false, hasfalse = false;

        var cls = this.attr('class').split(/\s+/);

        if (isString(name)) {
            if (name.search(/\s+/)) {
                name = name.split(/\s+/);

                foreach(name, function (clas) {
                    if (cls.indexOf(clas) > -1) {
                        has = true;
                    } else {
                        hasfalse = true;
                    }
                });

                return has === true && hasfalse === false ? true : false;
            } else {
                if (cls.indexOf(name) > -1) {
                    has = true;
                }
            }
        } else if (isArray(name)) {
            foreach(name, function(clas) {
                if (cls.indexOf(clas) > -1) {
                    has = true;
                }
            });
        }

        return has;
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup Checker
     *
     * @api {is} DOMList.is(query); .is()
     * @apiName Is
     * @apiDescription Check does first selected element is match with query or not.
     *
     * @apiParam {String} query CSS Selector string or HTML Element.
     *
     * @apiExample {js} Sample
     * $dom('span.foo').is('.foo'); // true
     * $dom('span.foo').is('.bar'); // false if span.foo don't have class bar.
     */
    $dom.module.is = function(query) {
        if (this.length <= 0) return false;

        if (isString(query)) {
            return this.first().filter(query).length > 0 ? true : false;
        } else if (isHTML(query)) {
            return this.get(0) === query ? true : false;
        }

        return false;
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup Checker
     *
     * @api {not} DOMList.not(query); .not()
     * @apiName Not
     * @apiDescription Check does first selected element is not match with query or not.
     *
     * @apiParam {String} query CSS Selector string or HTML Element.
     *
     * @apiExample {js} Sample
     * $dom('span.foo').not('.foo'); // false
     * $dom('span.foo').not('.bar'); // true if span.foo don't have class bar.
     */
    $dom.module.not = function(query) {
        return !this.is(query) ? true : false;
    };
})(DOMList);
