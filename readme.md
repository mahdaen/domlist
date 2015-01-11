DOMList
=======

**DOMList** is a DOM manager that extends the functionality of native `.querySelectorAll()`, works just like a **jQuery** but smaller and light. Even though it's similar with jQuery, **DOMList** has difference with jQuery in some module. E.g the way `.attr()` works.

Primarily, DOMList using the native `.querySelectorAll()` to select elements using CSS Selector, so **DOMList** has the smaller size. But it's only supported by modern browsers (Chrome 31+, Firefox 33+, IE9+, Safari 7+).

If you want to run DOMList on old browsers that don't support `.querySelectorAll()`, you can load Sizzle before loading DOMList. DOMList will looking for Sizzle when `.querySelectorAll()` is not available.

#### **API Docs**
Read the docs here: https://mahdaen.github.io/domlist
