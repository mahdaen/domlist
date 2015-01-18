(function($root, $dom) {
    'use strict';

    /* EVENT ALIASES */
    /* ------------------------------------- */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {alias} DOMList.$alias(handler); $alias
     * @apiName Alias
     * @apiDescription Bind event or trigger event to selected elements. Alias is shortcut to bind event quickly. E.g DOMList.click(handler);
     *
     * @apiParam {Function} handler Function to handle event.
     *
     * @apiExample {js} Sample
     * $dom('span').click(function() {}); // Bind click event.
     * $dom('span').focus(); // Trigger focus event.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {blur} DOMList.blur(handler);  .blur()
     * @apiName blur
     * @apiDescription Handle blur event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {focus} DOMList.focus(handler);  .focus()
     * @apiName focus
     * @apiDescription Handle focus event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {focusin} DOMList.focusin(handler);  .focusin()
     * @apiName focusin
     * @apiDescription Handle focusin event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {focusout} DOMList.focusout(handler);  .focusout()
     * @apiName focusout
     * @apiDescription Handle focusout event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {load} DOMList.load(handler);  .load()
     * @apiName load
     * @apiDescription Handle load event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {resize} DOMList.resize(handler);  .resize()
     * @apiName resize
     * @apiDescription Handle resize event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {scroll} DOMList.scroll(handler);  .scroll()
     * @apiName scroll
     * @apiDescription Handle scroll event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {unload} DOMList.unload(handler);  .unload()
     * @apiName unload
     * @apiDescription Handle unload event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {click} DOMList.click(handler);  .click()
     * @apiName click
     * @apiDescription Handle click event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {dblclick} DOMList.dblclick(handler);  .dblclick()
     * @apiName dblclick
     * @apiDescription Handle dblclick event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {switch} DOMList.switch(handler);  .switch()
     * @apiName switch
     * @apiDescription Handle load event or trigger if no argument defined. Switch is toggle between on and off. 'state' property provided on event object.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {hover} DOMList.hover(handler);  .hover()
     * @apiName hover
     * @apiDescription Handle hover event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {mousedown} DOMList.mousedown(handler);  .mousedown()
     * @apiName mousedown
     * @apiDescription Handle mousedown event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {mouseup} DOMList.mouseup(handler);  .mouseup()
     * @apiName mouseup
     * @apiDescription Handle mouseup event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {mousemove} DOMList.mousemove(handler);  .mousemove()
     * @apiName mousemove
     * @apiDescription Handle mousemove event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {mouseover} DOMList.mouseover(handler);  .mouseover()
     * @apiName mouseover
     * @apiDescription Handle mouseover event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {mouseout} DOMList.mouseout(handler);  .mouseout()
     * @apiName mouseout
     * @apiDescription Handle mouseout event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {mouseenter} DOMList.mouseenter(handler);  .mouseenter()
     * @apiName mouseenter
     * @apiDescription Handle mouseenter event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {mouseleave} DOMList.mouseleave(handler);  .mouseleave()
     * @apiName mouseleave
     * @apiDescription Handle mouseleave event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {change} DOMList.change(handler);  .change()
     * @apiName change
     * @apiDescription Handle change event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {select} DOMList.select(handler);  .select()
     * @apiName select
     * @apiDescription Handle select event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {submit} DOMList.submit(handler);  .submit()
     * @apiName submit
     * @apiDescription Handle submit event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {keydown} DOMList.keydown(handler);  .keydown()
     * @apiName keydown
     * @apiDescription Handle keydown event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {keyup} DOMList.keyup(handler);  .keyup()
     * @apiName keyup
     * @apiDescription Handle keyup event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {keypress} DOMList.keypress(handler);  .keypress()
     * @apiName keypress
     * @apiDescription Handle keypress event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {error} DOMList.error(handler);  .error()
     * @apiName error
     * @apiDescription Handle error event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {contet} DOMList.contextmenu(handler);  .contextmenu()
     * @apiName contextmenu
     * @apiDescription Handle contextmenu event or trigger if no argument defined.
     */

    /* Global Shortcut */
    var alias = 'blur focus focusin focusout load resize scroll unload click dblclick switch hover mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(/\s+/);

    foreach(alias, function (name) {
        $dom.module[name] = function(handler) {
            if (isFunction(handler)) {
                return this.handle(name, handler);
            } else {
                return this.trigger(name);
            }
        };
    });

    /* Creating Hover Event */
    EventProvider.register('hover', function() {
        $dom(this).listen('HoverEvent', {
            'mouseenter': function() {
                EventProvider.dispatch('hover', this, { direction: 'enter' });
            },
            'mouseleave': function() {
                EventProvider.dispatch('hover', this, { direction: 'leave' });
            }
        });
    });

    /* Creating Switch Event */
    EventProvider.register('switch', function() {
        var $this = $dom(this);

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