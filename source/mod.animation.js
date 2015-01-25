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
