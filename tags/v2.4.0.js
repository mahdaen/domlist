/**
 * @apiVersion 2.4.0
 * @apiGroup A. DOMAjax
 *
 * @api {ajax} $dom.ajax(options); $dom.ajax()
 * @apiName ajax
 * @apiDescription Perform AJAX request.
 *
 * @apiParam {Object} options Object that held ajax options.
 * @apiParam {String} options.url String target URL.
 * @apiParam {String} [options.method] String method name. Default is GET.
 * @apiParam {String} [options.type] String type of result should be. Default is JSON.
 * @apiParam {Object} [options.params] Object parameters to send in request.
 * @apiParam {String} [options.name] String name of current request. Usable when you want to abort the request.
 * @apiParam {Boolean} [options.async] Boolean does use async or not. Default is true.
 * @apiParam {Object} [options.body] Object request body to send.
 * @apiParam {Boolean} [options.withCredentials] Boolean does use credentials or not. Default is false.
 * @apiParam {Object} [options.headers] Object to set headers in request.
 * @apiParam {Function} [options.handler] Function to handle request event. <br/>
 * Available event is: success, error, loadstart, load, loadend, abort, timeout, progress. <br/>
 * All events also available as ajax prototype. <br/>
 * Success event will get: (data,xhr,event) as parameters. <br/>
 * Errors event will get: (error,xhr) as parameters. <br/>
 * Global event will get: (xhr,event) as parameters. <br/>
 *
 * @apiExample {js} Sample - Simple
 * // Simple ajax request
 * $dom.ajax({
 *     url: 'http://code.mahdaen.name/api/v3/projects?private_token=9d9234kdiw2',
 *     success: function(data, xhr, event) {
 *         console.log(data, xhr, event);
 *     }
 * });
 *
 * @apiExample {js} Sample - With Params
 * // Ajax request with params.
 * $dom.ajax({
 *     url: 'http://code.mahdaen.name/api/v3/projects/1/issues',
 *     params: {
 *         private_token: '9d9234kdiw2',
 *         id: 1,
 *         title: 'Test post issue'
 *     },
 *     method: 'POST',
 *     success: function(data, xhr, event) {
 *         console.log('Issue "' + data.title + '" created.');
 *     }
 * );
 *
 * @apiExample {js} Sample - Event Handler
 * $dom.get('http://code.mahdaen.name/api/v3/projects?private_token=2kis934kk9')
 *     .success(function(data,xhr,event) {})
 *     .error(function(error,xhr) {})
 *     .progress(function(xhr,event) {})
 *     .timeout(function(xhr,event) {});
 *
 * @apiExample {js} Sample - Abort
 * var gProj = $dom.get('http://code.mahdaen.name/api/v3/projects?private_token=2993kdksfi', {
 *     name: 'getProjects'
 * });
 *
 * // Stop directly.
 * gProj.stop();
 *
 * // Stop using abort.
 * $dom.abort('getProjects');
 *
 * // Stop all ajax requests.
 * $dom.abort();
 */

/**
 * @apiVersion 2.4.0
 * @apiGroup A. DOMAjax
 *
 * @api {ajaxget} $dom.get(url,options); $dom.get()
 * @apiName ajaxget
 * @apiDescription Perform ajax request with 'GET' method.
 *
 * @apiParam {String} url String target URL.
 * @apiParam {Object} options Object request options.
 */

/**
 * @apiVersion 2.4.0
 * @apiGroup A. DOMAjax
 *
 * @api {ajaxpost} $dom.post(url,options); $dom.post()
 * @apiName ajaxpost
 * @apiDescription Perform ajax request with 'POST' method.
 *
 * @apiParam {String} url String target URL.
 * @apiParam {Object} options Object request options.
 */

/**
 * @apiVersion 2.4.0
 * @apiGroup A. DOMAjax
 *
 * @api {ajaxput} $dom.put(url,options); $dom.put()
 * @apiName ajaxput
 * @apiDescription Perform ajax request with 'PUT' method.
 *
 * @apiParam {String} url String target URL.
 * @apiParam {Object} options Object request options.
 */

/**
 * @apiVersion 2.4.0
 * @apiGroup A. DOMAjax
 *
 * @api {ajaxdelete} $dom.delete(url,options); $dom.delete()
 * @apiName ajaxdelete
 * @apiDescription Perform ajax request with 'DELETE' method.
 *
 * @apiParam {String} url String target URL.
 * @apiParam {Object} options Object request options.
 */

/**
 * @apiVersion 2.4.0
 * @apiGroup A. DOMAjax
 *
 * @api {stop} $dom.stop(); $dom.stop()
 * @apiName stop
 * @apiDescription Stop current ajax request.
 */

/**
 * @apiVersion 2.4.2
 * @apiGroup A. DOMAjax
 *
 * @api {loadURL} DOMList.loadURL(url,callback); .loadURL()
 * @apiName loadURL
 * @apiDescription Set content of selected elements by loading contents from URL.
 *
 * @apiParam {String} url String target URL.
 * @apiParam {Function} [callback] Function that will be called when content loaded or error occurs.
 *
 * @apiExample {js} Sample
 * // Without callback
 * $dom('.profile').loadURL('http://domain.com/profile?id=23999');
 *
 * // With callback
 * $dom('.profile').loadURL('http://domain.com/profile?id=293944', function(data,err) {
 *     if (!err) {
 *         console.log('success');
 *     }
 * });
 */

//