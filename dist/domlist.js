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
        return null === $object || "object" != typeof $object || $object.length ? !1 : !0;
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
}();
(function ($root) {
    /* Array.isArray Polyfill */
    if (!Array.isArray) {
        Array.prototype.isArray = function () {
            return Object.prototype.toString.call(this) === '[object Array]';
        }
    }

    /* Array.indexOf Polyfill */
    if (!Array.indexOf) {
        Array.prototype.indexOf = function (searchElement, fromIndex) {

            var k;

            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var O = Object(this);

            var len = O.length >>> 0;

            if (len === 0) {
                return -1;
            }

            var n = +fromIndex || 0;

            if (Math.abs(n) === Infinity) {
                n = 0;
            }

            if (n >= len) {
                return -1;
            }

            k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

            while (k < len) {
                var kValue;
                if (k in O && O[k] === searchElement) {
                    return k;
                }
                k++;
            }
            return -1;
        };
    }

    /* Object.keys Polyfill */
    if (!Object.keys) {
        Object.prototype.keys = function () {
            var arr = [];

            for (var key in this) {
                if (this.hasOwnProperty(key)) {
                    arr.push(key);
                }
            }

            return arr;
        }
    }

    /* Object.merge prototype */
    Object.prototype.merge = function() {
        var nobj = {};

        for (var c = 0; c < arguments.length; ++c) {
            if (isObject(arguments[c])) {
                foreach(arguments[c], function (key, value) {
                    nobj[key] = value;
                });
            }
        }

        return nobj;
    };

    Object.defineProperty(Object.prototype, 'merge', {
        enumerable: false
    });

    /* CustomEvent Polyfill */
    var CustomEvent = function (eventName, options) {
        var event;

        if (isString(eventName)) {
            options = options || { bubbles: false, cancelable: false, detail: undefined };

            event = document.createEvent('CustomEvent');
            event.initCustomEvent(eventName, options.bubbles, options.cancelable, options.detail);
        }

        return event;
    };

    /* CustomEvent Prototype */
    CustomEvent.prototype = $root.Event.prototype;

    /* Register to window if no default CustomEvent */
    if (!$root.CustomEvent || !isFunction($root.CustomEvent)) $root.CustomEvent = CustomEvent;

    /*
     * classList.js: Cross-browser full element.classList implementation.
     * 2014-12-13
     *
     * By Eli Grey, http://eligrey.com
     * Public Domain.
     * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
     */
    if ("document" in self) {
        if (!("classList" in document.createElement("_"))) {
            (function (view) {
                "use strict";

                if (!('Element' in view)) return;

                var classListProp = "classList",
                    protoProp = "prototype",
                    elemCtrProto = view.Element[protoProp],
                    objCtr = Object,

                    strTrim = String[protoProp].trim || function () {
                            return this.replace(/^\s+|\s+$/g, "");
                        },

                    arrIndexOf = Array[protoProp].indexOf || function (item) {
                            var i = 0 , len = this.length;

                            for (; i < len; i++) {
                                if (i in this && this[i] === item) {
                                    return i;
                                }
                            }
                            return -1;
                        },

                    DOMEx = function (type, message) {
                        this.name = type;
                        this.code = DOMException[type];
                        this.message = message;
                    },

                    checkTokenAndGetIndex = function (classList, token) {
                        if (token === "") {
                            throw new DOMEx("SYNTAX_ERR", "An invalid or illegal string was specified");
                        }
                        if (/\s/.test(token)) {
                            throw new DOMEx("INVALID_CHARACTER_ERR", "String contains an invalid character");
                        }

                        return arrIndexOf.call(classList, token);
                    },

                    ClassList = function (elem) {
                        var trimmedClasses = strTrim.call(elem.getAttribute("class") || ""),
                            classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [], i = 0 , len = classes.length;
                        for (; i < len; i++) {
                            this.push(classes[i]);
                        }
                        this._updateClassName = function () {
                            elem.setAttribute("class", this.toString());
                        };
                    },

                    classListProto = ClassList[protoProp] = [],

                    classListGetter = function () {
                        return new ClassList(this);
                    };

                DOMEx[protoProp] = Error[protoProp];

                classListProto.item = function (i) {
                    return this[i] || null;
                };

                classListProto.contains = function (token) {
                    token += "";
                    return checkTokenAndGetIndex(this, token) !== -1;
                };

                classListProto.add = function () {
                    var tokens = arguments, i = 0, l = tokens.length, token, updated = false;

                    do {
                        token = tokens[i] + "";

                        if (checkTokenAndGetIndex(this, token) === -1) {
                            this.push(token);
                            updated = true;
                        }
                    }

                    while (++i < l);

                    if (updated) {
                        this._updateClassName();
                    }
                };

                classListProto.remove = function () {
                    var tokens = arguments, i = 0, l = tokens.length, token, updated = false, index;

                    do {
                        token = tokens[i] + "";
                        index = checkTokenAndGetIndex(this, token);

                        while (index !== -1) {
                            this.splice(index, 1);
                            updated = true;
                            index = checkTokenAndGetIndex(this, token);
                        }
                    }

                    while (++i < l);

                    if (updated) {
                        this._updateClassName();
                    }
                };

                classListProto.toggle = function (token, force) {
                    token += "";

                    var result = this.contains(token), method = result ? force !== true && "remove" : force !== false && "add";

                    if (method) {
                        this[method](token);
                    }

                    if (force === true || force === false) {
                        return force;
                    } else {
                        return !result;
                    }
                };

                classListProto.toString = function () {
                    return this.join(" ");
                };

                if (objCtr.defineProperty) {
                    var classListPropDesc = {
                        get: classListGetter, enumerable: true, configurable: true
                    };

                    try {
                        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
                    } catch (ex) {
                        if (ex.number === -0x7FF5EC54) {
                            classListPropDesc.enumerable = false;
                            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
                        }
                    }
                } else if (objCtr[protoProp].__defineGetter__) {
                    elemCtrProto.__defineGetter__(classListProp, classListGetter);
                }

            }(self));

        } else {

            (function () {
                "use strict";

                var testElement = document.createElement("_");

                testElement.classList.add("c1", "c2");

                if (!testElement.classList.contains("c2")) {
                    var createMethod = function (method) {
                        var original = DOMTokenList.prototype[method];

                        DOMTokenList.prototype[method] = function (token) {
                            var i, len = arguments.length;

                            for (i = 0; i < len; i++) {
                                token = arguments[i];
                                original.call(this, token);
                            }
                        };
                    };

                    createMethod('add');
                    createMethod('remove');
                }

                testElement.classList.toggle("c3", false);

                if (testElement.classList.contains("c3")) {
                    var _toggle = DOMTokenList.prototype.toggle;

                    DOMTokenList.prototype.toggle = function (token, force) {
                        if (1 in arguments && !this.contains(token) === !force) {
                            return force;
                        } else {
                            return _toggle.call(this, token);
                        }
                    };

                }

                testElement = null;
            }());
        }
    }
})(window);

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

