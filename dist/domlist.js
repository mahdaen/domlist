/**
 * HTML Query Selector Helper.
 * This script help us to extend native `element.querySelectorAll()`, makes it looks like a jQuery.
 * Language: Javascript.
 * Browser Supports: Chrome 31+, Firefox 33+, IE9+, Safari 7+.
 * Dependencies: NativeJS v1.0.0+ (https://github.com/mahdaen/native-js).
 * Created by mahdaen on 1/7/15.
 * License: GNU General Public License v2 or later.
 */

(function($root) {
    'use strict';

    /**
     * @apiVersion 1.0.0
     * @apiGroup DOMList
     *
     * @api {selector} $dom(query,context); $dom()
     * @apiName DOMList
     *
     * @apiDescription
     * Find elements using CSS Selector or create new element using HTML formatted string.
     * DOMList using native .querySelectorAll(), so browser support really limited.
     * Only for modern browsers (Chrome 31+, Firefox 33+, IE9+, Safari 7+).
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
        var $this = this;

        /* Adding length */
        this.length = 0;

        /* Proceed only if query is string */
        if (isString(query)) {
            var result, $this = this;

            /* Using HTMLElement as context */
            if (isHTML(context)) {
                result = context.querySelectorAll(query);
            }

            /* Using NodeList as context */
            else if (isDOMList(context)) {
                var length = 0;

                /* Iterate each item to search */
                context.each(function() {
                    var res = this.querySelectorAll(query);

                    /* Adding result finder */
                    foreach(res, function (i, node) {
                        if (i !== 'length') {
                            $this[length ] = node;
                            $this.length = (length + 1);
                            length++;
                        }
                    });
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
                    result = document.querySelectorAll(query);
                }
            }

            /* Iterating result */
            if (result && result.length > 0) {
                foreach(result, function (key, node) {
                    if (key !== 'length') {
                        $this[key] = node;
                    }
                });

                $this.length = result.length;
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

    /* Registering to Window */
    $root.$dom = $root.DOMList = function(query, context) { return new DOMList(query, context) }

    /* Creating Modules */
    $root.$dom.module = DOMList.prototype = {
        name: 'DOMList',

        /* Copy splice from array */
        splice: Array.prototype.splice,

        /**
         * @apiVersion 1.0.0
         * @apiGroup DOMList Module Basic
         *
         * @api {finder} DOMList.find(query); .find()
         * @apiName Find
         * @apiDescription Find elements from current selected elements.
         *
         * @apiParam {String} query CSS Selector string.
         *
         * @apiExample {js} Sample #1
         * var wrap = $dom('.wrapper');
         * var span = wrap.find('span');
         */
        find: function(query) {
            if (isString(query)) {
                return new DOMList(query, this);
            }
        },

        /**
         * @apiVersion 1.0.0
         * @apiGroup DOMList Module Basic
         *
         * @api {iterator} DOMList.each(handler); .each()
         * @apiName Iterator
         * @apiDescription Iterate each element inside DOMList.
         *
         * @apiParam {Function} handler Function that handle each element. Element index will be provide as argument when calling handler.
         * @apiParam {Boolean} [reversed] Does iteration is reversed or not.
         *
         * @apiExample {js} Sample #1
         * var span = $dom('span');
         * span.each(function(i) {
         *     console.log(i, this);
         * });
         */
        each: function(handler, reversed) {
            if (isFunction(handler)) {
                if (reversed) {
                    reveach(this, function(node, i) {
                        handler.call(node, i, node);
                    });
                } else {
                    foreach(this, function(node, i) {
                        handler.call(node, i, node);
                    });
                }
            }

            return this;
        },

        /**
         * @apiGroup DOMList.Module.Basic
         * @apiVersion 1.0.0
         *
         * @api {attr} DOMList.attr(name,value); .attr()
         * @apiName Attr
         * @apiDescription Attribute getter and setter. You can set value with anythings. They will be automatically converted. When you get the value, they also will be converted automatically.
         *
         * @apiParam {Any} name String attribute name or Object containing list of attributes or Array containing attribute name list.
         * @apiParam {Any} [value] Attribute value.
         *
         * @apiExample {js} Sample #1
         * // <span class="foo" bar="10" foo="false" foobar="[1,2,3]"></span>
         *
         * // Get all attributes.
         * var attr = $dom('.foo').attr();
         * //>> attr => { class: "foo", bar: 10, foo: false, foobar: [1,2,3] }
         *
         * @apiExample {js} Sample #2
         * // <span class="foo" bar="10" foo="false" foobar="[1,2,3]"></span>
         *
         * // Get single attribute value.
         * var attr = $dom('.foo').attr('foo');
         * //>> attr => false
         *
         * @apiExample {js} Sample #3
         * // <span class="foo" bar="10" foo="false" foobar="[1,2,3]"></span>
         *
         * // Set single attribute and value.
         * $dom('.foo').attr('barfoo', { a: 1, b: 2, c: 3 });
         *
         * @apiExample {js} Sample #4
         * // <span class="foo" bar="10" foo="false" foobar="[1,2,3]"></span>
         *
         * // Set multiple attribute and value.
         * $dom('.foo').attr({ foo: true, bar: 100, foobar: { a: 1, b: 2, c: 3 } });
         *
         * @apiExample {js} Sample #5
         * // <span class="foo" bar="10" foo="false" foobar="[1,2,3]"></span>
         *
         * // Set multiple attribute without values.
         * $dom('.foo').attr(['solved', 'required', 'async']);
         *
         */
        attr: function(name, value) {
            var $this = this;

            /* Skip if no items */
            if (this.length <= 0) return;

            /* Single attribute setter */
            if (isString(name)) {
                /* Set attribute value to all items if value is defined. Else get the first item attribute */
                if (isDefined(value)) {
                    /* Convert to JSON if value is object or array */
                    if (isObject(value) || isArray(value)) {
                        value = JSON.stringify(value);
                    }

                    /* Iterate each element to assign attribute and value */
                    $this.each(function() {
                        this.setAttribute(name, value);
                    });

                    return this;
                } else {
                    /* Getting attribute value */
                    var result = $this[0].getAttribute(name), parsed;

                    /* Try to convert result as object. If success, return it */
                    try { parsed = JSON.parse(result) } catch (err) {}
                    if (parsed) return parsed;

                    /* Convert result as data if possible and return it */

                    /* Boolean */
                    if (result === 'true') {
                        return true;
                    } else if (result === 'false') {
                        return false;
                    }

                    /* Convert to undefined */
                    else if (result === 'undefined') {
                        return undefined;
                    }

                    /* Convert to null */
                    else if (result === 'null') {
                        return null;
                    }

                    /* Convert to NaN */
                    else if (result === 'NaN') {
                        return NaN;
                    }

                    /* Convert to number */
                    else if (Number(result)) {
                        return Number(result);
                    }

                    /* Return as plain result */
                    return result;
                }
            }

            /* Multiple attribute and value setter with object */
            else if (isObject(name)) {
                foreach(name, function (key, value) {
                    $this.attr(key, value);
                });
            }

            /* Multiple attribute setter with array */
            else if (isArray(name)) {
                foreach(name, function (key) {
                    $this.attr(key, '');
                });
            }

            /* Get all attributes and convert the value */
            else {
                var attributes = $this[0].attributes, result = {};

                foreach(attributes, function (i, attr) {
                    if (i !== 'length') {
                        result[attr.name] = $this.attr(attr.name);
                    }
                });

                return result;
            }

            return $this;
        },

        /**
         * @apiVersion 1.0.0
         * @apiGroup DOMList.Module.Basic
         *
         * @api {sort} DOMList.sortBy(attr,options); .sortBy()
         * @apiName Sort
         * @apiDescription Sort selected elements by attribute value.
         *
         * @apiParam {String} attr Attribute name.
         * @apiParam {Object} [options] Options to define value type or sort direction. type: 'string'|'number', direction: 'ascending'|'descending'.
         *
         * @apiExample {js} Sample #1
         * // <span class="a" age="10" name="John"></span>
         * // <span class="c" age="5" name="Michael"></span>
         * // <span class="b" age="8" name="Gabriele"></span>
         *
         * // Sort by class.
         * $dom('span').sortBy('class');
         *
         * // Sort by age with numeric sorter.
         * $dom('span').sortBy('age', { type: 'number' });
         *
         * // Sort by name descending.
         * $dom('span').sortBy('name', { direction: 'descending' });
         */
        sortBy: function(attr, options) {
            var $this = this;

            /* Creating default option */
            var option = { type: 'string', direction: 'ascending' };

            /* Replace option using user defined if exist */
            if (isObject(options)) {
                foreach(options, function (key, value) {
                    option[key] = value;
                });
            }

            /* Attribute name should be string */
            if (isString(attr)) {
                /* Creating array to sort value */
                var list = [];

                /* Iterate each element to get value and add pattern as index number. */
                $this.each(function(i) {
                    var val = this.getAttribute(attr);

                    /* If have attribute or value, just add index pattern */
                    if (isString(val)) {
                        list.push(val + '<>' + i);
                    }

                    /* If don't have attribute or value, use 'zabc' to ensure placed in bottom of list */
                    else {
                        list.push('zabc<>' + i);
                    }
                });

                /* Use custom sort compare if type is number.*/
                if (option.type === 'number') {
                    /* Sort values with custom compare */
                    list = list.sort(function(a, b) {
                        var ap = Number(a.split('<>')[0]);
                        var bp = Number(b.split('<>')[0]);

                        if (!ap) ap = 999999999999999;
                        if (!bp) bp = 999999999999999;

                        if (ap > bp) {
                            return 1;
                        } else {
                            return -1;
                        }

                        return 0;
                    });
                } else {
                    /* Simply sort it if not numeric values */
                    list = list.sort();
                }

                /* Reverse order if dirs is 'desc' */
                if (option.direction === 'descending') {
                    list = list.reverse();
                }

                /* Create new DOMList */
                var newlist = new DOMList();
                /* Assign new DOMList length using values length */
                newlist.length = list.length;

                /* Iterating values to get index number and insert the element to new DOMList */
                foreach(list, function (s, i) {
                    s = s.split('<>')[1];
                    newlist[i] = $this[s];
                });

                return newlist;
            }

            return this;
        },

        /**
         * @apiVersion 1.0.0
         * @apiGroup DOMList.Module.Class
         *
         * @api {addclass} DOMList.addClass(name); .addClass()
         * @apiName AddClass
         * @apiDescription Add class to class selected elements lists.
         *
         * @apiParam {String} name String class name to add. If you want, you can use array to add multiple class.
         *
         * @apiExample {js} Sample #1
         * $dom('.foo').addClas('clearfix');
         */
        addClass: function(name) {
            var $this = this;

            if (isString(name)) {
                $this.each(function() {
                    this.classList.add(name);
                });
            } else if (isArray(name)) {
                foreach(name, function (attr) {
                    $this.addClass(attr);
                });
            }

            return this;
        },

        /**
         * @apiVersion 1.0.0
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
        remClass: function(name) {
            var $this = this;

            if (isString(name)) {
                $this.each(function() {
                    this.classList.remove(name);
                });
            } else if (isArray(name)) {
                foreach(name, function (attr) {
                    $this.remClass(attr);
                });
            }

            return this;
        },

        /**
         * @apiVersion 1.0.0
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
        toggleClass: function(name) {
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
        },

        /**
         * @apiVersion 1.0.0
         * @apiGroup DOMList.Module.Basic
         *
         * @api {remove} DOMList.remove(); .remove()
         * @apiName Remove
         * @apiDescription Remove selected elements.
         *
         * @apiExample {js} Sample #1
         * $dom('.foo').remove();
         */
        remove: function() {
            this.each(function() {
                this.remove();
            });

            return this;
        },

        /**
         * @apiVersion 1.0.0
         * @apiGroup DOMList.Module.Inject
         *
         * @api {append} DOMList.append(childs); .append()
         * @apiName Append
         * @apiDescription Append childs to first selected elements.
         *
         * @apiParam {Any} childs HTML Element, DOMList, Array, HTML Formatted String, or String CSS Selector string.
         *
         * @apiExample {js} Sample #1
         * // Append HTML Element.
         * var elm = document.querySelector('foo');
         * $dom('.wrapper').append(elm);
         *
         * @apiExample {js} Sample #2
         * // Append DOMList or Array.
         * var elm = $dom('.foo');
         * $dom('.wrapper').append(elm);
         *
         * @apiExample {js} Sample #3
         * // Append HTML formatted string.
         * $dom('.wrapper').append('<span class="bar">');
         *
         * @apiExample {js} Sample #4
         * // Append with query.
         * $dom('.wrapper').append('.foo');
         */
        append: function(childs) {
            var $this = this;

            /* Return if no selected elements */
            if ($this.length <= 0) return $this;

            /* If childs is HTML Element */
            if (isHTML(childs)) {
                $this[0].appendChild(childs);
            }

            /* If childs is Array or DOMList */
            else if (isArray(childs) || isDOMList(childs)) {
                foreach(childs, function (node) {
                    $this[0].appendChild(node);
                });
            }

            /* If childs is String */
            else if (isString(childs)) {
                /* If string is HTML Formatted string */
                if (isHTMLString(childs)) {
                    $this[0].insertAdjacentHTML('beforeend', childs);
                }

                /* If string is CSS Selector */
                else {
                    var result = new DOMList(childs);
                    result.each(function() {
                        $this[0].appendChild(this);
                    });
                }
            }

            return this;
        },

        /**
         * @apiVersion 1.0.0
         * @apiGroup DOMList.Module.Inject
         *
         * @api {prepend} DOMList.prepend(childs) .prepend()
         * @apiName Prepend
         * @apiDescription Prepend elements to first selected element.
         *
         * @apiParam {Any} childs HTML Element, DOMList, Array, HTML Formatted String, or String CSS Selector string.
         *
         * @apiExample {js} Sample #1
         * // Prepend HTML Element.
         * var elm = document.querySelector('foo');
         * $dom('.wrapper').prepend(elm);
         *
         * @apiExample {js} Sample #2
         * // Prepend DOMList or Array.
         * var elm = $dom('.foo');
         * $dom('.wrapper').prepend(elm);
         *
         * @apiExample {js} Sample #3
         * // Prepend HTML formatted string.
         * $dom('.wrapper').prepend('<span class="bar">');
         *
         * @apiExample {js} Sample #4
         * // Prepend with query.
         * $dom('.wrapper').prepend('.foo');
         */
        prepend: function(childs) {
            var $this = this;

            /* Return if no selected elements */
            if ($this.length <= 0) return this;

            /* If childs is single HTML Element */
            if (isHTML(childs)) {
                /* If no childrens, use append */
                if ($this[0].children.length <= 0) {
                    $this[0].appendChild(childs);
                }

                /* Else, insert before first element */
                else {
                    $this[0].insertBefore(childs, $this[0].children[0]);
                }
            }

            /* If childs is DOMList or Array */
            else if (isDOMList(childs) || isArray(childs)) {
                /* If no childrens, use append */
                if ($this[0].children.length <= 0) {
                    foreach(childs, function (node) {
                        $this[0].appendChild(node);
                    });
                }

                /* Else, insert before first element */
                else {
                    var first = $this[0].children[0];

                    foreach(childs, function(node) {
                        $this[0].insertBefore(node, first);
                    });
                }
            }

            /* If childs is string */
            else if (isString(childs)) {
                /* If string is HTML Formatted string */
                if (isHTMLString(childs)) {
                    $this[0].insertAdjacentHTML('afterbegin', childs);
                }

                /* If string is CSS Selector */
                else {
                    var result = new DOMList(childs);

                    /* If no childrens, use append */
                    if ($this[0].children.length <= 0) {
                        result.each(function() {
                            $this[0].appendChild(this);
                        });
                    }

                    /* Else insert before first element */
                    else {
                        var first = $this[0].children[0];

                        result.each(function() {
                            $this[0].insertBefore(this, first);
                        });
                    }
                }
            }

            return this;
        },

        /**
         * @apiVersion 1.0.0
         * @apiGroup DOMList.Module.Inject
         *
         * @api {appendto} DOMList.appendTo(destination) .appendTo()
         * @apiName AppendTo
         * @apiDescription Append selected elements to destination element.
         *
         * @apiParam {Any} destination HTML Element, DOMList, or CSS Selector string.
         *
         * @apiExample {js} Sample #1
         * $dom('.foo').appendTo('.wrapper');
         */
        appendTo: function(destination) {
            var $this = this;

            /* Return if no selected elements */
            if ($this.length <= 0) return $this;

            /* If destination is single HTML Element */
            if (isHTML(destination)) {
                $this.each(function() {
                    destination.appendChild(this);
                });
            }

            /* If destination is DOMList or Array */
            else if (isDOMList(destination) || isArray(destination) && destination.length > 0) {
                destination = destination[0];

                $this.each(function() {
                    destination.appendChild(this);
                });
            }

            /* If destination is string and not HTML Formatted string */
            else if (isString(destination) && !isHTMLString(destination)) {
                var result = new DOMList(destination);

                if (result.length > 0) {
                    $this.each(function() {
                        result[0].appendChild(this);
                    });
                }
            }

            return this;
        },

        /**
         * @apiVersion 1.0.0
         * @apiGroup DOMList.Module.Inject
         *
         * @api {perependto} DOMList.prependTo(destination) .prependTo()
         * @apiName PrependTo
         * @apiDescription Prepend selected elements to destination element.
         *
         * @apiParam {Any} destination HTML Element, DOMList, or CSS Selector string.
         *
         * @apiExample {js} Sample #1
         * $dom('.foo').prependTo('.wrapper');
         */
        prependTo: function(destination) {
            var $this = this;

            /* Return if no selected elements */
            if ($this.length <= 0) return $this;

            /* If destination is single HTML Element */
            if (isHTML(destination)) {
                /* Use insertBefore if has childrens */
                if (destination.children.length > 0) {
                    var first = destination.children[0];
                    var parnt = first.parentElement;

                    $this.each(function() {
                        parnt.insertBefore(this, first);
                    });
                }

                /* Else, use append */
                else {
                    $this.each(function() {
                        destination.appendChild(this);
                    });
                }
            }

            /* If destination is DOMList or Array */
            else if (isDOMList(destination) || isArray(destination) && destination.length > 0) {
                destination = destination[0];

                /* Use insertBefore if has childrens */
                if (destination.children.length > 0) {
                    var first = destination.children[0];
                    var parnt = first.parentElement;

                    $this.each(function() {
                        parnt.insertBefore(this, first);
                    })
                }

                /* Else, use append */
                else {
                    $this.each(function() {
                        destination.appendChild(this);
                    });
                }
            }

            /* If destination is string and not HTML Formatted string */
            else if (isString(destination) && !isHTMLString(destination)) {
                var result = new DOMList(destination);

                if (result.length > 0) {
                    destination = result[0];

                    /* Use insertBefore if has childrens */
                    if (destination.children.length >= 0) {
                        var first = destination.children[0];
                        var parnt = first.parentElement;

                        $this.each(function() {
                            parnt.insertBefore(this, first);
                        })
                    }

                    /* Else, use append */
                    else {
                        $this.each(function() {
                            destination.appendChild(this);
                        });
                    }
                }
            }

            return this;
        },

        /**
         * @apiVersion 1.0.0
         * @apiGroup DOMList.Module.Inject
         *
         * @api {insertbefore} DOMList.insertBefore(destination) .insertBefore()
         * @apiName insertBefore
         * @apiDescription Insert selected elements before the destination element.
         *
         * @apiParam {Any} destination HTML Element, DOMList, or CSS Selector string.
         *
         * @apiExample {js} Sample #1
         * $dom('.foo').insertBefore('.bar');
         */
        insertBefore: function(destination) {
            var $this = this;

            /* Return if no selected elements */
            if ($this.length <= 0) return $this;

            /* If destination is single HTML Element */
            if (isHTML(destination)) {
                var parent = destination.parentElement;

                $this.each(function() {
                    parent.insertBefore(this, destination);
                });
            }

            /* If destination is DOMList or Array */
            else if (isDOMList(destination) || isArray(destination) && destination.length > 0) {
                var parent = destination[0].parentElement;

                $this.each(function() {
                    parent.insertBefore(this, destination[0]);
                });
            }

            /* If destination is string and not HTML Formatted string */
            else if (isString(destination) && !isHTMLString(destination)) {
                destination = new DOMList(destination);

                /* If destination exist */
                if (destination.length > 0) {
                    var parent = destination[0].parentElement;

                    $this.each(function() {
                        parent.insertBefore(this, destination[0]);
                    });
                }
            }

            return this;
        },

        /**
         * @apiVersion 1.0.0
         * @apiGroup DOMList.Module.Inject
         *
         * @api {insertafter} DOMList.insertAfter(destination) .insertAfter()
         * @apiName insertAfter
         * @apiDescription Insert selected elements after the destination element.
         *
         * @apiParam {Any} destination HTML Element, DOMList, or CSS Selector string.
         *
         * @apiExample {js} Sample #1
         * $dom('.foo').insertAfter('.bar');
         */
        insertAfter: function(destination) {
            var $this = this;

            /* Return if no selected elements */
            if ($this.length <= 0) return $this;

            /* If destination is single HTML Element */
            if (isHTML(destination)) {
                var parent = destination.parentElement;

                $this.each(function() {
                    parent.insertBefore(this, destination.nextSibling);
                }, true);
            }

            /* If destination is DOMList or Array */
            else if (isDOMList(destination) || isArray(destination) && destination.length > 0) {
                var parent = destination[0].parentElement;

                $this.each(function() {
                    parent.insertBefore(this, destination[0].nextSibling);
                }, true);
            }

            /* If destination is string and not HTML Formatted string */
            else if (isString(destination) && !isHTMLString(destination)) {
                destination = new DOMList(destination);

                /* If destination exist */
                if (destination.length > 0) {
                    var parent = destination[0].parentElement;

                    $this.each(function() {
                        parent.insertBefore(this, destination[0].nextSibling);
                    }, true);
                }
            }

            return this;
        },

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