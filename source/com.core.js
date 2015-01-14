/**
 * DOMList
 * HTML Query Selector Helper.
 * Help extends the functionallity of 'querySelectorAll', just like jQuery, but smaller, have some difference and light.
 * Language: Javascript.
 * Created by mahdaen on 1/7/15.
 * License: GNU General Public License v2 or later.
 */

(function($root) {
    'use strict';

    /**
     * @apiVersion 2.0.0
     * @apiGroup DOMList
     *
     * @api {selector} $dom(query,context); $dom()
     * @apiName DOMList
     *
     * @apiDescription
     * Select elements using CSS Selector or create new element using HTML formatted string.
     * <br><br>
     * Primary, DOMList using native .querySelectorAll() that's only supported by modern browsers (Chrome 31+, Firefox 33+, IE9+, Safari 7+).
     * <br><br>
     * If you want to use DOMList in older browser, you can load jQuery Sizzle before DOMList. DOMList will looking for Sizzle and use it if .querySelectorAll not found.
     * <br/><br/>
     *
     * @apiParam {String} query HTML Element, DOMList, CSS Selector string or HTML formatted string for create element.
     * @apiParam {Object} [context] CSS Selector String, HTML Element or DOMList to search in.
     *
     * @apiExample {js} Sample #1
     * // Find elements with tag-name 'button'.
     * var btn = $dom('button');
     *
     * @apiExample {js} Sample #2
     * // Create new element using HTML formatted string.
     * var btn = $dom('<a href="#" class="button">Anchor</a>');
     *
     * @apiExample {js} Sample #3
     * // Find elements with tag-name 'button' from 'section'.
     * var sc = $dom('section');
     * var bt = $dom('button', sc);
     *
     * @apiExample {js} Sample #4
     * // Find elements with tag-name 'button' from 'section' using CSS Selector string as context.
     * var bt = $dom('button', '.wrapper');
     */
    var DOMList = function(query, context) {
        var $this = this, modern;

        /* Check does support native selector */
        if (document.querySelectorAll) {
            modern = false;
        } else {
            modern = false;
        }

        /* Adding length */
        this.length = 0;

        /* Proceed only if query is string */
        if (typeof query === 'string') {
            var result, $this = this;

            /* Using HTMLElement as context */
            if (isHTML(context)) {
                if (modern) {
                    result = context.querySelectorAll(query);
                } else {
                    if (window.Sizzle) {
                        result = Sizzle(query, context);
                    } else {
                        result = [];
                    }
                }
            }

            /* Using NodeList as context */
            else if (isDOMList(context)) {
                var length = 0;

                /* Iterate each item to search */
                context.each(function() {
                    if (modern) {
                        var res = this.querySelectorAll(query);
                    } else {
                        if (window.Sizzle) {
                            var res = Sizzle(query, this);
                        } else {
                            res = [];
                        }
                    }

                    /* Adding result finder */
                    if (modern) {
                        foreach(res, function (i, node) {
                            if (i !== 'length') {
                                $this[length] = node;
                                $this.length = (length + 1);
                                length++;
                            }
                        });
                    } else {
                        foreach(res, function (node, i) {
                            $this[length] = node;
                            $this.length = (length + 1);
                            length++;
                        });
                    }
                });
            }

            /* Create new context if context is string */
            else if (isString(context) && !isHTMLString(context)) {
                context = new DOMList(context);

                return new DOMList(query, context);
            }

            /* Using document as context */
            else {
                /* If string is HTML formatted string, then create new elements */
                if (isHTMLString(query)) {
                    var doc = document.createElement('div');
                    doc.innerHTML = query;
                    result = doc.children;
                }
                /* If string is CSS Selector */
                else {
                    if (modern) {
                        result = document.querySelectorAll(query);
                    } else {
                        if (window.Sizzle) {
                            result = Sizzle(query);
                        } else {
                            result = [];
                        }
                    }
                }
            }

            /* Iterating result */
            if (result && result.length > 0) {
                for (var i = 0; i < result.length; ++i) {
                    $this[i] = result[i];
                    $this.length++;
                }
            }
        }

        /* Wrap single HTML Element as DOMList */
        else if (isHTML(query)) {
            $this[0] = query;
            $this.length = 1;
        }

        /* Wrap Array element list as DOMList */
        else if (isArray(query)) {
            $this.length = query.length;

            foreach(query, function (node, i) {
                $this[i] = node;
            });
        }

        /* Return DOMList itslef if query is DOMList */
        else if (isDOMList(query)) {
            return query;
        }

        return this;
    }

    /* Registering DOMList to Window */
    $root.$dom = $root.DOMList = function(query, context) { return new DOMList(query, context) };

    /**
     * @apiVersion 2.0.0
     * @apiGroup DOMList
     * @api {extend} $dom.exnted(name,handler); $dom.extend()
     * @apiName Extend
     * @apiDescription Register DOMList Modules.
     *
     * @apiParam {Multi} name String module name or object contains modules.
     * @apiParam {function} [handler] Function that handle module.
     *
     * @apiExample Sample
     * $dom.extend('foo', function() {}); // Add module 'foo' to DOMList.
     * $dom.extend({ foo: function() {}, bar: function() {} }); // Add multiple modules to DOMList.
     */
    $root.DOMList.extend = function(name, handler) {
        if (isString(name) && isFunction(handler)) {
            $root.DOMList.module[name] = handler;
        } else if (isObject(name)) {
            foreach(name, function (name, handler) {
                if (isFunction(handler)) {
                    $root.DOMList.module[name] = handler;
                }
            });
        }

        return name;
    };

    /* Creating Modules */
    $root.DOMList.module = DOMList.prototype = {
        name: 'DOMList',

        /* Copy splice from array */
        splice: Array.prototype.splice,

        /* EFFECT --------------------------------------------------- */
        /**
         * Animate elements. This module using Greensock (third party).
         * @param props - {object} - CSS Properties List.
         * @param options - {object} - Animation Options.
         * @param callback - {function} - Handler when animation complete.
         * @returns {DOMList}
         */
        animate: function(props, options, callback) {
            var $this = this;

            /* Wrap animation properties to array if it's an object */
            if (isObject(props)) props = [props];

            /* Ensure animation properties is array */
            if (isArray(props)) {
                /* If options is number, use it as duration */
                if (isNumber(options)) {
                    options = { duration: options };
                }

                /* Ensure options is object */
                if (isObject(options)) {
                    $this.each(function() {
                        var self = this;

                        if (isFunction(callback)) {
                            var anim = self.animate(props, options);

                            anim.onfinish = function() {
                                callback.call(self, anim);
                            }
                        } else {
                            self.animate(props, options);
                        }
                    });
                }
            }

            return this;
        }
    };

    /* Extending HTML Element Prototype to find elements from that */
    HTMLElement.prototype.find = function(query) { return new DOMList(query, this) }
})(window);
