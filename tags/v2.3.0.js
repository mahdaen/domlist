/* Animation Modules ---------------------------- */
/**
 * @apiVersion 2.3.0
 * @apiGroup 9. Animation
 *
 * @api {animate} DOMList.animate(properties,options,callback); .animate()
 * @apiName animate
 * @apiDescription Animate selected elements. Animation needs TweenMax (GSAP) to run. See TweenMax docs to find needed options.
 *
 * @apiParam {Object} properties Object CSS Property and value list. Use CSS Properties only for each key. Don't put GSAP options here.
 *
 * @apiParam {Object} [options] Object animation options.
 * Use number as duration if no special options like easing. Duration is in seconds not milliseconds.
 * Default duration if no options defined or nor duration defined is 0.5s
 *
 * @apiParam {Function} [callback] Function to be called when animations finished.
 *
 * @apiExample {js} Sample
 * // Animate with callback and special options in 3s.
 * $dom('.card').animate({
 *     color: 'red',
 *     opacity: 0.5
 * }, {
 *     duration: 3,
 *     ease: Power4.easeInOut
 * }, function() {
 *     console.log('animation finished');
 * });
 *
 * // Animate without callback and special options in 5s.
 * $dom('.card').animate({
 *     opacity: 0.5,
 *     backgroundColor: 'green'
 * }, 5);
 */

/**
 * @apiVersion 2.3.0
 * @apiGroup 9. Animation
 *
 * @api {keyframes} DOMList.keyframes(times,options,callback); .keyframes()
 * @apiName keyframes
 * @apiDescription Animate selected elements with keyframes.
 *
 * @apiParam {Object} times Object css timeline. Main key should use number. E.g { 10: {}, 50: {}, 100: {} }. 10 is mean 10%, 50 is 50% an so on.
 * @apiParam {Object} [options] Each animation options. See .animate() docs to find out about the options.
 * @apiParam {Function} [callback] Callback that will be called when keyframes finished.
 *
 * @apiExample {js} Sample
 * $dom('.card').keyframes({
 *    10: {
 *        color: 'red'
 *    },
 *    50: {
 *        color: 'green'
 *    },
 *    100: {
 *        color: 'blue'
 *    }
 * }, {
 *     duration: 5,
 *     ease: Power3.easeInOut
 * }, function() {
 *     console.log('Keyframes finished.');
 * });
 */

/**
 * @apiVersion 2.3.0
 * @apiGroup 9. Animation
 *
 * @api {pause} DOMList.pause() .pause()
 * @apiName pause
 * @apiDescription Pause animation in selected elements.
 */

/**
 * @apiVersion 2.3.0
 * @apiGroup 9. Animation
 *
 * @api {resume} DOMList.resume() .resume()
 * @apiName resume
 * @apiDescription Resume animation in selected elements.
 */

/**
 * @apiVersion 2.3.0
 * @apiGroup 9. Animation
 *
 * @api {stop} DOMList.stop() .stop()
 * @apiName stop
 * @apiDescription Stop animation in selected elements.
 */

/**
 * @apiVersion 2.3.0
 * @apiGroup 9. Animation
 *
 * @api {reverse} DOMList.reverse() .reverse()
 * @apiName reverse
 * @apiDescription Reverse animation in selected elements.
 */

/**
 * @apiVersion 2.3.0
 * @apiGroup 9. Animation
 *
 * @api {seek} DOMList.seek(time) .seek()
 * @apiName seek
 * @apiDescription Seek animation to time in selected elements.
 * @apiParam {Number} time Time in seconds to jump in.
 */

/**
 * @apiVersion 2.3.0
 * @apiGroup 9. Animation
 *
 * @api {timeScale} DOMList.timeScale(scale) .timeScale()
 * @apiName timeScale
 * @apiDescription Scale animation time in selected elements.
 * @apiParam {Number} scale Number of scale time.
 */

/**
 * @apiVersion 2.3.0
 * @apiGroup 9. Animation
 *
 * @api {fadeIn} DOMList.fadeIn(duration,callback) .fadeIn()
 * @apiName fadeIn
 * @apiDescription Fade in selected elements.
 * @apiParam {Number} duration Fade duration in seconds.
 * @apiParam {Function} [callback] Callback to be called when fade is done.
 */

/**
 * @apiVersion 2.3.0
 * @apiGroup 9. Animation
 *
 * @api {fadeOut} DOMList.fadeOut(duration,callback) .fadeOut()
 * @apiName fadeOut
 * @apiDescription Fade out selected elements.
 * @apiParam {Number} duration Fade duration in seconds.
 * @apiParam {Function} [callback] Callback to be called when fade is done.
 */

/**
 * @apiVersion 2.3.0
 * @apiGroup 9. Animation
 *
 * @api {fadeToggle} DOMList.fadeToggle(duration,callback) .fadeToggle()
 * @apiName fadeToggle
 * @apiDescription Toggle fade in-out selected elements.
 * @apiParam {Number} duration Fade duration in seconds.
 * @apiParam {Function} [callback] Callback to be called when fade is done.
 */

/**
 * @apiVersion 2.3.0
 * @apiGroup 9. Animation
 *
 * @api {!beta} DOMList.slideUp(duration,callback) .slideUp()
 * @apiName slideUp
 * @apiDescription Slide up selected elements.
 * @apiParam {Number} duration Slide duration in seconds.
 * @apiParam {Function} [callback] Callback to be called when slide is done.
 */

/**
 * @apiVersion 2.3.0
 * @apiGroup 9. Animation
 *
 * @api {!beta} DOMList.slideDown(duration,callback) .slideDown()
 * @apiName slideDown
 * @apiDescription Slide down selected elements.
 * @apiParam {Number} duration Slide duration in seconds.
 * @apiParam {Function} [callback] Callback to be called when slide is done.
 */

/**
 * @apiVersion 2.3.0
 * @apiGroup 9. Animation
 *
 * @api {!beta} DOMList.slideLeft(duration,callback) .slideLeft()
 * @apiName slideLeft
 * @apiDescription Slide left selected elements.
 * @apiParam {Number} duration Slide duration in seconds.
 * @apiParam {Function} [callback] Callback to be called when slide is done.
 */

/**
 * @apiVersion 2.3.0
 * @apiGroup 9. Animation
 *
 * @api {!beta} DOMList.slideRight(duration,callback) .slideRight()
 * @apiName slideRight
 * @apiDescription Slide right selected elements.
 * @apiParam {Number} duration Slide duration in seconds.
 * @apiParam {Function} [callback] Callback to be called when slide is done.
 */

/**
 * @apiVersion 2.3.0
 * @apiGroup 9. Animation
 *
 * @api {!beta} DOMList.slideToggleY(duration,callback) .slideToggleY()
 * @apiName slideToggleY
 * @apiDescription Toggle slide up-down selected elements.
 * @apiParam {Number} duration Slide duration in seconds.
 * @apiParam {Function} [callback] Callback to be called when slide is done.
 */

/**
 * @apiVersion 2.3.0
 * @apiGroup 9. Animation
 *
 * @api {!beta} DOMList.slideToggleX(duration,callback) .slideToggleX()
 * @apiName slideToggleX
 * @apiDescription Toggle slide left-right selected elements.
 * @apiParam {Number} duration Slide duration in seconds.
 * @apiParam {Function} [callback] Callback to be called when slide is done.
 */
