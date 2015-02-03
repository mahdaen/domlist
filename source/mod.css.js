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