(function($root, $dom) {
    /* Core DOMData Selector */
    var DOMData = function(name, value, context) {
        /* Converting Value to JSON if object or array */
        if (isObject(value) || isArray(value)) {
            value = JSON.stringify(value);
        }

        /* Parsing Data Attribute Names */
        if (isString(name)) {
            /* If name contains space, do multi query */
            if (name.match(/\s+/)) {
                var sname = name.split(/\s+/);

                /* Creating Query String */
                var query = '';

                foreach(sname, function (cquery, i) {
                    /* If value defined, use it in query */
                    if (value && value !== '') {
                        /* If current query is not last, add comma to current query. */
                        if (i < sname.length) {
                            query += '[data-' + cquery + '="' + value + '"], ';
                        }

                        /* Else query without without comma */
                        else {
                            query += '[data-' + cquery + '="' + value + '"]';
                        }
                    }

                    /* Else query without value */
                    else {
                        /* If current query is not last, add comma to current query. */
                        if (i < sname.length) {
                            query += '[data-' + cquery + '], ';
                        }

                        /* Else query without without comma */
                        else {
                            query += '[data-' + cquery + ']';
                        }
                    }
                });

                /* Replacing name with query string */
                name = query;
            }

            /* If string without space, do single query */
            else {
                /* If value defined, use it in query */
                if (value && value !== '') {
                    name = '[data-' + name + '="' + value + '"]';
                }

                /* Else query without value */
                else {
                    name = '[data-' + name + ']';
                }
            }
        }

        else if (isArray(name)) {
            /* Creating query string */
            var query = '';

            foreach(name, function (cquery, i) {
                /* If value defined, use it in query */
                if (value && value !== '') {
                    /* If current query is not last, add comma to current query. */
                    if (i < name.length) {
                        query += '[data-' + cquery + '="' + value + '"], ';
                    }

                    /* Else query without without comma */
                    else {
                        query += '[data-' + cquery + '="' + value + '"]';
                    }
                }

                /* Else query without value */
                else {
                    /* If current query is not last, add comma to current query. */
                    if (i < name.length) {
                        query += '[data-' + cquery + '], ';
                    }

                    /* Else query without without comma */
                    else {
                        query += '[data-' + cquery + ']';
                    }
                }
            });

            /* Replacing name with query */
            name = query;
        }

        else if (isObject(name)) {
            /* Creating query string */
            var query = '';

            foreach(name, function (cquery, value) {
                /* Convert value to JSON if is object or is array */
                if (isObject(value) || isArray(value)) {
                    value = JSON.stringify(value);
                }

                /* If value exist, then use it in query */
                if (value && value !== '') {
                    cquery = '[data-' + cquery + '="' + value + '"]';
                }

                /* Else query with without value */
                else {
                    cquery = '[data-' + cquery + ']';
                }

                /* Adding current query to main query */
                query += cquery;
            });

            /* Replacing name with query */
            name = query;

            /* Use value as context if defined*/
            if (isString(value) || isHTML(value) || isDOMList(value)) {
                context = value;
            }
        }

        /* If no arguments defined, select elements that has data-attribute */
        else {
            /* Select all elements inside html */
            var alls = $dom('html *');

            /* Creating Array Result */
            var result = [];

            /* Iterate each elements does has data attribute */
            alls.each(function() {
                /* Get all attributes */
                var atr = $dom(this).attr();

                /* Set has to false */
                var has = false;

                foreach(atr, function (key) {
                    if (key.search(/data-/) > -1) {
                        /* If has data-attribute, set has to true */
                        has = true;
                    }
                });

                /* If has data-attribute, push current element to result */
                if (has) result.push(this);
            });

            /* Wrap result as DOMList and return it */
            return $dom(result);
        }

        /* Creating Result */
        var result;

        /* If context is defined, use as context */
        if (context) {
            result = $dom(name, context);
        }

        // If value is HTML or DOMList, use as context.
        else if (isHTML(value) || isDOMList(value)) {
            result = $dom(name, value);
        }

        /* If no value or no context, query with query string only */
        else {
            result = $dom(name);
        }

        /* Returning result */
        return result;
    };

    /* Registering DOMData to DOMList */
    $dom.data = $root.DOMData = function(name, value, context) { return new DOMData(name, value, context) };
})(window, DOMList);

/**
 * please - A small and modern AJAX library.
 * @version v1.0.0
 * @author Dan Reeves <hey@danreev.es>
 * @link https://github.com/danreeves/please
 * @license MIT
 */

