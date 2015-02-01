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
