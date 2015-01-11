// HISTORY
// --------------------------------------------

// -------------------------------
// $dom();
// -------------------------------
/**
 * @apiVersion 1.1.0
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


// -------------------------------
// $.first();
// -------------------------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Core
 *
 * @api {first} DOMList.first(); .first()
 * @apiName First
 * @apiDescription Get the first child of selected elements. Return new DOMList object.
 *
 * @apiExample {js} Sample #1
 * $dom('span').first();
 */


// -------------------------------
// $.firstChild();
// -------------------------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Core
 *
 * @api {firstchild} DOMList.firstChild(); .firstChild()
 * @apiName FirstChild
 * @apiDescription Get the first child of the first selected elements. Return new DOMList object.
 *
 * @apiExample {js} Sample #1
 * $dom('.container').firstChild();
 */


// ----------------------
// $.last();
// ----------------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Core
 *
 * @api {last} DOMList.last(); .last()
 * @apiName Last
 * @apiDescription Get the last child of selected elements. Return new DOMList object.
 *
 * @apiExample {js} Sample #1
 * $dom('span').last();
 */


// --------------
// $.lastChild();
// --------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Core
 *
 * @api {lastchild} DOMList.lastChild(); .lastChild()
 * @apiName LastChild
 * @apiDescription Get the last child of the first selected elements. Return new DOMList object.
 *
 * @apiExample {js} Sample #1
 * $dom('.container').lastChild();
 */


// ---------------
// $.nth();
// ---------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Core
 *
 * @api {nth} DOMList.nth(index); .nth()
 * @apiName NTH
 * @apiDescription Get the selected elements by specific index. Return new DOMList object.
 *
 * @apiParam {Number} index Index number. Start from 0.
 *
 * @apiExample {js} Sample #1
 * $dom('span').nth(0);
 */


// -------------------
// $.nthChild();
// -------------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Core
 *
 * @api {nthChild} DOMList.nthChild(index); .nthChild()
 * @apiName NthChild
 * @apiDescription Get the child elements by specific index from the first selected elements. Return new DOMList object.
 *
 * @apiParam {Number} index Index number. Start from 0.
 *
 * @apiExample {js} Sample #1
 * $dom('.container').nthChild(3);
 */

// -----------------
// $.children();
// -----------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Core
 *
 * @api {children} DOMList.children(); .children()
 * @apiName Children
 * @apiDescription Get child elements of first selected element.
 *
 * @apiExample {js} Sample #1
 * $dom('.container').children();
 */


// --------------------
// $.find();
// --------------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Core
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


// --------------------------
// $.filter();
// --------------------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Core
 *
 * @api DOMList.filter(query); .filter()
 * @apiName Filter
 * @apiDescription Filter the selected elements with specific CSS Selector.
 *
 * @apiParam {String} query String CSS Selector to filter.
 *
 * @apiExample Sample #1
 * $dom('span').filter('.a'); // Get all span and filter that has class 'a'.
 */


// ---------------
// $.each();
// ---------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Core
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


// ----------------
// $.attr();
// ----------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Core
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


// -------------------------
// $.remAttr();
// -------------------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Core
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


// -------------
// $.data();
// -------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Core
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


// ----------------
// $.remData();
// ----------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Core
 *
 * @api DOMList.remData(name); .remData()
 * @apiName RemData
 * @apiDescription Remove data-attribute from selected elements.
 *
 * @apiParam {String} name String data-attribute name. E.g 'foo' for 'data-foo'.<br>Use space-delimiter to separate multiple name. E.g 'foo bar' for 'data-foo data-bar'.
 *
 * @apiExample Sample #1
 * $dom('span').remData('foo'); // Remove data-foo.
 * $dom('span').remData('foo bar'); // Remove data-foo and data-bar.
 */

// ---------------
// $.prop();
// ---------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Core
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


// ----------------
// $.val();
// ----------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Core
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


// -----------------
// $.remove();
// -----------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Core
 *
 * @api {remove} DOMList.remove(); .remove()
 * @apiName Remove
 * @apiDescription Remove selected elements.
 *
 * @apiExample {js} Sample #1
 * $dom('.foo').remove();
 */


// ------------------
// $.sortBy();
// ------------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Core
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


/* CLASS ------------------------------------ */

// ------------
// $.addClass();
// ------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList.Module.Class
 *
 * @api {addclass} DOMList.addClass(name); .addClass()
 * @apiName AddClass
 * @apiDescription Add class to class selected elements lists.
 *
 * @apiParam {String} name String class name to add. If you want, you can use array to add multiple class.
 *
 * @apiExample {js} Sample #1
 * $dom('.foo').addClas('clearfix');
 */


// -----------------
// $.remClass();
// -----------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList.Module.Class
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


// --------------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList.Module.Class
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


/* INJECT ------------------------------------------ */

// ----------------
// $.append();
// ----------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList.Module.Inject
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


// --------------------
// $.prepend();
// --------------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList.Module.Inject
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


// ----------------------
// $.appendTo();
// ----------------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList.Module.Inject
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


// -----------------------
// $.prependTo();
// -----------------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList.Module.Inject
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


// -------------------
// $.insertBefore();
// -------------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList.Module.Inject
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


// ---------------------
// $.insertAfter();
// ---------------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList.Module.Inject
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


// ----------------------
// $.text();
// ----------------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Inject
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


// ------------------------
// $.texts();
// ------------------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Inject
 *
 * @api {Texts} DOMList.texts(); .texts()
 * @apiName Texts
 * @apiDescription Get selected elements innerText.
 *
 * @apiExample {js} Sample #1
 * $('span').texts();
 */

// ---------------------------
// $.html();
// ---------------------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Inject
 *
 * @api {html} DOMList.html(value); .html()
 * @apiName HTML
 * @apiDescription Get the first selected elements innerHTML or set all selected elements innerHTML.
 *
 * @apiParam {Any} value Inner html value.
 *
 * @apiExample {js} Sample #1
 * $dom('span').html(); // Get first selected span innerHTML
 * $dom('span').html('foo'); // Set all span innerHTML to foo.
 */


// ---------------------------
// $.htmls();
// ---------------------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Inject
 *
 * @api {HTMLs} DOMList.htmls(); .htmls()
 * @apiName HTMLs
 * @apiDescription Get selected elements innerHTML
 *
 * @apiExample {js} Sample #1
 * $('span').htmls();
 */


// ----------------------------
// $.clone();
// ----------------------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Inject
 *
 * @api {clone} DOMList.clone(); .clone()
 * @apiName Clone
 * @apiDescription Clone selected elements.
 *
 * @apiExample {js} Sample #1
 * $dom('span').clone();
 */


// --------------------
// $.empty();
// --------------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Inject
 *
 * @api {empty} DOMList.empty(); .empty()
 * @apiName Empty
 * @apiDescription Empty all selected elements.
 *
 * @apiExample {js} Sample #1
 * $dom('span').empty();
 */

/* Boolean ---------------------------------------------- */

// --------------------
// $.hasAttr();
// --------------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Boolean
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


// -------------------
// $.hasData();
// -------------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Boolean
 *
 * @api DOMList.hasData(name); .hasData()
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


// ------------------
// $.hasClass();
// ------------------
/**
 * @apiVersion 1.1.0
 * @apiGroup DOMList Module Boolean
 *
 * @api DOMList.hasClass(name); .hasClass()
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