(function($) {
    'use strict';

    /* Creating ajax list to save requested ajax. */
    var AJAXList = {
        default: []
    };

    /* DOMAjax Core Engine */
    var DOMAjax = function(options) {
        var $this = this;

        /* Request should use URL */
        if (!isObject(options) || !options.url || !isString(options.url)) throw 'Request needs URL to proceed.';

        /* Creating Request Object */
        var xhr = XMLHttpRequest || ActiveXObject;
        this.request = new xhr('MSXML2.XMLHTTP.3.0');

        /* Default Options */
        this.async              = true;
        this.body               = undefined;
        this.handlers           = {};
        this.headers            = undefined;
        this.name               = undefined;
        this.params             = undefined;
        this.method             = null;
        this.type               = 'JSON';
        this.url                = null;
        this.withCredentials    = undefined;

        /* Applying Options */
        foreach(options, function(key, value) {
            if ($this.hasOwnProperty(key)) {
                $this[key] = value;
            } else {
                $this.handlers[key] = value;
            }
        });

        /* Request Method */
        this.method = isString(this.method) ? this.method.toUpperCase() : 'GET';

        /* Encode params if defined */
        if (this.params) {
            this.encodeParams(options.params);
            this.url += (this.url.indexOf('?') > 0 ? '&' : '?') + this.params;

            /* Append to URL String */
            if (this.method === 'GET') {
            }
        }

        /* Opening Request */
        this.request.open(this.method, this.url, this.async);

        /* Applying Headers */
        this.request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        if (isString(this.params)) this.request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        if (this.headers) this.setRequestHeader();


        /* Applying Options to Request */
        if (this.withCredentials) this.request.withCredentials = this.withCredentials;

        /* Creating Request Hanlder */
        this.request.onreadystatechange = function(event) {
            if ($this.request.readyState === 4) {
                if ($this.request.status >= 200 < 300) {
                    $this.handle('success', event);
                }
                else {
                    $this.handle('error', event);
                }
            }
        };

        /* Creating Error Hanlder */
        this.request.onerror = function(event) {
            var error = new Error('Unable to process request.');

            $this.handle('error', event, error);
        };

        /* Binding Public Events */
        foreach(['abort', 'loadstart', 'loadend', 'load', 'progress', 'timeout'], function(type) {
            $this.request['on' + type] = function(event) {
                $this.handle(type, event);
            };
        });

        /* Upload event listener */
        if (!!this.request.upload) {
            foreach(['abort', 'error', 'loadstart', 'loadend', 'progress', 'load', 'timeout'], function(type) {
                $this.request.upload.addEventListener(type, function(event) {
                    $this.handle(type, event);
                });
            });
        }

        /* Adding to Ajax List */
        if (this.name) {
            AJAXList[this.name] = this;
        } else {
            AJAXList.default.push(this);
        }

        /* Sending Request */
        if (this.body) {
            this.request.send(this.body);
        } else {
            this.request.send(this.params);
        }

        return this;
    };

    /* DOMAjax Prototypes */
    DOMAjax.prototype = {
        /* Abort Current Request */
        stop: function() {
            this.request.abort();

            return this;
        },

        /* Result Parser */
        extract: function() {
            var result;

            if (this.type.toLowerCase() === 'json') {
                try {
                    result = JSON.parse(this.request.responseText);
                } catch (error) {
                    result = this.request.responseText;
                }
            } else {
                result = this.request.responseText;
            }

            this.response = result;

            return this;
        },

        /* Params Encoder */
        encodeParams: function(params) {
            var qtable = [];

            foreach(params, function(key, value) {
                var key = encodeURIComponent(key);
                qtable.push(value == null ? key : (key + '=' + encodeURIComponent(value)));
            });

            this.params = qtable.join('&');

            return this;
        },

        /* Request Header Setter */
        setRequestHeader: function() {
            var $this = this;

            if (isObject(this.headers)) {
                foreach(this.headers, function(name, value) {
                    $this.request.setRequestHeader(name, value);
                });
            }

            return this;
        },

        /* Request Handler */
        handle: function(type, event, error) {
            if (error || type === 'error') {
                if (this.handlers[type] && isFunction(this.handlers[type])) {
                    this.handlers[type].call(this, error, this.request);
                }
            } else if (type === 'success') {
                this.extract();

                if (this.handlers[type] && isFunction(this.handlers[type])) {
                    this.handlers[type].call(this, this.response, this.request, event);
                }
            } else {
                if (this.handlers[type] && isFunction(this.handlers[type])) {
                    this.handlers[type].call(this, this.request, event);
                }
            }

            return this;
        }
    };

    /* Creating Event Handler Shortcut */
    foreach(['abort', 'load', 'error', 'success', 'progress', 'loadstart', 'loadend', 'timeout'], function(type) {
        DOMAjax.prototype[type] = function(handler) {
            if (isFunction(handler)) {
                this.handlers[type] = handler;
            }

            return this;
        };
    });

    /* Exporting DOMAjax */
    $.ajax = function(options) { return new DOMAjax(options) };

    /* Creating Aborter */
    $.abort = function(name) {
        if (isString(name) && AJAXList[name]) {
            AJAXList[name].stop();
        } else {
            foreach(AJAXList.default, function (ajax) {
                ajax.stop()
            });
        }
    };

    /* DOMAjax Shortcut */
    $.get = function(url, options) {
        return $.ajax(Object.merge(options, { url: url, method: 'GET' }));
    };
    $.post = function(url, params, options) {
        return $.ajax(Object.merge(options, { url: url, params: params, method: 'POST'}));
    };
    $.put = function(url, params, options) {
        return $.ajax(Object.merge(options, { url: url, params: params, method: 'PUT' }));
    };
    $.delete = function(url, options) {
        return $.ajax(Object.merge(options, { url: url, method: 'DELETE' }));
    };

    /* DOMList Modules */
    $.module.loadURL = function(url, callback) {
        var $this = this;

        if (isString(url)) {
            $.get(url, { type: 'html' }).success(function(data) {
                $this.html(data);

                if (isFunction(callback)) callback.call(null, data);
            }).error(function(error) {
                if (isFunction(callback)) callback.call(null, error, true);
            });
        }

        return this;
    };
})(DOMList);

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
    $dom.module.attr = function(name, value, nodata) {
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

                if (!nodata) {
                    /* Try to convert result as object. If success, return it */
                    try {
                        parsed = JSON.parse(result);
                    } catch (err) {
                        try {
                            eval('parsed = {' + result + '}');
                        } catch (err) {
                            try {
                                eval('parsed = [' + result.replace(';', ',') + ']');
                            } catch (err) {}
                        }
                    }

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

(function($dom) {
    'use strict';

    /* Module to add Class */
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

    /* Module to Remove Class */
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

    /* Module to toggle class */
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

(function($root, $dom) {
    'use strict';

    /* Append Childrens */
    $dom.module.append = function(childs) {
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
                var result = $dom(childs);
                result.each(function() {
                    $this[0].appendChild(this);
                });
            }
        }

        return this;
    };

    /* Prepend Childrens */
    $dom.module.prepend = function(childs) {
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
                var result = $dom(childs);

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
    };

    /* Append this to target element */
    $dom.module.appendTo = function(destination) {
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
            var result = $dom(destination);

            if (result.length > 0) {
                $this.each(function() {
                    result[0].appendChild(this);
                });
            }
        }

        return this;
    };

    /* Prepend this to target element */
    $dom.module.prependTo = function(destination) {
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
            var result = $dom(destination);

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
    };

    /* Insert this before element */
    $dom.module.insertBefore = function(destination) {
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
            destination = $dom(destination);

            /* If destination exist */
            if (destination.length > 0) {
                var parent = destination[0].parentElement;

                $this.each(function() {
                    parent.insertBefore(this, destination[0]);
                });
            }
        }

        return this;
    };

    /* Insert this after element */
    $dom.module.insertAfter = function(destination) {
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
            destination = $dom(destination);

            /* If destination exist */
            if (destination.length > 0) {
                var parent = destination[0].parentElement;

                $this.each(function() {
                    parent.insertBefore(this, destination[0].nextSibling);
                }, true);
            }
        }

        return this;
    };

    /* Get or set innerText */
    $dom.module.text = function(value) {
        if (this.length <= 0) return this;

        if (isDefined(value)) {
            this.each(function() {
                try {
                    this.innerText = value;
                } catch (err) {

                }
            });
        } else {
            return this[0].innerText;
        }

        return this;
    };

    /* Get or set all innerText from selected elements */
    $dom.module.texts = function() {
        var result = [];

        this.each(function() {
            result.push(this.innerText);
        });

        return result;
    };

    /* Get or set innerHTML */
    $dom.module.html = function(value) {
        if (this.length <= 0) return this;

        if (isDOMList(value) || isArray(value)) {
            this.append(value);
        } else if (isDefined(value)) {
            this.each(function() {
                try {
                    this.innerHTML = value;
                } catch (err) {

                }
            });
        } else {
            return this[0].innerHTML;
        }

        return this;
    };

    /* Get or set all innerHTML from selected elements */
    $dom.module.htmls = function() {
        var result = [];

        this.each(function() {
            result.push(this.innerHTML);
        });

        return result;
    };

    /* Clone selected elements */
    $dom.module.clone = function() {
        var cloned = [];

        this.each(function() {
            var clone = this.cloneNode(true);
            cloned.push(clone);
        });

        return $dom(cloned);
    };

    /* Empty selected elements */
    $dom.module.empty = function() {
        this.each(function() {
            try {
                this.innerHTML = '';
                this.innerText = '';
            } catch (err) {

            }
        });

        this.val('');

        return this;
    };
})(window, DOMList);

