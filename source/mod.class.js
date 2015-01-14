(function($dom) {
    'use strict';

    /**
     * @apiVersion 2.0.0
     * @apiGroup DOMList.Module.Class
     *
     * @api {addclass} DOMList.addClass(name); .addClass()
     * @apiName AddClass
     * @apiDescription Add class to class selected elements lists.
     *
     * @apiParam {String} name String class name to add. If you want, you can use array to add multiple class.
     *
     * @apiExample {js} Sample #1
     * $dom('.foo').addClas('clearfix'); // Add single class.
     * $dom('.foo').addClass('clearfix fit relative'); // Add multiple class.
     * $dom('.foo').addClass(['clearfix', 'fit', 'relative']); // Add multiple class.
     */
    $dom.module.addClass = function(name) {
        var $this = this;

        if (isString(name)) {
            if (name.match(/\s+/)) {
                name = name.split(/\s+/);
                foreach(name, function(attr) {
                    $this.addClass(attr);
                });
            } else {
                $this.each(function() {
                    this.classList.add(name);
                });
            }
        } else if (isArray(name)) {
            foreach(name, function (attr) {
                $this.addClass(attr);
            });
        }

        return this;
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup DOMList.Module.Class
     *
     * @api {remclass} DOMList.remClass(name); .remClass()
     * @apiName RemClass
     * @apiDescription Remove class from selected elements class lists.
     *
     * @apiParam {String} name String class name. You can use array if you want to use remove multiple class.
     *
     * @apiExample {js} Sample #1
     * $dom('.foo').remClass('bar');
     * $dom('.foo').remClass(['bar', 'foo', 'foobar']);
     */
    $dom.module.remClass = function(name) {
        var $this = this;

        if (isString(name)) {
            if (name.match(/\s+/)) {
                name = name.split(/\s+/);
                foreach(name, function(attr) {
                    $this.remClass(attr);
                });
            } else {
                $this.each(function() {
                    this.classList.remove(name);
                });
            }
        } else if (isArray(name)) {
            foreach(name, function (attr) {
                $this.remClass(attr);
            });
        }

        return this;
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup DOMList.Module.Class
     *
     * @api {toggleclass} DOMList.toggleClass(name); .toggleClass()
     * @apiName ToggleClass
     * @apiDescription Toggle class in selected elements class lists.
     *
     * @apiParam {String} name String class name. You can use array if you want to toggle multiple class.
     *
     * @apiExample {js} Sample #1
     * $dom('.foo').toggleClass('bar');
     * $dom('.foo').toggleClass(['bar', 'foo', 'foobar']);
     */
    $dom.module.toggleClass = function(name) {
        var $this = this;

        if (isString(name)) {
            $this.each(function() {
                this.classList.toggle(name);
            });
        } else if (isArray(name)) {
            foreach(name, function (attr) {
                $this.toggleClass(attr);
            });
        }

        return this;
    };
})(DOMList);