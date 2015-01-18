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
