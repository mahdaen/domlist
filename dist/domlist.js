/**
 * Native JS.
 * Native Helper for Javascript.
 * Language: Javascript.
 * Created by mahdaen on 12/16/14.
 * License: GNU General Public License v2 or later.
 */

/* Creating Container */
if (!window) {
    var window = {};
}

/* Module Wrapper */
(function(native) {
    if (typeof module !== 'undefined' && module.exports) {
        /* NodeJS */
        module.exports = native();
    } else {
        return native();
    }
})(function() {
    return window;
});

/* Adding Configurations Space */
window.__nconfig = {};
/**
 * Data Type Getter Scripts.
 * Created by mahdaen on 12/16/14.
 */

(function() {
    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isDefined} isDefined(variable); isDefined()
     * @apiName isDefined
     * @apiDescription Check whether argument is defined or not. Use only to check argument in function.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = function(bar) {
     *     isDefined(bar); // true or false.
     * }
     *
     * isDefined(bar); // Error.
     */
    var isDefined = function($object) {
        return typeof $object !== 'undefined' ? true : false;
    };
    window.isDefined = function($object) { return isDefined($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isString} isString(variable); isString()
     * @apiName isString
     * @apiDescription Check does type of variable is string or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = 'bar';
     * var bar = 100;
     *
     * isString(foo); // true
     * isString(bar); // false
     */
    var isString = function($object) {
        return typeof $object === 'string' ? true : false;
    };
    window.isString = function($object) { return isString($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isObject} isObject(variable); isObject()
     * @apiName isObject
     * @apiDescription Check does type of variable is object or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = {a: 1, b: 2};
     * var bar = 100;
     *
     * isObject(foo); // true
     * isObject(bar); // false
     */
    var isObject = function($object) {
        return typeof $object === 'object' && !$object.length ? true : false;
    };
    window.isObject = function($object) { return isObject($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isArray} isArray(variable); isArray()
     * @apiName isArray
     * @apiDescription Check does type of variable is array or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = [1,2];
     * var bar = 100;
     *
     * isArray(foo); // true
     * isArray(bar); // false
     */
    var isArray = function($object) {
        return typeof $object === 'object' && Array.isArray($object) ? true : false;
    };
    window.isArray = function($object) { return isArray($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isFunction} isFunction(variable); isFunction()
     * @apiName isFunction
     * @apiDescription Check does type of variable is function or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = function() {};
     * var bar = 100;
     *
     * isFunction(foo); // true
     * isFunction(bar); // false
     */
    var isFunction = function($object) {
        return typeof $object === 'function' ? true : false;
    };
    window.isFunction = function($object) { return isFunction($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isNumber} isNumber(variable); isNumber()
     * @apiName isNumber
     * @apiDescription Check does type of variable is number or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = 100;
     * var bar = 'Foo';
     *
     * isNumber(foo); // true
     * isNumber(bar); // false
     */
    var isNumber = function($object) {
        return typeof $object === 'number' ? true : false;
    };
    window.isNumber =  function($object) { return isNumber($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isBoolean} isBoolean(variable); isBoolean()
     * @apiName isBoolean
     * @apiDescription Check does type of variable is boolean or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = false;
     * var bar = 'true';
     *
     * isBoolean(foo); // true
     * isBoolean(bar); // false
     */
    var isBoolean = function($object) {
        return typeof $object === 'boolean' ? true : false;
    };
    window.isBoolean = function($object) { return isBoolean($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isJQuery} isJQuery(variable); isJQuery()
     * @apiName isJQuery
     * @apiDescription Check does type of variable is jQuery Object or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = $('span');
     * var bar = [1,2];
     *
     * isJQuery(foo); // true
     * isJQuery(bar); // false
     */
    var isJQuery = function($object) {
        return typeof $object === 'object' && $object.hasOwnProperty('length') && $object.jquery ? true : false;
    };
    window.isJQuery = function($object) { return isJQuery($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isHTML} isHTML(variable); isHTML()
     * @apiName isHTML
     * @apiDescription Check does type of variable is html object or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = $('span')[0];
     * var bar = 100;
     *
     * isHTML(foo); // true
     * isHTML(bar); // false
     */
    var isHTML = function($object) {
        return typeof $object === 'object' && $object.ELEMENT_NODE ? true : false;
    };
    window.isHTML = function($object) { return isHTML($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isDOMList} isDOMList(variable); isDOMList()
     * @apiName isDOMList
     * @apiDescription Check does type of variable is DOMList object or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = $dom('span');
     * var bar = 100;
     *
     * isDOMList(foo); // true
     * isDOMList(bar); // false
     */
    var isDOMList = function($object) {
        return typeof $object === 'object' && $object.name && $object.name === 'DOMList' ? true : false;
    };
    window.isDOMList = function($object) { return isDOMList($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isHTMLString} isHTMLString(variable); isHTMLString()
     * @apiName isHTMLString
     * @apiDescription Check does type of variable is HTML Formatted String or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = '<span class="foo">';
     * var bar = 'span.foo';
     *
     * isHTMLString(foo); // true
     * isHTMLString(bar); // false
     */
    var isHTMLString = function($object) {
        return typeof $object !== 'undefined' && $object.match(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/) ? true : false;
    }
    window.isHTMLString = function($object) { return isHTMLString($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isColor} isColor(variable); isColor()
     * @apiName isColor
     * @apiDescription Check does type of variable is color string or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = '#999';
     * var bar = 100;
     *
     * isColor(foo); // true
     * isColor(bar); // false
     */
    var isColor = function($object) {
        return /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/.test($object) ? true : false;
    };
    window.isColor = function($object) { return isColor($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isURL} isURL(variable); isURL()
     * @apiName isURL
     * @apiDescription Check does type of variable is URL string or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = 'https://main.com/pages/module';
     * var bar = 'foo bar';
     *
     * isURL(foo); // true
     * isURL(bar); // false
     */
    var isURL = function($object) {
        return /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i.test($object) ? true : false;
    };
    window.isURL = function($object) { return isURL($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isEmail} isEmail(variable); isEmail()
     * @apiName isEmail
     * @apiDescription Check does type of variable is email address string or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = 'mail@domain.com';
     * var bar = 'mail@domain';
     *
     * isEmail(foo); // true
     * isEmail(bar); // false
     */
    var isEmail = function($object) {
        return /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i.test($object) ? true : false;
    };
    window.isEmail = function($object) { return isEmail($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isDate} isDate(variable); isDate()
     * @apiName isDate
     * @apiDescription Check does type of variable is date string or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = 'Jan 11, 2011';
     * var bar = 100;
     *
     * isDate(foo); // true
     * isDate(bar); // false
     */
    var isDate = function($object) {
        return !isNaN(new Date($object).getDate()) ? true : false;
    };
    window.isDate = function($object) { return isDate($object) };
})();

/**
 * Object Iterator Scripts.
 * Created by mahdaen on 12/16/14.
 */

(function() {
    /**
     * @apiVersion 1.1.0
     * @apiGroup Iterator
     *
     * @api {foreach} foreach(object,handler); foreach()
     * @apiName Foreach
     * @apiDescription Perform loop through Array, Object, String, Number and DOMList.
     *
     * @apiParam {Any} object Array, Object, String, Number or DOMList.
     * @apiParam {func} handler Function that handle each item.
     * <br>Array iterator will give 'value' and 'index' as argument.
     * <br>Object iterator will give 'key' and 'value' as argument.
     * <br>String iterator will give 'char' and 'index' as argument.
     * <br>Number iterator will give 'number' as argument.
     * <br>DOMList iterator will give 'elem' and 'index' as argument.
     *
     * @apiExample {js} Sample: Array
     * var arr = [1,2,3,4];
     *
     * foreach(arr, function(value, i) {
     *     console.log(value, i); // 1 0 >> 2 1 >> 3 2 >> 4 3
     * }
     *
     * @apiExample {js} Sample: Object
     * var obj = {a: 1, b: 2};
     *
     * foreach(obj, function(key, value) {
     *     console.log(key, value); // a 1 >> b 2
     * }
     *
     * @apiExample {js} Sample: String
     * var str = 'Foo';
     *
     * foreach(str, function(char, i) {
     *     console.log(char, i); // F 0 >> o 1 >> o 2
     * }
     *
     * @apiExample {js} Sample: Number
     * foreach(5, function(number) {
     *     console.log(number); // 1 >> 2 >> 3 >> 4 >> 5
     * }
     */
    var foreach = function(object, handler, thisArg) {
        if (window.isFunction(handler)) {
            if (window.isArray(object) && window.isFunction(handler)) {
                for (var i = 0; i < object.length; ++i) {
                    handler.call(thisArg, object[i], i);
                }
            } else if (window.isObject(object) && window.isFunction(handler)) {
                for (var key in object) {
                    if (object.hasOwnProperty(key)) {
                        handler.call(thisArg, key, object[key]);
                    }
                }
            } else if (window.isNumber(object) && window.isFunction(handler)) {
                for (var i = 1; i <= object; ++i) {
                    handler.call(thisArg, i);
                }
            } else if (window.isString(object) && window.isFunction(handler)) {
                for (var i = 0; i < object.length; ++i) {
                    handler.call(thisArg, object.charAt(i), (i + 1));
                }
            } else if (window.isDOMList(object) && window.isFunction(handler)) {
                for (var i = 0; i < object.length; ++i) {
                    handler.call(thisArg, object[i], i);
                }
            } else {
                return console.warn('Euw! We can\'t iterate your object. So sorry!');
            }
        } else {
            console.warn('Euw! Don\'t forget to give us a function to call!');
        }

        return object;
    };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Iterator
     *
     * @api {reveach} reveach(object,handler); reveach()
     * @apiName Reveach
     * @apiDescription Perform reversed loop through Array, Object, String, Number and DOMList.
     *
     * @apiParam {Any} object Array, Object, String, Number or DOMList.
     * @apiParam {func} handler Function that handle each item.
     * <br>Array iterator will give 'value' and 'index' as argument.
     * <br>Object iterator will give 'key' and 'value' as argument.
     * <br>String iterator will give 'char' and 'index' as argument.
     * <br>Number iterator will give 'number' as argument.
     * <br>DOMList iterator will give 'elem' and 'index' as argument.
     *
     * @apiExample {js} Sample: Array
     * var arr = [1,2,3,4];
     *
     * reveach(arr, function(value, i) {
     *     console.log(value, i); // 4 3 >> 3 2 >> 2 1 >> 1 0
     * }
     *
     * @apiExample {js} Sample: Object
     * var obj = {a: 1, b: 2};
     *
     * reveach(obj, function(key, value) {
     *     console.log(key, value); // b 2 >> a 1
     * }
     *
     * @apiExample {js} Sample: String
     * var str = 'Foo';
     *
     * reveach(str, function(char, i) {
     *     console.log(char, i); // o 2 >> o 1 >> F 0
     * }
     *
     * @apiExample {js} Sample: Number
     * reveach(5, function(number) {
     *     console.log(number); // 5 >> 4 >> 3 >> 2 >> 1
     * }
     */
    var reveach = function($object, $handler, $args) {
        if (window.isFunction($handler)) {
            if (window.isArray($object)) {
                for (var i = ($object.length - 1); i >= 0; --i) {
                    $handler.call($args, $object[i], i);
                }
            } else if (window.isObject($object)) {
                var keys = Object.keys($object);

                for (var i = (keys.length - 1); i >= 0; --i) {
                    $handler.call($args, keys[i], $object[keys[i]]);
                }
            } else if (window.isNumber($object)) {
                for (var i = $object; i >= 1; --i) {
                    $handler.call($args, i);
                }
            } else if (window.isString($object)) {
                for (var i = ($object.length - 1); i >= 0; --i) {
                    $handler.call($args, $object.charAt(i), i);
                }
            } else if (window.isDOMList($object)) {
                for (var i = ($object.length - 1); i >= 0; --i) {
                    $handler.call($args, $object[i], i);
                }
            } else {
                return console.warn('Euw! We can\'t iterate your object. So sorry!');
            }
        } else {
            console.warn('Euw! Don\'t forget to give us a function to call!');
        }

        return $object;
    };

    window.foreach = function($object, $handlder, $args) { return foreach($object, $handlder, $args) };
    window.reveach = function($object, $handlder, $args) { return reveach($object, $handlder, $args) };
})();

/**
 * Private Object Generator Scripts.
 * Created by mahdaen on 12/16/14.
 */

/* Defining Object Holder */
window.__variables = {};
window.__constants = {};
window.__functions = {};

(function() {
    /**
     * @apiVersion 1.1.0
     * @apiGroup Private
     *
     * @api {vars} vars(name,value); vars()
     * @apiName Vars
     * @apiDescription Get or Set private variable.
     * Since it's private, you must use vars() to read the value.
     * Private variable live under single scope.
     * Defining value in same name will replace the value, wherever you use that.
     *
     * @apiParam {String} name Variable name.
     * @apiParam {Any} [value] Variable value. Leave blank to read value.
     *
     * @apiExample {js} Sample #1
     * x = vars('foo', 'bar'); // Set private variable foo to "bar".
     *
     * x = vars('foo'); // Read private variable foo.
     *
     * x = foo; // Error.
     */
    var vars = function(name, value) {
        if (window.isString(name)) {
            if (window.isDefined(value)) {
                window.__variables[name] = value;

                return value;
            } else {
                if (window.__variables.hasOwnProperty(name)) {
                    return window.__variables[name];
                } else {
                    //return console.warn('Variable "' + name + '" is undefined!');
                    return undefined;
                }
            }
        } else {
            return console.warn('Argument @name is required!');
        }
    };
    window.vars = function($name, $value) { return new vars($name, $value) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Private
     *
     * @api {cons} cons(name,value); cons()
     * @apiName Cons
     * @apiDescription Read or create new read-only variable.
     * Since it's private, you must use cons() to read the value.
     * Private variable live under single scope.
     * You can change the value of the constant that already created.
     *
     * @apiParam {String} name Constant name.
     * @apiParam {Any} [value] Constant value. Leave blank to read value.
     *
     * @apiExample {js} Sample #1
     * x = cons('foo', 'bar'); // Set private constant foo to "bar".
     *
     * x = cons('foo'); // Read private variable foo.
     *
     * x = cons('foo', 'foobar'); // Nothing changed.
     *
     * x = foo; // Error.
     */
    var cons = function(name, value) {
        if (window.isString(name)) {
            if (window.isDefined(value)) {
                if (!window.__constants.hasOwnProperty(name)) {
                    window.__constants[name] = value;

                    return value;
                } else {
                    return console.warn('Constant "' + name + '" already defined!');
                }
            } else {
                if (window.__constants.hasOwnProperty(name)) {
                    return window.__constants[name];
                } else {
                    return console.warn('Constant "' + name + '" is undefined!');
                }
            }
        } else {
            return console.warn('Argument @name is required!');
        }
    };
    window.cons = function($name, $value) { return new cons($name, $value) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Private
     *
     * @api {func} func(name,handler); func()
     * @apiName Func
     * @apiDescription Run or create new read-only and private function.
     * Since it's private, you must use func() to call the function.
     * Private function live under single scope.
     * You can't change the function handler to the function that already defined.
     *
     * @apiParam {String} name Function name.
     * @apiParam {Any} [handler] Function handler. Leave blank to read value.
     *
     * @apiExample {js} Sample #1
     * // Create new function.
     * func('foo', function() {
     *     console.log('bar');
     * });
     *
     * // Call function.
     * func('foo')();
     *
     * // Nothing changed since function 'foo' already defined.
     * func('foo', function() {
     *     console.log('foo');
     * });
     *
     * foo(); // ERROR.
     */
    var func = function(name, handler) {
        if (window.isString(name)) {
            if (window.isFunction(handler)) {
                if (!window.__functions.hasOwnProperty(name)) {
                    window.__functions[name] = handler;

                    return handler;
                } else {
                    console.warn('Function "' + name + '" already defined!');
                }
            } else {
                if (window.__functions.hasOwnProperty(name)) {
                    return window.__functions[name];
                } else {
                    return console.warn('Function "' + name + '" is undefined!');
                }
            }
        } else {
            return console.warn('Argument @name is required!');
        }
    };
    window.func = function($name, $handler) { return new func($name, $handler) };
})();

/**
 * Object Rotator Scripts.
 * Created by mahdaen on 12/16/14.
 */

/**
 * Circle item in object, array, and string.
 * @param obj - Object ot circle.
 * @param reversed - Does the circle is reversed.
 * @returns {{}}
 */
window.circle = function(obj, reversed) {
    if (window.isObject(obj)) {
        var nobj = {}, keys = Object.keys(obj), last = (keys.length - 1);

        if (!reversed) {
            window.foreach(obj, function (key, value) {
                if (key !== keys[0]) {
                    nobj[key] = value;
                }
            });

            nobj[keys[0]] = obj[keys[0]];
        } else {
            nobj[keys[last]] = obj[keys[last]];

            window.foreach(obj, function (key, value) {
                if (key !== keys[last]) {
                    nobj[key] = value;
                }
            });
        }

        return nobj;
    } else if (window.isArray(obj)) {
        var narr = [], last = (this.length - 1);

        if (!reversed) {
            window.foreach(obj, function(value, index) {
                if (index !== 0) {
                    narr.push(value);
                }
            });

            narr.push(obj[0]);
        } else {
            narr.push(obj[last]);

            window.foreach(obj, function(value, index) {
                if (index !== last) {
                    narr.push(value);
                }
            });
        }

        return narr;
    }
};
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
    var CustomEvent = function (name, options) {
        var event;

        if (isString(name)) {
            options = options || {bubbles: false, cancelable: false, detail: undefined};

            event = document.createEvent('CustomEvent');
            event.initCustomEvent(name, options.bubbles, options.cancelable, options.detail);
        }

        return event;
    };

    /* CustomEvent Prototype */
    CustomEvent.prototype = $root.Event.prototype;

    /* Register to window if no default CustomEvent */
    if (!$root.CustomEvent) $root.CustomEvent = CustomEvent;

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
    };

    /* Extending HTML Element Prototype to find elements from that */
    HTMLElement.prototype.find = function(query) { return new DOMList(query, this) }
})(window);

(function($root, $dom) {
    /**
     * @apiVersion 2.0.0
     * @apiGroup DOMList
     *
     * @api {domdata} $dom.data(name,value,context); $dom.data()
     * @apiName DOMData
     * @apiDescription Select elements that has data-attribute name or has data-attribute name with equal value. Using without arguments will select all elements that has data-attribute.
     *
     * @apiParam {Multi} name String data-attribute name. Use space-delimiter to select multiple name. Object contains data-attribute name and value. Array contains attributes name.
     * @apiParam {Multi} [value] Compare with value if you use string in 'name'. If value is HTML element or DOMList, it's used as context.
     * @apiParam {Multi} [context] HTML Element or DOMList as context.
     *
     * @apiExample {js} Sample #1
     * $dom.data(); // Select elements that has data-attribute.
     *
     * @apiExample {js} Sample #2
     * // It's like $dom('[data-foo="bar"]');
     *
     * $dom.data('foo', 'bar'); // Select elements that has data-attribute 'data-foo' and 'data-foo' value is 'bar'.
     *
     * $dom.data('foo bar'); // Select elements that has 'data-foo' or 'data-bar'.
     * $dom.data(['foo', 'bar']); // Select elements that has 'data-foo' or 'data-bar'.
     *
     * @apiExample {js} Sample #3
     * // It's like $dom('[data-foo="bar"], [data-bar="bar"]');
     *
     * $dom.data('foo bar', 'bar'); // Select elements that has 'data-foo' or 'data-bar' and both value is 'bar'.
     *
     * @apiExample {js} Sample #4
     * // It's like $dom('[data-foo], [data-bar]', div);
     *
     * var div = $dom('.foobar');
     * $dom.data('foo bar', div); // Select elements that has 'data-foo' or 'data-bar' from 'div' above.
     *
     * @apiExample {js} Sample #5
     * // Using object as name will find elements that has both condition.
     * // It's like $dom('[data-foo="bar"][data-bar]');
     *
     * $dom.data({ 'foo': 'bar', 'data-bar': '' }); // Select elements that has 'data-foo' and 'data-bar' and 'data-foo' value is 'bar'.
     */
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
(function($dom) {
    'use strict';

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {push} DOMList.push(element); .push()
     * @apiName Push
     * @apiDescription Push single element or multiple element (DOMList or Array) to current DOMList. Using CSS selector string as element also accepted.
     *
     * @apiParam {Multi} element HTML Element, DOMList, Array Element List, or CSS Selector String.
     *
     * @apiExample Sample
     * var foo = $dom('.foo');
     * var bar = $dom('.bar')[0];
     *
     * foo.push(bar); // Push bar to foo.
     * foo.push([bar]); // Push bar to foo.
     * foo.push('.bar'); // Push bar to foo.
     */
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
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
     * @apiGroup Core
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
     * @apiGroup Core
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
     * @apiGroup Core
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
     * @apiGroup Core
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
     * @apiGroup Core
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
     * @apiGroup Core
     *
     * @api {children} DOMList.children(); .children()
     * @apiName Children
     * @apiDescription Get child elements of first selected element.
     *
     * @apiExample {js} Sample #1
     * $dom('.container').children();
     */
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
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
     * @apiGroup Core
     *
     * @api {filter} DOMList.filter(query); .filter()
     * @apiName Filter
     * @apiDescription Filter the selected elements with specific CSS Selector.
     *
     * @apiParam {String} query String CSS Selector to filter.
     *
     * @apiExample Sample #1
     * $dom('span').filter('.a'); // Get all span and filter that has class 'a'.
     */
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
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
     * @apiGroup Core
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
     * @apiGroup Core
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
     * @apiGroup Core
     *
     * @api {remdata} DOMList.remData(name); .remData()
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
     * @apiGroup Core
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

                if (first[name]) {
                    return first[name];
                }
            }
        }

        return $this;
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
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
     * @apiGroup Core
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
     * @apiGroup Core
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
     * @apiGroup Core
     *
     * @api {toarray} DOMList.toArray(); .toArray()
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {parent} DOMList.parent() .parent()
     * @apiName Parent
     * @apiDescription Get the parent element of first selected element as DOMList object. Use 'true' as argument to get all parent elements.
     *
     * @apiExample {js} Sample
     * $dom('span').parent(); // Get the parent element of first span.
     * $dom('span').parent(true); // Get parent element of all span.
     */
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {parentuntil} DOMList.parentUntil(query); .parentUntil()
     * @apiName ParentUntil
     * @apiDescription Get recrusive parent element of first selected element until match with query.
     *
     * @apiParam {String} query CSS Selector to match parent element or Function to handle each parent element to return true or false.
     *
     * @apiExample {js} Sample
     * $dom('.foo').parentUntil('.container'); // Get the container of .foo.
     *
     * // Using function as query.
     * $dom('.foo').parentUntil(function() {
     *     return $dom(this).hasClass('container') : true : false
     * });
     */
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     * @api {parents} DOMList.parents(); .parents()
     * @apiName Parents
     * @apiDescription Get all parent element of all selected elements as DOMList object.
     *
     * @apiExample {js} Sample
     * $dom('span').parents(); // Get the parent element of each span.
     */
    $dom.module.parents = function() {
        var result = $dom();

        this.each(function() {
            result.push(this.parentElement);
        });

        return result;
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {comment} DOMList.comment() .comment()
     * @apiName Comment
     * @apiDescription Comment out a block of selected elements.
     */
    $dom.module.comment = function() {
        this.each(function() {
            this.orgHTML = this.outerHTML;
            this.outerHTML = '<!-- ' + this.outerHTML + ' -->';
        });

        return this;
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {match} DOMList.mathch(handler); .match()
     * @apiName Match
     * @apiDescription Filter selected elements using function.
     * Hanlder should return true or false to tell matcher should current element should included or not.
     * Hanlder will become an HTML Element.
     * Matcher will return new DOMList object or null if no element matched.
     *
     * @apiParam {Function} handler Function to handler HTML Element to return true or false.
     *
     * @apiExample {js} Sample
     * $dom('span').match(function() {
     *     return this.hasAttribute('href') ? true : false;
     * });
     */
    $dom.module.match = function(handler) {
        if (!isFunction(handler) || this.length <= 0) return this;

        var result = $dom();

        this.each(function() {
            if (handler.call(this) === true) result.push(this);
        });

        return result.length > 0 ? result : null;
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {get} DOMList.get(index); .get()
     * @apiName Get
     * @apiDescription Get HTML Element from selected elements by specific index. If no index defined, return first element.
     *
     * @apiParam {Number} index Index position of element. Started from 0.
     *
     * @apiExample {js} Sample
     * // Get second element from selected elements.
     * $dom('span').get(1);
     */
    $dom.module.get = function(index) {
        if (isNumber(index)) {
            return this[index] ? this[index] : undefined;
        } else {
            return this.length > 0 ? this[0] : undefined;
        }
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {indexof} DOMList.indexOf(element); .indexOf()
     * @apiName IndexOf
     * @apiDescription Get index of element from selected elements.
     *
     * @apiParam {HTMLElement} element HTML ELement or string CSS Selector. Return -1 if not found.
     *
     * @apiExample {js} Sample
     * // Get index number using HTML Element.
     * var span = $dom('span').get(2);
     * $dom('span').indexOf(span); // Return 2
     *
     * // Get index number using selector.
     * $dom('span').indexOf('.foo');
     */
    $dom.module.indexOf = function(elem) {
        if (isHTML(elem)) {
            return this.toArray().indexOf(elem);
        } else if (isString(elem)) {
            return this.toArray().indexOf(this.filter(elem).get());
        }

        return -1;
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {tostring} DOMList.toString(); .toString()
     * @apiName ToString
     * @apiDescription Convert first selected element to HTML String. Use 'true` as argument to convert all selected elements and return array.
     *
     * @apiExample {js} Sample
     * $dom('span').toString(); // Convert first selected element and return HTML String.
     * $dom('span').toString(true); // Convert all elements and return array contains each HTML String.
     */
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {wrap} DOMList.wrap(htmlstring); .wrap()
     * @apiName Wrap
     * @apiDescription Wrap selected elements with new element.
     *
     * @apiParam {HTMLString} htmlstring HTML String to wrap element.
     *
     * @apiExample {js} Sample
     * $dom('span').wrap('<div class="wrapper">');
     */
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     * @api {wrapchild} DOMList.wrapChild(htmlstring); .wrapChild()
     * @apiName WrapChild
     * @apiDescription Wrap child elements of selected elements with new element.
     *
     * @apiParam {HTMLString} htmlstring HTML String to wrap child element.
     *
     * @apiExample {js} Sample
     * // Wrap the container childrens with new container.
     * $dom('.container').wrapChild('<div class="inner-container">');
     */
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {siblings} DOMList.siblings(); .siblings()
     * @apiName Siblings
     * @apiDescription Get sibling elements of first selected elements.
     *
     * @apiExample {js} Sample
     * $dom('body').siblings(); // Return DOMList with <head> element since head is sibling of body.
     */
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core

     * @api {slice} DOMList.slice(index); .slice()
     * @apiName Slice
     * @apiDescription Remove element from the selected elements with specific index.
     *
     * @apiParam {Number} index Element index number. Use array to remove multiple element.
     *
     * @apiExample {js} Sample
     * $dom('span').slice(2); // Remove thrid element from selected elements.
     * $dom('span').slice([0,3,2]); // Remove multiple element from selected elements.
     */
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {remprop} DOMList.remProp(name); .remProp()
     * @apiName RemProp
     * @apiDescription Remove properties from selected elements. If properties also available in attributes, it's removed too.
     *
     * @apiParam {String} property String property name or array property name list.
     *
     * @apiExample {js} Sample
     * $dom('span').remProp('foo'); // Remove foo prop.
     * $dom('span').remProp(['foo', 'bar']); // Remove foo and bar prop.
     */
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {replace} DOMList.replace(target,source); .replace()
     * @apiName Replace
     * @apiDescription Replace matched target in selected elements with new element or existing element.
     *
     * @apiParam {String} CSS Selector or HTML Element.
     * @apiParam {String} HTML String to create new element or existing HTML Element.
     *
     * @apiExample {js} Sample
     * $dom('span').replace('.foo', '<span class="bar">'); // Replace using CSS Selector and HTML String.
     *
     * var foo = $dom('span').filter('.foo').get();
     * var bar = $dom('span').filter('.bar').get();
     *
     * $dom('span').replace(foo, bar); // Replace using HTML Element.
     */
    $dom.module.replace = function(trg, src) {
        if (isString(trg)) {
            return this.filter(trg).replaceWith(src);
        } else if (isHTML(trg)) {
            return $dom(trg).replaceWith(src);
        }

        return this;
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {replacewith} DOMList.replaceWith(source); .replaceWith()
     * @apiName ReplaceWith
     * @apiDescription Replace each selected elements with new element or existing element.
     * Replacing with HTML Element will only replace the first selected element.
     *
     * @apiParam {String} source HTML String to create new element or existing HTML Element.
     *
     * @apiExample {js} Sample
     * $dom('span').replaceWith('<a href="#">'); // Replace all span with new anchor element.
     * $dom('span').replaceWith(document.getElementById('foo')); // Replace with existing element.
     */
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     * @api {next} DOMList.next(query); .next()
     * @apiName Next
     * @apiDescription Get the next element after first selected element inside parent element.
     *
     * @apiParam {String} [query] CSS Selector to match the next element or Function to handle each next element and return true if match.
     *
     * @apiExample {js} Sample
     * $dom('span.foo').next(); // Get the next element after span.foo inside parent element.
     * $dom('span.foo').next('.bar'); // Get the next element after span.foo and the first match with .bar inside parent element.
     *
     * // Using function as query.
     * $dom('.foo').next(function() {
     *     return $dom(this).hasClass('bar') : true : false;
     * });
     */
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {nextall} DOMList.nextAll(query); .nextAll()
     * @apiName NextAll
     * @apiDescription Get all element after first selected element.
     *
     * @apiParam {String} [query] CSS Selector to match the next element or Function to handle each next element and return true if match.
     *
     * @apiExample {js} Sample
     * $dom('.foo').nextAll(); // Get all elements after .foo inside parent element.
     * $dom('.foo').nextAll('.bar'); // Get all .bar elements after .foo inside parent element.
     *
     * // Using function as query.
     * $dom('.foo').nextAll(function() {
     *     return $dom(this).hasClass('bar') : true : false;
     * });
     */
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {nextuntil} DOMList.nextUntil(query); .nextUntil()
     * @apiName nextuntil
     * @apiDescription Get all element after first selected element until found matched query.
     *
     * @apiParam {String} query CSS Selector to match the next element or Function to handle each next element and return true if match.
     *
     * @apiExample {js} Sample
     * $dom('.foo').nextUntil('.bar'); // Get all elements after .foo until found .bar inside parent element.
     *
     * // Using function as query.
     * $dom('.foo').nextUntil(function() {
     *     return $dom(this).hasClass('bar') : true : false;
     * });
     */
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     * @api {prev} DOMList.prev(query); .prev()
     * @apiName Prev
     * @apiDescription Get the prev element after first selected element inside parent element.
     *
     * @apiParam {String} [query] CSS Selector to match the prev element or Function to handle each prev element and return true if match.
     *
     * @apiExample {js} Sample
     * $dom('span.foo').prev(); // Get the prev element after span.foo inside parent element.
     * $dom('span.foo').prev('.bar'); // Get the prev element after span.foo and the first match with .bar inside parent element.
     *
     * // Using function as query.
     * $dom('.foo').prev(function() {
     *     return $dom(this).hasClass('bar') : true : false;
     * });
     */
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {prevall} DOMList.prevAll(query); .prevAll()
     * @apiName PrevAll
     * @apiDescription Get all element before first selected element.
     *
     * @apiParam {String} [query] CSS Selector to match the prev element or Function to handle each prev element and return true if match.
     *
     * @apiExample {js} Sample
     * $dom('.foo').prevAll(); // Get all elements before .foo inside parent element.
     * $dom('.foo').prevAll('.bar'); // Get all .bar elements before .foo inside parent element.
     *
     * // Using function as query.
     * $dom('.foo').prevAll(function() {
     *     return $dom(this).hasClass('bar') : true : false;
     * });
     */
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {prevuntil} DOMList.prevUntil(query); .prevUntil()
     * @apiName prevuntil
     * @apiDescription Get all element before first selected element until found matched query.
     *
     * @apiParam {String} query CSS Selector to match the prev element or Function to handle each prev element and return true if match.
     *
     * @apiExample {js} Sample
     * $dom('.foo').prevUntil('.bar'); // Get all elements before .foo until found .bar inside parent element.
     *
     * // Using function as query.
     * $dom('.foo').prevUntil(function() {
     *     return $dom(this).hasClass('bar') : true : false;
     * });
     */
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Class
     *
     * @api {addclass} DOMList.addClass(name); .addClass()
     * @apiName AddClass
     * @apiDescription Add class to class selected elements lists.
     *
     * @apiParam {String} name String class name to add. If you want, you can use array to add multiple class.
     *
     * @apiExample {js} Sample #1
     * $dom('.foo').addClas('clearfix'); // Add single class.
     * $dom('.foo').addClass('clearfix fit relative'); // Add multiple class.
     * $dom('.foo').addClass(['clearfix', 'fit', 'relative']); // Add multiple class.
     */
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Class
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Class
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
     *
     * @api {Texts} DOMList.texts(); .texts()
     * @apiName Texts
     * @apiDescription Get selected elements innerText.
     *
     * @apiExample {js} Sample #1
     * $('span').texts();
     */
    $dom.module.texts = function() {
        var result = [];

        this.each(function() {
            result.push(this.innerText);
        });

        return result;
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
     *
     * @api {html} DOMList.html(value); .html()
     * @apiName HTML
     * @apiDescription Get the first selected elements innerHTML or set all selected elements innerHTML.
     *
     * @apiParam {Any} value Inner html value. Using DOMList or Array Element List will append them to the first selected element.
     *
     * @apiExample {js} Sample #1
     * $dom('span').html(); // Get first selected span innerHTML
     * $dom('span').html('foo'); // Set all span innerHTML to foo.
     */
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
     *
     * @api {HTMLs} DOMList.htmls(); .htmls()
     * @apiName HTMLs
     * @apiDescription Get selected elements innerHTML
     *
     * @apiExample {js} Sample #1
     * $('span').htmls();
     */
    $dom.module.htmls = function() {
        var result = [];

        this.each(function() {
            result.push(this.innerHTML);
        });

        return result;
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
     *
     * @api {clone} DOMList.clone(); .clone()
     * @apiName Clone
     * @apiDescription Clone selected elements.
     *
     * @apiExample {js} Sample #1
     * $dom('span').clone();
     */
    $dom.module.clone = function() {
        var cloned = [];

        this.each(function() {
            var clone = this.cloneNode(true);
            cloned.push(clone);
        });

        return $dom(cloned);
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
     *
     * @api {empty} DOMList.empty(); .empty()
     * @apiName Empty
     * @apiDescription Empty all selected elements.
     *
     * @apiExample {js} Sample #1
     * $dom('span').empty();
     */
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

/**
 * Modules That's Returns Boolean.
 */

(function($dom) {
    /**
     * @apiVersion 2.0.0
     * @apiGroup Checker
     *
     * @api {hasattr} DOMList.hasAttr(name); .hasAttr()
     * @apiName HasAttr
     * @apiDescription Check does the first selected element has specific attribute or not.
     *
     * @apiParam {Any} name String attribute name to check.<br>Use array to check does have one of attributes, or string separated by space to check does has both attribute.
     *
     * @apiExample {js} Sample #1
     * $dom('span').hasAttr('foo'); // Does has attribute foo.
     * $dom('span').hasAttr(['foo', 'bar']); // Does has attribute foo or bar.
     * $dom('span').hasAttr('foo bar'); // Does has attribute foo and bar.
     */
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Checker
     *
     * @api {hasdata} DOMList.hasData(name); .hasData()
     * @apiName HasData
     * @apiDescription Check does first selected element has specific data attribute.
     *
     * @apiParam {Any} String data-attribute name. Use array to check does has one of data-attribute, or use string to check does has both data-attribute.
     *
     * @apiExample Sample #1
     * $dom('span').hasData('foo'); // Check does has data-attribute 'data-foo'.
     * $dom('span').hasData(['foo', 'bar']); // Check does has data-attribute 'data-foo' or 'data-bar'.
     * $dom('span').hasData('foo bar'); // Check does has data-attribute 'data-foo' and 'data-bar'.
     */
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Checker
     *
     * @api {hasclass} DOMList.hasClass(name); .hasClass()
     * @apiName HasClass
     * @apiDescription Check does first selected element has specific class.
     *
     * @apiParam {Any} name String class name. Use array to check does has on of class, or use string space-delimiter to check does has both class.
     *
     * @apiExample Sample#1
     * $dom('span').hasClass('foo'); // Check does has class foo.
     * $dom('span').hasClass(['foo', 'bar']); // Check does has class foo or bar.
     * $dom('span').hasClass('foo bar'); // Check does has class foo and bar.
     */
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

    /**
     * @apiVersion 2.0.0
     * @apiGroup Checker
     *
     * @api {is} DOMList.is(query); .is()
     * @apiName Is
     * @apiDescription Check does first selected element is match with query or not.
     *
     * @apiParam {String} query CSS Selector string or HTML Element.
     *
     * @apiExample {js} Sample
     * $dom('span.foo').is('.foo'); // true
     * $dom('span.foo').is('.bar'); // false if span.foo don't have class bar.
     */
    $dom.module.is = function(query) {
        if (this.length <= 0) return false;

        if (isString(query)) {
            return this.first().filter(query).length > 0 ? true : false;
        } else if (isHTML(query)) {
            return this.get(0) === query ? true : false;
        }

        return false;
    };

    /**
     * @apiVersion 2.0.0
     * @apiGroup Checker
     *
     * @api {not} DOMList.not(query); .not()
     * @apiName Not
     * @apiDescription Check does first selected element is not match with query or not.
     *
     * @apiParam {String} query CSS Selector string or HTML Element.
     *
     * @apiExample {js} Sample
     * $dom('span.foo').not('.foo'); // false
     * $dom('span.foo').not('.bar'); // true if span.foo don't have class bar.
     */
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

    /**
     * @apiVersion 2.1.0
     * @apiGroup EventProvider
     *
     * @api {eventprovider} EventProvider .about
     * @apiName EventProvider
     * @apiDescription Create or trigger custom event to element.
     */
    EventProvider.prototype = {
        /**
         * @apiVersion 2.1.0
         * @apiGroup EventProvider
         *
         * @api EventProvider.search(name); .search()
         * @apiName evSearch
         * @apiDescription Search custom event.
         *
         * @apiParam {String} name String event name.
         *
         * @apiExample {js} Sample
         * EventProvider.search('swipe'); // Return swipe event provider object.
         */
        search: function(name) {
            if (isString(name)) {
                return isObject(this.events[name]) ? this.events[name] : undefined;
            }

            return undefined;
        },

        /**
         * @apiVersion 2.1.0
         * @apiGroup EventProvider
         * @api {register} EventProvider.register(name,maker,options); .register()
         * @apiName evRegister
         * @apiDescription Register custom event.
         *
         * @apiParam {String} name String custom event name.
         * @apiParam {Function} maker Function that handle event initialization. This function will be called by element if element listen to that event. You must manually trigger that event under this function.
         * @apiParam {Object} options Custom event options. E.g { bubbles: false, cancelable: false, detail: undefind }
         *
         * @apiExample {js} Sample
         * // Registering custom event.
         * EventProvider.register('maxclick', function() {
         *     // Listen click to the element.
         *     $dom(this).click(function() {
         *         if (!this.maxclick) this.maxclick = 1;
         *
         *         if (this.maxclick === 5) {
         *             // Trigger the event to target and add maxclick property to event object.
         *             EventProvider.dispatch('maxclick', this, { maxclick: this.maxclick });
         *         } else {
         *             this.maxclick++;
         *         }
         *     });
         * });
         *
         * // Listening event.
         * $dom('span').handle('maxclick', function(e) {
         *     console.log('Your reached max click: ' + e.maxclick);
         * });
         */
        register: function(name, provider, options) {
            if (isString(name) && isFunction(provider)) {
                this.events[name] = {
                    maker: provider,
                    event: new $root.CustomEvent(name, options)
                };
            }

            return this.events[name].event;
        },

        /**
         * @apiVersion 2.1.0
         * @apiGroup EventProvider
         *
         * @api {dispatch} EventProvider.dispatch(name,targetElement,properties); .dispatch()
         * @apiName evDispatch
         * @apiDescription Trigger custom event to element.
         *
         * @apiParam {String} Custom event name.
         * @apiParam {HTMLElement} HTML Element to trigger custom event on.
         * @apiParam {Object} [properties] Properties that will be added to event object. E.g { a: 1, b: 2 }. Then when event listener will get 'event.a' and 'event.b'.
         *
         * @apiExample {js} Sample
         * $dom('span')
         *     // Create listener.
         *     .handle('foo', function(e) {
         *         console.log(e.a, e.b);
         *     })
         *
         *     // Triggering event.
         *     .each(function() {
         *         EventProvider.dispatch('foo', this, { a: 1, b: 2 });
         *     });
         */
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

                        $dom(this).handle(['load', 'error'], function() {
                            eventProvider.loadQueue--;

                            if ($this.isloaded === true) {
                                eventProvider.loadedHandler();
                            }
                        });
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

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     * @api {ready} DOMList.ready(handler); $dom.ready()
     * @apiName Ready
     * @apiDescription Add handler to handle when document is ready to manipulate.
     *
     * @apiParam {Function} handler Function that handle when document is ready to manipulate.
     *
     * @apiExample {js} Sample
     * $dom.ready(function() { console.log('document ready'); });
     */
    $dom.ready = function(handler) {
        return new DocLoadListener('ready', handler);
    };

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     * @api {loaded} DOMList.loaded(handler); $dom.loaded()
     * @apiName Loaded
     * @apiDescription Add handler to handle when document is fully loaded.
     *
     * @apiParam {Function} handler Function that handle when document is loaded to manipulate.
     *
     * @apiExample {js} Sample
     * $dom.loaded(function() { console.log('document loaded'); });
     */
    $dom.loaded = function(handler) {
        return new DocLoadListener('loaded', handler);
    };

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {listen} DOMList.listen(name,type,handler); .listen()
     * @apiName Listen
     * @apiDescription Add named event handler to selected elements.
     * Named event handler give possibility to remove event handler only that has specific name, not remove all event handler.
     *
     * @apiParam {Multi} name String handler name, or object contains names, types and handlers.
     * @apiParam {Multi} type String event type, or object contains types.
     * @apiParam {Function} handler Function to handle event.
     *
     * @apiExample {js} Sample #1
     * // Handle click on spans with name fooclick.
     * $dom('span').listen('fooclick', 'click', function() {});
     *
     * // Handle multiple event with name foo.
     * $dom('span').listen('foo', {
     *     click: function() {},
     *     mouseenter: function() {}
     * );
     *
     * // Handle mutiple name and events.
     * $dom('span').listen({
     *     foo: {
     *         click: function() {}
     *     },
     *     bar: {
     *         click: function() {}
     *     }
     * });
     */
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

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {unlisten} DOMList.unlisten(name,type); .unlisten()
     * @apiName Unlisten
     * @apiDescription Remove named event handler from selected elements.
     *
     * @apiParam {Multi} name handler name or array handler names.
     * @apiParam {Multi} [type] String event type or array event types. Leave blank to remove all event from that name.
     *
     * @apiExample {js} Sample
     * // Remove fooclick handler.
     * $dom('span').unlisten('fooclick');
     *
     * // Remove click event from foo.
     * $dom('span').unlisten('foo', 'click');
     *
     * // Remove click event from foo and bar.
     * $dom('span').unlisten(['foo', 'bar'], 'click');
     *
     * // Remove click and mouseenter event from foo.
     * $dom('span').unlisten('foo', ['click', 'mouseenter']);
     *
     * // Remove click and mouseenter event from foo and bar.
     * $dom('span').unlisten(['foo', 'bar'], ['click', 'moueseenter']);
     */
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

    /**
     * @apiVersion 2.3.2
     * @apiGroup Events
     *
     * @api {handle} DOMList.handle(type,handler); .handle()
     * @apiName Handle
     * @apiDescription Add event handler to selected elements.
     *
     * @apiParam {Multi} type String event type or object contains events or array type list.
     * @apiParam {Function} [handler] Function to handle event.
     *
     * @apiExample {js} Sample
     * // Hanlde single event.
     * $dom('span').handle('click', function() {});
     *
     * // Handle multiple events.
     * $dom('span').handle({
     *     click: function() {},
     *     mouseenter: function() {}
     * });
     *
     * // Handle multiple event with single handler.
     * $dom('span').handle(['click', 'focus'], function() {});
     */
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

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {unhandle} DOMList.unhandle(type); .unhandle()
     * @apiName Unhandle
     * @apiDescription Remove event handler from selected elements.
     *
     * @apiParam {Multi} type String event type or array type list.
     *
     * @apiExample {js} Sample
     * // Remove single event.
     * $dom('span').unhandle('click');
     *
     * // Remove multiple event.
     * $dom('span').unhandle(['click', 'mouseenter']);
     */
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

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {trigger} DOMList.trigger(type,properties); .trigger()
     * @apiName Trigger
     * @apiDescription Dispatch an event to selected elements. You can also use alias .dispatch().
     *
     * @apiParam {String} type String event type. You can use array to dispatch multiple event.
     * @apiParam {Object} properties Object contains additional properties to added to event object.
     *
     * @apiExample {js} Sample
     * // Dispatch click event to button.
     * $dom('button').trigger('click');
     *
     * // Dispatch multiple event.
     * $dom('button').trigger(['focus', 'click']);
     *
     * // Dispatch click event with additional properties.
     * // Create listener.
     * $dom('button').click(function(e) {
     *     console.log(e.sender);
     * };
     *
     * // Trigger
     * $dom('button').trigger('click', { sender: 'document' });
     */
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
(function($root, $dom) {
    'use strict';

    /* EVENT ALIASES */
    /* ------------------------------------- */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {alias} DOMList.$alias(handler); $alias
     * @apiName Alias
     * @apiDescription Bind event or trigger event to selected elements. Alias is shortcut to bind event quickly. E.g DOMList.click(handler);
     *
     * @apiParam {Function} handler Function to handle event.
     *
     * @apiExample {js} Sample
     * $dom('span').click(function() {}); // Bind click event.
     * $dom('span').focus(); // Trigger focus event.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {blur} DOMList.blur(handler);  .blur()
     * @apiName blur
     * @apiDescription Handle blur event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {focus} DOMList.focus(handler);  .focus()
     * @apiName focus
     * @apiDescription Handle focus event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {focusin} DOMList.focusin(handler);  .focusin()
     * @apiName focusin
     * @apiDescription Handle focusin event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {focusout} DOMList.focusout(handler);  .focusout()
     * @apiName focusout
     * @apiDescription Handle focusout event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {load} DOMList.load(handler);  .load()
     * @apiName load
     * @apiDescription Handle load event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {resize} DOMList.resize(handler);  .resize()
     * @apiName resize
     * @apiDescription Handle resize event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {scroll} DOMList.scroll(handler);  .scroll()
     * @apiName scroll
     * @apiDescription Handle scroll event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {unload} DOMList.unload(handler);  .unload()
     * @apiName unload
     * @apiDescription Handle unload event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {click} DOMList.click(handler);  .click()
     * @apiName click
     * @apiDescription Handle click event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {dblclick} DOMList.dblclick(handler);  .dblclick()
     * @apiName dblclick
     * @apiDescription Handle dblclick event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {switch} DOMList.switch(handler);  .switch()
     * @apiName switch
     * @apiDescription Handle load event or trigger if no argument defined. Switch is toggle between on and off. 'state' property will be added to event object, state is 'on' or 'off'.
     *
     * @apiExample {js} Sample
     * $dom('a').switch(function(e) {
     *     if (e.state === 'on') {
     *         console.log('turned on');
     *     else if (e.state === 'off') {
     *         console.log('turned off');
     *     }
     * });
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {hover} DOMList.hover(handler);  .hover()
     * @apiName hover
     * @apiDescription Handle hover event or trigger if no argument defined. 'status' property will added to event object, status is 'enter' or 'leave'.
     *
     * @apiExample {js} Sample
     * $dom('a').hover(function(e) {
     *     if (e.status === 'enter') {
     *         console.log('entered');
     *     else if (e.status === 'leave') {
     *         console.log('leaving');
     *     }
     * });
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {mousedown} DOMList.mousedown(handler);  .mousedown()
     * @apiName mousedown
     * @apiDescription Handle mousedown event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {mouseup} DOMList.mouseup(handler);  .mouseup()
     * @apiName mouseup
     * @apiDescription Handle mouseup event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {mousemove} DOMList.mousemove(handler);  .mousemove()
     * @apiName mousemove
     * @apiDescription Handle mousemove event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {mouseover} DOMList.mouseover(handler);  .mouseover()
     * @apiName mouseover
     * @apiDescription Handle mouseover event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {mouseout} DOMList.mouseout(handler);  .mouseout()
     * @apiName mouseout
     * @apiDescription Handle mouseout event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {mouseenter} DOMList.mouseenter(handler);  .mouseenter()
     * @apiName mouseenter
     * @apiDescription Handle mouseenter event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {mouseleave} DOMList.mouseleave(handler);  .mouseleave()
     * @apiName mouseleave
     * @apiDescription Handle mouseleave event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {change} DOMList.change(handler);  .change()
     * @apiName change
     * @apiDescription Handle change event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {select} DOMList.select(handler);  .select()
     * @apiName select
     * @apiDescription Handle select event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {submit} DOMList.submit(handler);  .submit()
     * @apiName submit
     * @apiDescription Handle submit event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {keydown} DOMList.keydown(handler);  .keydown()
     * @apiName keydown
     * @apiDescription Handle keydown event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {keyup} DOMList.keyup(handler);  .keyup()
     * @apiName keyup
     * @apiDescription Handle keyup event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {keypress} DOMList.keypress(handler);  .keypress()
     * @apiName keypress
     * @apiDescription Handle keypress event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {error} DOMList.error(handler);  .error()
     * @apiName error
     * @apiDescription Handle error event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {contet} DOMList.contextmenu(handler);  .contextmenu()
     * @apiName contextmenu
     * @apiDescription Handle contextmenu event or trigger if no argument defined.
     */

    /* Global Shortcut */
    var alias = 'blur focus focusin focusout load resize scroll unload click dblclick switch hover mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(/\s+/);

    foreach(alias, function (name) {
        $dom.module[name] = function(handler) {
            if (isFunction(handler)) {
                return this.handle(name, handler);
            } else {
                return this.trigger(name);
            }
        };
    });

    /* Creating Hover Event */
    EventProvider.register('hover', function() {
        $dom(this).listen('HoverEvent', {
            'mouseenter': function() {
                EventProvider.dispatch('hover', this, { status: 'enter' });
            },
            'mouseleave': function() {
                EventProvider.dispatch('hover', this, { status: 'leave' });
            }
        });
    });

    /* Creating Switch Event */
    EventProvider.register('switch', function() {
        var $this = $dom(this);

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
    $dom.module.ratio = function(value) {
        if (this.length <= 0) return this;

        /* If value is defined, then set it */
        if (isString(value) && value.match(/^\d+:\d+$/)) {
            this.each(function() {
                this.ratio = value;

                // Getting box ratio part.
                var part = this.ratio.split(':');

                // Getting the box height depend on ratio.
                var height = Math.round($dom(this).width() / part[0] * part[1]);

                // Setting the box height.
                $dom(this).height(height);
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
