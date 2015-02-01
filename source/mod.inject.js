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
