/**
 * Modules That's Returns Boolean.
 */

(function($dom) {
    /**
     * @apiVersion 2.0.0
     * @apiGroup DOMList Module Boolean
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
     * @apiGroup DOMList Module Boolean
     *
     * @api DOMList.hasData(name); .hasData()
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
     * @apiGroup DOMList Module Boolean
     *
     * @api DOMList.hasClass(name); .hasClass()
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
})(DOMList);
