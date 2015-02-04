DOMList
=======
**DOMList** simplify the native `.querySelectorAll()`. It's like a jQuery, but smaller since we use the native selector, also has more difference methods. But, it's only supported by browsers that support `.querySelectorAll()` API (Chrome 31+, Firefox 33+, IE9+, Safari 7+).

Even though it's similar with jQuery, it's has many difference like what the `.attr()` do. While jQuery only get the attribute as string, **DOMList** try to convert the result as javascript object. E.g: `<span foo="bar: 1, foobar: 2"></span>`, **DOMList** will return an object `{ bar: 1, foobar: 2 }` when getting the `foo` attribute.

My target is to help the web application development. I try to keep looking the possible ways to simplify the native browser API, like when I try to simplify the usage of `Notifications` API only with `$.notification('Notification Test').show();`.

If you want to run **DOMList** on old browsers that don't support `.querySelectorAll()`, you can load Sizzle before loading **DOMList**. **DOMList** will looking for Sizzle when `.querySelectorAll()` is not available.

**DOMList** also bundled with **NativeJS** that have usefull functions.

#### **Downloads**
**DOMList** is available on NPM and Bower. So you can get the **DOMList** via `npm` and `bower`.
```
npm install domlist
```
```
bower install domlist
```

#### **API Docs**
Read the docs here: https://mahdaen.github.io/domlist

#### **Contributions**
Feel free to contribute to this project. The active development is located at https://gitlab.com/keong/domlist. We use github only to publish the releases. Just create a merge request on gitlab and we will check that. ;)

We create the documentation using apiDoc and grunt. The documentation contains version comparison to makes user know the diffrence between each version. So, please write the documentation on the top of the module and add the version on that.
