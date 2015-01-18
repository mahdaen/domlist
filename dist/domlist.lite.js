if (!window) var window = {};

!function(native) {
    return "undefined" != typeof module && module.exports ? void (module.exports = native()) : native();
}(function() {
    return window;
}), window.__nconfig = {}, function() {
    var isDefined = function($object) {
        return "undefined" != typeof $object ? !0 : !1;
    };
    window.isDefined = function($object) {
        return isDefined($object);
    };
    var isString = function($object) {
        return "string" == typeof $object ? !0 : !1;
    };
    window.isString = function($object) {
        return isString($object);
    };
    var isObject = function($object) {
        return "object" == typeof $object && void 0 === $object.indexOf && void 0 === $object.splice ? !0 : !1;
    };
    window.isObject = function($object) {
        return isObject($object);
    };
    var isArray = function($object) {
        return "object" == typeof $object && Array.isArray($object) ? !0 : !1;
    };
    window.isArray = function($object) {
        return isArray($object);
    };
    var isFunction = function($object) {
        return "function" == typeof $object ? !0 : !1;
    };
    window.isFunction = function($object) {
        return isFunction($object);
    };
    var isNumber = function($object) {
        return "number" == typeof $object ? !0 : !1;
    };
    window.isNumber = function($object) {
        return isNumber($object);
    };
    var isBoolean = function($object) {
        return "boolean" == typeof $object ? !0 : !1;
    };
    window.isBoolean = function($object) {
        return isBoolean($object);
    };
    var isJQuery = function($object) {
        return "object" == typeof $object && $object.hasOwnProperty("length") && $object.jquery ? !0 : !1;
    };
    window.isJQuery = function($object) {
        return isJQuery($object);
    };
    var isHTML = function($object) {
        return "object" == typeof $object && $object.ELEMENT_NODE ? !0 : !1;
    };
    window.isHTML = function($object) {
        return isHTML($object);
    };
    var isDOMList = function($object) {
        return "object" == typeof $object && $object.name && "DOMList" === $object.name ? !0 : !1;
    };
    window.isDOMList = function($object) {
        return isDOMList($object);
    };
    var isHTMLString = function($object) {
        return "undefined" != typeof $object && $object.match(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/) ? !0 : !1;
    };
    window.isHTMLString = function($object) {
        return isHTMLString($object);
    };
    var isColor = function($object) {
        return /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/.test($object) ? !0 : !1;
    };
    window.isColor = function($object) {
        return isColor($object);
    };
    var isURL = function($object) {
        return /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i.test($object) ? !0 : !1;
    };
    window.isURL = function($object) {
        return isURL($object);
    };
    var isEmail = function($object) {
        return /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i.test($object) ? !0 : !1;
    };
    window.isEmail = function($object) {
        return isEmail($object);
    };
    var isDate = function($object) {
        return isNaN(new Date($object).getDate()) ? !1 : !0;
    };
    window.isDate = function($object) {
        return isDate($object);
    };
}(), function() {
    var foreach = function(object, handler, thisArg) {
        if (window.isFunction(handler)) if (window.isArray(object) && window.isFunction(handler)) for (var i = 0; i < object.length; ++i) handler.call(thisArg, object[i], i); else if (window.isObject(object) && window.isFunction(handler)) for (var key in object) object.hasOwnProperty(key) && handler.call(thisArg, key, object[key]); else if (window.isNumber(object) && window.isFunction(handler)) for (var i = 1; object >= i; ++i) handler.call(thisArg, i); else if (window.isString(object) && window.isFunction(handler)) for (var i = 0; i < object.length; ++i) handler.call(thisArg, object.charAt(i), i + 1); else {
            if (!window.isDOMList(object) || !window.isFunction(handler)) return console.warn("Euw! We can't iterate your object. So sorry!");
            for (var i = 0; i < object.length; ++i) handler.call(thisArg, object[i], i);
        } else console.warn("Euw! Don't forget to give us a function to call!");
        return object;
    }, reveach = function($object, $handler, $args) {
        if (window.isFunction($handler)) if (window.isArray($object)) for (var i = $object.length - 1; i >= 0; --i) $handler.call($args, $object[i], i); else if (window.isObject($object)) for (var keys = Object.keys($object), i = keys.length - 1; i >= 0; --i) $handler.call($args, keys[i], $object[keys[i]]); else if (window.isNumber($object)) for (var i = $object; i >= 1; --i) $handler.call($args, i); else if (window.isString($object)) for (var i = $object.length - 1; i >= 0; --i) $handler.call($args, $object.charAt(i), i); else {
            if (!window.isDOMList($object)) return console.warn("Euw! We can't iterate your object. So sorry!");
            for (var i = $object.length - 1; i >= 0; --i) $handler.call($args, $object[i], i);
        } else console.warn("Euw! Don't forget to give us a function to call!");
        return $object;
    };
    window.foreach = function($object, $handlder, $args) {
        return foreach($object, $handlder, $args);
    }, window.reveach = function($object, $handlder, $args) {
        return reveach($object, $handlder, $args);
    };
}(), window.__variables = {}, window.__constants = {}, window.__functions = {}, 
function() {
    var vars = function(name, value) {
        return window.isString(name) ? window.isDefined(value) ? (window.__variables[name] = value, 
        value) : window.__variables.hasOwnProperty(name) ? window.__variables[name] : void 0 : console.warn("Argument @name is required!");
    };
    window.vars = function($name, $value) {
        return new vars($name, $value);
    };
    var cons = function(name, value) {
        return window.isString(name) ? window.isDefined(value) ? window.__constants.hasOwnProperty(name) ? console.warn('Constant "' + name + '" already defined!') : (window.__constants[name] = value, 
        value) : window.__constants.hasOwnProperty(name) ? window.__constants[name] : console.warn('Constant "' + name + '" is undefined!') : console.warn("Argument @name is required!");
    };
    window.cons = function($name, $value) {
        return new cons($name, $value);
    };
    var func = function(name, handler) {
        return window.isString(name) ? window.isFunction(handler) ? window.__functions.hasOwnProperty(name) ? void console.warn('Function "' + name + '" already defined!') : (window.__functions[name] = handler, 
        handler) : window.__functions.hasOwnProperty(name) ? window.__functions[name] : console.warn('Function "' + name + '" is undefined!') : console.warn("Argument @name is required!");
    };
    window.func = function($name, $handler) {
        return new func($name, $handler);
    };
}(), window.circle = function(obj, reversed) {
    if (window.isObject(obj)) {
        var nobj = {}, keys = Object.keys(obj), last = keys.length - 1;
        return reversed ? (nobj[keys[last]] = obj[keys[last]], window.foreach(obj, function(key, value) {
            key !== keys[last] && (nobj[key] = value);
        })) : (window.foreach(obj, function(key, value) {
            key !== keys[0] && (nobj[key] = value);
        }), nobj[keys[0]] = obj[keys[0]]), nobj;
    }
    if (window.isArray(obj)) {
        var narr = [], last = this.length - 1;
        return reversed ? (narr.push(obj[last]), window.foreach(obj, function(value, index) {
            index !== last && narr.push(value);
        })) : (window.foreach(obj, function(value, index) {
            0 !== index && narr.push(value);
        }), narr.push(obj[0])), narr;
    }
}, function($root) {
    Array.isArray || (Array.prototype.isArray = function() {
        return "[object Array]" === Object.prototype.toString.call(this);
    }), Array.indexOf || (Array.prototype.indexOf = function(searchElement, fromIndex) {
        var k;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var O = Object(this), len = O.length >>> 0;
        if (0 === len) return -1;
        var n = +fromIndex || 0;
        if (1/0 === Math.abs(n) && (n = 0), n >= len) return -1;
        for (k = Math.max(n >= 0 ? n : len - Math.abs(n), 0); len > k; ) {
            if (k in O && O[k] === searchElement) return k;
            k++;
        }
        return -1;
    }), Object.keys || (Object.prototype.keys = function() {
        var arr = [];
        for (var key in this) this.hasOwnProperty(key) && arr.push(key);
        return arr;
    });
    var CustomEvent = function(name, options) {
        var event;
        return isString(name) && (options = options || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        }, event = document.createEvent("CustomEvent"), event.initCustomEvent(name, options.bubbles, options.cancelable, options.detail)), 
        event;
    };
    CustomEvent.prototype = $root.Event.prototype, $root.CustomEvent || ($root.CustomEvent = CustomEvent);
}(window), function($root) {
    "use strict";
    var DOMList = function(query, context) {
        var modern, $this = this;
        if (modern = document.querySelectorAll ? !1 : !1, this.length = 0, "string" == typeof query) {
            var result, $this = this;
            if (isHTML(context)) result = modern ? context.querySelectorAll(query) : window.Sizzle ? Sizzle(query, context) : []; else if (isDOMList(context)) {
                var length = 0;
                context.each(function() {
                    if (modern) var res = this.querySelectorAll(query); else if (window.Sizzle) var res = Sizzle(query, this); else res = [];
                    modern ? foreach(res, function(i, node) {
                        "length" !== i && ($this[length] = node, $this.length = length + 1, length++);
                    }) : foreach(res, function(node) {
                        $this[length] = node, $this.length = length + 1, length++;
                    });
                });
            } else {
                if (isString(context) && !isHTMLString(context)) return context = new DOMList(context), 
                new DOMList(query, context);
                if (isHTMLString(query)) {
                    var doc = document.createElement("div");
                    doc.innerHTML = query, result = doc.children;
                } else result = modern ? document.querySelectorAll(query) : window.Sizzle ? Sizzle(query) : [];
            }
            if (result && result.length > 0) for (var i = 0; i < result.length; ++i) $this[i] = result[i], 
            $this.length++;
        } else if (isHTML(query)) $this[0] = query, $this.length = 1; else if (isArray(query)) $this.length = query.length, 
        foreach(query, function(node, i) {
            $this[i] = node;
        }); else if (isDOMList(query)) return query;
        return this;
    };
    $root.$dom = $root.DOMList = function(query, context) {
        return new DOMList(query, context);
    }, $root.DOMList.extend = function(name, handler) {
        return isString(name) && isFunction(handler) ? $root.DOMList.module[name] = handler : isObject(name) && foreach(name, function(name, handler) {
            isFunction(handler) && ($root.DOMList.module[name] = handler);
        }), name;
    }, $root.DOMList.module = DOMList.prototype = {
        name: "DOMList",
        splice: Array.prototype.splice,
        animate: function(props, options, callback) {
            var $this = this;
            return isObject(props) && (props = [ props ]), isArray(props) && (isNumber(options) && (options = {
                duration: options
            }), isObject(options) && $this.each(function() {
                var self = this;
                if (isFunction(callback)) {
                    var anim = self.animate(props, options);
                    anim.onfinish = function() {
                        callback.call(self, anim);
                    };
                } else self.animate(props, options);
            })), this;
        }
    }, HTMLElement.prototype.find = function(query) {
        return new DOMList(query, this);
    };
}(window), function($root, $dom) {
    var DOMData = function(name, value, context) {
        if ((isObject(value) || isArray(value)) && (value = JSON.stringify(value)), isString(name)) if (name.match(/\s+/)) {
            var sname = name.split(/\s+/), query = "";
            foreach(sname, function(cquery, i) {
                query += value && "" !== value ? i < sname.length ? "[data-" + cquery + '="' + value + '"], ' : "[data-" + cquery + '="' + value + '"]' : i < sname.length ? "[data-" + cquery + "], " : "[data-" + cquery + "]";
            }), name = query;
        } else name = value && "" !== value ? "[data-" + name + '="' + value + '"]' : "[data-" + name + "]"; else if (isArray(name)) {
            var query = "";
            foreach(name, function(cquery, i) {
                query += value && "" !== value ? i < name.length ? "[data-" + cquery + '="' + value + '"], ' : "[data-" + cquery + '="' + value + '"]' : i < name.length ? "[data-" + cquery + "], " : "[data-" + cquery + "]";
            }), name = query;
        } else {
            if (!isObject(name)) {
                var alls = $dom("html *"), result = [];
                return alls.each(function() {
                    var atr = $dom(this).attr(), has = !1;
                    foreach(atr, function(key) {
                        key.search(/data-/) > -1 && (has = !0);
                    }), has && result.push(this);
                }), $dom(result);
            }
            var query = "";
            foreach(name, function(cquery, value) {
                (isObject(value) || isArray(value)) && (value = JSON.stringify(value)), cquery = value && "" !== value ? "[data-" + cquery + '="' + value + '"]' : "[data-" + cquery + "]", 
                query += cquery;
            }), name = query, (isString(value) || isHTML(value) || isDOMList(value)) && (context = value);
        }
        var result;
        return result = context ? $dom(name, context) : isHTML(value) || isDOMList(value) ? $dom(name, value) : $dom(name);
    };
    $dom.data = $root.DOMData = function(name, value, context) {
        return new DOMData(name, value, context);
    };
}(window, DOMList), function($dom) {
    "use strict";
    $dom.module.push = function(elem) {
        var $this = this;
        return isHTML(elem) ? ($this[$this.length] = elem, $this.length++) : isDOMList(elem) || isArray(elem) ? foreach(elem, function(elem) {
            $this[$this.length] = elem, $this.length++;
        }) : isString(elem) && $this.push($dom(elem)), this;
    }, $dom.module.first = function() {
        return this.length > 0 ? $dom(this[0]) : this;
    }, $dom.module.firstChild = function() {
        if (this.length <= 0) return this;
        var first = this[0], child = first.children;
        return child.length > 0 ? $dom(child[0]) : $dom();
    }, $dom.module.last = function() {
        return this.length > 0 ? $dom(this[this.length - 1]) : this;
    }, $dom.module.lastChild = function() {
        if (this.length <= 0) return this;
        var first = this[0], child = first.children;
        return child.length > 0 ? $dom(child[child.length - 1]) : $dom();
    }, $dom.module.nth = function(i) {
        return isNumber(i) && this.hasOwnProperty(i) ? $dom(this[i]) : $dom();
    }, $dom.module.nthChild = function(i) {
        if (this.length <= 0) return this;
        var fisrt = this[0], child = fisrt.children;
        return child.length > 0 && child.hasOwnProperty(i) ? $dom(child[i]) : $dom();
    }, $dom.module.children = function() {
        if (this.first().length > 0) {
            var childs = this.first()[0].children;
            return childs.constructor.prototype.name = "DOMList", $dom(childs);
        }
        return $dom();
    }, $dom.module.find = function(query) {
        return isString(query) ? $dom(query, this) : void 0;
    }, $dom.module.filter = function(query) {
        if (!isString(query)) return this;
        var result, wrap = document.createElement("div"), elems = "", src = [], cand = [];
        return this.each(function() {
            elems += this.outerHTML, src.push(this.outerHTML);
        }), wrap.innerHTML = elems, result = wrap.find(query), result.each(function() {
            var self = this.outerHTML;
            src.indexOf(self) > -1 && cand.push(this);
        }), $dom(cand);
    }, $dom.module.each = function(handler, reversed) {
        return isFunction(handler) && (reversed ? reveach(this, function(node, i) {
            handler.call(node, i, node);
        }) : foreach(this, function(node, i) {
            handler.call(node, i, node);
        })), this;
    }, $dom.module.attr = function(name, value) {
        var $this = this;
        if (!(this.length <= 0)) {
            if (isString(name)) {
                if (isDefined(value)) return (isObject(value) || isArray(value)) && (value = JSON.stringify(value)), 
                $this.each(function() {
                    this.setAttribute(name, value), this.hasOwnProperty(name) && (this[name] = value);
                }), this;
                var parsed, result = $this[0].getAttribute(name);
                try {
                    parsed = JSON.parse(result);
                } catch (err) {}
                return parsed ? parsed : "true" === result ? !0 : "false" === result ? !1 : "undefined" === result ? void 0 : "null" === result ? null : "NaN" === result ? 0/0 : Number(result) ? Number(result) : result;
            }
            if (isObject(name)) foreach(name, function(key, value) {
                $this.attr(key, value);
            }); else {
                if (!isArray(name)) {
                    var attributes = $this[0].attributes, result = {};
                    return foreach(attributes, function(i, attr) {
                        "length" !== i && (result[attr.name] = $this.attr(attr.name));
                    }), result;
                }
                foreach(name, function(key) {
                    $this.attr(key, "");
                });
            }
            return $this;
        }
    }, $dom.module.remAttr = function(name) {
        return isString(name) ? name.match(/\s+/) ? (name = name.split(/\s+/), this.each(function() {
            var self = this;
            foreach(name, function(name) {
                self.removeAttribute(name);
            });
        })) : this.each(function() {
            this.removeAttribute(name);
        }) : isArray(name) && this.each(function() {
            var self = this;
            foreach(name, function(name) {
                self.removeAttribute(name);
            });
        }), this;
    }, $dom.module.data = function(name, value) {
        var $this = this;
        if ($this.length <= 0, !isString(name)) {
            var atrs = $this.attr(), data = {};
            return foreach(atrs, function(attr) {
                attr.match(/data-/) && (data[attr.replace("data-", "")] = $this.attr(attr));
            }), data;
        }
        if (name.match(/\s+/)) {
            if (name = name.split(/\s+/), !isDefined(value)) {
                var data = {};
                return foreach(name, function(attr) {
                    data[attr] = $this.attr("data-" + attr);
                }), data;
            }
            foreach(name, function(attr, i) {
                isString(value) ? $this.attr("data-" + attr, value) : isArray(value) && $this.attr("data-" + attr, value[i]);
            });
        } else {
            if (!isDefined(value)) return $this.first().attr("data-" + name);
            $this.attr("data-" + name, value);
        }
        return $this;
    }, $dom.module.remData = function(name) {
        var $this = this;
        return isString(name) && (name.match(/\s+/) ? (name = name.split(/\s+/), foreach(name, function(attr) {
            $this.remAttr("data-" + attr);
        })) : $this.remAttr("data-" + name)), $this;
    }, $dom.module.prop = function(name, value) {
        var $this = this;
        if ($this.length <= 0) return $this;
        if (isString(name)) if (isDefined(value)) $this.each(function() {
            this[name] = value, this.getAttribute(name) && this.setAttribute(name, value);
        }); else {
            var first = $this[0];
            if (first.hasOwnProperty(name)) return first[name];
        }
        return $this;
    }, $dom.module.val = function(value) {
        return isDefined(value) ? void this.prop("value", value) : this.prop("value");
    }, $dom.module.remove = function() {
        return this.each(function() {
            this.remove();
        }), this;
    }, $dom.module.sortBy = function(attr, options) {
        var $this = this, option = {
            type: "string",
            direction: "ascending"
        };
        if (isObject(options) && foreach(options, function(key, value) {
            option[key] = value;
        }), isString(attr)) {
            var list = [];
            $this.each(function(i) {
                var val = this.getAttribute(attr);
                list.push(isString(val) ? val + "<>" + i : "zabc<>" + i);
            }), list = "number" === option.type ? list.sort(function(a, b) {
                var ap = Number(a.split("<>")[0]), bp = Number(b.split("<>")[0]);
                return ap || (ap = 999999999999999), bp || (bp = 999999999999999), ap > bp ? 1 : -1;
            }) : list.sort(), "descending" === option.direction && (list = list.reverse());
            var newlist = $dom();
            return newlist.length = list.length, foreach(list, function(s, i) {
                s = s.split("<>")[1], newlist[i] = $this[s];
            }), newlist;
        }
        return this;
    }, $dom.module.toArray = function() {
        var arr = [];
        return this.each(function() {
            arr.push(this);
        }), arr;
    }, $dom.module.parent = function() {
        if (this.length <= 0) return this;
        var first = this[0];
        return $dom(first.parentElement);
    }, $dom.module.parents = function() {
        var result = $dom();
        return this.each(function() {
            result.push(this.parentElement);
        }), result;
    }, $dom.module.comment = function() {
        return this.each(function() {
            this.orgHTML = this.outerHTML, this.outerHTML = "<!-- " + this.outerHTML + " -->";
        }), this;
    };
}(DOMList), function($dom) {
    "use strict";
    $dom.module.addClass = function(name) {
        var $this = this;
        return isString(name) ? name.match(/\s+/) ? (name = name.split(/\s+/), foreach(name, function(attr) {
            $this.addClass(attr);
        })) : $this.each(function() {
            this.classList.add(name);
        }) : isArray(name) && foreach(name, function(attr) {
            $this.addClass(attr);
        }), this;
    }, $dom.module.remClass = function(name) {
        var $this = this;
        return isString(name) ? name.match(/\s+/) ? (name = name.split(/\s+/), foreach(name, function(attr) {
            $this.remClass(attr);
        })) : $this.each(function() {
            this.classList.remove(name);
        }) : isArray(name) && foreach(name, function(attr) {
            $this.remClass(attr);
        }), this;
    }, $dom.module.toggleClass = function(name) {
        var $this = this;
        return isString(name) ? $this.each(function() {
            this.classList.toggle(name);
        }) : isArray(name) && foreach(name, function(attr) {
            $this.toggleClass(attr);
        }), this;
    };
}(DOMList), function($root, $dom) {
    "use strict";
    $dom.module.append = function(childs) {
        var $this = this;
        if ($this.length <= 0) return $this;
        if (isHTML(childs)) $this[0].appendChild(childs); else if (isArray(childs) || isDOMList(childs)) foreach(childs, function(node) {
            $this[0].appendChild(node);
        }); else if (isString(childs)) if (isHTMLString(childs)) $this[0].insertAdjacentHTML("beforeend", childs); else {
            var result = $dom(childs);
            result.each(function() {
                $this[0].appendChild(this);
            });
        }
        return this;
    }, $dom.module.prepend = function(childs) {
        var $this = this;
        if ($this.length <= 0) return this;
        if (isHTML(childs)) $this[0].children.length <= 0 ? $this[0].appendChild(childs) : $this[0].insertBefore(childs, $this[0].children[0]); else if (isDOMList(childs) || isArray(childs)) if ($this[0].children.length <= 0) foreach(childs, function(node) {
            $this[0].appendChild(node);
        }); else {
            var first = $this[0].children[0];
            foreach(childs, function(node) {
                $this[0].insertBefore(node, first);
            });
        } else if (isString(childs)) if (isHTMLString(childs)) $this[0].insertAdjacentHTML("afterbegin", childs); else {
            var result = $dom(childs);
            if ($this[0].children.length <= 0) result.each(function() {
                $this[0].appendChild(this);
            }); else {
                var first = $this[0].children[0];
                result.each(function() {
                    $this[0].insertBefore(this, first);
                });
            }
        }
        return this;
    }, $dom.module.appendTo = function(destination) {
        var $this = this;
        if ($this.length <= 0) return $this;
        if (isHTML(destination)) $this.each(function() {
            destination.appendChild(this);
        }); else if (isDOMList(destination) || isArray(destination) && destination.length > 0) destination = destination[0], 
        $this.each(function() {
            destination.appendChild(this);
        }); else if (isString(destination) && !isHTMLString(destination)) {
            var result = $dom(destination);
            result.length > 0 && $this.each(function() {
                result[0].appendChild(this);
            });
        }
        return this;
    }, $dom.module.prependTo = function(destination) {
        var $this = this;
        if ($this.length <= 0) return $this;
        if (isHTML(destination)) if (destination.children.length > 0) {
            var first = destination.children[0], parnt = first.parentElement;
            $this.each(function() {
                parnt.insertBefore(this, first);
            });
        } else $this.each(function() {
            destination.appendChild(this);
        }); else if (isDOMList(destination) || isArray(destination) && destination.length > 0) if (destination = destination[0], 
        destination.children.length > 0) {
            var first = destination.children[0], parnt = first.parentElement;
            $this.each(function() {
                parnt.insertBefore(this, first);
            });
        } else $this.each(function() {
            destination.appendChild(this);
        }); else if (isString(destination) && !isHTMLString(destination)) {
            var result = $dom(destination);
            if (result.length > 0) if (destination = result[0], destination.children.length >= 0) {
                var first = destination.children[0], parnt = first.parentElement;
                $this.each(function() {
                    parnt.insertBefore(this, first);
                });
            } else $this.each(function() {
                destination.appendChild(this);
            });
        }
        return this;
    }, $dom.module.insertBefore = function(destination) {
        var $this = this;
        if ($this.length <= 0) return $this;
        if (isHTML(destination)) {
            var parent = destination.parentElement;
            $this.each(function() {
                parent.insertBefore(this, destination);
            });
        } else if (isDOMList(destination) || isArray(destination) && destination.length > 0) {
            var parent = destination[0].parentElement;
            $this.each(function() {
                parent.insertBefore(this, destination[0]);
            });
        } else if (isString(destination) && !isHTMLString(destination) && (destination = $dom(destination), 
        destination.length > 0)) {
            var parent = destination[0].parentElement;
            $this.each(function() {
                parent.insertBefore(this, destination[0]);
            });
        }
        return this;
    }, $dom.module.insertAfter = function(destination) {
        var $this = this;
        if ($this.length <= 0) return $this;
        if (isHTML(destination)) {
            var parent = destination.parentElement;
            $this.each(function() {
                parent.insertBefore(this, destination.nextSibling);
            }, !0);
        } else if (isDOMList(destination) || isArray(destination) && destination.length > 0) {
            var parent = destination[0].parentElement;
            $this.each(function() {
                parent.insertBefore(this, destination[0].nextSibling);
            }, !0);
        } else if (isString(destination) && !isHTMLString(destination) && (destination = $dom(destination), 
        destination.length > 0)) {
            var parent = destination[0].parentElement;
            $this.each(function() {
                parent.insertBefore(this, destination[0].nextSibling);
            }, !0);
        }
        return this;
    }, $dom.module.text = function(value) {
        return this.length <= 0 ? this : isDefined(value) ? (this.each(function() {
            try {
                this.innerText = value;
            } catch (err) {}
        }), this) : this[0].innerText;
    }, $dom.module.texts = function() {
        var result = [];
        return this.each(function() {
            result.push(this.innerText);
        }), result;
    }, $dom.module.html = function(value) {
        if (this.length <= 0) return this;
        if (isDOMList(value) || isArray(value)) this.append(value); else {
            if (!isDefined(value)) return this[0].innerHTML;
            this.each(function() {
                try {
                    this.innerHTML = value;
                } catch (err) {}
            });
        }
        return this;
    }, $dom.module.htmls = function() {
        var result = [];
        return this.each(function() {
            result.push(this.innerHTML);
        }), result;
    }, $dom.module.clone = function() {
        var cloned = [];
        return this.each(function() {
            var clone = this.cloneNode(!0);
            cloned.push(clone);
        }), $dom(cloned);
    }, $dom.module.empty = function() {
        return this.each(function() {
            try {
                this.innerHTML = "", this.innerText = "";
            } catch (err) {}
        }), this.val(""), this;
    };
}(window, DOMList), function($dom) {
    $dom.module.hasAttr = function(name) {
        var has = !1, hasfalse = !1, atrs = Object.keys(this.attr());
        if (isString(name)) {
            if (name.match(/\s+/)) return name = name.split(/\s+/), foreach(name, function(key) {
                atrs.indexOf(key) > -1 ? has = !0 : hasfalse = !0;
            }), has === !0 && hasfalse === !1 ? !0 : !1;
            atrs.indexOf(name) > -1 && (has = !0);
        } else isArray(name) && foreach(name, function(key) {
            atrs.indexOf(key) > -1 && (has = !0);
        });
        return has;
    }, $dom.module.hasData = function(name) {
        if (isString(name)) if (name.match(/\s+/)) {
            var ns = name.split(/\s+/);
            foreach(ns, function(value) {
                name = name.replace(value, "data-" + value);
            });
        } else name = "data-" + name; else isArray(name) && foreach(name, function(value, i) {
            name[i] = "data-" + value;
        });
        return this.hasAttr(name);
    }, $dom.module.hasClass = function(name) {
        var has = !1, hasfalse = !1, cls = this.attr("class").split(/\s+/);
        if (isString(name)) {
            if (name.search(/\s+/)) return name = name.split(/\s+/), foreach(name, function(clas) {
                cls.indexOf(clas) > -1 ? has = !0 : hasfalse = !0;
            }), has === !0 && hasfalse === !1 ? !0 : !1;
            cls.indexOf(name) > -1 && (has = !0);
        } else isArray(name) && foreach(name, function(clas) {
            cls.indexOf(clas) > -1 && (has = !0);
        });
        return has;
    };
}(DOMList), function($root, $dom) {
    "use strict";
    var EventProvider = function() {
        this.events = {};
    };
    EventProvider.prototype = {
        search: function(name) {
            return isString(name) && isObject(this.events[name]) ? this.events[name] : void 0;
        },
        register: function(name, provider, options) {
            return isString(name) && isFunction(provider) && (this.events[name] = {
                maker: provider,
                event: new $root.CustomEvent(name, options)
            }), this.events[name].event;
        },
        dispatch: function(name, elem, props) {
            if (isString(name) && isHTML(elem) && this.events[name]) {
                var event = this.events[name].event;
                isObject(props) && foreach(props, function(key, value) {
                    event[key] = value;
                }), elem.dispatchEvent(event);
            }
        }
    }, $root.EventProvider = new EventProvider(), document.onreadystatechange = function() {
        "interactive" === document.readyState ? document.isready = !0 : "complete" === document.readyState && (document.isloaded = !0);
    };
    var DocLoadListener = function(type, handler) {
        var $this = document;
        return $this._evcol || ($this._evcol = {
            _init: !0,
            ready: [],
            loaded: []
        }), isString(type) && isFunction(handler) && $this._evcol[type].push(handler), $this.isready && "ready" === type && handler.call($this), 
        $this.isloaded && "loaded" === type && handler.call($this), $this._evcol._init && ($this._evcol._init = !1, 
        $this.onreadystatechange = function() {
            "interactive" === $this.readyState ? setTimeout(function() {
                foreach($this._evcol.ready, function(handler) {
                    handler.call($this), $this.isready = !0;
                });
            }, 300) : "complete" === $this.readyState && setTimeout(function() {
                foreach($this._evcol.loaded, function(handler) {
                    handler.call($this), $this.isloaded = !0;
                });
            }, 300);
        }), $this;
    };
    $dom.ready = function(handler) {
        return new DocLoadListener("ready", handler);
    }, $dom.loaded = function(handler) {
        return new DocLoadListener("loaded", handler);
    }, $dom.module.listen = function(name, type, handler) {
        return this.each(function() {
            var elem = this;
            if (isString(type) && elem.hasOwnProperty("on" + type) && (type = "on" + type), 
            isString(name) ? isString(type) && isFunction(handler) ? (elem._evcol || (elem._evcol = {}), 
            elem._evcol[type] || (elem._evcol[type] = {
                _init: !0
            }), elem._evcol[type][name] || (elem._evcol[type][name] = []), elem._evcol[type][name].push(handler)) : isObject(type) && foreach(type, function(type, handler) {
                isFunction(handler) && $dom(elem).listen(name, type, handler);
            }) : isObject(name) && foreach(name, function(name, types) {
                isObject(types) && foreach(types, function(type, handler) {
                    isFunction(handler) && $dom(elem).listen(type, name, handler);
                });
            }), elem._evcol && elem._evcol[type] && elem._evcol[type]._init) {
                elem._evcol[type]._init = !1;
                var cev = $root.EventProvider.search(type);
                cev && cev.maker.call(elem);
                var defHandler = function(e) {
                    var $self = this;
                    $self._evcol[type] && foreach($self._evcol[type], function(name, handlers) {
                        "_init" !== name && foreach(handlers, function(handler) {
                            isFunction(handler) && handler.call($self, e);
                        });
                    });
                };
                elem.hasOwnProperty(type) ? elem[type] = defHandler : elem.addEventListener(type, defHandler);
            }
        }), this;
    }, $dom.module.unlisten = function(name, type) {
        var self = this;
        return isString(name) ? isString(type) ? this.each(function() {
            this.hasOwnProperty("on" + type) && (type = "on" + type), this._evcol[type] && this._evcol[type][name] && delete this._evcol[type][name];
        }) : isArray(type) ? foreach(type, function(type) {
            self.unlisten(name, type);
        }) : this.each(function() {
            var $this = this;
            foreach($this._evcol, function(type, names) {
                isObject(names) && names.hasOwnProperty(name) && delete $this._evcol[type][name];
            });
        }) : isArray(name) && (isString(type) ? foreach(name, function(name) {
            self.unlisten(name, type);
        }) : isArray(type) && foreach(name, function(name) {
            foreach(type, function(type) {
                self.unlisten(name, type);
            });
        })), this;
    }, $dom.module.handle = function(type, handler) {
        return isString(type) && isFunction(handler) ? this.listen("default", type, handler) : isObject(type) && this.listen("default", type), 
        this;
    }, $dom.module.unhanlde = function(type) {
        return (isString(type) || isArray(type)) && this.unlisten("default", type), this;
    }, $dom.module.trigger = function() {
        return this;
    };
}(window, DOMList), function($root, $dom) {
    "use strict";
    var alias = "blur focus focusin focusout load resize scroll unload click dblclick hover mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(/\s+/);
    foreach(alias, function(name) {
        $dom.module[name] = function(handler) {
            return isFunction(handler) ? this.handle(name, handler) : this.trigger(name);
        };
    }), EventProvider.register("hover", function() {
        $dom(this).listen("HoverEvent", {
            mouseenter: function() {
                EventProvider.dispatch("hover", this, {
                    direction: "enter"
                });
            },
            mouseleave: function() {
                EventProvider.dispatch("hover", this, {
                    direction: "leave"
                });
            }
        });
    });
}(window, DOMList);