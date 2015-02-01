(function($dom) {
    'use strict';

    /* Module to push element to DOMList */
    $dom.module.push = function(elem) {
        var $this = this;

        if (isHTML(elem)) {
            $this[$this.length] = elem;
            $this.length++;
        } else if (isDOMList(elem) || isArray(elem)) {
            foreach(elem, function (elem) {
                $this[$this.length] = elem;
                $this.length++;
            });
        } else if (isString(elem)) {
            $this.push($dom(elem));
        }

        return this;
    };

    /* Module to get first selected element in DOMList */
    $dom.module.first = function() {
        return this.length > 0 ? $dom(this[0]) : this;
    };

    /* Module to get first child element in first selected element */
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

    /* Module to get last selected element in DOMList */
    $dom.module.last = function() {
        return this.length > 0 ? $dom(this[this.length - 1]) : this;
    };

    /* Module to get last child element in first selected element */
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

    /* Module to get element by index number in DOMList */
    $dom.module.nth = function(i) {
        return isNumber(i) && this.hasOwnProperty(i) ? $dom(this[i]) : $dom();
    };

    /* Module to get child element by index number in first selected element */
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

    /* Module to get the child elements in first selected element */
    $dom.module.children = function() {
        var result = $dom();

        if (this.length <= 0) return this;

        var childs = this[0].children;
        childs.name = 'DOMList';

        if (childs.length > 0) {
            foreach(childs, function (node) {
                result.push(node);
            });
        }

        return result;
    };

    /* Module to find element inside first selected element */
    $dom.module.find = function(query) {
        if (isString(query)) {
            return $dom(query, this);
        }
    };

    /* Module to filter selected elements */
    $dom.module.filter = function(query) {
        var $this = this, $result = $dom();

        if (!isString(query)) return this;

        /* Creating Wrapper, innerHTML String and candidate */
        var wrapper = document.createElement('div'), elems = '', candidate = [];

        /* Create element string from each element */
        $this.each(function() {
            elems += this.outerHTML;
        });

        /* Set wrapper innerHTML with element string */
        wrapper.innerHTML = elems;

        /* Find query inside wrapper */
        wrapper = wrapper.find(query);

        /* Create candidate html strings */
        wrapper.each(function() {
            candidate.push(this.outerHTML);
        });

        /* Pushing result to $result */
        $this.each(function() {
            if (candidate.indexOf(this.outerHTML) > -1) {
                $result.push(this);
            }
        });

        return $result;
    };

    /* Module to iterate selected elements */
    $dom.module.each = function(handler, reversed) {
        if (this.length <= 0) return this;

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

    /* Module to set or get elements attribute */
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

    /* Module to remove elements attribute */
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

    /* Module to get or set elements data attribute */
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

    /* Module to remove elements data attribute */
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

    /* Module to get or set elements properties */
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

                if (first[name]) {
                    return first[name];
                }
            }
        }

        return $this;
    };

    /* Module to get or set elements value */
    $dom.module.val = function(value) {
        if (isDefined(value)) {
            this.prop('value', value);
        } else {
            return this.prop('value');
        }
    };

    /* Module to remove selected elements from document */
    $dom.module.remove = function() {
        this.each(function() {
            this.remove();
        });

        return this;
    };

    /* Module to sort selected elements by attribute name */
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
            if (option.method === 'number') {
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

    /* Module to convert DOMList to array */
    $dom.module.toArray = function() {
        var arr = [];

        this.each(function() {
            arr.push(this);
        });

        return arr;
    };

    /* Module to get parent element */
    $dom.module.parent = function(isall) {
        if (this.length <= 0) return this;

        var $result = $dom();

        if (isall) {
            this.each(function() {
                $result.push(this.parentElement);
            });
        } else {
            var first = this[0];
            $result.push(first.parentElement);
        }

        return $result;
    };

    /* Module to get parent element until meet with condition */
    $dom.module.parentUntil = function(query) {
        if (this.parent().get() === $dom('body').get()) return $dom();

        if (isString(query)) {
            if (this.parent().filter(query).length > 0) {
                return this.parent();
            } else {
                return this.parent().parentUntil(query);
            }
        }

        else if (isFunction(query)) {
            if (query.call(this.parent().get())) {
                return this.parent();
            } else {
                return this.parent().parentUntil(query);
            }
        }

        return this;
    };

    /* Module to get parent elements of each selected elements */
    $dom.module.parents = function() {
        var result = $dom();

        this.each(function() {
            result.push(this.parentElement);
        });

        return result;
    };

    /* Module to convert as comment */
    $dom.module.comment = function() {
        this.each(function() {
            this.orgHTML = this.outerHTML;
            this.outerHTML = '<!-- ' + this.outerHTML + ' -->';
        });

        return this;
    };

    /* Module to match selected element with condition */
    $dom.module.match = function(handler) {
        if (!isFunction(handler) || this.length <= 0) return this;

        var result = $dom();

        this.each(function() {
            if (handler.call(this) === true) result.push(this);
        });

        return result.length > 0 ? result : null;
    };

    /* Module to get element by index position and return as HTMLElement */
    $dom.module.get = function(index) {
        if (isNumber(index)) {
            return this[index] ? this[index] : undefined;
        } else {
            return this.length > 0 ? this[0] : undefined;
        }
    };

    /* Module to get index number of element */
    $dom.module.indexOf = function(elem) {
        if (isHTML(elem)) {
            return this.toArray().indexOf(elem);
        } else if (isString(elem)) {
            return this.toArray().indexOf(this.filter(elem).get());
        }

        return -1;
    };

    /* Module to convert selected elements to HTML Stirng */
    $dom.module.toString = function(isall) {
        if (this.length <= 0) return undefined;

        if (isall) {
            var elmStrings = [];

            this.each(function() {
                elmStrings.push(this.outerHTML);
            });

            return elmStrings;
        } else {
            return this.first().get().outerHTML;
        }
    };

    /* Module to wrap selected element with new element */
    $dom.module.wrap = function(htmlstring) {
        if (isHTMLString(htmlstring)) {
            var result = $dom();

            this.each(function() {
                result.push($dom(htmlstring).insertBefore(this).append(this));
            });

            return result;
        }

        return this;
    };

    /* Module to wrap child elements of selected elements with new element */
    $dom.module.wrapChild = function(htmlstring) {
        if (isHTMLString(htmlstring)) {
            var result = $dom();

            this.each(function() {
                var child = $dom(this).children(), elem;

                if (child.length > 0) {
                    elem = $dom(htmlstring).prependTo(this).append(child);

                    result.push(elem);
                } else {
                    var text = this.innerHTML;

                    $dom(this).empty();

                    elem = $dom(htmlstring).html(text).appendTo(this);

                    result.push(elem);
                }
            });

            return result;
        }

        return this;
    };

    /* Module to get siblings element */
    $dom.module.siblings = function() {
        if (this.length <= 0) return this;

        var result = $dom();
        var first = this.first();

        first.parent().children().each(function() {
            if (this !== first.get()) {
                result.push(this);
            }
        });

        return result;
    };

    /* Module to reduce selected elements */
    $dom.module.slice = function(index) {
        var result = $dom();

        if (isNumber(index)) {
            this.each(function(i) {
                if (i !== index) result.push(this);
            });
        } else if (isArray(index)) {
            this.each(function(i) {
                if (index.indexOf(i) < 0) result.push(this);
            });
        }

        return result;
    };

    /* Module to remove properties from selected elements */
    $dom.module.remProp = function(prop) {
        if (isString(prop)) {
            this.each(function() {
                if (this[prop]) {
                    delete this[prop];

                    if (this.hasAttribute(prop)) {
                        this.removeAttribute(prop);
                    }
                }
            });
        } else if (isArray(prop)) {
            foreach(prop, function (prop) {
                this.remProp(prop);
            });
        }

        return this;
    };

    /* Module to replace selected elements with other element */
    $dom.module.replace = function(trg, src) {
        if (isString(trg)) {
            return this.filter(trg).replaceWith(src);
        } else if (isHTML(trg)) {
            return $dom(trg).replaceWith(src);
        }

        return this;
    };

    /* Module to replace all element with new element */
    $dom.module.replaceWith = function(elem) {
        if (this.length <= 0) return this;

        if (isHTML(elem)) {
            $dom(elem).insertBefore(this.get(0));
            this.first().remove();
        } else if (isHTMLString(elem)) {
            this.each(function() {
                this.outerHTML = elem;
            });
        }

        return this;
    };

    /* Module to get next sibiling element */
    $dom.module.next = function(query) {
        if (this.length <= 0) return this;

        var all = this.first().parent().children();
        var idx = all.indexOf(this.get(0));
        var res = $dom();

        if (isString(query)) {
            for (var i = (idx + 1); i < all.length; ++i) {
                if (all.nth(i).filter(query).length > 0) {
                    res.push(all.get(i));
                    break;
                }
            }
        }

        else if (isFunction(query)) {
            for (var i = (idx + 1); i < all.length; ++i) {
                if (query.call(all.get(i))) {
                    res.push(all.get(i));
                    break;
                }
            }
        }

        else {
            return all.nth(idx + 1);
        }

        return res;
    };

    /* Module to get next sibling elements after this element */
    $dom.module.nextAll = function(query) {
        if (this.length <= 0) return this;

        var all = this.first().parent().children();
        var idx = all.indexOf(this.get(0));
        var res = $dom();

        if (isString(query)) {
            for (var i = (idx + 1); i < all.length; ++i) {
                if (all.nth(i).filter(query).length > 0) {
                    res.push(all.get(i));
                }
            }
        }

        else if (isFunction(query)) {
            for (var i = (idx + 1); i < all.length; ++i) {
                if (query.call(all.get(i))) {
                    res.push(all.get(i));
                }
            }
        }

        else {
            for (var i = (idx + 1); i < all.length; ++i) {
                res.push(all.get(i));
            }
        }

        return res;
    };

    /* Module to get next element until meet with condition */
    $dom.module.nextUntil = function(query) {
        if (this.length <= 0) return this;

        var all = this.first().parent().children();
        var idx = all.indexOf(this.get(0));
        var res = $dom();

        if (isString(query)) {
            for (var i = (idx + 1); i < all.length; ++i) {
                res.push(all.get(i));

                if (all.nth(i).filter(query).length > 0) break;
            }
        } else if (isFunction(query)) {
            for (var i = (idx + 1); i < all.length; ++i) {
                res.push(all.get(i));

                if (query.call(all.get(i))) break;
            }
        }

        return res;
    };

    /* Module to get previous element */
    $dom.module.prev = function(query) {
        if (this.length <= 0) return this;

        var all = this.first().parent().children();
        var idx = all.indexOf(this.get(0));
        var res = $dom();

        if (isString(query)) {
            for (var i = (idx - 1); i >= 0; --i) {
                if (all.nth(i).filter(query).length > 0) {
                    res.push(all.get(i));
                    break;
                }
            }
        }

        else if (isFunction(query)) {
            for (var i = (idx - 1); i >= 0; --i) {
                if (query.call(all.get(i))) {
                    res.push(all.get(i));
                    break;
                }
            }
        }

        else {
            return all.nth(idx - 1);
        }

        return res;
    };

    /* Module to get all previous elements */
    $dom.module.prevAll = function(query) {
        if (this.length <= 0) return this;

        var all = this.first().parent().children();
        var idx = all.indexOf(this.get(0));
        var res = $dom();

        if (isString(query)) {
            for (var i = (idx - 1); i >= 0; --i) {
                if (all.nth(i).filter(query).length > 0) {
                    res.push(all.get(i));
                }
            }
        }

        else if (isFunction(query)) {
            for (var i = (idx - 1); i >= 0; --i) {
                if (query.call(all.get(i))) {
                    res.push(all.get(i));
                }
            }
        }

        else {
            for (var i = (idx - 1); i >= 0; --i) {
                res.push(all.get(i));
            }
        }

        return res;
    };

    /* Module to get all previous elements until meet with condition */
    $dom.module.prevUntil = function(query) {
        if (this.length <= 0) return this;

        var all = this.first().parent().children();
        var idx = all.indexOf(this.get(0));
        var res = $dom();

        if (isString(query)) {
            for (var i = (idx - 1); i >= 0; --i) {
                res.push(all.get(i));

                if (all.nth(i).filter(query).length > 0) break;
            }
        } else if (isFunction(query)) {
            for (var i = (idx - 1); i >= 0; --i) {
                res.push(all.get(i));

                if (query.call(all.get(i))) break;
            }
        }

        return res;
    };
})(DOMList);