(function($dom) {
    /* Has Attribute Checker */
    $dom.module.hasAttr = function(name) {
        var has = false, hasfalse = false;

        var atrs = Object.keys(this.attr());

        if (isString(name)) {
            if (name.match(/\s+/)) {
                name = name.split(/\s+/);

                foreach(name, function(key) {
                    if (atrs.indexOf(key) > -1) {
                        has = true;
                    } else {
                        hasfalse = true;
                    }
                });

                return has === true && hasfalse === false ? true : false;
            } else {
                if (atrs.indexOf(name) > -1) {
                    has = true;
                }
            }
        } else if (isArray(name)) {
            foreach(name, function(key) {
                if (atrs.indexOf(key) > -1) {
                    has = true;
                }
            });
        }

        return has;
    };

    /* Has Data Attribut Checker */
    $dom.module.hasData = function(name) {
        var has = false, hasfalse = false;

        if (isString(name)) {
            if (name.match(/\s+/)) {
                var ns = name.split(/\s+/);

                foreach(ns, function (value, i) {
                    name = name.replace(value, 'data-' + value);
                });
            } else {
                name = 'data-' + name;
            }
        } else if (isArray(name)) {
            foreach(name, function (value, i) {
                name[i] = 'data-' + value;
            });
        }

        return this.hasAttr(name);
    };

    /* Has Class Checker */
    $dom.module.hasClass = function(name) {
        var has = false, hasfalse = false;

        var cls = this.attr('class').split(/\s+/);

        if (isString(name)) {
            if (name.search(/\s+/)) {
                name = name.split(/\s+/);

                foreach(name, function (clas) {
                    if (cls.indexOf(clas) > -1) {
                        has = true;
                    } else {
                        hasfalse = true;
                    }
                });

                return has === true && hasfalse === false ? true : false;
            } else {
                if (cls.indexOf(name) > -1) {
                    has = true;
                }
            }
        } else if (isArray(name)) {
            foreach(name, function(clas) {
                if (cls.indexOf(clas) > -1) {
                    has = true;
                }
            });
        }

        return has;
    };

    /* Check is equal with condition */
    $dom.module.is = function(query) {
        if (this.length <= 0) return false;

        if (isString(query)) {
            return this.first().filter(query).length > 0 ? true : false;
        } else if (isHTML(query)) {
            return this.get(0) === query ? true : false;
        }

        return false;
    };

    /* Check not equal with conditon */
    $dom.module.not = function(query) {
        return !this.is(query) ? true : false;
    };
})(DOMList);

