define({
  "name": "DOMList",
  "version": "2.5.0",
  "description": "DOMList simplify the native .querySelectorAll(). It's like a jQuery, but smaller since we use the native selector, also has more difference methods. But, it's only supported by browsers that support .querySelectorAll() API.<br/><br/>Even though it's similar with jQuery, it's has many difference like what the .attr() do. While jQuery only get the attribute as string, DOMList try to convert the result as javascript object. E.g: \"foo='bar: 1, foobar: 2'\", DOMList will return an object { bar: 1, foobar: 2 } when getting the foo attribute.<br/><br/>My target is to help the web application development. I try to keep looking the possible ways to simplify the native browser API, like when I try to simplify the usage of Notifications API only with $.notification('Notification Test').show();.",
  "title": "DOMList - Native Query Helper",
  "sampleUrl": false,
  "apidoc": "0.2.0",
  "generator": {
    "name": "apidoc",
    "time": "2015-02-04T15:00:18.562Z",
    "url": "http://apidocjs.com",
    "version": "0.12.0"
  }
});