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
