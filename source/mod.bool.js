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
     * @apiParam {String} name String attribute name to check.<br>Use array or string separated by space to check does has multiple attribute.
     *
     * @apiExample {js} Sample #1
     * $dom('span').hasAttr('foo'); // Single attribute check.
     * $dom('span').hasAttr('foo bar'); // Multiple attributes check.
     * $dom('span').hasAttr(['foo', 'bar']); // Multiple attributes check.
     */
    $dom.module.hasAttr = function(name) {
        var has = false;

        var atrs = Object.keys(this.attr());

        if (isString(name)) {
            if (name.match(/\s+/)) {
                name = name.split(/\s+/);

                return this.hasAttr(name);
            } else {
                if (atrs.indexOf(name) > -1) {
                    has = true;
                }
            }
        } else if (isArray(name)) {
            foreach(name, function(key) {
                if (atrs.indexOf(key) > -1) {
                    has = true;
                } else {
                    has = false;
                }
            });
        }

        return has;
    };
})(DOMList);