(function($root, $) {
    'use strict';

    /* Event Aliases Collections */

    /* Global Shortcut */
    var alias = 'blur focus focusin focusout load resize scroll unload click dblclick switch hover mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(/\s+/);

    foreach(alias, function (name) {
        $.module[name] = function(handler) {
            if (isFunction(handler)) {
                return this.handle(name, handler);
            } else {
                return this.trigger(name);
            }
        };
    });

    /* Creating Hover Event */
    EventProvider.register('hover', function() {
        $(this).listen('HoverEvent', {
            'mouseenter': function(e) {
                EventProvider.dispatch('hover', this, { status: 'enter' });
            },
            'mouseleave': function() {
                EventProvider.dispatch('hover', this, { status: 'leave' });
            }
        });
    });

    /* Creating Switch Event */
    EventProvider.register('switch', function() {
        var $this = $(this);

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
