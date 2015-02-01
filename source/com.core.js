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

    /* DOMList Selector */
    var DOMList = function(query, context) {
        var $this = this, modern;

        /* Check does support native selector */
        if (document.querySelectorAll) {
            modern = true;
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
    $root.DOMList = function(query, context) { return new DOMList(query, context) };

    /* Creating Wrapper*/
    if (!$root.jQuery) {
        $root.$ = $root.DOMList;
    } else {
        $root.$dom = $root.DOMList;
    }

    /* Module Extender */
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
    };

    /* Extending HTML Element Prototype to find elements from that */
    HTMLElement.prototype.find = function(query) { return new DOMList(query, this) }
})(window);
