/**
 * @apiVersion 2.5.0
 * @apiGroup B. DOMNotice
 *
 * @api {notification} DOMList.notification(title,options) DOMList.notification()
 * @apiName notification
 * @apiDescription Create new or manage HTML5 Notification API.
 * With DOMNotice, you can simply show new notification or use existing notification object to show notification.
 * DOMNotice will request permission when first time created.
 *
 * @apiParam {String} [title] String Notification title.
 * @apiParam {Object} [options] Object that contains Notifications options.
 * options contains "body, dir, tag, icon, lang" and noticiation callbacks "onclick, onclose, onshow, onerror".
 *
 * @apiExample {js} Sample:
 * // Create new notifications and request permission if not already granted.
 * // Notification will show after permission granted.
 * var notif = $.notification('Notification Test', { body: 'Lorem ipsum dolor' }).show();
 *
 * // Show another message using existing DOMNotice object.
 * notif.set('body', 'Another lorem ipsum').show('Another Test');
 *
 * // Using callback in existing DOMNotice object.
 * notif.onclick(function(e) { console.log(e, this) }).show('Notification with callback');
 */

/**
 * @apiVersion 2.5.0
 * @apiGroup B. DOMNotice
 *
 * @api {show} DOMNotice.show(title,options) .show()
 * @apiName show
 * @apiDescription Show the notification.
 *
 * @apiParam {String} [title] String notification title.
 * @apiParam {Object} [options] Object notification options without callbacks.
 */

/**
 * @apiVersion 2.5.0
 * @apiGroup B. DOMNotice
 *
 * @api {set} DOMNotice.set(name,value) .set()
 * @apiName set
 * @apiDescription Set notification options.
 *
 * @apiParam {String} name String option name or Object options.
 * @apiParam {Object} value String option value or leave blank if name is object.
 */

/**
 * @apiVersion 2.5.0
 * @apiGroup B. DOMNotice
 *
 * @api {onclick} DOMNotice.onclick(handler) .onclick()
 * @apiName onclick
 * @apiDescription Handle notification onclick event.
 *
 * @apiParam {Function} handler Function to handle event. Hanlder will become DOMNotice object and get event as param.
 */

/**
 * @apiVersion 2.5.0
 * @apiGroup B. DOMNotice
 *
 * @api {onshow} DOMNotice.onshow(handler) .onshow()
 * @apiName onshow
 * @apiDescription Handle notification onshow event.
 *
 * @apiParam {Function} handler Function to handle event. Hanlder will become DOMNotice object and get event as param.
 */

/**
 * @apiVersion 2.5.0
 * @apiGroup B. DOMNotice
 *
 * @api {onerror} DOMNotice.onerror(handler) .onerror()
 * @apiName onerror
 * @apiDescription Handle notification onerror event.
 *
 * @apiParam {Function} handler Function to handle event. Hanlder will become DOMNotice object and get event as param.
 */

/**
 * @apiVersion 2.5.0
 * @apiGroup B. DOMNotice
 *
 * @api {onclose} DOMNotice.onclose(handler) .onclose()
 * @apiName onclose
 * @apiDescription Handle notification onclose event.
 *
 * @apiParam {Function} handler Function to handle event. Hanlder will become DOMNotice object and get event as param.
 */

//