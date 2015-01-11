define({ "api": [
  {
    "group": "DOMList",
    "type": "selector",
    "url": "$dom(query,context);",
    "title": "$dom()",
    "name": "DOMList",
    "description": "<p>Select elements using CSS Selector or create new element using HTML formatted string. <br><br> Primary, DOMList using native .querySelectorAll() that&#39;s only supported by modern browsers (Chrome 31+, Firefox 33+, IE9+, Safari 7+). <br><br> If you want to use DOMList in older browser, you can load jQuery Sizzle before DOMList. DOMList will looking for Sizzle and use it if .querySelectorAll not found. <br/><br/></p> ",
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
    "filename": "dist/domlist.js",
    "groupTitle": "DOMList"
  },
  {
    "group": "DOMList_Module_Boolean",
    "type": "hasattr",
    "url": "DOMList.hasAttr(name);",
    "title": ".hasAttr()",
    "name": "HasAttr",
    "description": "<p>Check does the first selected element has specific attribute or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "name",
            "description": "<p>String attribute name to check.<br>Use array to check does have one of attributes, or string separated by space to check does has both attribute.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('span').hasAttr('foo'); // Does has attribute foo.\n$dom('span').hasAttr(['foo', 'bar']); // Does has attribute foo or bar.\n$dom('span').hasAttr('foo bar'); // Does has attribute foo and bar.",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "DOMList_Module_Boolean"
  },
  {
    "group": "DOMList_Module_Boolean",
    "type": "",
    "url": "DOMList.hasClass(name);",
    "title": ".hasClass()",
    "name": "HasClass",
    "description": "<p>Check does first selected element has specific class.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "name",
            "description": "<p>String class name. Use array to check does has on of class, or use string space-delimiter to check does has both class.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample#1",
        "content": "$dom('span').hasClass('foo'); // Check does has class foo.\n$dom('span').hasClass(['foo', 'bar']); // Check does has class foo or bar.\n$dom('span').hasClass('foo bar'); // Check does has class foo and bar.",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "DOMList_Module_Boolean"
  },
  {
    "group": "DOMList_Module_Boolean",
    "type": "",
    "url": "DOMList.hasData(name);",
    "title": ".hasData()",
    "name": "HasData",
    "description": "<p>Check does first selected element has specific data attribute.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "String",
            "description": "<p>data-attribute name. Use array to check does has one of data-attribute, or use string to check does has both data-attribute.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('span').hasData('foo'); // Check does has data-attribute 'data-foo'.\n$dom('span').hasData(['foo', 'bar']); // Check does has data-attribute 'data-foo' or 'data-bar'.\n$dom('span').hasData('foo bar'); // Check does has data-attribute 'data-foo' and 'data-bar'.",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "DOMList_Module_Boolean"
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
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
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
            "type": "Any",
            "optional": false,
            "field": "name",
            "description": "<p>String data-attribute name. E.g. &#39;profile&#39; for &#39;data-profile&#39;.<br>Use string space-delimiter to get or set multiple data-attribute. E.g &#39;foo bar&#39; for &#39;data-foo data-bar&#39;.</p> "
          },
          {
            "group": "Parameter",
            "type": "Any",
            "optional": true,
            "field": "value",
            "description": "<p>Value to set. Leave blank if yout want to get the data-attribute-value. Use array to wrap values if you set multiple data-attribute.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('span').data(); // Get all data-attributes.\n\n$dom('span').data('foo'); // Get value of 'data-foo'.\n$dom('span').data('foo', {a: 1, b: 2}); // Set 'data-foo' value.\n\n$dom('span').data('foo bar'); // Get data-foo and data-bar.\n$dom('span').data('foo bar', [200, {a: 1, b: 2}]); // Set data-foo with 200, data-bar with object.",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "DOMList_Module_Core"
  },
  {
    "group": "DOMList_Module_Core",
    "type": "",
    "url": "DOMList.filter(query);",
    "title": ".filter()",
    "name": "Filter",
    "description": "<p>Filter the selected elements with specific CSS Selector.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>String CSS Selector to filter.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('span').filter('.a'); // Get all span and filter that has class 'a'.",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
    "groupTitle": "DOMList_Module_Core"
  },
  {
    "group": "DOMList_Module_Core",
    "type": "",
    "url": "DOMList.remData(name);",
    "title": ".remData()",
    "name": "RemData",
    "description": "<p>Remove data-attribute from selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>String data-attribute name. E.g &#39;foo&#39; for &#39;data-foo&#39;.<br>Use space-delimiter to separate multiple name. E.g &#39;foo bar&#39; for &#39;data-foo data-bar&#39;.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('span').remData('foo'); // Remove data-foo.\n$dom('span').remData('foo bar'); // Remove data-foo and data-bar.",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
    "groupTitle": "DOMList_Module_Inject"
  },
  {
    "group": "DOMList_Module_Inject",
    "type": "clone",
    "url": "DOMList.clone();",
    "title": ".clone()",
    "name": "Clone",
    "description": "<p>Clone selected elements.</p> ",
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('span').clone();",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "DOMList_Module_Inject"
  },
  {
    "group": "DOMList_Module_Inject",
    "type": "empty",
    "url": "DOMList.empty();",
    "title": ".empty()",
    "name": "Empty",
    "description": "<p>Empty all selected elements.</p> ",
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('span').empty();",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
    "groupTitle": "DOMList_Module_Inject"
  },
  {
    "group": "DOMList_Module_Inject",
    "type": "HTMLs",
    "url": "DOMList.htmls();",
    "title": ".htmls()",
    "name": "HTMLs",
    "description": "<p>Get selected elements innerHTML</p> ",
    "examples": [
      {
        "title": "Sample #1",
        "content": "$('span').htmls();",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
    "groupTitle": "DOMList_Module_Inject"
  },
  {
    "group": "DOMList_Module_Inject",
    "type": "Texts",
    "url": "DOMList.texts();",
    "title": ".texts()",
    "name": "Texts",
    "description": "<p>Get selected elements innerText.</p> ",
    "examples": [
      {
        "title": "Sample #1",
        "content": "$('span').texts();",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
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
    "filename": "dist/domlist.js",
    "groupTitle": "DOMList_Module_Inject"
  },
  {
    "group": "Data_Type",
    "type": "isArray",
    "url": "isArray(variable);",
    "title": "isArray()",
    "name": "isArray",
    "description": "<p>Check does type of variable is array or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = [1,2];\nvar bar = 100;\n\nisArray(foo); // true\nisArray(bar); // false",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "Data_Type"
  },
  {
    "group": "Data_Type",
    "type": "isBoolean",
    "url": "isBoolean(variable);",
    "title": "isBoolean()",
    "name": "isBoolean",
    "description": "<p>Check does type of variable is boolean or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = false;\nvar bar = 'true';\n\nisBoolean(foo); // true\nisBoolean(bar); // false",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "Data_Type"
  },
  {
    "group": "Data_Type",
    "type": "isColor",
    "url": "isColor(variable);",
    "title": "isColor()",
    "name": "isColor",
    "description": "<p>Check does type of variable is color string or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = '#999';\nvar bar = 100;\n\nisColor(foo); // true\nisColor(bar); // false",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "Data_Type"
  },
  {
    "group": "Data_Type",
    "type": "isDOMList",
    "url": "isDOMList(variable);",
    "title": "isDOMList()",
    "name": "isDOMList",
    "description": "<p>Check does type of variable is DOMList object or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = $dom('span');\nvar bar = 100;\n\nisDOMList(foo); // true\nisDOMList(bar); // false",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "Data_Type"
  },
  {
    "group": "Data_Type",
    "type": "isDate",
    "url": "isDate(variable);",
    "title": "isDate()",
    "name": "isDate",
    "description": "<p>Check does type of variable is date string or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = 'Jan 11, 2011';\nvar bar = 100;\n\nisDate(foo); // true\nisDate(bar); // false",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "Data_Type"
  },
  {
    "group": "Data_Type",
    "type": "isDefined",
    "url": "isDefined(variable);",
    "title": "isDefined()",
    "name": "isDefined",
    "description": "<p>Check whether argument is defined or not. Use only to check argument in function.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = function(bar) {\n    isDefined(bar); // true or false.\n}\n\nisDefined(bar); // Error.",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "Data_Type"
  },
  {
    "group": "Data_Type",
    "type": "isEmail",
    "url": "isEmail(variable);",
    "title": "isEmail()",
    "name": "isEmail",
    "description": "<p>Check does type of variable is email address string or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = 'mail@domain.com';\nvar bar = 'mail@domain';\n\nisEmail(foo); // true\nisEmail(bar); // false",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "Data_Type"
  },
  {
    "group": "Data_Type",
    "type": "isFunction",
    "url": "isFunction(variable);",
    "title": "isFunction()",
    "name": "isFunction",
    "description": "<p>Check does type of variable is function or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = function() {};\nvar bar = 100;\n\nisFunction(foo); // true\nisFunction(bar); // false",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "Data_Type"
  },
  {
    "group": "Data_Type",
    "type": "isHTML",
    "url": "isHTML(variable);",
    "title": "isHTML()",
    "name": "isHTML",
    "description": "<p>Check does type of variable is html object or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = $('span')[0];\nvar bar = 100;\n\nisHTML(foo); // true\nisHTML(bar); // false",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "Data_Type"
  },
  {
    "group": "Data_Type",
    "type": "isHTMLString",
    "url": "isHTMLString(variable);",
    "title": "isHTMLString()",
    "name": "isHTMLString",
    "description": "<p>Check does type of variable is HTML Formatted String or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = '<span class=\"foo\">';\nvar bar = 'span.foo';\n\nisHTMLString(foo); // true\nisHTMLString(bar); // false",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "Data_Type"
  },
  {
    "group": "Data_Type",
    "type": "isJQuery",
    "url": "isJQuery(variable);",
    "title": "isJQuery()",
    "name": "isJQuery",
    "description": "<p>Check does type of variable is jQuery Object or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = $('span');\nvar bar = [1,2];\n\nisJQuery(foo); // true\nisJQuery(bar); // false",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "Data_Type"
  },
  {
    "group": "Data_Type",
    "type": "isNumber",
    "url": "isNumber(variable);",
    "title": "isNumber()",
    "name": "isNumber",
    "description": "<p>Check does type of variable is number or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = 100;\nvar bar = 'Foo';\n\nisNumber(foo); // true\nisNumber(bar); // false",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "Data_Type"
  },
  {
    "group": "Data_Type",
    "type": "isObject",
    "url": "isObject(variable);",
    "title": "isObject()",
    "name": "isObject",
    "description": "<p>Check does type of variable is object or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = {a: 1, b: 2};\nvar bar = 100;\n\nisObject(foo); // true\nisObject(bar); // false",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "Data_Type"
  },
  {
    "group": "Data_Type",
    "type": "isString",
    "url": "isString(variable);",
    "title": "isString()",
    "name": "isString",
    "description": "<p>Check does type of variable is string or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = 'bar';\nvar bar = 100;\n\nisString(foo); // true\nisString(bar); // false",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "Data_Type"
  },
  {
    "group": "Data_Type",
    "type": "isURL",
    "url": "isURL(variable);",
    "title": "isURL()",
    "name": "isURL",
    "description": "<p>Check does type of variable is URL string or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = 'https://main.com/pages/module';\nvar bar = 'foo bar';\n\nisURL(foo); // true\nisURL(bar); // false",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "Data_Type"
  },
  {
    "group": "Iterator",
    "type": "foreach",
    "url": "foreach(object,handler);",
    "title": "foreach()",
    "name": "Foreach",
    "description": "<p>Perform loop through Array, Object, String, Number and DOMList.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "object",
            "description": "<p>Array, Object, String, Number or DOMList.</p> "
          },
          {
            "group": "Parameter",
            "type": "func",
            "optional": false,
            "field": "handler",
            "description": "<p>Function that handle each item. <br>Array iterator will give &#39;value&#39; and &#39;index&#39; as argument. <br>Object iterator will give &#39;key&#39; and &#39;value&#39; as argument. <br>String iterator will give &#39;char&#39; and &#39;index&#39; as argument. <br>Number iterator will give &#39;number&#39; as argument. <br>DOMList iterator will give &#39;elem&#39; and &#39;index&#39; as argument.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample: Array",
        "content": "var arr = [1,2,3,4];\n\nforeach(arr, function(value, i) {\n    console.log(value, i); // 1 0 >> 2 1 >> 3 2 >> 4 3\n}",
        "type": "js"
      },
      {
        "title": "Sample: Object",
        "content": "var obj = {a: 1, b: 2};\n\nforeach(obj, function(key, value) {\n    console.log(key, value); // a 1 >> b 2\n}",
        "type": "js"
      },
      {
        "title": "Sample: String",
        "content": "var str = 'Foo';\n\nforeach(str, function(char, i) {\n    console.log(char, i); // F 0 >> o 1 >> o 2\n}",
        "type": "js"
      },
      {
        "title": "Sample: Number",
        "content": "foreach(5, function(number) {\n    console.log(number); // 1 >> 2 >> 3 >> 4 >> 5\n}",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "Iterator"
  },
  {
    "group": "Iterator",
    "type": "reveach",
    "url": "reveach(object,handler);",
    "title": "reveach()",
    "name": "Reveach",
    "description": "<p>Perform reversed loop through Array, Object, String, Number and DOMList.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "object",
            "description": "<p>Array, Object, String, Number or DOMList.</p> "
          },
          {
            "group": "Parameter",
            "type": "func",
            "optional": false,
            "field": "handler",
            "description": "<p>Function that handle each item. <br>Array iterator will give &#39;value&#39; and &#39;index&#39; as argument. <br>Object iterator will give &#39;key&#39; and &#39;value&#39; as argument. <br>String iterator will give &#39;char&#39; and &#39;index&#39; as argument. <br>Number iterator will give &#39;number&#39; as argument. <br>DOMList iterator will give &#39;elem&#39; and &#39;index&#39; as argument.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample: Array",
        "content": "var arr = [1,2,3,4];\n\nreveach(arr, function(value, i) {\n    console.log(value, i); // 4 3 >> 3 2 >> 2 1 >> 1 0\n}",
        "type": "js"
      },
      {
        "title": "Sample: Object",
        "content": "var obj = {a: 1, b: 2};\n\nreveach(obj, function(key, value) {\n    console.log(key, value); // b 2 >> a 1\n}",
        "type": "js"
      },
      {
        "title": "Sample: String",
        "content": "var str = 'Foo';\n\nreveach(str, function(char, i) {\n    console.log(char, i); // o 2 >> o 1 >> F 0\n}",
        "type": "js"
      },
      {
        "title": "Sample: Number",
        "content": "reveach(5, function(number) {\n    console.log(number); // 5 >> 4 >> 3 >> 2 >> 1\n}",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "Iterator"
  },
  {
    "group": "Private",
    "type": "cons",
    "url": "cons(name,value);",
    "title": "cons()",
    "name": "Cons",
    "description": "<p>Read or create new read-only variable. Since it&#39;s private, you must use cons() to read the value. Private variable live under single scope. You can change the value of the constant that already created.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Constant name.</p> "
          },
          {
            "group": "Parameter",
            "type": "Any",
            "optional": true,
            "field": "value",
            "description": "<p>Constant value. Leave blank to read value.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "x = cons('foo', 'bar'); // Set private constant foo to \"bar\".\n\nx = cons('foo'); // Read private variable foo.\n\nx = cons('foo', 'foobar'); // Nothing changed.\n\nx = foo; // Error.",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "Private"
  },
  {
    "group": "Private",
    "type": "func",
    "url": "func(name,handler);",
    "title": "func()",
    "name": "Func",
    "description": "<p>Run or create new read-only and private function. Since it&#39;s private, you must use func() to call the function. Private function live under single scope. You can&#39;t change the function handler to the function that already defined.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Function name.</p> "
          },
          {
            "group": "Parameter",
            "type": "Any",
            "optional": true,
            "field": "handler",
            "description": "<p>Function handler. Leave blank to read value.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "// Create new function.\nfunc('foo', function() {\n    console.log('bar');\n});\n\n// Call function.\nfunc('foo')();\n\n// Nothing changed since function 'foo' already defined.\nfunc('foo', function() {\n    console.log('foo');\n});\n\nfoo(); // ERROR.",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "Private"
  },
  {
    "group": "Private",
    "type": "vars",
    "url": "vars(name,value);",
    "title": "vars()",
    "name": "Vars",
    "description": "<p>Get or Set private variable. Since it&#39;s private, you must use vars() to read the value. Private variable live under single scope. Defining value in same name will replace the value, wherever you use that.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Variable name.</p> "
          },
          {
            "group": "Parameter",
            "type": "Any",
            "optional": true,
            "field": "value",
            "description": "<p>Variable value. Leave blank to read value.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "x = vars('foo', 'bar'); // Set private variable foo to \"bar\".\n\nx = vars('foo'); // Read private variable foo.\n\nx = foo; // Error.",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "dist/domlist.js",
    "groupTitle": "Private"
  }
] });