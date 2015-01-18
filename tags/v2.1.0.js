    /**
     * @apiVersion 2.0.0
     * @apiGroup DOMList
     *
     * @api {selector} $dom(query,context); $dom()
     * @apiName DOMList
     *
     * @apiDescription
     * Select elements using CSS Selector or create new element using HTML formatted string.
     * <br><br>
     * Primary, DOMList using native .querySelectorAll() that's only supported by modern browsers (Chrome 31+, Firefox 33+, IE9+, Safari 7+).
     * <br><br>
     * If you want to use DOMList in older browser, you can load jQuery Sizzle before DOMList. DOMList will looking for Sizzle and use it if .querySelectorAll not found.
     * <br/><br/>
     *
     * @apiParam {String} query HTML Element, DOMList, CSS Selector string or HTML formatted string for create element.
     * @apiParam {Object} [context] CSS Selector String, HTML Element or DOMList to search in.
     *
     * @apiExample {js} Sample #1
     * // Find elements with tag-name 'button'.
     * var btn = $dom('button');
     *
     * @apiExample {js} Sample #2
     * // Create new element using HTML formatted string.
     * var btn = $dom('<a href="#" class="button">Anchor</a>');
     *
     * @apiExample {js} Sample #3
     * // Find elements with tag-name 'button' from 'section'.
     * var sc = $dom('section');
     * var bt = $dom('button', sc);
     *
     * @apiExample {js} Sample #4
     * // Find elements with tag-name 'button' from 'section' using CSS Selector string as context.
     * var bt = $dom('button', '.wrapper');
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup DOMList
     * @api {extend} $dom.exnted(name,handler); $dom.extend()
     * @apiName Extend
     * @apiDescription Register DOMList Modules.
     *
     * @apiParam {Multi} name String module name or object contains modules.
     * @apiParam {function} [handler] Function that handle module.
     *
     * @apiExample Sample
     * $dom.extend('foo', function() {}); // Add module 'foo' to DOMList.
     * $dom.extend({ foo: function() {}, bar: function() {} }); // Add multiple modules to DOMList.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup DOMList
     *
     * @api {domdata} $dom.data(name,value,context); $dom.data()
     * @apiName DOMData
     * @apiDescription Select elements that has data-attribute name or has data-attribute name with equal value. Using without arguments will select all elements that has data-attribute.
     *
     * @apiParam {Multi} name String data-attribute name. Use space-delimiter to select multiple name. Object contains data-attribute name and value. Array contains attributes name.
     * @apiParam {Multi} [value] Compare with value if you use string in 'name'. If value is HTML element or DOMList, it's used as context.
     * @apiParam {Multi} [context] HTML Element or DOMList as context.
     *
     * @apiExample {js} Sample #1
     * $dom.data(); // Select elements that has data-attribute.
     *
     * @apiExample {js} Sample #2
     * // It's like $dom('[data-foo="bar"]');
     *
     * $dom.data('foo', 'bar'); // Select elements that has data-attribute 'data-foo' and 'data-foo' value is 'bar'.
     *
     * $dom.data('foo bar'); // Select elements that has 'data-foo' or 'data-bar'.
     * $dom.data(['foo', 'bar']); // Select elements that has 'data-foo' or 'data-bar'.
     *
     * @apiExample {js} Sample #3
     * // It's like $dom('[data-foo="bar"], [data-bar="bar"]');
     *
     * $dom.data('foo bar', 'bar'); // Select elements that has 'data-foo' or 'data-bar' and both value is 'bar'.
     *
     * @apiExample {js} Sample #4
     * // It's like $dom('[data-foo], [data-bar]', div);
     *
     * var div = $dom('.foobar');
     * $dom.data('foo bar', div); // Select elements that has 'data-foo' or 'data-bar' from 'div' above.
     *
     * @apiExample {js} Sample #5
     * // Using object as name will find elements that has both condition.
     * // It's like $dom('[data-foo="bar"][data-bar]');
     *
     * $dom.data({ 'foo': 'bar', 'data-bar': '' }); // Select elements that has 'data-foo' and 'data-bar' and 'data-foo' value is 'bar'.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {push} DOMList.push(element); .push()
     * @apiName Push
     * @apiDescription Push single element or multiple element (DOMList or Array) to current DOMList. Using CSS selector string as element also accepted.
     *
     * @apiParam {Multi} element HTML Element, DOMList, Array Element List, or CSS Selector String.
     *
     * @apiExample Sample
     * var foo = $dom('.foo');
     * var bar = $dom('.bar')[0];
     *
     * foo.push(bar); // Push bar to foo.
     * foo.push([bar]); // Push bar to foo.
     * foo.push('.bar'); // Push bar to foo.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {first} DOMList.first(); .first()
     * @apiName First
     * @apiDescription Get the first child of selected elements. Return DOMList object.
     *
     * @apiExample {js} Sample #1
     * $dom('span').first();
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {firstchild} DOMList.firstChild(); .firstChild()
     * @apiName FirstChild
     * @apiDescription Get the first child of the first selected elements. Return DOMList object.
     *
     * @apiExample {js} Sample #1
     * $dom('.container').firstChild();
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {last} DOMList.last(); .last()
     * @apiName Last
     * @apiDescription Get the last child of selected elements. Return DOMList object.
     *
     * @apiExample {js} Sample #1
     * $dom('span').last();
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {lastchild} DOMList.lastChild(); .lastChild()
     * @apiName LastChild
     * @apiDescription Get the last child of the first selected elements. Return DOMList object.
     *
     * @apiExample {js} Sample #1
     * $dom('.container').lastChild();
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {nth} DOMList.nth(index); .nth()
     * @apiName NTH
     * @apiDescription Get the selected elements by specific index. Return DOMList object.
     *
     * @apiParam {Number} index Index number. Start from 0.
     *
     * @apiExample {js} Sample #1
     * $dom('span').nth(0);
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {nthChild} DOMList.nthChild(index); .nthChild()
     * @apiName NthChild
     * @apiDescription Get the child elements by specific index from the first selected elements. Return DOMList object.
     *
     * @apiParam {Number} index Index number. Start from 0.
     *
     * @apiExample {js} Sample #1
     * $dom('.container').nthChild(3);
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {children} DOMList.children(); .children()
     * @apiName Children
     * @apiDescription Get child elements of first selected element.
     *
     * @apiExample {js} Sample #1
     * $dom('.container').children();
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {finder} DOMList.find(query); .find()
     * @apiName Find
     * @apiDescription Find elements from current selected elements.
     *
     * @apiParam {String} query CSS Selector string.
     *
     * @apiExample {js} Sample #1
     * var wrap = $dom('.wrapper');
     * var span = wrap.find('span');
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {filter} DOMList.filter(query); .filter()
     * @apiName Filter
     * @apiDescription Filter the selected elements with specific CSS Selector.
     *
     * @apiParam {String} query String CSS Selector to filter.
     *
     * @apiExample Sample #1
     * $dom('span').filter('.a'); // Get all span and filter that has class 'a'.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {iterator} DOMList.each(handler); .each()
     * @apiName Iterator
     * @apiDescription Iterate each element inside DOMList.
     *
     * @apiParam {Function} handler Function that handle each element. Element index will be provide as argument when calling handler.
     * @apiParam {Boolean} [reversed] Does iteration is reversed or not.
     *
     * @apiExample {js} Sample #1
     * var span = $dom('span');
     * span.each(function(i) {
         *     console.log(i, this);
         * });
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {attr} DOMList.attr(name,value); .attr()
     * @apiName Attr
     * @apiDescription Attribute getter and setter. You can set value with anythings. They will be automatically converted. When you get the value, they also will be converted automatically.
     *
     * @apiParam {Any} name String attribute name or Object containing list of attributes or Array containing attribute name list.
     * @apiParam {Any} [value] Attribute value.
     *
     * @apiExample {js} Sample #1
     * // <span class="foo" bar="10" foo="false" foobar="[1,2,3]"></span>
     *
     * // Get all attributes.
     * var attr = $dom('.foo').attr();
     * //>> attr => { class: "foo", bar: 10, foo: false, foobar: [1,2,3] }
     *
     * @apiExample {js} Sample #2
     * // <span class="foo" bar="10" foo="false" foobar="[1,2,3]"></span>
     *
     * // Get single attribute value.
     * var attr = $dom('.foo').attr('foo');
     * //>> attr => false
     *
     * @apiExample {js} Sample #3
     * // <span class="foo" bar="10" foo="false" foobar="[1,2,3]"></span>
     *
     * // Set single attribute and value.
     * $dom('.foo').attr('barfoo', { a: 1, b: 2, c: 3 });
     *
     * @apiExample {js} Sample #4
     * // <span class="foo" bar="10" foo="false" foobar="[1,2,3]"></span>
     *
     * // Set multiple attribute and value.
     * $dom('.foo').attr({ foo: true, bar: 100, foobar: { a: 1, b: 2, c: 3 } });
     *
     * @apiExample {js} Sample #5
     * // <span class="foo" bar="10" foo="false" foobar="[1,2,3]"></span>
     *
     * // Set multiple attribute without values.
     * $dom('.foo').attr(['solved', 'required', 'async']);
     *
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {remattr} DOMList.remAttr(name); .remAttr()
     * @apiName RemAttr
     * @apiDescription Remove one or many attribute from selected elements.
     *
     * @apiParam {Any} name String attribute name or array name list.<br />Use space to separate the attribute name for multiple removal. E.g 'foo bar'.
     *
     * @apiExample {js} Sample #1
     * $dom('span').remAtrr('foo'); // Remove single attribute.
     * $dom('span').remAttr(['foo', 'bar']); // Remove multiple attribute.
     * $dom('span').remAttr('foo bar'); // Remove multiple attribute.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {data} DOMList.data(name,value); .data()
     * @apiName Data
     * @apiDescription Get first selected element data or set all selected elements data.
     *
     * @apiParam {Any} name String data-attribute name. E.g. 'profile' for 'data-profile'.<br>Use string space-delimiter to get or set multiple data-attribute. E.g 'foo bar' for 'data-foo data-bar'.
     * @apiParam {Any} [value] Value to set. Leave blank if yout want to get the data-attribute-value. Use array to wrap values if you set multiple data-attribute.
     *
     * @apiExample {js} Sample #1
     * $dom('span').data(); // Get all data-attributes.
     *
     * $dom('span').data('foo'); // Get value of 'data-foo'.
     * $dom('span').data('foo', {a: 1, b: 2}); // Set 'data-foo' value.
     *
     * $dom('span').data('foo bar'); // Get data-foo and data-bar.
     * $dom('span').data('foo bar', [200, {a: 1, b: 2}]); // Set data-foo with 200, data-bar with object.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {remdata} DOMList.remData(name); .remData()
     * @apiName RemData
     * @apiDescription Remove data-attribute from selected elements.
     *
     * @apiParam {String} name String data-attribute name. E.g 'foo' for 'data-foo'.<br>Use space-delimiter to separate multiple name. E.g 'foo bar' for 'data-foo data-bar'.
     *
     * @apiExample Sample #1
     * $dom('span').remData('foo'); // Remove data-foo.
     * $dom('span').remData('foo bar'); // Remove data-foo and data-bar.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {prop} DOMList.prop(name,value); .prop()
     * @apiName Prop
     * @apiDescription Get the first selected elements property value or set all selected elements property value.<br />If element also have attribute with that name, setting property will also set the attribute.
     *
     * @apiParam {String} name String property name.
     * @apiParam {Any} [value] String property value.
     *
     * @apiExample {js} Sample #1
     * $dom('input[type="text"]').prop('value'); // Get value.
     * $dom('input[type="text"]').prop('value', 'Foo'); // Set value to Foo.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {val} DOMList.val(value); .val()
     * @apiName Val
     * @apiDescription Get the first selected elements value or set all selected elements value.
     *
     * @apiParam {Any} [value] Value to set. Leave blank if you want to get the value.
     *
     * @apiExample {js} Sample #1
     * $dom('input[type="text"]').val(); // Get value.
     * $dom('input[type="text"]').val('Foo'); // Set value to Foo.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {remove} DOMList.remove(); .remove()
     * @apiName Remove
     * @apiDescription Remove selected elements.
     *
     * @apiExample {js} Sample #1
     * $dom('.foo').remove();
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {sort} DOMList.sortBy(attr,options); .sortBy()
     * @apiName Sort
     * @apiDescription Sort selected elements by attribute value.
     *
     * @apiParam {String} attr Attribute name.
     * @apiParam {Object} [options] Options to define value type or sort direction. type: 'string'|'number', direction: 'ascending'|'descending'.
     *
     * @apiExample {js} Sample #1
     * // <span class="a" age="10" name="John"></span>
     * // <span class="c" age="5" name="Michael"></span>
     * // <span class="b" age="8" name="Gabriele"></span>
     *
     * // Sort by class.
     * $dom('span').sortBy('class');
     *
     * // Sort by age with numeric sorter.
     * $dom('span').sortBy('age', { type: 'number' });
     *
     * // Sort by name descending.
     * $dom('span').sortBy('name', { direction: 'descending' });
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {toarray} DOMList.toArray(); .toArray()
     * @apiName ToArray
     * @apiDescription Convert DOMList to array.
     *
     * @apiExample Sample
     * $dom('span').toArray(); // Convert DOMList contains span to array.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {parent} DOMList.parent() .parent()
     * @apiName Parent
     * @apiDescription Get the parent element of first selected element as DOMList object. Use 'true' as argument to get all parent elements.
     *
     * @apiExample {js} Sample
     * $dom('span').parent(); // Get the parent element of first span.
     * $dom('span').parent(true); // Get parent element of all span.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {parentuntil} DOMList.parentUntil(query); .parentUntil()
     * @apiName ParentUntil
     * @apiDescription Get recrusive parent element of first selected element until match with query.
     *
     * @apiParam {String} query CSS Selector to match parent element or Function to handle each parent element to return true or false.
     *
     * @apiExample {js} Sample
     * $dom('.foo').parentUntil('.container'); // Get the container of .foo.
     *
     * // Using function as query.
     * $dom('.foo').parentUntil(function() {
     *     return $dom(this).hasClass('container') : true : false
     * });
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     * @api {parents} DOMList.parents(); .parents()
     * @apiName Parents
     * @apiDescription Get all parent element of all selected elements as DOMList object.
     *
     * @apiExample {js} Sample
     * $dom('span').parents(); // Get the parent element of each span.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {comment} DOMList.comment() .comment()
     * @apiName Comment
     * @apiDescription Comment out a block of selected elements.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {match} DOMList.mathch(handler); .match()
     * @apiName Match
     * @apiDescription Filter selected elements using function.
     * Hanlder should return true or false to tell matcher should current element should included or not.
     * Hanlder will become an HTML Element.
     * Matcher will return new DOMList object or null if no element matched.
     *
     * @apiParam {Function} handler Function to handler HTML Element to return true or false.
     *
     * @apiExample {js} Sample
     * $dom('span').match(function() {
     *     return this.hasAttribute('href') ? true : false;
     * });
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {get} DOMList.get(index); .get()
     * @apiName Get
     * @apiDescription Get HTML Element from selected elements by specific index. If no index defined, return first element.
     *
     * @apiParam {Number} index Index position of element. Started from 0.
     *
     * @apiExample {js} Sample
     * // Get second element from selected elements.
     * $dom('span').get(1);
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {indexof} DOMList.indexOf(element); .indexOf()
     * @apiName IndexOf
     * @apiDescription Get index of element from selected elements.
     *
     * @apiParam {HTMLElement} element HTML ELement or string CSS Selector. Return -1 if not found.
     *
     * @apiExample {js} Sample
     * // Get index number using HTML Element.
     * var span = $dom('span').get(2);
     * $dom('span').indexOf(span); // Return 2
     *
     * // Get index number using selector.
     * $dom('span').indexOf('.foo');
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {tostring} DOMList.toString(); .toString()
     * @apiName ToString
     * @apiDescription Convert first selected element to HTML String. Use 'true` as argument to convert all selected elements and return array.
     *
     * @apiExample {js} Sample
     * $dom('span').toString(); // Convert first selected element and return HTML String.
     * $dom('span').toString(true); // Convert all elements and return array contains each HTML String.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {wrap} DOMList.wrap(htmlstring); .wrap()
     * @apiName Wrap
     * @apiDescription Wrap selected elements with new element.
     *
     * @apiParam {HTMLString} htmlstring HTML String to wrap element.
     *
     * @apiExample {js} Sample
     * $dom('span').wrap('<div class="wrapper">');
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     * @api {wrapchild} DOMList.wrapChild(htmlstring); .wrapChild()
     * @apiName WrapChild
     * @apiDescription Wrap child elements of selected elements with new element.
     *
     * @apiParam {HTMLString} htmlstring HTML String to wrap child element.
     *
     * @apiExample {js} Sample
     * // Wrap the container childrens with new container.
     * $dom('.container').wrapChild('<div class="inner-container">');
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {siblings} DOMList.siblings(); .siblings()
     * @apiName Siblings
     * @apiDescription Get sibling elements of first selected elements.
     *
     * @apiExample {js} Sample
     * $dom('body').siblings(); // Return DOMList with <head> element since head is sibling of body.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core

     * @api {slice} DOMList.slice(index); .slice()
     * @apiName Slice
     * @apiDescription Remove element from the selected elements with specific index.
     *
     * @apiParam {Number} index Element index number. Use array to remove multiple element.
     *
     * @apiExample {js} Sample
     * $dom('span').slice(2); // Remove thrid element from selected elements.
     * $dom('span').slice([0,3,2]); // Remove multiple element from selected elements.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {remprop} DOMList.remProp(name); .remProp()
     * @apiName RemProp
     * @apiDescription Remove properties from selected elements. If properties also available in attributes, it's removed too.
     *
     * @apiParam {String} property String property name or array property name list.
     *
     * @apiExample {js} Sample
     * $dom('span').remProp('foo'); // Remove foo prop.
     * $dom('span').remProp(['foo', 'bar']); // Remove foo and bar prop.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {replace} DOMList.replace(target,source); .replace()
     * @apiName Replace
     * @apiDescription Replace matched target in selected elements with new element or existing element.
     *
     * @apiParam {String} CSS Selector or HTML Element.
     * @apiParam {String} HTML String to create new element or existing HTML Element.
     *
     * @apiExample {js} Sample
     * $dom('span').replace('.foo', '<span class="bar">'); // Replace using CSS Selector and HTML String.
     *
     * var foo = $dom('span').filter('.foo').get();
     * var bar = $dom('span').filter('.bar').get();
     *
     * $dom('span').replace(foo, bar); // Replace using HTML Element.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {replacewith} DOMList.replaceWith(source); .replaceWith()
     * @apiName ReplaceWith
     * @apiDescription Replace each selected elements with new element or existing element.
     * Replacing with HTML Element will only replace the first selected element.
     *
     * @apiParam {String} source HTML String to create new element or existing HTML Element.
     *
     * @apiExample {js} Sample
     * $dom('span').replaceWith('<a href="#">'); // Replace all span with new anchor element.
     * $dom('span').replaceWith(document.getElementById('foo')); // Replace with existing element.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     * @api {next} DOMList.next(query); .next()
     * @apiName Next
     * @apiDescription Get the next element after first selected element inside parent element.
     *
     * @apiParam {String} [query] CSS Selector to match the next element or Function to handle each next element and return true if match.
     *
     * @apiExample {js} Sample
     * $dom('span.foo').next(); // Get the next element after span.foo inside parent element.
     * $dom('span.foo').next('.bar'); // Get the next element after span.foo and the first match with .bar inside parent element.
     *
     * // Using function as query.
     * $dom('.foo').next(function() {
     *     return $dom(this).hasClass('bar') : true : false;
     * });
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {nextall} DOMList.nextAll(query); .nextAll()
     * @apiName NextAll
     * @apiDescription Get all element after first selected element.
     *
     * @apiParam {String} [query] CSS Selector to match the next element or Function to handle each next element and return true if match.
     *
     * @apiExample {js} Sample
     * $dom('.foo').nextAll(); // Get all elements after .foo inside parent element.
     * $dom('.foo').nextAll('.bar'); // Get all .bar elements after .foo inside parent element.
     *
     * // Using function as query.
     * $dom('.foo').nextAll(function() {
     *     return $dom(this).hasClass('bar') : true : false;
     * });
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {nextuntil} DOMList.nextUntil(query); .nextUntil()
     * @apiName nextuntil
     * @apiDescription Get all element after first selected element until found matched query.
     *
     * @apiParam {String} query CSS Selector to match the next element or Function to handle each next element and return true if match.
     *
     * @apiExample {js} Sample
     * $dom('.foo').nextUntil('.bar'); // Get all elements after .foo until found .bar inside parent element.
     *
     * // Using function as query.
     * $dom('.foo').nextUntil(function() {
     *     return $dom(this).hasClass('bar') : true : false;
     * });
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     * @api {prev} DOMList.prev(query); .prev()
     * @apiName Prev
     * @apiDescription Get the prev element after first selected element inside parent element.
     *
     * @apiParam {String} [query] CSS Selector to match the prev element or Function to handle each prev element and return true if match.
     *
     * @apiExample {js} Sample
     * $dom('span.foo').prev(); // Get the prev element after span.foo inside parent element.
     * $dom('span.foo').prev('.bar'); // Get the prev element after span.foo and the first match with .bar inside parent element.
     *
     * // Using function as query.
     * $dom('.foo').prev(function() {
     *     return $dom(this).hasClass('bar') : true : false;
     * });
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {prevall} DOMList.prevAll(query); .prevAll()
     * @apiName PrevAll
     * @apiDescription Get all element before first selected element.
     *
     * @apiParam {String} [query] CSS Selector to match the prev element or Function to handle each prev element and return true if match.
     *
     * @apiExample {js} Sample
     * $dom('.foo').prevAll(); // Get all elements before .foo inside parent element.
     * $dom('.foo').prevAll('.bar'); // Get all .bar elements before .foo inside parent element.
     *
     * // Using function as query.
     * $dom('.foo').prevAll(function() {
     *     return $dom(this).hasClass('bar') : true : false;
     * });
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Core
     *
     * @api {prevuntil} DOMList.prevUntil(query); .prevUntil()
     * @apiName prevuntil
     * @apiDescription Get all element before first selected element until found matched query.
     *
     * @apiParam {String} query CSS Selector to match the prev element or Function to handle each prev element and return true if match.
     *
     * @apiExample {js} Sample
     * $dom('.foo').prevUntil('.bar'); // Get all elements before .foo until found .bar inside parent element.
     *
     * // Using function as query.
     * $dom('.foo').prevUntil(function() {
     *     return $dom(this).hasClass('bar') : true : false;
     * });
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Class
     *
     * @api {addclass} DOMList.addClass(name); .addClass()
     * @apiName AddClass
     * @apiDescription Add class to class selected elements lists.
     *
     * @apiParam {String} name String class name to add. If you want, you can use array to add multiple class.
     *
     * @apiExample {js} Sample #1
     * $dom('.foo').addClas('clearfix'); // Add single class.
     * $dom('.foo').addClass('clearfix fit relative'); // Add multiple class.
     * $dom('.foo').addClass(['clearfix', 'fit', 'relative']); // Add multiple class.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Class
     *
     * @api {remclass} DOMList.remClass(name); .remClass()
     * @apiName RemClass
     * @apiDescription Remove class from selected elements class lists.
     *
     * @apiParam {String} name String class name. You can use array if you want to use remove multiple class.
     *
     * @apiExample {js} Sample #1
     * $dom('.foo').remClass('bar');
     * $dom('.foo').remClass(['bar', 'foo', 'foobar']);
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Class
     *
     * @api {toggleclass} DOMList.toggleClass(name); .toggleClass()
     * @apiName ToggleClass
     * @apiDescription Toggle class in selected elements class lists.
     *
     * @apiParam {String} name String class name. You can use array if you want to toggle multiple class.
     *
     * @apiExample {js} Sample #1
     * $dom('.foo').toggleClass('bar');
     * $dom('.foo').toggleClass(['bar', 'foo', 'foobar']);
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
     *
     * @api {append} DOMList.append(childs); .append()
     * @apiName Append
     * @apiDescription Append childs to first selected elements.
     *
     * @apiParam {Any} childs HTML Element, DOMList, Array, HTML Formatted String, or String CSS Selector string.
     *
     * @apiExample {js} Sample #1
     * // Append HTML Element.
     * var elm = document.querySelector('foo');
     * $dom('.wrapper').append(elm);
     *
     * @apiExample {js} Sample #2
     * // Append DOMList or Array.
     * var elm = $dom('.foo');
     * $dom('.wrapper').append(elm);
     *
     * @apiExample {js} Sample #3
     * // Append HTML formatted string.
     * $dom('.wrapper').append('<span class="bar">');
     *
     * @apiExample {js} Sample #4
     * // Append with query.
     * $dom('.wrapper').append('.foo');
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
     *
     * @api {prepend} DOMList.prepend(childs) .prepend()
     * @apiName Prepend
     * @apiDescription Prepend elements to first selected element.
     *
     * @apiParam {Any} childs HTML Element, DOMList, Array, HTML Formatted String, or String CSS Selector string.
     *
     * @apiExample {js} Sample #1
     * // Prepend HTML Element.
     * var elm = document.querySelector('foo');
     * $dom('.wrapper').prepend(elm);
     *
     * @apiExample {js} Sample #2
     * // Prepend DOMList or Array.
     * var elm = $dom('.foo');
     * $dom('.wrapper').prepend(elm);
     *
     * @apiExample {js} Sample #3
     * // Prepend HTML formatted string.
     * $dom('.wrapper').prepend('<span class="bar">');
     *
     * @apiExample {js} Sample #4
     * // Prepend with query.
     * $dom('.wrapper').prepend('.foo');
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
     *
     * @api {appendto} DOMList.appendTo(destination) .appendTo()
     * @apiName AppendTo
     * @apiDescription Append selected elements to destination element.
     *
     * @apiParam {Any} destination HTML Element, DOMList, or CSS Selector string.
     *
     * @apiExample {js} Sample #1
     * $dom('.foo').appendTo('.wrapper');
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
     *
     * @api {perependto} DOMList.prependTo(destination) .prependTo()
     * @apiName PrependTo
     * @apiDescription Prepend selected elements to destination element.
     *
     * @apiParam {Any} destination HTML Element, DOMList, or CSS Selector string.
     *
     * @apiExample {js} Sample #1
     * $dom('.foo').prependTo('.wrapper');
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
     *
     * @api {insertbefore} DOMList.insertBefore(destination) .insertBefore()
     * @apiName insertBefore
     * @apiDescription Insert selected elements before the destination element.
     *
     * @apiParam {Any} destination HTML Element, DOMList, or CSS Selector string.
     *
     * @apiExample {js} Sample #1
     * $dom('.foo').insertBefore('.bar');
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
     *
     * @api {insertafter} DOMList.insertAfter(destination) .insertAfter()
     * @apiName insertAfter
     * @apiDescription Insert selected elements after the destination element.
     *
     * @apiParam {Any} destination HTML Element, DOMList, or CSS Selector string.
     *
     * @apiExample {js} Sample #1
     * $dom('.foo').insertAfter('.bar');
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
     *
     * @api {text} DOMList.text(value); .text()
     * @apiName Text
     * @apiDescription Get the first selected elements innerText or set all selected elements innerText.
     *
     * @apiParam {Any} value Inner text value.
     *
     * @apiExample {js} Sample #1
     * $dom('span').text(); // Get first selected span innerText
     * $dom('span').text('foo'); // Set all span innerText to foo.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
     *
     * @api {Texts} DOMList.texts(); .texts()
     * @apiName Texts
     * @apiDescription Get selected elements innerText.
     *
     * @apiExample {js} Sample #1
     * $('span').texts();
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
     *
     * @api {html} DOMList.html(value); .html()
     * @apiName HTML
     * @apiDescription Get the first selected elements innerHTML or set all selected elements innerHTML.
     *
     * @apiParam {Any} value Inner html value. Using DOMList or Array Element List will append them to the first selected element.
     *
     * @apiExample {js} Sample #1
     * $dom('span').html(); // Get first selected span innerHTML
     * $dom('span').html('foo'); // Set all span innerHTML to foo.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
     *
     * @api {HTMLs} DOMList.htmls(); .htmls()
     * @apiName HTMLs
     * @apiDescription Get selected elements innerHTML
     *
     * @apiExample {js} Sample #1
     * $('span').htmls();
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
     *
     * @api {clone} DOMList.clone(); .clone()
     * @apiName Clone
     * @apiDescription Clone selected elements.
     *
     * @apiExample {js} Sample #1
     * $dom('span').clone();
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Injects
     *
     * @api {empty} DOMList.empty(); .empty()
     * @apiName Empty
     * @apiDescription Empty all selected elements.
     *
     * @apiExample {js} Sample #1
     * $dom('span').empty();
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Checker
     *
     * @api {hasattr} DOMList.hasAttr(name); .hasAttr()
     * @apiName HasAttr
     * @apiDescription Check does the first selected element has specific attribute or not.
     *
     * @apiParam {Any} name String attribute name to check.<br>Use array to check does have one of attributes, or string separated by space to check does has both attribute.
     *
     * @apiExample {js} Sample #1
     * $dom('span').hasAttr('foo'); // Does has attribute foo.
     * $dom('span').hasAttr(['foo', 'bar']); // Does has attribute foo or bar.
     * $dom('span').hasAttr('foo bar'); // Does has attribute foo and bar.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Checker
     *
     * @api {hasdata} DOMList.hasData(name); .hasData()
     * @apiName HasData
     * @apiDescription Check does first selected element has specific data attribute.
     *
     * @apiParam {Any} String data-attribute name. Use array to check does has one of data-attribute, or use string to check does has both data-attribute.
     *
     * @apiExample Sample #1
     * $dom('span').hasData('foo'); // Check does has data-attribute 'data-foo'.
     * $dom('span').hasData(['foo', 'bar']); // Check does has data-attribute 'data-foo' or 'data-bar'.
     * $dom('span').hasData('foo bar'); // Check does has data-attribute 'data-foo' and 'data-bar'.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Checker
     *
     * @api {hasclass} DOMList.hasClass(name); .hasClass()
     * @apiName HasClass
     * @apiDescription Check does first selected element has specific class.
     *
     * @apiParam {Any} name String class name. Use array to check does has on of class, or use string space-delimiter to check does has both class.
     *
     * @apiExample Sample#1
     * $dom('span').hasClass('foo'); // Check does has class foo.
     * $dom('span').hasClass(['foo', 'bar']); // Check does has class foo or bar.
     * $dom('span').hasClass('foo bar'); // Check does has class foo and bar.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Checker
     *
     * @api {is} DOMList.is(query); .is()
     * @apiName Is
     * @apiDescription Check does first selected element is match with query or not.
     *
     * @apiParam {String} query CSS Selector string or HTML Element.
     *
     * @apiExample {js} Sample
     * $dom('span.foo').is('.foo'); // true
     * $dom('span.foo').is('.bar'); // false if span.foo don't have class bar.
     */

    /**
     * @apiVersion 2.0.0
     * @apiGroup Checker
     *
     * @api {not} DOMList.not(query); .not()
     * @apiName Not
     * @apiDescription Check does first selected element is not match with query or not.
     *
     * @apiParam {String} query CSS Selector string or HTML Element.
     *
     * @apiExample {js} Sample
     * $dom('span.foo').not('.foo'); // false
     * $dom('span.foo').not('.bar'); // true if span.foo don't have class bar.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup EventProvider
     *
     * @api {eventprovider} EventProvider .about
     * @apiName EventProvider
     * @apiDescription Create or trigger custom event to element.
     */

        /**
         * @apiVersion 2.1.0
         * @apiGroup EventProvider
         *
         * @api EventProvider.search(name); .search()
         * @apiName evSearch
         * @apiDescription Search custom event.
         *
         * @apiParam {String} name String event name.
         *
         * @apiExample {js} Sample
         * EventProvider.search('swipe'); // Return swipe event provider object.
         */

        /**
         * @apiVersion 2.1.0
         * @apiGroup EventProvider
         * @api {register} EventProvider.register(name,maker,options); .register()
         * @apiName evRegister
         * @apiDescription Register custom event.
         *
         * @apiParam {String} name String custom event name.
         * @apiParam {Function} maker Function that handle event initialization. This function will be called by element if element listen to that event. You must manually trigger that event under this function.
         * @apiParam {Object} options Custom event options. E.g { bubbles: false, cancelable: false, detail: undefind }
         *
         * @apiExample {js} Sample
         * // Registering custom event.
         * EventProvider.register('maxclick', function() {
         *     // Listen click to the element.
         *     $dom(this).click(function() {
         *         if (!this.maxclick) this.maxclick = 1;
         *
         *         if (this.maxclick === 5) {
         *             // Trigger the event to target and add maxclick property to event object.
         *             EventProvider.dispatch('maxclick', this, { maxclick: this.maxclick });
         *         } else {
         *             this.maxclick++;
         *         }
         *     });
         * });
         *
         * // Listening event.
         * $dom('span').handle('maxclick', function(e) {
         *     console.log('Your reached max click: ' + e.maxclick);
         * });
         */

        /**
         * @apiVersion 2.1.0
         * @apiGroup EventProvider
         *
         * @api {dispatch} EventProvider.dispatch(name,targetElement,properties); .dispatch()
         * @apiName evDispatch
         * @apiDescription Trigger custom event to element.
         *
         * @apiParam {String} Custom event name.
         * @apiParam {HTMLElement} HTML Element to trigger custom event on.
         * @apiParam {Object} [properties] Properties that will be added to event object. E.g { a: 1, b: 2 }. Then when event listener will get 'event.a' and 'event.b'.
         *
         * @apiExample {js} Sample
         * $dom('span')
         *     // Create listener.
         *     .handle('foo', function(e) {
         *         console.log(e.a, e.b);
         *     })
         *
         *     // Triggering event.
         *     .each(function() {
         *         EventProvider.dispatch('foo', this, { a: 1, b: 2 });
         *     });
         */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     * @api {ready} DOMList.ready(handler); $dom.ready()
     * @apiName Ready
     * @apiDescription Add handler to handle when document is ready to manipulate.
     *
     * @apiParam {Function} handler Function that handle when document is ready to manipulate.
     *
     * @apiExample {js} Sample
     * $dom.ready(function() { console.log('document ready'); });
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     * @api {loaded} DOMList.loaded(handler); $dom.loaded()
     * @apiName Loaded
     * @apiDescription Add handler to handle when document is fully loaded.
     *
     * @apiParam {Function} handler Function that handle when document is loaded to manipulate.
     *
     * @apiExample {js} Sample
     * $dom.loaded(function() { console.log('document loaded'); });
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {listen} DOMList.listen(name,type,handler); .listen()
     * @apiName Listen
     * @apiDescription Add named event handler to selected elements.
     * Named event handler give possibility to remove event handler only that has specific name, not remove all event handler.
     *
     * @apiParam {Multi} name String handler name, or object contains names, types and handlers.
     * @apiParam {Multi} type String event type, or object contains types.
     * @apiParam {Function} handler Function to handle event.
     *
     * @apiExample {js} Sample #1
     * // Handle click on spans with name fooclick.
     * $dom('span').listen('fooclick', 'click', function() {});
     *
     * // Handle multiple event with name foo.
     * $dom('span').listen('foo', {
     *     click: function() {},
     *     mouseenter: function() {}
     * );
     *
     * // Handle mutiple name and events.
     * $dom('span').listen({
     *     foo: {
     *         click: function() {}
     *     },
     *     bar: {
     *         click: function() {}
     *     }
     * });
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {unlisten} DOMList.unlisten(name,type); .unlisten()
     * @apiName Unlisten
     * @apiDescription Remove named event handler from selected elements.
     *
     * @apiParam {Multi} name handler name or array handler names.
     * @apiParam {Multi} [type] String event type or array event types. Leave blank to remove all event from that name.
     *
     * @apiExample {js} Sample
     * // Remove fooclick handler.
     * $dom('span').unlisten('fooclick');
     *
     * // Remove click event from foo.
     * $dom('span').unlisten('foo', 'click');
     *
     * // Remove click event from foo and bar.
     * $dom('span').unlisten(['foo', 'bar'], 'click');
     *
     * // Remove click and mouseenter event from foo.
     * $dom('span').unlisten('foo', ['click', 'mouseenter']);
     *
     * // Remove click and mouseenter event from foo and bar.
     * $dom('span').unlisten(['foo', 'bar'], ['click', 'moueseenter']);
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {handle} DOMList.handle(type,handler); .handle()
     * @apiName Handle
     * @apiDescription Add event handler to selected elements.
     *
     * @apiParam {Multi} type String event type or object contains events.
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
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {unhandle} DOMList.unhandle(type); .unhandle()
     * @apiName Unhandle
     * @apiDescription Remove event handler from selected elements.
     *
     * @apiParam {Multi} type String event type or array type list.
     *
     * @apiExample {js} Sample
     * // Remove single event.
     * $dom('span').unhandle('click');
     *
     * // Remove multiple event.
     * $dom('span').unhandle(['click', 'mouseenter']);
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {trigger} DOMList.trigger(type,properties); .trigger()
     * @apiName Trigger
     * @apiDescription Dispatch an event to selected elements. You can also use alias .dispatch().
     *
     * @apiParam {String} type String event type. You can use array to dispatch multiple event.
     * @apiParam {Object} properties Object contains additional properties to added to event object.
     *
     * @apiExample {js} Sample
     * // Dispatch click event to button.
     * $dom('button').trigger('click');
     *
     * // Dispatch multiple event.
     * $dom('button').trigger(['focus', 'click']);
     *
     * // Dispatch click event with additional properties.
     * // Create listener.
     * $dom('button').click(function(e) {
     *     console.log(e.sender);
     * };
     *
     * // Trigger
     * $dom('button').trigger('click', { sender: 'document' });
     */

    /* EVENT ALIASES */
    /* ------------------------------------- */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {alias} DOMList.$alias(handler); $alias
     * @apiName Alias
     * @apiDescription Bind event or trigger event to selected elements. Alias is shortcut to bind event quickly. E.g DOMList.click(handler);
     *
     * @apiParam {Function} handler Function to handle event.
     *
     * @apiExample {js} Sample
     * $dom('span').click(function() {}); // Bind click event.
     * $dom('span').focus(); // Trigger focus event.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {blur} DOMList.blur(handler);  .blur()
     * @apiName blur
     * @apiDescription Handle blur event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {focus} DOMList.focus(handler);  .focus()
     * @apiName focus
     * @apiDescription Handle focus event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {focusin} DOMList.focusin(handler);  .focusin()
     * @apiName focusin
     * @apiDescription Handle focusin event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {focusout} DOMList.focusout(handler);  .focusout()
     * @apiName focusout
     * @apiDescription Handle focusout event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {load} DOMList.load(handler);  .load()
     * @apiName load
     * @apiDescription Handle load event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {resize} DOMList.resize(handler);  .resize()
     * @apiName resize
     * @apiDescription Handle resize event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {scroll} DOMList.scroll(handler);  .scroll()
     * @apiName scroll
     * @apiDescription Handle scroll event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {unload} DOMList.unload(handler);  .unload()
     * @apiName unload
     * @apiDescription Handle unload event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {click} DOMList.click(handler);  .click()
     * @apiName click
     * @apiDescription Handle click event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {dblclick} DOMList.dblclick(handler);  .dblclick()
     * @apiName dblclick
     * @apiDescription Handle dblclick event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {switch} DOMList.switch(handler);  .switch()
     * @apiName switch
     * @apiDescription Handle load event or trigger if no argument defined. Switch is toggle between on and off. 'state' property will be added to event object, state is 'on' or 'off'.
     *
     * @apiExample {js} Sample
     * $dom('a').switch(function(e) {
     *     if (e.state === 'on') {
     *         console.log('turned on');
     *     else if (e.state === 'off') {
     *         console.log('turned off');
     *     }
     * });
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {hover} DOMList.hover(handler);  .hover()
     * @apiName hover
     * @apiDescription Handle hover event or trigger if no argument defined. 'status' property will added to event object, status is 'enter' or 'leave'.
     *
     * @apiExample {js} Sample
     * $dom('a').hover(function(e) {
     *     if (e.status === 'enter') {
     *         console.log('entered');
     *     else if (e.status === 'leave') {
     *         console.log('leaving');
     *     }
     * });
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {mousedown} DOMList.mousedown(handler);  .mousedown()
     * @apiName mousedown
     * @apiDescription Handle mousedown event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {mouseup} DOMList.mouseup(handler);  .mouseup()
     * @apiName mouseup
     * @apiDescription Handle mouseup event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {mousemove} DOMList.mousemove(handler);  .mousemove()
     * @apiName mousemove
     * @apiDescription Handle mousemove event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {mouseover} DOMList.mouseover(handler);  .mouseover()
     * @apiName mouseover
     * @apiDescription Handle mouseover event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {mouseout} DOMList.mouseout(handler);  .mouseout()
     * @apiName mouseout
     * @apiDescription Handle mouseout event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {mouseenter} DOMList.mouseenter(handler);  .mouseenter()
     * @apiName mouseenter
     * @apiDescription Handle mouseenter event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {mouseleave} DOMList.mouseleave(handler);  .mouseleave()
     * @apiName mouseleave
     * @apiDescription Handle mouseleave event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {change} DOMList.change(handler);  .change()
     * @apiName change
     * @apiDescription Handle change event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {select} DOMList.select(handler);  .select()
     * @apiName select
     * @apiDescription Handle select event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {submit} DOMList.submit(handler);  .submit()
     * @apiName submit
     * @apiDescription Handle submit event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {keydown} DOMList.keydown(handler);  .keydown()
     * @apiName keydown
     * @apiDescription Handle keydown event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {keyup} DOMList.keyup(handler);  .keyup()
     * @apiName keyup
     * @apiDescription Handle keyup event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {keypress} DOMList.keypress(handler);  .keypress()
     * @apiName keypress
     * @apiDescription Handle keypress event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {error} DOMList.error(handler);  .error()
     * @apiName error
     * @apiDescription Handle error event or trigger if no argument defined.
     */

    /**
     * @apiVersion 2.1.0
     * @apiGroup Events
     *
     * @api {contet} DOMList.contextmenu(handler);  .contextmenu()
     * @apiName contextmenu
     * @apiDescription Handle contextmenu event or trigger if no argument defined.
     */

