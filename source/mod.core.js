(function($dom) {
    'use strict';

    /**
     * @apiVersion 2.0.0
     * @apiGroup DOMList Module Core
     *
     * @api {first} DOMList.first(); .first()
     * @apiName First
     * @apiDescription Get the first child of selected elements. Return DOMList object.
     *
     * @apiExample {js} Sample #1
     * $dom('span').first();
     */
    $dom.module.first = function() {
        return this.length > 0 ? $dom(this[0]) : this;
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup DOMList Module Core
     *
     * @api {firstchild} DOMList.firstChild(); .firstChild()
     * @apiName FirstChild
     * @apiDescription Get the first child of the first selected elements. Return DOMList object.
     *
     * @apiExample {js} Sample #1
     * $dom('.container').firstChild();
     */
    $dom.module.firstChild = function() {
        if (this.length <= 0) return this;

        var first = this[0];
        var child = first.children;

        if (child.length > 0) {
            return $dom(child[0]);
        } else {
            return $dom();
        }
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup DOMList Module Core
     *
     * @api {last} DOMList.last(); .last()
     * @apiName Last
     * @apiDescription Get the last child of selected elements. Return DOMList object.
     *
     * @apiExample {js} Sample #1
     * $dom('span').last();
     */
    $dom.module.last = function() {
        return this.length > 0 ? $dom(this[this.length - 1]) : this;
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup DOMList Module Core
     *
     * @api {lastchild} DOMList.lastChild(); .lastChild()
     * @apiName LastChild
     * @apiDescription Get the last child of the first selected elements. Return DOMList object.
     *
     * @apiExample {js} Sample #1
     * $dom('.container').lastChild();
     */
    $dom.module.lastChild = function() {
        if (this.length <= 0) return this;

        var first = this[0];
        var child = first.children;

        if (child.length > 0) {
            return $dom(child[child.length - 1]);
        } else {
            return $dom();
        }
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup DOMList Module Core
     *
     * @api {nth} DOMList.nth(index); .nth()
     * @apiName NTH
     * @apiDescription Get the selected elements by specific index. Return DOMList object.
     *
     * @apiParam {Number} index Index number. Start from 0.
     *
     * @apiExample {js} Sample #1
     * $dom('span').nth(0);
     */
    $dom.module.nth = function(i) {
        return isNumber(i) && this.hasOwnProperty(i) ? $dom(this[i]) : $dom();
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup DOMList Module Core
     *
     * @api {nthChild} DOMList.nthChild(index); .nthChild()
     * @apiName NthChild
     * @apiDescription Get the child elements by specific index from the first selected elements. Return DOMList object.
     *
     * @apiParam {Number} index Index number. Start from 0.
     *
     * @apiExample {js} Sample #1
     * $dom('.container').nthChild(3);
     */
    $dom.module.nthChild = function(i) {
        if (this.length <= 0) return this;

        var fisrt = this[0];
        var child = fisrt.children;

        if (child.length > 0) {
            return child.hasOwnProperty(i) ? $dom(child[i]) : $dom();
        } else {
            return $dom();
        }
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup DOMList Module Core
     *
     * @api {children} DOMList.children(); .children()
     * @apiName Children
     * @apiDescription Get child elements of first selected element.
     *
     * @apiExample {js} Sample #1
     * $dom('.container').children();
     */
    $dom.module.children = function() {
        if (this.first().length > 0) {
            var childs = this.first()[0].children;

            childs.constructor.prototype.name = 'DOMList';

            return $dom(childs);
        } else {
            return $dom();
        }
    };

    /**
     * @apiVersion 2.0.0
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
    $dom.module.find = function(query) {
        if (isString(query)) {
            return $dom(query, this);
        }
    };

    /**
     * @apiVersion 2.0.0
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
    $dom.module.filter = function(query) {
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

        return $dom(cand);
    };

    /**
     * @apiVersion 2.0.0
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
    $dom.module.each = function(handler, reversed) {
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
    };

    /**
     * @apiVersion 2.0.0
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
    $dom.module.attr = function(name, value) {
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
    };

    /**
     * @apiVersion 2.0.0
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
    $dom.module.remAttr = function(name) {
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
    };

    /**
     * @apiVersion 2.0.0
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
    $dom.module.data = function(name, value) {
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
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup DOMList Module Core
     *
     * @api DOMList.remData(name); .remData()
     * @apiName RemData
     * @apiDescription Remove data-attribute from selected elements.
     *
     * @apiParam {String} name String data-attribute name. E.g 'foo' for 'data-foo'.<br>Use space-delimiter to separate multiple name. E.g 'foo bar' for 'data-foo data-bar'.
     *
     * @apiExample Sample #1
     * $dom('span').remData('foo'); // Remove data-foo.
     * $dom('span').remData('foo bar'); // Remove data-foo and data-bar.
     */
    $dom.module.remData = function(name) {
        var $this = this;

        if (isString(name)) {
            if (name.match(/\s+/)) {
                name = name.split(/\s+/);

                foreach(name, function (attr) {
                    $this.remAttr('data-' + attr);
                });
            } else {
                $this.remAttr('data-' + name);
            }
        }

        return $this;
    };

    /**
     * @apiVersion 2.0.0
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
    $dom.module.prop = function(name, value) {
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
    };

    /**
     * @apiVersion 2.0.0
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
    $dom.module.val = function(value) {
        if (isDefined(value)) {
            this.prop('value', value);
        } else {
            return this.prop('value');
        }
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup DOMList Module Core
     *
     * @api {remove} DOMList.remove(); .remove()
     * @apiName Remove
     * @apiDescription Remove selected elements.
     *
     * @apiExample {js} Sample #1
     * $dom('.foo').remove();
     */
    $dom.module.remove = function() {
        this.each(function() {
            this.remove();
        });

        return this;
    };

    /**
     * @apiVersion 2.0.0
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
    $dom.module.sortBy = function(attr, options) {
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

            /* Create DOMList */
            var newlist = $dom();
            /* Assign DOMList length using values length */
            newlist.length = list.length;

            /* Iterating values to get index number and insert the element to DOMList */
            foreach(list, function (s, i) {
                s = s.split('<>')[1];
                newlist[i] = $this[s];
            });

            return newlist;
        }

        return this;
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup DOMList Module Core
     *
     * @api DOMList.toArray(); .toArray()
     * @apiName ToArray
     * @apiDescription Convert DOMList to array.
     *
     * @apiExample Sample
     * $dom('span').toArray(); // Convert DOMList contains span to array.
     */
    $dom.module.toArray = function() {
        var arr = [];

        this.each(function() {
            arr.push(this);
        });

        return arr;
    };
})(DOMList);