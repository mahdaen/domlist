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
        return "object" != typeof $object || $object.length ? !1 : !0;
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
    }), Object.prototype.merge = function() {
        for (var nobj = {}, c = 0; c < arguments.length; ++c) isObject(arguments[c]) && foreach(arguments[c], function(key, value) {
            nobj[key] = value;
        });
        return nobj;
    }, Object.defineProperty(Object.prototype, "merge", {
        enumerable: !1
    });
    var CustomEvent = function(eventName, options) {
        var event;
        return isString(eventName) && (options = options || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        }, event = document.createEvent("CustomEvent"), event.initCustomEvent(eventName, options.bubbles, options.cancelable, options.detail)), 
        event;
    };
    CustomEvent.prototype = $root.Event.prototype, $root.CustomEvent && isFunction($root.CustomEvent) || ($root.CustomEvent = CustomEvent), 
    "document" in self && ("classList" in document.createElement("_") ? !function() {
        "use strict";
        var testElement = document.createElement("_");
        if (testElement.classList.add("c1", "c2"), !testElement.classList.contains("c2")) {
            var createMethod = function(method) {
                var original = DOMTokenList.prototype[method];
                DOMTokenList.prototype[method] = function(token) {
                    var i, len = arguments.length;
                    for (i = 0; len > i; i++) token = arguments[i], original.call(this, token);
                };
            };
            createMethod("add"), createMethod("remove");
        }
        if (testElement.classList.toggle("c3", !1), testElement.classList.contains("c3")) {
            var _toggle = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(token, force) {
                return 1 in arguments && !this.contains(token) == !force ? force : _toggle.call(this, token);
            };
        }
        testElement = null;
    }() : !function(view) {
        "use strict";
        if ("Element" in view) {
            var classListProp = "classList", protoProp = "prototype", elemCtrProto = view.Element[protoProp], objCtr = Object, strTrim = String[protoProp].trim || function() {
                return this.replace(/^\s+|\s+$/g, "");
            }, arrIndexOf = Array[protoProp].indexOf || function(item) {
                for (var i = 0, len = this.length; len > i; i++) if (i in this && this[i] === item) return i;
                return -1;
            }, DOMEx = function(type, message) {
                this.name = type, this.code = DOMException[type], this.message = message;
            }, checkTokenAndGetIndex = function(classList, token) {
                if ("" === token) throw new DOMEx("SYNTAX_ERR", "An invalid or illegal string was specified");
                if (/\s/.test(token)) throw new DOMEx("INVALID_CHARACTER_ERR", "String contains an invalid character");
                return arrIndexOf.call(classList, token);
            }, ClassList = function(elem) {
                for (var trimmedClasses = strTrim.call(elem.getAttribute("class") || ""), classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [], i = 0, len = classes.length; len > i; i++) this.push(classes[i]);
                this._updateClassName = function() {
                    elem.setAttribute("class", this.toString());
                };
            }, classListProto = ClassList[protoProp] = [], classListGetter = function() {
                return new ClassList(this);
            };
            if (DOMEx[protoProp] = Error[protoProp], classListProto.item = function(i) {
                return this[i] || null;
            }, classListProto.contains = function(token) {
                return token += "", -1 !== checkTokenAndGetIndex(this, token);
            }, classListProto.add = function() {
                var token, tokens = arguments, i = 0, l = tokens.length, updated = !1;
                do token = tokens[i] + "", -1 === checkTokenAndGetIndex(this, token) && (this.push(token), 
                updated = !0); while (++i < l);
                updated && this._updateClassName();
            }, classListProto.remove = function() {
                var token, index, tokens = arguments, i = 0, l = tokens.length, updated = !1;
                do for (token = tokens[i] + "", index = checkTokenAndGetIndex(this, token); -1 !== index; ) this.splice(index, 1), 
                updated = !0, index = checkTokenAndGetIndex(this, token); while (++i < l);
                updated && this._updateClassName();
            }, classListProto.toggle = function(token, force) {
                token += "";
                var result = this.contains(token), method = result ? force !== !0 && "remove" : force !== !1 && "add";
                return method && this[method](token), force === !0 || force === !1 ? force : !result;
            }, classListProto.toString = function() {
                return this.join(" ");
            }, objCtr.defineProperty) {
                var classListPropDesc = {
                    get: classListGetter,
                    enumerable: !0,
                    configurable: !0
                };
                try {
                    objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
                } catch (ex) {
                    -2146823252 === ex.number && (classListPropDesc.enumerable = !1, objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc));
                }
            } else objCtr[protoProp].__defineGetter__ && elemCtrProto.__defineGetter__(classListProp, classListGetter);
        }
    }(self));
}(window), function($root) {
    "use strict";
    var DOMList = function(query, context) {
        var modern, $this = this;
        if (modern = document.querySelectorAll ? !0 : !1, this.length = 0, "string" == typeof query) {
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
    $root.DOMList = function(query, context) {
        return new DOMList(query, context);
    }, $root.jQuery ? $root.$dom = $root.DOMList : $root.$ = $root.DOMList, $root.DOMList.extend = function(name, handler) {
        return isString(name) && isFunction(handler) ? $root.DOMList.module[name] = handler : isObject(name) && foreach(name, function(name, handler) {
            isFunction(handler) && ($root.DOMList.module[name] = handler);
        }), name;
    }, $root.DOMList.module = DOMList.prototype = {
        name: "DOMList",
        splice: Array.prototype.splice
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
}(window, DOMList), function(root, $) {
    "use strict";
    var AJAXList = {
        "default": []
    }, DOMAjax = function(options) {
        var $this = this;
        if (!isObject(options) || !options.url || !isURL(options.url)) throw "Request needs URL to proceed.";
        var xhr = XMLHttpRequest || ActiveXObject;
        return this.request = new xhr("MSXML2.XMLHTTP.3.0"), this.async = !0, this.body = void 0, 
        this.handlers = {}, this.headers = void 0, this.name = void 0, this.params = void 0, 
        this.method = null, this.type = "JSON", this.url = null, this.withCredentials = void 0, 
        foreach(options, function(key, value) {
            $this.hasOwnProperty(key) ? $this[key] = value : $this.handlers[key] = value;
        }), this.method = isString(this.method) ? this.method.toUpperCase() : "GET", this.params && (this.encodeParams(options.params), 
        this.url += (this.url.indexOf("?") > 0 ? "&" : "?") + this.params, "GET" === this.method), 
        this.request.open(this.method, this.url, this.async), this.headers && this.setRequestHeader(), 
        this.withCredentials && (this.request.withCredentials = this.withCredentials), this.request.onreadystatechange = function(event) {
            4 === $this.request.readyState && $this.handle("success", event);
        }, this.request.onerror = function(event) {
            var error = new Error("Unable to process request.");
            $this.handle("error", event, error);
        }, foreach([ "abort", "loadstart", "loadend", "load", "progress", "timeout" ], function(type) {
            $this.request["on" + type] = function(event) {
                $this.handle(type, event);
            };
        }), this.name ? AJAXList[this.name] = this : AJAXList["default"].push(this), this.request.send(this.body ? this.body : this.params), 
        this;
    };
    DOMAjax.prototype = {
        stop: function() {
            return this.request.abort(), this;
        },
        extract: function() {
            var result;
            if ("json" === this.type.toLowerCase()) try {
                result = JSON.parse(this.request.responseText);
            } catch (error) {
                throw "Unable to parse response to JSON.";
            } else result = this.request.responseText;
            return this.response = result, this;
        },
        encodeParams: function(params) {
            var qtable = [];
            return foreach(params, function(key, value) {
                var key = encodeURIComponent(key);
                qtable.push(null == value ? key : key + "=" + encodeURIComponent(value));
            }), this.params = qtable.join("&"), this;
        },
        setRequestHeader: function() {
            var $this = this;
            return isObject(this.headers) && foreach(this.headers, function(name, value) {
                $this.request.setRequestHeader(name, value);
            }), this;
        },
        handle: function(type, event, error) {
            return error ? this.handlers[type] && isFunction(this.handlers[type]) && this.handlers[type].call(this, error, this.request) : "success" === type ? (this.extract(), 
            this.handlers[type] && isFunction(this.handlers[type]) && this.handlers[type].call(this, this.response, this.request, event)) : this.handlers[type] && isFunction(this.handlers[type]) && this.handlers[type].call(this, this.request, event), 
            this;
        }
    }, foreach([ "abort", "load", "error", "success", "progress", "loadstart", "loadend", "timeout" ], function(type) {
        DOMAjax.prototype[type] = function(handler) {
            return isFunction(handler) && (this.handlers[type] = handler), this;
        };
    }), $.ajax = function(options) {
        return new DOMAjax(options);
    }, $.abort = function(name) {
        isString(name) && AJAXList[name] ? AJAXList[name].stop() : foreach(AJAXList["default"], function(ajax) {
            ajax.stop();
        });
    }, $.get = function(url, options) {
        return $.ajax(Object.merge(options, {
            url: url,
            method: "GET"
        }));
    }, $.post = function(url, params, options) {
        return $.ajax(Object.merge(options, {
            url: url,
            params: params,
            method: "POST"
        }));
    }, $.put = function(url, params, options) {
        return $.ajax(Object.merge(options, {
            url: url,
            params: params,
            method: "PUT"
        }));
    }, $["delete"] = function(url, options) {
        return $.ajax(Object.merge(options, {
            url: url,
            method: "DELETE"
        }));
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
        var result = $dom();
        if (this.length <= 0) return this;
        var childs = this[0].children;
        return childs.name = "DOMList", childs.length > 0 && foreach(childs, function(node) {
            result.push(node);
        }), result;
    }, $dom.module.find = function(query) {
        return isString(query) ? $dom(query, this) : void 0;
    }, $dom.module.filter = function(query) {
        var $this = this, $result = $dom();
        if (!isString(query)) return this;
        var wrapper = document.createElement("div"), elems = "", candidate = [];
        return $this.each(function() {
            elems += this.outerHTML;
        }), wrapper.innerHTML = elems, wrapper = wrapper.find(query), wrapper.each(function() {
            candidate.push(this.outerHTML);
        }), $this.each(function() {
            candidate.indexOf(this.outerHTML) > -1 && $result.push(this);
        }), $result;
    }, $dom.module.each = function(handler, reversed) {
        return this.length <= 0 ? this : (isFunction(handler) && (reversed ? reveach(this, function(node, i) {
            handler.call(node, i, node);
        }) : foreach(this, function(node, i) {
            handler.call(node, i, node);
        })), this);
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
            if (first[name]) return first[name];
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
            }), list = "number" === option.method ? list.sort(function(a, b) {
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
    }, $dom.module.parent = function(isall) {
        if (this.length <= 0) return this;
        var $result = $dom();
        if (isall) this.each(function() {
            $result.push(this.parentElement);
        }); else {
            var first = this[0];
            $result.push(first.parentElement);
        }
        return $result;
    }, $dom.module.parentUntil = function(query) {
        return this.parent().get() === $dom("body").get() ? $dom() : isString(query) ? this.parent().filter(query).length > 0 ? this.parent() : this.parent().parentUntil(query) : isFunction(query) ? query.call(this.parent().get()) ? this.parent() : this.parent().parentUntil(query) : this;
    }, $dom.module.parents = function() {
        var result = $dom();
        return this.each(function() {
            result.push(this.parentElement);
        }), result;
    }, $dom.module.comment = function() {
        return this.each(function() {
            this.orgHTML = this.outerHTML, this.outerHTML = "<!-- " + this.outerHTML + " -->";
        }), this;
    }, $dom.module.match = function(handler) {
        if (!isFunction(handler) || this.length <= 0) return this;
        var result = $dom();
        return this.each(function() {
            handler.call(this) === !0 && result.push(this);
        }), result.length > 0 ? result : null;
    }, $dom.module.get = function(index) {
        return isNumber(index) ? this[index] ? this[index] : void 0 : this.length > 0 ? this[0] : void 0;
    }, $dom.module.indexOf = function(elem) {
        return isHTML(elem) ? this.toArray().indexOf(elem) : isString(elem) ? this.toArray().indexOf(this.filter(elem).get()) : -1;
    }, $dom.module.toString = function(isall) {
        if (this.length <= 0) return void 0;
        if (isall) {
            var elmStrings = [];
            return this.each(function() {
                elmStrings.push(this.outerHTML);
            }), elmStrings;
        }
        return this.first().get().outerHTML;
    }, $dom.module.wrap = function(htmlstring) {
        if (isHTMLString(htmlstring)) {
            var result = $dom();
            return this.each(function() {
                result.push($dom(htmlstring).insertBefore(this).append(this));
            }), result;
        }
        return this;
    }, $dom.module.wrapChild = function(htmlstring) {
        if (isHTMLString(htmlstring)) {
            var result = $dom();
            return this.each(function() {
                var elem, child = $dom(this).children();
                if (child.length > 0) elem = $dom(htmlstring).prependTo(this).append(child), result.push(elem); else {
                    var text = this.innerHTML;
                    $dom(this).empty(), elem = $dom(htmlstring).html(text).appendTo(this), result.push(elem);
                }
            }), result;
        }
        return this;
    }, $dom.module.siblings = function() {
        if (this.length <= 0) return this;
        var result = $dom(), first = this.first();
        return first.parent().children().each(function() {
            this !== first.get() && result.push(this);
        }), result;
    }, $dom.module.slice = function(index) {
        var result = $dom();
        return isNumber(index) ? this.each(function(i) {
            i !== index && result.push(this);
        }) : isArray(index) && this.each(function(i) {
            index.indexOf(i) < 0 && result.push(this);
        }), result;
    }, $dom.module.remProp = function(prop) {
        return isString(prop) ? this.each(function() {
            this[prop] && (delete this[prop], this.hasAttribute(prop) && this.removeAttribute(prop));
        }) : isArray(prop) && foreach(prop, function(prop) {
            this.remProp(prop);
        }), this;
    }, $dom.module.replace = function(trg, src) {
        return isString(trg) ? this.filter(trg).replaceWith(src) : isHTML(trg) ? $dom(trg).replaceWith(src) : this;
    }, $dom.module.replaceWith = function(elem) {
        return this.length <= 0 ? this : (isHTML(elem) ? ($dom(elem).insertBefore(this.get(0)), 
        this.first().remove()) : isHTMLString(elem) && this.each(function() {
            this.outerHTML = elem;
        }), this);
    }, $dom.module.next = function(query) {
        if (this.length <= 0) return this;
        var all = this.first().parent().children(), idx = all.indexOf(this.get(0)), res = $dom();
        if (isString(query)) {
            for (var i = idx + 1; i < all.length; ++i) if (all.nth(i).filter(query).length > 0) {
                res.push(all.get(i));
                break;
            }
        } else {
            if (!isFunction(query)) return all.nth(idx + 1);
            for (var i = idx + 1; i < all.length; ++i) if (query.call(all.get(i))) {
                res.push(all.get(i));
                break;
            }
        }
        return res;
    }, $dom.module.nextAll = function(query) {
        if (this.length <= 0) return this;
        var all = this.first().parent().children(), idx = all.indexOf(this.get(0)), res = $dom();
        if (isString(query)) for (var i = idx + 1; i < all.length; ++i) all.nth(i).filter(query).length > 0 && res.push(all.get(i)); else if (isFunction(query)) for (var i = idx + 1; i < all.length; ++i) query.call(all.get(i)) && res.push(all.get(i)); else for (var i = idx + 1; i < all.length; ++i) res.push(all.get(i));
        return res;
    }, $dom.module.nextUntil = function(query) {
        if (this.length <= 0) return this;
        var all = this.first().parent().children(), idx = all.indexOf(this.get(0)), res = $dom();
        if (isString(query)) for (var i = idx + 1; i < all.length && (res.push(all.get(i)), 
        !(all.nth(i).filter(query).length > 0)); ++i) ; else if (isFunction(query)) for (var i = idx + 1; i < all.length && (res.push(all.get(i)), 
        !query.call(all.get(i))); ++i) ;
        return res;
    }, $dom.module.prev = function(query) {
        if (this.length <= 0) return this;
        var all = this.first().parent().children(), idx = all.indexOf(this.get(0)), res = $dom();
        if (isString(query)) {
            for (var i = idx - 1; i >= 0; --i) if (all.nth(i).filter(query).length > 0) {
                res.push(all.get(i));
                break;
            }
        } else {
            if (!isFunction(query)) return all.nth(idx - 1);
            for (var i = idx - 1; i >= 0; --i) if (query.call(all.get(i))) {
                res.push(all.get(i));
                break;
            }
        }
        return res;
    }, $dom.module.prevAll = function(query) {
        if (this.length <= 0) return this;
        var all = this.first().parent().children(), idx = all.indexOf(this.get(0)), res = $dom();
        if (isString(query)) for (var i = idx - 1; i >= 0; --i) all.nth(i).filter(query).length > 0 && res.push(all.get(i)); else if (isFunction(query)) for (var i = idx - 1; i >= 0; --i) query.call(all.get(i)) && res.push(all.get(i)); else for (var i = idx - 1; i >= 0; --i) res.push(all.get(i));
        return res;
    }, $dom.module.prevUntil = function(query) {
        if (this.length <= 0) return this;
        var all = this.first().parent().children(), idx = all.indexOf(this.get(0)), res = $dom();
        if (isString(query)) for (var i = idx - 1; i >= 0 && (res.push(all.get(i)), !(all.nth(i).filter(query).length > 0)); --i) ; else if (isFunction(query)) for (var i = idx - 1; i >= 0 && (res.push(all.get(i)), 
        !query.call(all.get(i))); --i) ;
        return res;
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
    }, $dom.module.is = function(query) {
        return this.length <= 0 ? !1 : isString(query) ? this.first().filter(query).length > 0 ? !0 : !1 : isHTML(query) && this.get(0) === query ? !0 : !1;
    }, $dom.module.not = function(query) {
        return this.is(query) ? !1 : !0;
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
                event: new CustomEvent(name, options)
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
    };
    var eventProvider = new EventProvider();
    $root.EventProvider = eventProvider, document.onreadystatechange = function() {
        "interactive" === document.readyState ? document.isready = !0 : "complete" === document.readyState && (document.isloaded = !0);
    }, eventProvider.loadQueue = 0, eventProvider.readyHandler = function() {
        var $this = document;
        foreach($this._evcol.ready, function(handler) {
            handler.call($this);
        });
    }, eventProvider.loadedHandler = function() {
        var $this = document;
        eventProvider.loadQueue <= 0 && !$this.iscomplete && ($this.iscomplete = !0, foreach($this._evcol.loaded, function(handler) {
            handler.call($this);
        }));
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
            "interactive" === $this.readyState ? ($dom("img").each(function() {
                eventProvider.loadQueue++, this.complete ? eventProvider.loadQueue-- : $dom(this).handle([ "load", "error" ], function() {
                    eventProvider.loadQueue--, $this.isloaded === !0 && eventProvider.loadedHandler();
                });
            }), $this.isready = !0, setTimeout(function() {
                eventProvider.readyHandler();
            }, 100)) : "complete" === $this.readyState && ($this.isloaded = !0, setTimeout(function() {
                eventProvider.loadedHandler();
            }, 100));
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
                var cev = eventProvider.search(type);
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
        var $this = this;
        return isString(type) && isFunction(handler) ? $this.listen("default", type, handler) : isObject(type) ? $this.listen("default", type) : isArray(type) && isFunction(handler) && foreach(type, function(type) {
            $this.listen("default", type, handler);
        }), this;
    }, $dom.module.unhanlde = function(type) {
        return (isString(type) || isArray(type)) && this.unlisten("default", type), this;
    };
    var eventGroup = {
        MouseEvents: "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave contextmenu".split(/\s+/),
        KeyboardEvents: "keydown keypress keyup".split(/\s+/),
        FocusEvent: "blur focus focusin focusout".split(/\s+/)
    };
    $dom.module.trigger = $dom.module.dispatch = function(type, props) {
        return isString(type) && this.each(function() {
            var event, elem = this, group = "Event";
            foreach(eventGroup, function(grp, types) {
                types.indexOf(type) > -1 && (group = grp);
            }), eventProvider.search(type) ? EventProvider.dispatch(type, elem, props) : document.createEvent ? (event = document.createEvent(group), 
            event.initEvent(type), isObject(props) && foreach(props, function(key, value) {
                event[key] = value;
            }), elem.dispatchEvent(event)) : document.createEventObject && (event.createEventObject(), 
            isObject(props) && foreach(props, function(key, value) {
                event[key] = value;
            }), elem.fireEvent(type, event));
        }), this;
    };
}(window, DOMList), function($root, $) {
    "use strict";
    var alias = "blur focus focusin focusout load resize scroll unload click dblclick switch hover mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(/\s+/);
    foreach(alias, function(name) {
        $.module[name] = function(handler) {
            return isFunction(handler) ? this.handle(name, handler) : this.trigger(name);
        };
    }), EventProvider.register("hover", function() {
        $(this).listen("HoverEvent", {
            mouseenter: function() {
                EventProvider.dispatch("hover", this, {
                    status: "enter"
                });
            },
            mouseleave: function() {
                EventProvider.dispatch("hover", this, {
                    status: "leave"
                });
            }
        });
    }), EventProvider.register("switch", function() {
        var $this = $(this);
        $this.hasAttr("off") || $this.hasAttr("on") || $this.attr("off", ""), $this.listen("ClickToggle", "click", function() {
            this["switch"] || (this["switch"] = "off"), "off" === this["switch"] ? (this["switch"] = "on", 
            $this.attr("on", "").remAttr("off")) : (this["switch"] = "off", $this.attr("off", "").remAttr("on")), 
            EventProvider.dispatch("switch", this, {
                state: this.togglestate
            });
        });
    });
}(window, DOMList), function($root, $dom) {
    "use strict";
    var pixelUnit = function(value) {
        return isNumber(value) ? value + "px" : value;
    }, nonpixel = [ "columncount", "fillopacity", "flexgrow", "flexshrink", "fontweight", "lineheight", "opacity", "order", "orphans", "widows", "zindex", "zoom" ], countRatio = function(width, height) {
        var getDivisor, temp, divisor;
        return getDivisor = function(a, b) {
            return 0 === b ? a : getDivisor(b, a % b);
        }, width === height ? "1:1" : (+height > +width && (temp = width, width = height, 
        height = temp), divisor = getDivisor(+width, +height), "undefined" == typeof temp ? width / divisor + ":" + height / divisor : height / divisor + ":" + width / divisor);
    }, propList = {
        "default": [],
        publics: [],
        customs: [],
        origins: [],
        browser: ""
    }, style = document.createElement("span").style, lists = [];
    for (var key in style) lists.push(key);
    lists.indexOf("webkitUserSelect") > -1 ? propList.browser = "webkit" : lists.indexOf("MozUserSelect") > -1 ? propList.browser = "Moz" : lists.indexOf("msUserSelect") > -1 && (propList.browser = "ms"), 
    foreach(lists, function(prop) {
        prop.search(propList.browser) > -1 ? (propList.origins.push(prop), propList.customs.push(prop.replace(propList.browser, "").toLowerCase())) : (propList["default"].push(prop.toLowerCase()), 
        propList.publics.push(prop));
    }), $dom.module.css = function(property, value) {
        if (isString(property)) {
            property.search("-") && (property = property.replace(/\-/g, "")), property = property.toLowerCase();
            var skippx = !1;
            nonpixel.indexOf(property) > -1 && (skippx = !0);
            var propIndex = propList.customs.indexOf(property);
            if (propIndex > -1) property = propList.origins[propIndex]; else {
                if (propIndex = propList["default"].indexOf(property), !(propIndex > -1)) throw property + " is not valid CSS Property!";
                property = propList.publics[propIndex];
            }
            return isString(value) || isNumber(value) || isBoolean(value) ? this.each(function() {
                this.style[property] = skippx ? value : pixelUnit(value);
            }) : this.length > 0 ? this.get().style[property] : void 0;
        }
        if (!isObject(property)) {
            var style = this.first().prop("style"), props = {};
            for (var property in style) isNaN(Number(property)) && "length" !== property && "" !== style[property] && !isFunction(style[property]) && null !== style[property] && (props[property] = style[property]);
            return props;
        }
        var $this = this;
        return foreach(property, function(prop, value) {
            $this.css(prop, value);
        }), this;
    }, $dom.module.cstyle = function(name) {
        if (this.length > 0 && isString(name)) return getComputedStyle(this.get())[name] ? getComputedStyle(this.get())[name] : null;
        if (this.length > 0 && isArray(name)) {
            var props = {}, $this = this;
            return foreach(name, function(name) {
                getComputedStyle($this.get())[name] && (props[name] = getComputedStyle($this.get())[name]);
            }), props;
        }
        return null;
    }, foreach([ "offsetWidth", "offsetHeight", "clientWidth", "clientHeight", "scrollWidth", "scrollHeight", "scrollLeft", "scrollTop" ], function(method) {
        $dom.module[method] = function() {
            return this.length > 0 ? this.get()[method] : 0;
        };
    }), foreach([ "Width", "Height" ], function(method) {
        $dom.module[method.toLowerCase()] = function(value) {
            return this.length <= 0 ? 0 : isDefined(value) ? this.css(method.toLowerCase(), value) : this.get()["offset" + method];
        };
    }), $dom.module.ratio = function(value) {
        return this.length <= 0 ? this : isString(value) && value.match(/^\d+:\d+$/) ? (this.each(function() {
            this.ratio = value;
            var part = this.ratio.split(":"), height = Math.round($dom(this).width() / part[0] * part[1]);
            $dom(this).height(height);
        }), this) : this.get().ratio ? this.get().ratio : this.get().ratio = countRatio(this.width(), this.height());
    }, $dom.module.offset = function() {
        return this.length <= 0 ? this : {
            width: this.width(),
            height: this.height(),
            left: this.get().offsetLeft,
            top: this.get().offsetTop,
            scrollTop: this.get().scrollTop,
            scrollLeft: this.get().scrollLeft,
            ratio: this.first().ratio()
        };
    }, $dom.module.orientation = function() {
        return this.length <= 0 ? this : (this.each(function() {
            var offset = $dom(this).offset();
            offset.width > offset.height ? ($dom(this).attr("landscape", ""), this.orientation = "landscape") : ($dom(this).attr("portrait", ""), 
            this.orientation = "portrait");
        }), this.first().prop("orientation"));
    };
}(window, DOMList), function($root, $dom) {
    "use strict";
    $dom.module.animate = function(props, options, callback) {
        if (!window.TweenMax) return this;
        var duration;
        return isObject(props) && (isNumber(options) ? duration = options : isObject(options) ? (foreach(options, function(key, value) {
            "duration" !== key && isDefined(value) && (props[key] = value);
        }), duration = options.duration ? options.duration : .5) : duration = .5, this.each(function() {
            var $this = this;
            isFunction(callback) && (props.onCompleteParams = [ $this ], props.onComplete = function(elem) {
                callback.call(elem, $this.tweens);
            }), $this.tweens = new TweenMax($this, duration, props);
        })), this;
    }, $dom.module.keyframes = function(frames, options, callback) {
        if (isObject(frames)) {
            var dur, $this = this, time = Object.keys(frames), all = time.length, start = 0, curnt = 0;
            isNumber(options) ? dur = options : isObject(options) ? dur = options.duration ? options.duration : .5 : options = {
                duration: .5
            };
            var repeat = function() {
                if (all > 0) {
                    var timei = Number(time[start]), frame = Object.merge(frames[timei]), durat = (timei - curnt) / 100 * dur, optio = Object.merge(options, {
                        duration: durat
                    });
                    $this.animate(frame, optio), setTimeout(function() {
                        repeat();
                    }, 1e3 * durat), all -= 1, start += 1, curnt = timei;
                } else isFunction(callback) && callback.call($this);
            };
            return repeat(), this;
        }
    }, $dom.module.ctrlAnimate = function(type, arg) {
        return isString(type) && this.each(function() {
            this.tweens && this.tweens[type] && this.tweens[type](arg);
        }), this;
    }, foreach([ "pause", "resume", "reverse", "seek", "timeScale", "kill" ], function(method) {
        $dom.module[method] = function(arg) {
            return this.ctrlAnimate(method, arg);
        };
    }), $dom.module.stop = function() {
        return this.each(function() {
            this.tweens && (this.tweens.kill(), $dom(this).css(this.tweens.vars.css));
        });
    }, $dom.module.slide = function(dir, options, callback) {
        return isString(dir) ? this.each(function() {
            if (this._slxstate = this.offsetWidth <= 0 ? "left" : "right", this._slystate = this.offsetHeight <= 0 ? "up" : "down", 
            "Up" === dir) {
                if ("up" !== this._slystate) {
                    var display = getComputedStyle(this).display;
                    "inline" === display && (display = "inline-block"), $dom(this).animate({
                        height: 0,
                        overflow: "hidden",
                        width: this.offsetWidth,
                        display: display
                    }, options, callback);
                }
            } else if ("Down" === dir) {
                if ("down" !== this._slystate) {
                    var elemen = $dom(this), height = elemen.cstyle("height"), disply = elemen.cstyle("display");
                    "none" === disply && (elemen.css("display", "inherit"), disply = elemen.cstyle("display")), 
                    "inline" === disply && (disply = "inline-block"), height = "auto" === height || height.search("%") > -1 || "0px" === height ? elemen.css({
                        display: disply,
                        height: ""
                    }).height() : elemen.height(), elemen.css({
                        display: disply,
                        height: 0
                    }), elemen.animate({
                        display: disply,
                        height: height,
                        overflow: "hidden",
                        width: this.offsetWidth
                    }, options, callback);
                }
            } else if ("Left" === dir) {
                if ("left" !== this._slxstate) {
                    var display = getComputedStyle(this).display;
                    "inline" === display && (display = "inline-block"), $dom(this).animate({
                        width: 0,
                        overflow: "hidden",
                        height: this.offsetHeight,
                        display: display
                    }, options, callback);
                }
            } else if ("Right" === dir) {
                if ("right" !== this._slxstate) {
                    var elemen = $dom(this), width = elemen.cstyle("width"), disply = elemen.cstyle("display");
                    "none" === disply && (elemen.css("display", "inherit"), disply = elemen.cstyle("display")), 
                    "inline" === disply && (disply = "inline-block"), width = "auto" === width || width.search("%") > -1 || "0px" === width ? elemen.css({
                        display: disply,
                        width: ""
                    }).width() : elemen.width(), elemen.css({
                        display: disply,
                        width: 0
                    }), elemen.animate({
                        display: disply,
                        width: width,
                        overflow: "hidden",
                        height: this.offsetHeight
                    }, options, callback);
                }
            } else "ToggleY" === dir ? "down" === this._slystate ? $dom(this).slide("Up", options, callback) : "up" === this._slystate && $dom(this).slide("Down", options, callback) : "ToggleX" === dir && ("left" === this._slxstate ? $dom(this).slide("Right", options, callback) : "right" === this._slxstate && $dom(this).slide("Left", options, callback));
        }) : void 0;
    }, foreach([ "Left", "Right", "Up", "Down", "ToggleX", "ToggleY" ], function(dir) {
        $dom.module["slide" + dir] = function(options, callback) {
            return this.slide(dir, options, callback);
        };
    }), $dom.module.fade = function(dir, options, callback) {
        return isString(dir) ? this.each(function() {
            this._fdstate || (this._fdstate = "visible"), "In" === dir ? (this._fdstate = "visible", 
            $dom(this).animate({
                opacity: 1
            }, options, callback)) : "Out" === dir ? (this._fdstate = "invisible", $dom(this).animate({
                opacity: 0
            }, options, callback)) : "Toggle" === dir && ("visible" === this._fdstate ? $dom(this).fade("Out", options, callback) : "invisible" === this._fdstate && $dom(this).fade("In", options, callback));
        }) : void 0;
    }, foreach([ "In", "Out", "Toggle" ], function(dir) {
        $dom.module["fade" + dir] = function(options, callback) {
            return this.fade(dir, options, callback);
        };
    });
}(window, DOMList);