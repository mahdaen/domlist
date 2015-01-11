/**
 * DOMList
 * HTML Query Selector Helper.
 * This script help us to extend native `element.querySelectorAll()`, makes it looks like a jQuery.
 * Language: Javascript.
 * Browser Supports: Chrome 31+, Firefox 33+, IE9+, Safari 7+.
 * Dependencies: NativeJS v1.0.1+ (https://github.com/mahdaen/native-js).
 * Created by mahdaen on 1/7/15.
 * License: GNU General Public License v2 or later.
 */

(function($root) {
    'use strict';

    /**
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
        if (typeof query === 'string') {
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

    /* Registering to Window */
    $root.$dom = $root.DOMList = function(query, context) { return new DOMList(query, context) }

    /* Creating Modules */
    $root.$dom.module = DOMList.prototype = {
        name: 'DOMList',

        /* Copy splice from array */
        splice: Array.prototype.splice,

        /* BASIC ----------------------------------- */

        /**
         * @apiGroup DOMList Module Core
         *
         * @api {first} DOMList.first(); .first()
         * @apiName First
         * @apiDescription Get the first child of selected elements. Return new DOMList object.
         *
         * @apiExample {js} Sample #1
         * $dom('span').first();
         */
        first: function() {
            return this.length > 0 ? new DOMList(this[0]) : this;
        },

        /**
         * @apiGroup DOMList Module Core
         *
         * @api {firstchild} DOMList.firstChild(); .firstChild()
         * @apiName FirstChild
         * @apiDescription Get the first child of the first selected elements. Return new DOMList object.
         *
         * @apiExample {js} Sample #1
         * $dom('.container').firstChild();
         */
        firstChild: function() {
            if (this.length <= 0) return this;

            var first = this[0];
            var child = first.children;

            if (child.length > 0) {
                return new DOMList(child[0]);
            } else {
                return new DOMList();
            }
        },

        /**
         * @apiGroup DOMList Module Core
         *
         * @api {last} DOMList.last(); .last()
         * @apiName Last
         * @apiDescription Get the last child of selected elements. Return new DOMList object.
         *
         * @apiExample {js} Sample #1
         * $dom('span').last();
         */
        last: function() {
            return this.length > 0 ? new DOMList(this[this.length - 1]) : this;
        },

        /**
         * @apiGroup DOMList Module Core
         *
         * @api {lastchild} DOMList.lastChild(); .lastChild()
         * @apiName LastChild
         * @apiDescription Get the last child of the first selected elements. Return new DOMList object.
         *
         * @apiExample {js} Sample #1
         * $dom('.container').lastChild();
         */
        lastChild: function() {
            if (this.length <= 0) return this;

            var first = this[0];
            var child = first.children;

            if (child.length > 0) {
                return new DOMList(child[child.length - 1]);
            } else {
                return new DOMList();
            }
        },

        /**
         * @apiGroup DOMList Module Core
         *
         * @api {nth} DOMList.nth(index); .nth()
         * @apiName NTH
         * @apiDescription Get the selected elements by specific index. Return new DOMList object.
         *
         * @apiParam {Number} index Index number. Start from 0.
         *
         * @apiExample {js} Sample #1
         * $dom('span').nth(0);
         */
        nth: function(i) {
            return isNumber(i) && this.hasOwnProperty(i) ? new DOMList(this[i]) : new DOMList();
        },

        /**
         * @apiGroup DOMList Module Core
         *
         * @api {nthChild} DOMList.nthChild(index); .nthChild()
         * @apiName NthChild
         * @apiDescription Get the child elements by specific index from the first selected elements. Return new DOMList object.
         *
         * @apiParam {Number} index Index number. Start from 0.
         *
         * @apiExample {js} Sample #1
         * $dom('.container').nthChild(3);
         */
        nthChild: function(i) {
            if (this.length <= 0) return this;

            var fisrt = this[0];
            var child = fisrt.children;

            if (child.length > 0) {
                return child.hasOwnProperty(i) ? new DOMList(child[i]) : new DOMList();
            } else {
                return new DOMList();
            }
        },

        /**
         * @apiGroup DOMList Module Core
         *
         * @api {children} DOMList.children(); .children()
         * @apiName Children
         * @apiDescription Get child elements of first selected element.
         *
         * @apiExample {js} Sample #1
         * $dom('.container').children();
         */
        children: function() {
            if (this.first().length > 0) {
                var childs = this.first()[0].children;

                childs.constructor.prototype.name = 'DOMList';

                return new DOMList(childs);
            } else {
                return new DOMList();
            }
        },

        /**
         * @apiGroup DOMList Module Core
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
         * @apiGroup DOMList Module Core
         *
         * @api DOMList.filter(query); .filter()
         * @apiName Filter
         * @apiDescription Filter the selected elements with specific CSS Selector.
         *
         * @apiParam {String} query String CSS Selector to filter.
         *
         * @apiExample Sample #1
         * $dom('span').filter('.a'); // Get all span and filter that has class 'a'.
         */
        filter: function(query) {
            var $this = this;

            if (!isString(query)) return this;

            var wrap = document.createElement('div'), elems = '', result, src = [], cand = [];

            this.each(function() {
                elems += this.outerHTML;
                src.push(this.outerHTML);
            });

            wrap.innerHTML = elems;

            result = wrap.find(query);

            result.each(function() {
                var self = this.outerHTML;

                if (src.indexOf(self) > -1) {
                    cand.push(this);
                }
            });

            return new DOMList(cand);
        },

        /**
         * @apiGroup DOMList Module Core
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
         * @apiGroup DOMList Module Core
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

                        if (this.hasOwnProperty(name)) {
                            this[name] = value;
                        }
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
         * @apiGroup DOMList Module Core
         *
         * @api {remattr} DOMList.remAttr(name); .remAttr()
         * @apiName RemAttr
         * @apiDescription Remove one or many attribute from selected elements.
         *
         * @apiParam {Any} name String attribute name or array name list.<br />Use space to separate the attribute name for multiple removal. E.g 'foo bar'.
         *
         * @apiExample {js} Sample #1
         * $dom('span').remAtrr('foo'); // Remove single attribute.
         * $dom('span').remAttr(['foo', 'bar']); // Remove multiple attribute.
         * $dom('span').remAttr('foo bar'); // Remove multiple attribute.
         */
        remAttr: function(name) {
            if (isString(name)) {
                if (name.match(/\s+/)) {
                    name = name.split(/\s+/);
                    this.each(function() {
                        var self = this;

                        foreach(name, function (name) {
                            self.removeAttribute(name);
                        });
                    });
                } else {
                    this.each(function() {
                        this.removeAttribute(name);
                    });
                }
            } else if (isArray(name)) {
                this.each(function() {
                    var self = this;

                    foreach(name, function (name) {
                        self.removeAttribute(name);
                    });
                });
            }

            return this;
        },

        /**
         * @apiGroup DOMList Module Core
         *
         * @api {data} DOMList.data(name,value); .data()
         * @apiName Data
         * @apiDescription Get first selected element data or set all selected elements data.
         *
         * @apiParam {Any} name String data-attribute name. E.g. 'profile' for 'data-profile'.<br>Use string space-delimiter to get or set multiple data-attribute. E.g 'foo bar' for 'data-foo data-bar'.
         * @apiParam {Any} [value] Value to set. Leave blank if yout want to get the data-attribute-value. Use array to wrap values if you set multiple data-attribute.
         *
         * @apiExample {js} Sample #1
         * $dom('span').data(); // Get all data-attributes.
         *
         * $dom('span').data('foo'); // Get value of 'data-foo'.
         * $dom('span').data('foo', {a: 1, b: 2}); // Set 'data-foo' value.
         *
         * $dom('span').data('foo bar'); // Get data-foo and data-bar.
         * $dom('span').data('foo bar', [200, {a: 1, b: 2}]); // Set data-foo with 200, data-bar with object.
         */
        data: function(name, value) {
            var $this = this;

            /* Return if no selected childs */
            if ($this.length <= 0) $this;

            if (isString(name)) {
                if (name.match(/\s+/)) {
                    name = name.split(/\s+/);

                    if (isDefined(value)) {
                        foreach(name, function(attr, i) {
                            if (isString(value)) {
                                $this.attr('data-' + attr, value);
                            } else if (isArray(value)) {
                                $this.attr('data-' + attr, value[i]);
                            }
                        });
                    } else {
                        var data = {};

                        foreach(name, function (attr) {
                            data[attr] = $this.attr('data-' + attr);
                        });

                        return data;
                    }
                } else {
                    if (isDefined(value)) {
                        $this.attr('data-' + name, value);
                    } else {
                        return $this.first().attr('data-' + name);
                    }
                }
            } else {
                var atrs = $this.attr(), data = {};

                foreach(atrs, function (attr, i) {
                    if (attr.match(/data-/)) {
                        data[attr.replace('data-', '')] = $this.attr(attr);
                    }
                });

                return data;
            }

            return $this;
        },

        /**
         * @apiGroup DOMList Module Core
         *
         * @api {prop} DOMList.prop(name,value); .prop()
         * @apiName Prop
         * @apiDescription Get the first selected elements property value or set all selected elements property value.<br />If element also have attribute with that name, setting property will also set the attribute.
         *
         * @apiParam {String} name String property name.
         * @apiParam {Any} [value] String property value.
         *
         * @apiExample {js} Sample #1
         * $dom('input[type="text"]').prop('value'); // Get value.
         * $dom('input[type="text"]').prop('value', 'Foo'); // Set value to Foo.
         */
        prop: function(name, value) {
            var $this = this;

            if ($this.length <= 0) return $this;

            if (isString(name)) {
                if (isDefined(value)) {
                    $this.each(function() {
                        this[name] = value;

                        if (this.getAttribute(name)) {
                            this.setAttribute(name, value);
                        }
                    })
                } else {
                    var first = $this[0];

                    if (first.hasOwnProperty(name)) {
                        return first[name];
                    }
                }
            }

            return $this;
        },

        /**
         * @apiGroup DOMList Module Core
         *
         * @api {val} DOMList.val(value); .val()
         * @apiName Val
         * @apiDescription Get the first selected elements value or set all selected elements value.
         *
         * @apiParam {Any} [value] Value to set. Leave blank if you want to get the value.
         *
         * @apiExample {js} Sample #1
         * $dom('input[type="text"]').val(); // Get value.
         * $dom('input[type="text"]').val('Foo'); // Set value to Foo.
         */
        val: function(value) {
            if (isDefined(value)) {
                this.prop('value', value);
            } else {
                return this.prop('value');
            }
        },

        /**
         * @apiGroup DOMList Module Core
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
         * @apiGroup DOMList Module Core
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

        /* CLASS ------------------------------------ */

        /**
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
        },

        /**
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
        },

        /**
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

        /* INJECT ------------------------------------------ */

        /**
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
         * @apiGroup DOMList Module Inject
         *
         * @api {text} DOMList.text(value); .text()
         * @apiName Text
         * @apiDescription Get the first selected elements innerText or set all selected elements innerText.
         *
         * @apiParam {Any} value Inner text value.
         *
         * @apiExample {js} Sample #1
         * $dom('span').text(); // Get first selected span innerText
         * $dom('span').text('foo'); // Set all span innerText to foo.
         */
        text: function(value) {
            if (this.length <= 0) return this;

            if (isDefined(value)) {
                this.each(function() {
                    this.innerText = value;
                });
            } else {
                return this[0].innerText;
            }

            return this;
        },

        /**
         * @apiGroup DOMList Module Inject
         *
         * @api {Texts} DOMList.texts(); .texts()
         * @apiName Texts
         * @apiDescription Get selected elements innerText.
         *
         * @apiExample {js} Sample #1
         * $('span').texts();
         */
        texts: function() {
            var result = [];

            this.each(function() {
                result.push(this.innerText);
            });

            return result;
        },

        /**
         * @apiGroup DOMList Module Inject
         *
         * @api {html} DOMList.html(value); .html()
         * @apiName HTML
         * @apiDescription Get the first selected elements innerHTML or set all selected elements innerHTML.
         *
         * @apiParam {Any} value Inner html value.
         *
         * @apiExample {js} Sample #1
         * $dom('span').html(); // Get first selected span innerHTML
         * $dom('span').html('foo'); // Set all span innerHTML to foo.
         */
        html: function(value) {
            if (this.length <= 0) return this;

            if (isDefined(value)) {
                this.each(function() {
                    this.innerHTML = value;
                });
            } else {
                return this[0].innerHTML;
            }

            return this;
        },

        /**
         * @apiGroup DOMList Module Inject
         *
         * @api {HTMLs} DOMList.htmls(); .htmls()
         * @apiName HTMLs
         * @apiDescription Get selected elements innerHTML
         *
         * @apiExample {js} Sample #1
         * $('span').htmls();
         */
        htmls: function() {
            var result = [];

            this.each(function() {
                result.push(this.innerHTML);
            });

            return result;
        },

        /**
         * @apiGroup DOMList Module Inject
         *
         * @api {clone} DOMList.clone(); .clone()
         * @apiName Clone
         * @apiDescription Clone selected elements.
         *
         * @apiExample {js} Sample #1
         * $dom('span').clone();
         */
        clone: function() {
            var cloned = [];

            this.each(function() {
                var clone = this.cloneNode(true);
                cloned.push(clone);
            });

            return new DOMList(cloned);
        },

        /**
         * @apiGroup DOMList Module Inject
         *
         * @api {empty} DOMList.empty(); .empty()
         * @apiName Empty
         * @apiDescription Empty all selected elements.
         *
         * @apiExample {js} Sample #1
         * $dom('span').empty();
         */
        empty: function() {
            this.each(function() {
                this.innerHTML = '';
            });

            return this;
        },

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