(function($root, $dom) {
    'use strict';

    /* Event Provider */
    var EventProvider = function() {
        this.events = {};
    };

    /* Event Provider Core Function */
    EventProvider.prototype = {
        /* Search Event Provider */
        search: function(name) {
            if (isString(name)) {
                return isObject(this.events[name]) ? this.events[name] : undefined;
            }

            return undefined;
        },

        /* Register Event Provider */
        register: function(name, provider, options) {
            if (isString(name) && isFunction(provider)) {
                this.events[name] = {
                    maker: provider,
                    event: new CustomEvent(name, options)
                };
            }

            return this.events[name].event;
        },

        /* Dispatch Event Provider */
        dispatch: function(name, elem, props) {
            if (isString(name) && isHTML(elem) && this.events[name]) {
                var event = this.events[name].event;

                if (isObject(props)) {
                    foreach(props, function (key, value) {
                        event[key] = value;
                    });
                }

                elem.dispatchEvent(event);
            }
        }
    };

    /* Register EventProvider to window */
    var eventProvider = new EventProvider;
    $root.EventProvider = eventProvider;

    /* Function to add listener to document DOMContentLoaded and Loaded */
    document.onreadystatechange = function() {
        if (document.readyState === 'interactive') {
            document.isready = true;
        }
        else if (document.readyState === 'complete') {
            document.isloaded = true;
        }
    }

    /* Adding Queue Counter */
    eventProvider.loadQueue = 0;

    /* Document Ready Hanlder */
    eventProvider.readyHandler = function() {
        var $this = document;

        foreach($this._evcol.ready, function (handler) {
            handler.call($this);
        });
    };

    /* Document Loaded Hanlder */
    eventProvider.loadedHandler = function() {
        var $this = document;

        if (eventProvider.loadQueue <= 0 && !$this.iscomplete) {
            $this.iscomplete = true;

            foreach($this._evcol.loaded, function (handler) {
                handler.call($this);
            });
        }
    };

    var DocLoadListener = function(type, handler) {
        var $this = document;

        /* Creating handler list if not defined */
        if (!$this._evcol) {
            $this._evcol = { _init: true, ready: [], loaded: [] };
        }

        /* Push handler to handler list */
        if (isString(type) && isFunction(handler)) {
            $this._evcol[type].push(handler);
        }

        /* Trigger the handler directly if already in target state */
        if ($this.isready && type === 'ready') {
            handler.call($this);
        }
        if ($this.isloaded && type === 'loaded') {
            handler.call($this);
        }

        /* Creating main hanlder on first use */
        if ($this._evcol._init) {
            $this._evcol._init = false;

            /* Listen document onreadystatechange */
            $this.onreadystatechange = function() {
                /* Hanling ready event */
                if ($this.readyState === 'interactive') {
                    $dom('img').each(function() {
                        eventProvider.loadQueue++;

                        if (this.complete) {
                            eventProvider.loadQueue--;
                        } else {
                            $dom(this).handle(['load', 'error'], function() {
                                eventProvider.loadQueue--;

                                if ($this.isloaded === true) {
                                    eventProvider.loadedHandler();
                                }
                            });
                        }
                    });

                    $this.isready = true;

                    setTimeout(function() {
                        eventProvider.readyHandler();
                    }, 100);
                }

                /* Handling loaded event */
                else if ($this.readyState === 'complete') {
                    $this.isloaded = true;

                    setTimeout(function() {
                        eventProvider.loadedHandler();
                    }, 100);
                }
            }
        }

        return $this;
    };

    /* Document Ready Event */
    $dom.ready = function(handler) {
        return new DocLoadListener('ready', handler);
    };

    /* Document Fully Loaded Event */
    $dom.loaded = function(handler) {
        return new DocLoadListener('loaded', handler);
    };

    /* Event Listener */
    $dom.module.listen = function(name, type, handler) {
        this.each(function() {
            var elem = this;

            /* Add prefix to event type */
            if (isString(type) && elem.hasOwnProperty('on' + type))  type = 'on' + type;

            /* Using single name registration */
            if (isString(name)) {
                /* Using single event type registration */
                if (isString(type) && isFunction(handler)) {
                    /* Add event collection if not exist */
                    if (!elem._evcol) elem._evcol = {};

                    /* Add event type collection if not exist */
                    if (!elem._evcol[type]) elem._evcol[type] = { _init: true };

                    /* Add event type handler collection if not exist */
                    if (!elem._evcol[type][name]) elem._evcol[type][name] = [];

                    /* Pushing event handler to collections */
                    elem._evcol[type][name].push(handler);
                }

                /* Using multiple event type registration */
                else if (isObject(type)) {
                    foreach(type, function(type, handler) {
                        if (isFunction(handler)) {
                            $dom(elem).listen(name, type, handler);
                        }
                    });
                }
            }

            /* Using multiple name registration */
            else if (isObject(name)) {
                /* Iterate type list */
                foreach(name, function (name, types) {
                    if (isObject(types)) {
                        /* Iterate names list */
                        foreach(types, function (type, handler) {
                            if (isFunction(handler)) {
                                $dom(elem).listen(type, name, handler);
                            }
                        });
                    }
                });
            }

            /* Create DOMList Event Handler if not already defined */
            if (elem._evcol) {
                if (elem._evcol[type] && elem._evcol[type]._init) {
                    elem._evcol[type]._init = false;

                    /* Tell Event Provider (if available) to provide custom event to this element */
                    var cev = eventProvider.search(type);
                    if (cev) cev.maker.call(elem);

                    /* Creating Default Handler */
                    var defHandler = function(e) {
                        var $self = this;

                        if ($self._evcol[type]) {
                            foreach($self._evcol[type], function (name, handlers) {
                                if (name !== '_init') {
                                    foreach(handlers, function (handler) {
                                        if (isFunction(handler)) {
                                            handler.call($self, e);
                                        }
                                    });
                                }
                            });
                        }
                    }

                    /* Simply use 'onevent' or addEventListener */
                    if (elem.hasOwnProperty(type)) {
                        elem[type] = defHandler;
                    } else {
                        elem.addEventListener(type, defHandler);
                    }
                }
            }
        });

        return this;
    };

    /* Event Unlistener */
    $dom.module.unlisten = function(name, type) {
        var self = this;
        if (isString(name)) {
            if (isString(type)) {
                this.each(function() {
                    if (this.hasOwnProperty('on' + type)) type = 'on' + type;

                    if (this._evcol[type] && this._evcol[type][name]) {
                        delete this._evcol[type][name];
                    }
                });
            } else if (isArray(type)) {
                foreach(type, function (type) {
                    self.unlisten(name, type);
                });
            } else {
                this.each(function() {
                    var $this = this;

                    foreach($this._evcol, function (type, names) {
                        if (isObject(names) && names.hasOwnProperty(name)) {
                            delete $this._evcol[type][name];
                        }
                    });
                });
            }
        } else if (isArray(name)) {
            if (isString(type)) {
                foreach(name, function(name) {
                    self.unlisten(name, type);
                });
            } else if (isArray(type)) {
                foreach(name, function(name) {
                    foreach(type, function (type) {
                        self.unlisten(name, type);
                    });
                });
            }
        }

        return this;
    };

    /* Handle Events */
    $dom.module.handle = function(type, handler) {
        var $this = this;

        if (isString(type) && isFunction(handler)) {
            $this.listen('default', type, handler);
        } else if (isObject(type)) {
            $this.listen('default', type);
        } else if (isArray(type) && isFunction(handler)) {
            foreach(type, function (type) {
                $this.listen('default', type, handler);
            });
        }

        return this;
    };

    /* Unhandle events */
    $dom.module.unhanlde = function(type) {
        if (isString(type) || isArray(type)) {
            this.unlisten('default', type);
        }

        return this;
    }

    /* Creating Specific Event Group */
    var eventGroup = {
        MouseEvents: 'click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave contextmenu'.split(/\s+/),
        KeyboardEvents: 'keydown keypress keyup'.split(/\s+/),
        FocusEvent: 'blur focus focusin focusout'.split(/\s+/)
    };

    /* Trigger Events */
    $dom.module.trigger = $dom.module.dispatch = function(type, props) {
        /* Event type should be string or array */
        if (isString(type)) {
            /* Iterate each element */
            this.each(function() {
                var elem = this, event, group = 'Event';

                /* Lookup on Event Group to change default group if found */
                foreach(eventGroup, function (grp, types) {
                    if (types.indexOf(type) > -1) {
                        group = grp;
                    }
                });

                /* Look at Custom Event first */
                if (eventProvider.search(type)) {
                    EventProvider.dispatch(type, elem, props);
                }

                /* If not found, use standard event */
                else {
                    /* Non IE Browsers */
                    if (document.createEvent) {
                        /* Creating event object */
                        event = document.createEvent(group);
                        event.initEvent(type);

                        /* Inserting additional properties if defined */
                        if (isObject(props)) {
                            foreach(props, function (key, value) {
                                event[key] = value;
                            });
                        }

                        /* Fire event */
                        elem.dispatchEvent(event);
                    }

                    /* IE Browsers */
                    else if (document.createEventObject) {
                        /* Creating event object */
                        event.createEventObject();

                        /* Inserting additional properties if defined */
                        if (isObject(props)) {
                            foreach(props, function (key, value) {
                                event[key] = value;
                            });
                        }

                        /* Fire event */
                        elem.fireEvent(type, event);
                    }
                }
            });
        }

        return this;
    }
})(window, DOMList);

