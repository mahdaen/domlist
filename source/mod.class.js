(function($dom) {
    'use strict';

    /* Module to add Class */
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

    /* Module to Remove Class */
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

    /* Module to toggle class */
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
