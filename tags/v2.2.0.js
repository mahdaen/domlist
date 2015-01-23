/* CSS Modules ---------------------- */

/**
 * @apiVersion 2.2.0
 * @apiGroup 8. CSS
 *
 * @api {css} DOMList.css(property,value); .css()
 * @apiName CSS
 * @apiDescription Get or Set Inline CSS Styles. We detect and use native browser version of css. So you don't need to add prefix in non-standard css properties.
 *
 * @apiParam {String} property String CSS Property name. You can use object to set multiple CSS. Leave blank to get all available inline css and DOMList will return an object. CSS Property name is case incensitive.
 * @apiParam {String} value String CSS Value. You can use number or boolean as well.
 *
 * @apiExample {js} Sample
 * // Set single property.
 * $dom('span').css('background-image', 'url(...)');
 *
 * // Set multiple properties.
 * $dom('span').css({
 *     backgroundImage: 'url(...)',
 *     'background-color': '#ccc',
 *     borderradius: 3
 * });
 *
 * // Get single property.
 * var bg = $dom('span').css('background-image');
 *
 * // Get all css.
 * var csses = $dom('span').css();
 */

/**
 * @apiVersion 2.2.0
 * @apiGroup 8. CSS
 *
 * @api {cstyle} DOMList.cstyle(property); .cstyle()
 * @apiName CStyle
 * @apiDescription Get computed css from first selected element.
 *
 * @apiParam {String} property String CSS Property name or array property list to get multiple properties.
 *
 * @apiExample {js} Sample
 * $dom('span').cstyle('width'); // Get computed width.
 * $dom('span').cstyle(['width', 'height']); // Get computed width and height.
 */

/**
 * @apiVersion 2.2.0
 * @apiGroup 8. CSS
 *
 * @api {offsetWidth} DOMList.offsetWidth(); .offsetWidth()
 * @apiName offsetWidth
 * @apiDescription Get offsetWidth of first selected element.
 *
 * @apiExample {js} Sample
 * $dom('span').offsetWidth();
 */

/**
 * @apiVersion 2.2.0
 * @apiGroup 8. CSS
 *
 * @api {offsetHeight} DOMList.offsetHeight(); .offsetHeight()
 * @apiName offsetHeight
 * @apiDescription Get offsetHeight of first selected element.
 *
 * @apiExample {js} Sample
 * $dom('span').offsetHeight();
 */

/**
 * @apiVersion 2.2.0
 * @apiGroup 8. CSS
 *
 * @api {clientWidth} DOMList.clientWidth(); .clientWidth()
 * @apiName clientWidth
 * @apiDescription Get clientWidth of first selected element.
 *
 * @apiExample {js} Sample
 * $dom('span').clientWidth();
 */

/**
 * @apiVersion 2.2.0
 * @apiGroup 8. CSS
 *
 * @api {clientHeight} DOMList.clientHeight(); .clientHeight()
 * @apiName clientHeight
 * @apiDescription Get clientHeight of first selected element.
 *
 * @apiExample {js} Sample
 * $dom('span').clientHeight();
 */

/**
 * @apiVersion 2.2.0
 * @apiGroup 8. CSS
 *
 * @api {scrollWidth} DOMList.scrollWidth(); .scrollWidth()
 * @apiName scrollWidth
 * @apiDescription Get scrollWidth of first selected element.
 *
 * @apiExample {js} Sample
 * $dom('span').scrollWidth();
 */

/**
 * @apiVersion 2.2.0
 * @apiGroup 8. CSS
 *
 * @api {scrollHeight} DOMList.scrollHeight(); .scrollHeight()
 * @apiName scrollHeight
 * @apiDescription Get scrollHeight of first selected element.
 *
 * @apiExample {js} Sample
 * $dom('span').scrollHeight();
 */

/**
 * @apiVersion 2.2.0
 * @apiGroup 8. CSS
 *
 * @api {scrollTop} DOMList.scrollTop(); .scrollTop()
 * @apiName scrollTop
 * @apiDescription Get scrollTop of first selected element.
 *
 * @apiExample {js} Sample
 * $dom('span').scrollTop();
 */

/**
 * @apiVersion 2.2.0
 * @apiGroup 8. CSS
 *
 * @api {scrollLeft} DOMList.scrollLeft(); .scrollLeft()
 * @apiName scrollLeft
 * @apiDescription Get scrollLeft of first selected element.
 *
 * @apiExample {js} Sample
 * $dom('span').scrollLeft();
 */

/**
 * @apiVersion 2.2.0
 * @apiGroup 8. CSS
 *
 * @api {offset} DOMList.offset(); .offset()
 * @apiName offset
 * @apiDescription Get offset of first selected element. Returns object { width, height, scrollTop, scrollLeft, top, left, ratio };
 *
 * @apiExample {js} Sample
 * $dom('span').offset();
 */

/**
 * @apiVersion 2.2.0
 * @apiGroup 8. CSS
 *
 * @api {ratio} DOMList.ratio(ratio); .ratio()
 * @apiName ratio
 * @apiDescription Get or set box ratio of first selected element.
 *
 * @apiExample {js} Sample
 * $dom('span').ratio(); // Get the box ratio.
 * $dom('span').ratio('16:9'); // Set the box ratio.
 */

/**
 * @apiVersion 2.2.0
 * @apiGroup 8. CSS
 *
 * @api {orientation} DOMList.orientation(); .orientation()
 * @apiName orientation
 * @apiDescription Get and apply box orientation of first selected element. Attribute 'portrait' or 'landscape' will added to each elements.
 *
 * @apiExample {js} Sample
 * $dom('span').orientation(); // Get the box orientation.
 */

