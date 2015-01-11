/**
 * Modules That's Returns Boolean.
 */

(function($dom) {
    /**
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
})(DOMList);