(function($root, $) {
    'use strict';

    /* Event Aliases Collections */

    /* Global Shortcut */
    var alias = 'blur focus focusin focusout load resize scroll unload click dblclick switch hover mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(/\s+/);

    foreach(alias, function (name) {
        $.module[name] = function(handler) {
            if (isFunction(handler)) {
                return this.handle(name, handler);
            } else {
                return this.trigger(name);
            }
        };
    });

    /* Creating Hover Event */
    EventProvider.register('hover', function() {
        $(this).listen('HoverEvent', {
            'mouseenter': function(e) {
                EventProvider.dispatch('hover', this, { status: 'enter' });
            },
            'mouseleave': function() {
                EventProvider.dispatch('hover', this, { status: 'leave' });
            }
        });
    });

    /* Creating Switch Event */
    EventProvider.register('switch', function() {
        var $this = $(this);

        if (!$this.hasAttr('off') && !$this.hasAttr('on')) {
            $this.attr('off', '');
        }

        $this.listen('ClickToggle', 'click', function() {
            if (!this.switch) this.switch = 'off';

            if (this.switch === 'off') {
                this.switch = 'on';

                $this.attr('on', '').remAttr('off');
            } else {
                this.switch = 'off';

                $this.attr('off', '').remAttr('on');
            }

            EventProvider.dispatch('switch', this, { state: this.togglestate });
        });
    });
})(window, DOMList);

(function($root, $dom) {
    'use strict';

    /* PixelUnit Converter */
    var pixelUnit = function(value) {
        if (isNumber(value)) {
            return value + 'px';
        } else {
            return value;
        }
    }

    /* NonPixel Properties */
    var nonpixel = [
        "columncount", "fillopacity", "flexgrow", "flexshrink", "fontweight", "lineheight", "opacity", "order", "orphans", "widows", "zindex", "zoom"
    ];

    /* Box Ratio Counter */
    var countRatio = function (width, height) {
        var getDivisor, temp, divisor;

        getDivisor = function(a, b) {
            if (b === 0) return a;
            return getDivisor(b, a % b);
        }

        if (width === height) return '1:1';

        if (+width < +height) {
            temp = width;
            width = height;
            height = temp;
        }

        divisor = getDivisor(+width, +height);

        return 'undefined' === typeof temp ? (width / divisor) + ':' + (height / divisor) : (height / divisor) + ':' + (width / divisor);
    };

    /* Browser CSS Property List */
    var propList = {
        default: [], // Default css in lowercase.
        publics: [], // Default css in normal.

        customs: [], // Browser specific in lowercase and without prefix.
        origins: [], // Browser specific in normal.
        browser: '', // Broser type.
    };

    /* Creating new element to get style */
    var style = document.createElement('span').style;
    var lists = [];

    /* Collecting css properties */
    for (var key in style) {
        lists.push(key);
    }

    /* Checking browser */
    if (lists.indexOf('webkitUserSelect') > -1) {
        propList.browser = 'webkit';
    }
    else if (lists.indexOf('MozUserSelect') > -1) {
        propList.browser = 'Moz';
    }
    else if (lists.indexOf('msUserSelect') > -1) {
        propList.browser = 'ms';
    }

    /* Splitting default properties and vendor specific properties */
    foreach(lists, function (prop) {
        /* If property contains current browser pattern, add to custom list */
        if (prop.search(propList.browser) > -1) {
            propList.origins.push(prop);
            propList.customs.push(prop.replace(propList.browser, '').toLowerCase());
        }
        /* Else add to default list */
        else {
            propList.default.push(prop.toLowerCase());
            propList.publics.push(prop);
        }
    });

    /* Module - CSS */
    $dom.module.css = function(property, value) {
        if (isString(property)) {
            // Removing dashes.
            if (property.search('-')) {
                property = property.replace(/\-/g, '');
            }

            // Converting to lowercase to search index.
            property = property.toLowerCase();

            // Ignoring nonpixel properties from being added 'px' suffix.
            var skippx = false;
            if (nonpixel.indexOf(property) > -1) {
                skippx = true;
            }

            // Searching in custom lists.
            var propIndex = propList.customs.indexOf(property);

            // If custom prop, get the original property from the list.
            if (propIndex > -1) {
                property = propList.origins[propIndex];
            }

            // If not custom prop, then try looking on default list.
            else {
                propIndex = propList.default.indexOf(property);

                /* If default prop, then get the original property from default lists */
                if (propIndex > -1) {
                    property = propList.publics[propIndex];
                }

                /* Else tell the user that defined property is not valid css property */
                else {
                    throw property + ' is not valid CSS Property!'
                }
            }

            /* Checking the value. If given, then set the css. Else, get the css. */
            if (isString(value) || isNumber(value) || isBoolean(value)) {
                return this.each(function() {
                    // Use value directly if nonpixel property.
                    if (skippx) {
                        this.style[property] = value;
                    }
                    // Else, try to convert to 'px'.
                    else {
                        this.style[property] = pixelUnit(value);
                    }
                });
            }

            /* Get the css if no value given */
            else {
                return this.length > 0 ? this.get().style[property] : undefined;
            }
        }

        /* If property is object property lists, iterate it one by one */
        else if (isObject(property)) {
            var $this = this;

            foreach(property, function (prop, value) {
                $this.css(prop, value);
            });
        }

        /* If no arguments, get all available css */
        else {
            var style = this.first().prop('style'), props = {};

            for (var property in style) {
                if (isNaN(Number(property)) && property !== 'length' && style[property] !== '' && !isFunction(style[property]) && style[property] !== null) {
                    props[property] = style[property];
                }
            }

            return props;
        }

        return this;
    };

    /* Computed Style Getter */
    $dom.module.cstyle = function(name) {
        if (this.length > 0 && isString(name)) {
            return getComputedStyle(this.get())[name] ? getComputedStyle(this.get())[name] : null;
        }
        else if (this.length > 0 && isArray(name)) {
            var props = {}, $this = this;

            foreach(name, function (name) {
                if (getComputedStyle($this.get())[name]) props[name] = getComputedStyle($this.get())[name];
            });

            return props;
        }

        return null;
    };

    /* Creating offsetWidth, clientWidth, scrollWidth, offsetHeight, clientHeight, scrollHeight, scrollTop, scrollLeft modules */
    foreach(['offsetWidth', 'offsetHeight', 'clientWidth', 'clientHeight', 'scrollWidth', 'scrollHeight', 'scrollLeft', 'scrollTop'], function(method) {
        $dom.module[method] = function() {
            return this.length > 0 ? this.get()[method] : 0;
        };
    });

    /* Creating width and height modules */
    foreach(['Width', 'Height'], function(method) {
        $dom.module[method.toLowerCase()] = function(value) {
            if (this.length <= 0) return 0;

            if (isDefined(value)) {
                return this.css(method.toLowerCase(), value);
            } else {
                return this.get()['offset' + method];
            }
        };
    });

    /* Box Ratio Getter and Setter */
    $dom.module.ratio = function(value, reverse) {
        if (this.length <= 0) return this;

        /* If value is defined, then set it */
        if (isString(value) && value.match(/^\d+:\d+$/)) {
            this.each(function() {
                this.ratio = value;

                // Getting box ratio part.
                var part = this.ratio.split(':');

                /* Get height by width */
                if (!reverse) {
                    // Getting the box height depend on ratio.
                    var height = Math.round($dom(this).width() / part[0] * part[1]);

                    // Setting the box height.
                    $dom(this).height(height);
                }

                /* Get width by height */
                else {
                    /* Getting box width depend on ratio */
                    var width = Math.round($dom(this).height() / part[1] * part[0]);

                    /* Setting the box width */
                    $dom(this).width(width);
                }
            });

            return this;
        }

        /* If no value given, try to get the ratio value */
        else {
            /* Return if already exist */
            if (this.get().ratio) {
                return this.get().ratio;
            }

            /* Count if not exist */
            else {
                return this.get().ratio = countRatio(this.width(), this.height());
            }
        }
    };

    /* Creating offset getter module */
    $dom.module.offset = function() {
        if (this.length <= 0) return this;

        return {
            /* Dimensions */
            width: this.width(),
            height: this.height(),

            /* Positions */
            left: this.get().offsetLeft,
            top: this.get().offsetTop,

            /* Scrolls */
            scrollTop: this.get().scrollTop,
            scrollLeft: this.get().scrollLeft,

            /* Box ratio */
            ratio: this.first().ratio()
        };
    };

    /* Creating Box Orientation Module */
    $dom.module.orientation = function() {
        if (this.length <= 0) return this;

        this.each(function() {
            var offset = $dom(this).offset();

            if (offset.width > offset.height) {
                $dom(this).attr('landscape', '');

                this.orientation = 'landscape';
            } else {
                $dom(this).attr('portrait', '');

                this.orientation = 'portrait';
            }
        });

        return this.first().prop('orientation');
    };
})(window, DOMList);

