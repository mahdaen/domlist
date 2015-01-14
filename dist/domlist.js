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
        return typeof $object === 'object' && $object.indexOf === undefined && $object.splice === undefined ? true : false;
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
            modern = false;
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
    $root.$dom = $root.DOMList = function(query, context) { return new DOMList(query, context) };

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
     * @apiGroup DOMList Module Core
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
})(DOMList);

(function($dom) {
    'use strict';

    /**
     * @apiVersion 2.0.0
     * @apiGroup DOMList.Module.Class
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
     * @apiGroup DOMList Module Inject
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
    $dom.module.html = function(value) {
        if (this.length <= 0) return this;

        if (isDefined(value)) {
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
     * @apiGroup DOMList Module Inject
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
     * @apiGroup DOMList Module Inject
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
     * @apiGroup DOMList Module Inject
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
     * @apiGroup DOMList Module Boolean
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
     * @apiGroup DOMList Module Boolean
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
     * @apiGroup DOMList Module Boolean
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
})(DOMList);
