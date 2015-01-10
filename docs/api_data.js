define({ "api": [
  {
    "group": "DOMList",
    "type": "selector",
    "url": "$dom(query,context);",
    "title": "$dom()",
    "name": "DOMList",
    "description": "<p>Find elements using CSS Selector or create new element using HTML formatted string. DOMList using native .querySelectorAll(), so browser support really limited. Only for modern browsers (Chrome 31+, Firefox 33+, IE9+, Safari 7+). <br/><br/></p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>HTML Element, DOMList, CSS Selector string or HTML formatted string for create element.</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "context",
            "description": "<p>CSS Selector String, HTML Element or DOMList to search in.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "// Find elements with tag-name 'button'.\nvar btn = $dom('button');",
        "type": "js"
      },
      {
        "title": "Sample #2",
        "content": "// Create new element using HTML formatted string.\nvar btn = $dom('<a href=\"#\" class=\"button\">Anchor</a>');",
        "type": "js"
      },
      {
        "title": "Sample #3",
        "content": "// Find elements with tag-name 'button' from 'section'.\nvar sc = $dom('section');\nvar bt = $dom('button', sc);",
        "type": "js"
      },
      {
        "title": "Sample #4",
        "content": "// Find elements with tag-name 'button' from 'section' using CSS Selector string as context.\nvar bt = $dom('button', '.wrapper');",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList"
  },
  {
    "group": "DOMList_Module_Class",
    "type": "addclass",
    "url": "DOMList.addClass(name);",
    "title": ".addClass()",
    "name": "AddClass",
    "description": "<p>Add class to class selected elements lists.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>String class name to add. If you want, you can use array to add multiple class.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('.foo').addClas('clearfix');",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Class"
  },
  {
    "group": "DOMList_Module_Class",
    "type": "remclass",
    "url": "DOMList.remClass(name);",
    "title": ".remClass()",
    "name": "RemClass",
    "description": "<p>Remove class from selected elements class lists.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>String class name. You can use array if you want to use remove multiple class.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('.foo').remClass('bar');\n$dom('.foo').remClass(['bar', 'foo', 'foobar']);",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Class"
  },
  {
    "group": "DOMList_Module_Class",
    "type": "toggleclass",
    "url": "DOMList.toggleClass(name);",
    "title": ".toggleClass()",
    "name": "ToggleClass",
    "description": "<p>Toggle class in selected elements class lists.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>String class name. You can use array if you want to toggle multiple class.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('.foo').toggleClass('bar');\n$dom('.foo').toggleClass(['bar', 'foo', 'foobar']);",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Class"
  },
  {
    "group": "DOMList_Module_Core",
    "type": "attr",
    "url": "DOMList.attr(name,value);",
    "title": ".attr()",
    "name": "Attr",
    "description": "<p>Attribute getter and setter. You can set value with anythings. They will be automatically converted. When you get the value, they also will be converted automatically.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "name",
            "description": "<p>String attribute name or Object containing list of attributes or Array containing attribute name list.</p> "
          },
          {
            "group": "Parameter",
            "type": "Any",
            "optional": true,
            "field": "value",
            "description": "<p>Attribute value.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "// <span class=\"foo\" bar=\"10\" foo=\"false\" foobar=\"[1,2,3]\"></span>\n\n// Get all attributes.\nvar attr = $dom('.foo').attr();\n//>> attr => { class: \"foo\", bar: 10, foo: false, foobar: [1,2,3] }",
        "type": "js"
      },
      {
        "title": "Sample #2",
        "content": "// <span class=\"foo\" bar=\"10\" foo=\"false\" foobar=\"[1,2,3]\"></span>\n\n// Get single attribute value.\nvar attr = $dom('.foo').attr('foo');\n//>> attr => false",
        "type": "js"
      },
      {
        "title": "Sample #3",
        "content": "// <span class=\"foo\" bar=\"10\" foo=\"false\" foobar=\"[1,2,3]\"></span>\n\n// Set single attribute and value.\n$dom('.foo').attr('barfoo', { a: 1, b: 2, c: 3 });",
        "type": "js"
      },
      {
        "title": "Sample #4",
        "content": "// <span class=\"foo\" bar=\"10\" foo=\"false\" foobar=\"[1,2,3]\"></span>\n\n// Set multiple attribute and value.\n$dom('.foo').attr({ foo: true, bar: 100, foobar: { a: 1, b: 2, c: 3 } });",
        "type": "js"
      },
      {
        "title": "Sample #5",
        "content": "// <span class=\"foo\" bar=\"10\" foo=\"false\" foobar=\"[1,2,3]\"></span>\n\n// Set multiple attribute without values.\n$dom('.foo').attr(['solved', 'required', 'async']);",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Core"
  },
  {
    "group": "DOMList_Module_Core",
    "type": "children",
    "url": "DOMList.children();",
    "title": ".children()",
    "name": "Children",
    "description": "<p>Get child elements of first selected element.</p> ",
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('.container').children();",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Core"
  },
  {
    "group": "DOMList_Module_Core",
    "type": "data",
    "url": "DOMList.data(name,value);",
    "title": ".data()",
    "name": "Data",
    "description": "<p>Get first selected element data or set all selected elements data.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>String data-attribute name. E.g. &#39;profile&#39; for &#39;data-profile&#39;.</p> "
          },
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "value",
            "description": "<p>Value to set. Leave blank if yout want to get the data-attribute-value.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('span').data('foo'); // Get value of 'data-foo'.\n$dom('span').data('foo', {a: 1, b: 2}); // Set 'data-foo' value.",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Core"
  },
  {
    "group": "DOMList_Module_Core",
    "type": "finder",
    "url": "DOMList.find(query);",
    "title": ".find()",
    "name": "Find",
    "description": "<p>Find elements from current selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>CSS Selector string.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var wrap = $dom('.wrapper');\nvar span = wrap.find('span');",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Core"
  },
  {
    "group": "DOMList_Module_Core",
    "type": "first",
    "url": "DOMList.first();",
    "title": ".first()",
    "name": "First",
    "description": "<p>Get the first child of selected elements. Return new DOMList object.</p> ",
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('span').first();",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Core"
  },
  {
    "group": "DOMList_Module_Core",
    "type": "firstchild",
    "url": "DOMList.firstChild();",
    "title": ".firstChild()",
    "name": "FirstChild",
    "description": "<p>Get the first child of the first selected elements. Return new DOMList object.</p> ",
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('.container').firstChild();",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Core"
  },
  {
    "group": "DOMList_Module_Core",
    "type": "iterator",
    "url": "DOMList.each(handler);",
    "title": ".each()",
    "name": "Iterator",
    "description": "<p>Iterate each element inside DOMList.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "handler",
            "description": "<p>Function that handle each element. Element index will be provide as argument when calling handler.</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "reversed",
            "description": "<p>Does iteration is reversed or not.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var span = $dom('span');\nspan.each(function(i) {\n    console.log(i, this);\n});",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Core"
  },
  {
    "group": "DOMList_Module_Core",
    "type": "last",
    "url": "DOMList.last();",
    "title": ".last()",
    "name": "Last",
    "description": "<p>Get the last child of selected elements. Return new DOMList object.</p> ",
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('span').last();",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Core"
  },
  {
    "group": "DOMList_Module_Core",
    "type": "lastchild",
    "url": "DOMList.lastChild();",
    "title": ".lastChild()",
    "name": "LastChild",
    "description": "<p>Get the last child of the first selected elements. Return new DOMList object.</p> ",
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('.container').lastChild();",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Core"
  },
  {
    "group": "DOMList_Module_Core",
    "type": "nth",
    "url": "DOMList.nth(index);",
    "title": ".nth()",
    "name": "NTH",
    "description": "<p>Get the selected elements by specific index. Return new DOMList object.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "index",
            "description": "<p>Index number. Start from 0.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('span').nth(0);",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Core"
  },
  {
    "group": "DOMList_Module_Core",
    "type": "nthChild",
    "url": "DOMList.nthChild(index);",
    "title": ".nthChild()",
    "name": "NthChild",
    "description": "<p>Get the child elements by specific index from the first selected elements. Return new DOMList object.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "index",
            "description": "<p>Index number. Start from 0.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('.container').nthChild(3);",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Core"
  },
  {
    "group": "DOMList_Module_Core",
    "type": "prop",
    "url": "DOMList.prop(name,value);",
    "title": ".prop()",
    "name": "Prop",
    "description": "<p>Get the first selected elements property value or set all selected elements property value.<br />If element also have attribute with that name, setting property will also set the attribute.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>String property name.</p> "
          },
          {
            "group": "Parameter",
            "type": "Any",
            "optional": true,
            "field": "value",
            "description": "<p>String property value.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('input[type=\"text\"]').prop('value'); // Get value.\n$dom('input[type=\"text\"]').prop('value', 'Foo'); // Set value to Foo.",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Core"
  },
  {
    "group": "DOMList_Module_Core",
    "type": "remattr",
    "url": "DOMList.remAttr(name);",
    "title": ".remAttr()",
    "name": "RemAttr",
    "description": "<p>Remove one or many attribute from selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "name",
            "description": "<p>String attribute name or array name list.<br />Use space to separate the attribute name for multiple removal. E.g &#39;foo bar&#39;.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('span').remAtrr('foo'); // Remove single attribute.\n$dom('span').remAttr(['foo', 'bar']); // Remove multiple attribute.\n$dom('span').remAttr('foo bar'); // Remove multiple attribute.",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Core"
  },
  {
    "group": "DOMList_Module_Core",
    "type": "remove",
    "url": "DOMList.remove();",
    "title": ".remove()",
    "name": "Remove",
    "description": "<p>Remove selected elements.</p> ",
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('.foo').remove();",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Core"
  },
  {
    "group": "DOMList_Module_Core",
    "type": "sort",
    "url": "DOMList.sortBy(attr,options);",
    "title": ".sortBy()",
    "name": "Sort",
    "description": "<p>Sort selected elements by attribute value.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attr",
            "description": "<p>Attribute name.</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "options",
            "description": "<p>Options to define value type or sort direction. type: &#39;string&#39;|&#39;number&#39;, direction: &#39;ascending&#39;|&#39;descending&#39;.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "// <span class=\"a\" age=\"10\" name=\"John\"></span>\n// <span class=\"c\" age=\"5\" name=\"Michael\"></span>\n// <span class=\"b\" age=\"8\" name=\"Gabriele\"></span>\n\n// Sort by class.\n$dom('span').sortBy('class');\n\n// Sort by age with numeric sorter.\n$dom('span').sortBy('age', { type: 'number' });\n\n// Sort by name descending.\n$dom('span').sortBy('name', { direction: 'descending' });",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Core"
  },
  {
    "group": "DOMList_Module_Core",
    "type": "val",
    "url": "DOMList.val(value);",
    "title": ".val()",
    "name": "Val",
    "description": "<p>Get the first selected elements value or set all selected elements value.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": true,
            "field": "value",
            "description": "<p>Value to set. Leave blank if you want to get the value.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('input[type=\"text\"]').val(); // Get value.\n$dom('input[type=\"text\"]').val('Foo'); // Set value to Foo.",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Core"
  },
  {
    "group": "DOMList_Module_Inject",
    "type": "append",
    "url": "DOMList.append(childs);",
    "title": ".append()",
    "name": "Append",
    "description": "<p>Append childs to first selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "childs",
            "description": "<p>HTML Element, DOMList, Array, HTML Formatted String, or String CSS Selector string.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "// Append HTML Element.\nvar elm = document.querySelector('foo');\n$dom('.wrapper').append(elm);",
        "type": "js"
      },
      {
        "title": "Sample #2",
        "content": "// Append DOMList or Array.\nvar elm = $dom('.foo');\n$dom('.wrapper').append(elm);",
        "type": "js"
      },
      {
        "title": "Sample #3",
        "content": "// Append HTML formatted string.\n$dom('.wrapper').append('<span class=\"bar\">');",
        "type": "js"
      },
      {
        "title": "Sample #4",
        "content": "// Append with query.\n$dom('.wrapper').append('.foo');",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Inject"
  },
  {
    "group": "DOMList_Module_Inject",
    "type": "appendto",
    "url": "DOMList.appendTo(destination)",
    "title": ".appendTo()",
    "name": "AppendTo",
    "description": "<p>Append selected elements to destination element.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "destination",
            "description": "<p>HTML Element, DOMList, or CSS Selector string.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('.foo').appendTo('.wrapper');",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Inject"
  },
  {
    "group": "DOMList_Module_Inject",
    "type": "html",
    "url": "DOMList.html(value);",
    "title": ".html()",
    "name": "HTML",
    "description": "<p>Get the first selected elements innerHTML or set all selected elements innerHTML.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "value",
            "description": "<p>Inner html value.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('span').html(); // Get first selected span innerHTML\n$dom('span').html('foo'); // Set all span innerHTML to foo.",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Inject"
  },
  {
    "group": "DOMList_Module_Inject",
    "type": "prepend",
    "url": "DOMList.prepend(childs)",
    "title": ".prepend()",
    "name": "Prepend",
    "description": "<p>Prepend elements to first selected element.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "childs",
            "description": "<p>HTML Element, DOMList, Array, HTML Formatted String, or String CSS Selector string.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "// Prepend HTML Element.\nvar elm = document.querySelector('foo');\n$dom('.wrapper').prepend(elm);",
        "type": "js"
      },
      {
        "title": "Sample #2",
        "content": "// Prepend DOMList or Array.\nvar elm = $dom('.foo');\n$dom('.wrapper').prepend(elm);",
        "type": "js"
      },
      {
        "title": "Sample #3",
        "content": "// Prepend HTML formatted string.\n$dom('.wrapper').prepend('<span class=\"bar\">');",
        "type": "js"
      },
      {
        "title": "Sample #4",
        "content": "// Prepend with query.\n$dom('.wrapper').prepend('.foo');",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Inject"
  },
  {
    "group": "DOMList_Module_Inject",
    "type": "perependto",
    "url": "DOMList.prependTo(destination)",
    "title": ".prependTo()",
    "name": "PrependTo",
    "description": "<p>Prepend selected elements to destination element.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "destination",
            "description": "<p>HTML Element, DOMList, or CSS Selector string.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('.foo').prependTo('.wrapper');",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Inject"
  },
  {
    "group": "DOMList_Module_Inject",
    "type": "text",
    "url": "DOMList.text(value);",
    "title": ".text()",
    "name": "Text",
    "description": "<p>Get the first selected elements innerText or set all selected elements innerText.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "value",
            "description": "<p>Inner text value.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('span').text(); // Get first selected span innerText\n$dom('span').text('foo'); // Set all span innerText to foo.",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Inject"
  },
  {
    "group": "DOMList_Module_Inject",
    "type": "insertafter",
    "url": "DOMList.insertAfter(destination)",
    "title": ".insertAfter()",
    "name": "insertAfter",
    "description": "<p>Insert selected elements after the destination element.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "destination",
            "description": "<p>HTML Element, DOMList, or CSS Selector string.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('.foo').insertAfter('.bar');",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Inject"
  },
  {
    "group": "DOMList_Module_Inject",
    "type": "insertbefore",
    "url": "DOMList.insertBefore(destination)",
    "title": ".insertBefore()",
    "name": "insertBefore",
    "description": "<p>Insert selected elements before the destination element.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "destination",
            "description": "<p>HTML Element, DOMList, or CSS Selector string.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('.foo').insertBefore('.bar');",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Inject"
  }
] });