(function($root, $dom) {
    'use strict';

    /* Animation Module */
    $dom.module.animate = function(props, options, callback) {
        if (!window.TweenMax) return this;

        var $this = this, duration;

        if (isObject(props)) {
            if (isNumber(options)) {
                duration = options;
            }
            else if (isObject(options)) {
                foreach(options, function (key, value) {
                    if (key !== 'duration' && isDefined(value)) {
                        props[key] = value;
                    }
                });

                if (options.duration) {
                    duration = options.duration;
                } else {
                    duration = 0.5;
                }
            }
            else {
                duration = 0.5;
            }

            this.each(function() {
                var $this = this;

                if (isFunction(callback)) {
                    props.onCompleteParams = [$this];

                    props.onComplete = function(elem) {
                        callback.call(elem, $this.tweens);
                    }
                }

                $this.tweens = new TweenMax($this, duration, props);
            });
        }

        return this;
    };

    /* Animation Keyframes */
    $dom.module.keyframes = function(frames, options, callback) {
        if (isObject(frames)) {
            var $this = this, dur, time = Object.keys(frames), all = time.length, start = 0, curnt = 0;

            if (isNumber(options)) {
                dur = options;
            } else if (isObject(options)) {
                if (options.duration) {
                    dur = options.duration;
                } else {
                    dur = 0.5;
                }
            } else {
                options = {
                    duration: 0.5
                };
            }

            var repeat = function() {
                if (all > 0) {
                    var timei = (Number(time[start]));
                    var frame = Object.merge(frames[timei]);
                    var durat = ((timei - curnt) / 100) * dur;
                    var optio = Object.merge(options, { duration: durat });

                    $this.animate(frame, optio);

                    setTimeout(function() {
                        repeat();
                    }, (durat * 1000));

                    all -= 1;
                    start += 1;
                    curnt = timei;
                } else {
                    if (isFunction(callback)) {
                        callback.call($this);
                    }
                }
            };

            repeat();

            return this;
        }
    };

    /* Animation Controll Module */
    $dom.module.ctrlAnimate = function(type, arg) {
        if (isString(type)) {
            this.each(function() {
                if (this.tweens && this.tweens[type]) {
                    this.tweens[type](arg);
                }
            });
        }

        return this;
    };

    /* Animation Controll Shorcut Modules */
    foreach(['pause', 'resume', 'reverse', 'seek', 'timeScale', 'kill'], function (method) {
        $dom.module[method] = function(arg) {
            return this.ctrlAnimate(method, arg);
        }
    });

    /* Animation Stopper */
    $dom.module.stop = function() {
        return this.each(function() {
            if (this.tweens) {
                this.tweens.kill();

                $dom(this).css(this.tweens.vars.css);
            }
        });
    };

    /* Slide Effects */
    $dom.module.slide = function(dir, options, callback) {
        if (isString(dir)) {
            return this.each(function() {
                var prop = 'height';

                if (this.offsetWidth <= 0) {
                    this._slxstate = 'left';
                } else {
                    this._slxstate = 'right';
                }

                if (this.offsetHeight <= 0) {
                    this._slystate = 'up';
                } else {
                    this._slystate = 'down';
                }

                if (dir === 'Up') {
                    if (this._slystate !== 'up') {
                        var display = getComputedStyle(this).display;

                        if (display === 'inline') {
                            display = 'inline-block';
                        }

                        $dom(this).animate({ height: 0, overflow: 'hidden', width: this.offsetWidth, display: display }, options, callback);
                    }
                }
                else if (dir === 'Down') {
                    if (this._slystate !== 'down') {
                        var elemen = $dom(this);
                        var height = elemen.cstyle('height');
                        var disply = elemen.cstyle('display');

                        if (disply === 'none') {
                            elemen.css('display', 'inherit');
                            disply = elemen.cstyle('display');
                        }

                        if (disply === 'inline') {
                            disply = 'inline-block';
                        }

                        if (height === 'auto' || height.search('%') > -1 || height === '0px') {
                            height = elemen.css({ display: disply, height: ''}).height();
                        } else {
                            height = elemen.height();
                        }

                        elemen.css({ display: disply, height: 0 });
                        elemen.animate({ display: disply, height: height, overflow: 'hidden', width: this.offsetWidth }, options, callback);
                    }
                }
                else if (dir === 'Left') {
                    if (this._slxstate !== 'left') {
                        var display = getComputedStyle(this).display;

                        if (display === 'inline') {
                            display = 'inline-block';
                        }

                        $dom(this).animate({ width: 0, overflow: 'hidden', height: this.offsetHeight, display: display, }, options, callback);
                    }
                }
                else if (dir === 'Right') {
                    if (this._slxstate !== 'right') {
                        var elemen = $dom(this);
                        var width = elemen.cstyle('width');
                        var disply = elemen.cstyle('display');

                        if (disply === 'none') {
                            elemen.css('display', 'inherit');
                            disply = elemen.cstyle('display');
                        }

                        if (disply === 'inline') {
                            disply = 'inline-block';
                        }

                        if (width === 'auto' || width.search('%') > -1 || width === '0px') {
                            width = elemen.css({ display: disply, width: ''}).width();
                        } else {
                            width = elemen.width();
                        }

                        elemen.css({ display: disply, width: 0 });
                        elemen.animate({ display: disply, width: width, overflow: 'hidden', height: this.offsetHeight }, options, callback);
                    }
                }
                else if (dir === 'ToggleY') {
                    if (this._slystate === 'down') {
                        $dom(this).slide('Up', options, callback);
                    } else if (this._slystate === 'up') {
                        $dom(this).slide('Down', options, callback);
                    }
                }
                else if (dir === 'ToggleX') {
                    if (this._slxstate === 'left') {
                        $dom(this).slide('Right', options, callback);
                    } else if (this._slxstate === 'right') {
                        $dom(this).slide('Left', options, callback);
                    }
                }
            });
        }
    };
    foreach(['Left', 'Right', 'Up', 'Down', 'ToggleX', 'ToggleY'], function (dir) {
        $dom.module['slide' + dir] = function(options, callback) {
            return this.slide(dir, options, callback);
        }
    });

    /* Fade Effects */
    $dom.module.fade = function(dir, options, callback) {
        if (isString(dir)) {
            return this.each(function() {
                if (!this._fdstate) this._fdstate = 'visible';

                if (dir === 'In') {
                    this._fdstate = 'visible';

                    $dom(this).animate({ opacity: 1 }, options, callback);
                }

                else if (dir === 'Out') {
                    this._fdstate = 'invisible';

                    $dom(this).animate({ opacity: 0 }, options, callback);
                }

                else if (dir === 'Toggle') {
                    if (this._fdstate === 'visible') {
                        $dom(this).fade('Out', options, callback);
                    }
                    else if (this._fdstate === 'invisible') {
                        $dom(this).fade('In', options, callback);
                    }
                }
            });
        }
    };
    foreach(['In', 'Out', 'Toggle'], function (dir) {
        $dom.module['fade' + dir] = function(options, callback) {
            return this.fade(dir, options, callback);
        };
    });

})(window, DOMList);

