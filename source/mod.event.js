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