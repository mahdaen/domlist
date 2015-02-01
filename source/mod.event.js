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
