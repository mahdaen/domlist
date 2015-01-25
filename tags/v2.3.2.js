/**
 * @apiVersion 2.3.2
 * @apiGroup 7. Events
 * @api {loaded} DOMList.loaded(handler); $dom.loaded()
 * @apiName Loaded
 * @apiDescription Add handler to handle when document is fully loaded.
 * This event wont fired until all images loaded.
 * Since v2.3.2, you can delay the load event with increasing loadQueue counter, since this event will loaded after loadQueue value is 0.
 *
 * @apiParam {Function} handler Function that handle when document is loaded to manipulate.
 *
 * @apiExample {js} Sample
 * $dom.loaded(function() { console.log('document loaded'); });
 *
 * @apiExample {js} Queue Sample
 * $.ready(function() {
 *     // Create custom background image loader.
 *     $dom('[bg-img]').each(function() {
 *         // Increase queue.
 *         EventProvider.loadQueue++;
 *
 *         // Create image to detect load status.
 *         var img = $dom('<img>').attr('src', this.getAttribute('bg-img'));
 *
 *         // Handle img load event to decrease queue.
 *         img.get().onload = function() {
 *             EventProvider.loadQueue--;
 *
 *             // Fire loadHandler if window already loaded to check the loadQueue count
 *             // and check whether should be executed.
 *             if (window.isloaded) EventProvider.loadHandler();
 *         };
 *     });
 * });
 */

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
