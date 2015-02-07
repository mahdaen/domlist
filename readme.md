DOMList
=======
**DOMList** simplify the native `.querySelectorAll()`. It's like a jQuery, but smaller since we use the native selector, also has more difference methods. But, it's only supported by browsers that support `.querySelectorAll()` API (Chrome 31+, Firefox 33+, IE9+, Safari 7+).

Even though it's similar with jQuery, it's has many difference like what the `.attr()` do. While jQuery only get the attribute as string, **DOMList** try to convert the result as javascript object. E.g:
```
<span foo="bar: 1, foobar: 2"></span>
```
**DOMList** will return an object `{ bar: 1, foobar: 2 }` when getting the `foo` attribute.

My target is to help the web application development. I try to keep looking the possible ways to simplify the native browser API, like when I try to simplify the usage of `Notifications` API only with `$.notification('Notification Test').show();`.

If you want to run **DOMList** on old browsers that don't support `.querySelectorAll()`, you can load Sizzle before loading **DOMList**. **DOMList** will looking for Sizzle when `.querySelectorAll()` is not available.

**DOMList** also bundled with [NativeJS](https://github.com/mahdaen/native-js) that have usefull functions.

## **Downloads**
**DOMList** is available on NPM and Bower. So you can get the **DOMList** via `npm` and `bower`.
```
npm install domlist
```
```
bower install domlist
```

#### **Sample $dom.notification() usage**
```js
// Create new notifications and request permission if not already granted.
// Notification will show after permission granted.
var notif = $dom.notification('Notification Test', { body: 'Lorem ipsum dolor' }).show();

// Show another message using existing DOMNotice object.
notif.set('body', 'Another lorem ipsum').show('Another Test');

// Using callback in existing DOMNotice object.
notif.onclick(function(e) { console.log(e, this) }).show('Notification with callback');
```

#### **Sample .attr() usage**
```html
<span class="foo" bar="10" foo="false" foobar="[1,2,3]"></span>
```
```js
// Get all attributes.
var attr = $dom('.foo').attr();
```
**@returns**: `{ class: "foo", bar: 10, foo: false, foobar: [1,2,3] }`

```js
// Set multiple attribute and value.
$dom('.foo').attr({ foo: true, bar: 100, foobar: { a: 1, b: 2, c: 3 } });
```

#### **Sample .css() usage**
```js
// Set single property.
$dom('span').css('background-image', 'url(...)');

// Set multiple properties.
$dom('span').css({
    backgroundImage: 'url(...)',
    'background-color': '#ccc',
    borderradius: 3
});

// Get single property.
var bg = $dom('span').css('background-image');

// Get all css.
var csses = $dom('span').css();
```

#### **Sample .keyframes() usage**
`.keyframes()` require `GSAP`.

```js
$dom('.card').keyframes({
   10: {
       color: 'red'
   },
   50: {
       color: 'green'
   },
   100: {
       color: 'blue'
   }
}, {
    duration: 5,
    ease: Power3.easeInOut
}, function() {
    console.log('Keyframes finished.');
});
```

#### **Sample .listen() usage**
```js
// Handle click on spans with name fooclick.
$dom('span').listen('fooclick', 'click', function() {});

// Handle multiple event with name foo.
$dom('span').listen('foo', {
    click: function() {},
    mouseenter: function() {}
);

// Handle mutiple name and events.
$dom('span').listen({
    foo: {
        click: function() {}
    },
    bar: {
        click: function() {}
    }
});

// Remove click listener with name 'foo'.
$dom('span').unlisten('foo', 'click');

// Remove all listener with name 'foo'.
$dom('span').unlisten('foo');
```

## **API Docs**
Read the docs here: [Docs](https://mahdaen.github.io/domlist) and [API Docs](https://mahdaen.github.io/domlist/apidocs)

## **Contributions**
Feel free to contribute to this project. The active development is located at [GitLab](https://gitlab.com/keong/domlist). We use github only to publish the releases. Just create a merge request on gitlab and we will check that. ;)

We create the documentation using apiDoc and grunt. The documentation contains version comparison to makes user know the diffrence between each version. So, please write the documentation on the top of the module and add the version on that.