(function($) {
    var DOMNotice = function(message, options) {
        if ('Notification' in window) {
            this.allowed = true;
        } else {
            this.allowed = false;
        }

        /* Preparing Options */
        this.title = message || '';
        this.engine = undefined;
        this.options = {};
        this.events = {};

        var $this = this;

        if (isObject(options)) {
            foreach(['onclick', 'onclose', 'onerror', 'onshow'], function(type) {
                if (type in options) {
                    $this.events[type] = options[type];
                }
            });

            foreach(['icon', 'tag', 'body', 'lang', 'dir'], function (prop) {
                if (prop in options) {
                    $this.options[prop] = options[prop];
                }
            });
        }

        this.granted = false;
        this.queued = false;

        /* Request permission */
        if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
            this.ask(function(permission) {
                if (permission === 'granted') {
                    this.granted = true;

                    if (this.queued) {
                        this.show();
                    }
                }

                else {
                    console.error('Notification: Permission denied.');
                }
            });
        } else {
            this.granted = true;
        }

        return this;
    };

    DOMNotice.prototype = {
        handle: function(type, handler) {
            if (isString(type) && isFunction(handler)) {
                this.events['on' + type] = handler;
            }

            return this;
        },

        ask: function(handler) {
            var $this = this;

            Notification.requestPermission(function(permission) {
                if (isFunction(handler)) {
                    handler.call($this, permission);
                }
            });

            return this;
        },

        show: function(message, options) {
            var $this = this;

            if (isString(message)) {
                this.title = message;
            }

            if (isObject(options)) {
                this.options = Object.merge(this.options, options);
            }

            if (this.allowed && isString(this.title) && this.granted) {
                this.engine = new Notification(this.title, this.options);

                foreach(['click', 'close', 'error', 'show'], function (type) {
                    $this.engine['on' + type] = function(e) {
                        if ($this.events['on' + type]) {
                            $this.events['on' + type].call($this, e);
                        }
                    }
                });
            } else {
                this.queued = true;
            }

            return this;
        },

        set: function(name, value) {
            if (isString(name) && value) {
                this.options[name] = value;
            } else if (isObject(name)) {
                this.options = Object.merge(this.options, name);
            }

            return this;
        }
    };

    foreach(['click', 'show', 'error', 'close'], function (type) {
        DOMNotice.prototype['on' + type] = function(handler) {
            return this.handle(type, handler);
        }
    });

    $.notification = function(message, options) { return new DOMNotice(message, options) };
})(DOMList);