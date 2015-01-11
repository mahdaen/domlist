DOMList
=======

**DOMList** is a DOM manager that extends the functionality of native `.querySelectorAll()`, works just like a **jQuery** but smaller and light. Even though it's similar with jQuery, **DOMList** has difference with jQuery in some module. E.g the way `.attr()` works.

Primarily, DOMList using the native `.querySelectorAll()` to select elements using CSS Selector, so **DOMList** has the smaller size. But it's only supported by modern browsers (Chrome 31+, Firefox 33+, IE9+, Safari 7+).

If you want to run DOMList on old browsers that don't support `.querySelectorAll()`, you can load Sizzle before loading DOMList. DOMList will looking for Sizzle when `.querySelectorAll()` is not available.

**DOMList** also bundled with **NativeJS** that have usefull functions.

#### **Downloads**
**DOMList** is available on NPM and Bower. So you can get the DOMList via `npm` and `bower`.
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
