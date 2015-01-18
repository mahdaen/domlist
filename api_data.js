define({ "api": [
  {
    "version": "2.0.0",
    "group": "Checker",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Checker"
  },
  {
    "version": "2.0.0",
    "group": "Checker",
    "type": "hasclass",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Checker"
  },
  {
    "version": "2.0.0",
    "group": "Checker",
    "type": "hasdata",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Checker"
  },
  {
    "version": "2.0.0",
    "group": "Class",
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
        "content": "$dom('.foo').addClas('clearfix'); // Add single class.\n$dom('.foo').addClass('clearfix fit relative'); // Add multiple class.\n$dom('.foo').addClass(['clearfix', 'fit', 'relative']); // Add multiple class.",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Class"
  },
  {
    "version": "2.0.0",
    "group": "Class",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Class"
  },
  {
    "version": "2.0.0",
    "group": "Class",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Class"
  },
  {
    "version": "2.0.0",
    "group": "Core",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
    "type": "comment",
    "url": "DOMList.comment()",
    "title": ".comment()",
    "name": "Comment",
    "description": "<p>Comment out a block of selected elements.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
    "type": "filter",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
    "type": "first",
    "url": "DOMList.first();",
    "title": ".first()",
    "name": "First",
    "description": "<p>Get the first child of selected elements. Return DOMList object.</p> ",
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('span').first();",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
    "type": "firstchild",
    "url": "DOMList.firstChild();",
    "title": ".firstChild()",
    "name": "FirstChild",
    "description": "<p>Get the first child of the first selected elements. Return DOMList object.</p> ",
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('.container').firstChild();",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
    "type": "get",
    "url": "DOMList.get(index);",
    "title": ".get()",
    "name": "Get",
    "description": "<p>Get HTML Element from selected elements by specific index. If no index defined, return first element.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "index",
            "description": "<p>Index position of element. Started from 0.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "// Get second element from selected elements.\n$dom('span').get(1);",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
    "type": "indexof",
    "url": "DOMList.indexOf(element);",
    "title": ".indexOf()",
    "name": "IndexOf",
    "description": "<p>Get index of element from selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "HTMLElement",
            "optional": false,
            "field": "element",
            "description": "<p>HTML ELement or string CSS Selector. Return -1 if not found.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "// Get index number using HTML Element.\nvar span = $dom('span').get(2);\n$dom('span').indexOf(span); // Return 2\n\n// Get index number using selector.\n$dom('span').indexOf('.foo');",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
    "type": "last",
    "url": "DOMList.last();",
    "title": ".last()",
    "name": "Last",
    "description": "<p>Get the last child of selected elements. Return DOMList object.</p> ",
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('span').last();",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
    "type": "lastchild",
    "url": "DOMList.lastChild();",
    "title": ".lastChild()",
    "name": "LastChild",
    "description": "<p>Get the last child of the first selected elements. Return DOMList object.</p> ",
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom('.container').lastChild();",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
    "type": "match",
    "url": "DOMList.mathch(handler);",
    "title": ".match()",
    "name": "Match",
    "description": "<p>Filter selected elements using function. Hanlder should return true or false to tell matcher should current element should included or not. Hanlder will become an HTML Element. Matcher will return new DOMList object or null if no element matched.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "handler",
            "description": "<p>Function to handler HTML Element to return true or false.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span').match(function() {\n    return this.hasAttribute('href') ? true : false;\n});",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
    "type": "nth",
    "url": "DOMList.nth(index);",
    "title": ".nth()",
    "name": "NTH",
    "description": "<p>Get the selected elements by specific index. Return DOMList object.</p> ",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
    "type": "nthChild",
    "url": "DOMList.nthChild(index);",
    "title": ".nthChild()",
    "name": "NthChild",
    "description": "<p>Get the child elements by specific index from the first selected elements. Return DOMList object.</p> ",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
    "type": "parent",
    "url": "DOMList.parent()",
    "title": ".parent()",
    "name": "Parent",
    "description": "<p>Get the parent element of first selected element as DOMList object. Use &#39;true&#39; as argument to get all parent elements.</p> ",
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span').parent(); // Get the parent element of first span.\n$dom('span').parent(true); // Get parent element of all span.",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
    "type": "parents",
    "url": "DOMList.parents();",
    "title": ".parents()",
    "name": "Parents",
    "description": "<p>Get all parent element of all selected elements as DOMList object.</p> ",
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span').parents(); // Get the parent element of each span.",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
    "type": "push",
    "url": "DOMList.push(element);",
    "title": ".push()",
    "name": "Push",
    "description": "<p>Push single element or multiple element (DOMList or Array) to current DOMList. Using CSS selector string as element also accepted.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Multi",
            "optional": false,
            "field": "element",
            "description": "<p>HTML Element, DOMList, Array Element List, or CSS Selector String.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "var foo = $dom('.foo');\nvar bar = $dom('.bar')[0];\n\nfoo.push(bar); // Push bar to foo.\nfoo.push([bar]); // Push bar to foo.\nfoo.push('.bar'); // Push bar to foo.",
        "type": "json"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
    "type": "remdata",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
    "type": "siblings",
    "url": "DOMList.siblings();",
    "title": ".siblings()",
    "name": "Siblings",
    "description": "<p>Get sibling elements of first selected elements.</p> ",
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('body').siblings(); // Return DOMList with <head> element since head is sibling of body.",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
    "type": "toarray",
    "url": "DOMList.toArray();",
    "title": ".toArray()",
    "name": "ToArray",
    "description": "<p>Convert DOMList to array.</p> ",
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span').toArray(); // Convert DOMList contains span to array.",
        "type": "json"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
    "type": "tostring",
    "url": "DOMList.toString();",
    "title": ".toString()",
    "name": "ToString",
    "description": "<p>Convert first selected element to HTML String. Use &#39;true` as argument to convert all selected elements and return array.</p> ",
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span').toString(); // Convert first selected element and return HTML String.\n$dom('span').toString(true); // Convert all elements and return array contains each HTML String.",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
    "type": "wrap",
    "url": "DOMList.wrap(htmlstring);",
    "title": ".wrap()",
    "name": "Wrap",
    "description": "<p>Wrap selected elements with new element.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "HTMLString",
            "optional": false,
            "field": "htmlstring",
            "description": "<p>HTML String to wrap element.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span').wrap('<div class=\"wrapper\">');",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "Core",
    "type": "wrapchild",
    "url": "DOMList.wrapChild(htmlstring);",
    "title": ".wrapChild()",
    "name": "WrapChild",
    "description": "<p>Wrap child elements of selected elements with new element.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "HTMLString",
            "optional": false,
            "field": "htmlstring",
            "description": "<p>HTML String to wrap child element.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "// Wrap the container childrens with new container.\n$dom('.container').wrapChild('<div class=\"inner-container\">');",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Core"
  },
  {
    "version": "2.0.0",
    "group": "DOMList",
    "type": "domdata",
    "url": "$dom.data(name,value,context);",
    "title": "$dom.data()",
    "name": "DOMData",
    "description": "<p>Select elements that has data-attribute name or has data-attribute name with equal value. Using without arguments will select all elements that has data-attribute.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Multi",
            "optional": false,
            "field": "name",
            "description": "<p>String data-attribute name. Use space-delimiter to select multiple name. Object contains data-attribute name and value. Array contains attributes name.</p> "
          },
          {
            "group": "Parameter",
            "type": "Multi",
            "optional": true,
            "field": "value",
            "description": "<p>Compare with value if you use string in &#39;name&#39;. If value is HTML element or DOMList, it&#39;s used as context.</p> "
          },
          {
            "group": "Parameter",
            "type": "Multi",
            "optional": true,
            "field": "context",
            "description": "<p>HTML Element or DOMList as context.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$dom.data(); // Select elements that has data-attribute.",
        "type": "js"
      },
      {
        "title": "Sample #2",
        "content": "// It's like $dom('[data-foo=\"bar\"]');\n\n$dom.data('foo', 'bar'); // Select elements that has data-attribute 'data-foo' and 'data-foo' value is 'bar'.\n\n$dom.data('foo bar'); // Select elements that has 'data-foo' or 'data-bar'.\n$dom.data(['foo', 'bar']); // Select elements that has 'data-foo' or 'data-bar'.",
        "type": "js"
      },
      {
        "title": "Sample #3",
        "content": "// It's like $dom('[data-foo=\"bar\"], [data-bar=\"bar\"]');\n\n$dom.data('foo bar', 'bar'); // Select elements that has 'data-foo' or 'data-bar' and both value is 'bar'.",
        "type": "js"
      },
      {
        "title": "Sample #4",
        "content": "// It's like $dom('[data-foo], [data-bar]', div);\n\nvar div = $dom('.foobar');\n$dom.data('foo bar', div); // Select elements that has 'data-foo' or 'data-bar' from 'div' above.",
        "type": "js"
      },
      {
        "title": "Sample #5",
        "content": "// Using object as name will find elements that has both condition.\n// It's like $dom('[data-foo=\"bar\"][data-bar]');\n\n$dom.data({ 'foo': 'bar', 'data-bar': '' }); // Select elements that has 'data-foo' and 'data-bar' and 'data-foo' value is 'bar'.",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "DOMList"
  },
  {
    "version": "2.0.0",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "DOMList"
  },
  {
    "version": "2.0.0",
    "group": "DOMList",
    "type": "extend",
    "url": "$dom.exnted(name,handler);",
    "title": "$dom.extend()",
    "name": "Extend",
    "description": "<p>Register DOMList Modules.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Multi",
            "optional": false,
            "field": "name",
            "description": "<p>String module name or object contains modules.</p> "
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": true,
            "field": "handler",
            "description": "<p>Function that handle module.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$dom.extend('foo', function() {}); // Add module 'foo' to DOMList.\n$dom.extend({ foo: function() {}, bar: function() {} }); // Add multiple modules to DOMList.",
        "type": "json"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "DOMList"
  },
  {
    "version": "1.1.0",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "2.1.0",
    "group": "EventProvider",
    "type": "eventprovider",
    "url": "EventProvider",
    "title": ".about",
    "name": "EventProvider",
    "description": "<p>Create or trigger custom event to element.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "EventProvider"
  },
  {
    "version": "2.1.0",
    "group": "EventProvider",
    "type": "dispatch",
    "url": "EventProvider.dispatch(name,targetElement,properties);",
    "title": ".dispatch()",
    "name": "evDispatch",
    "description": "<p>Trigger custom event to element.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Custom",
            "description": "<p>event name.</p> "
          },
          {
            "group": "Parameter",
            "type": "HTMLElement",
            "optional": false,
            "field": "HTML",
            "description": "<p>Element to trigger custom event on.</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "properties",
            "description": "<p>Properties that will be added to event object. E.g { a: 1, b: 2 }. Then when event listener will get &#39;event.a&#39; and &#39;event.b&#39;.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span')\n    // Create listener.\n    .handle('foo', function(e) {\n        console.log(e.a, e.b);\n    })\n\n    // Triggering event.\n    .each(function() {\n        EventProvider.dispatch('foo', this, { a: 1, b: 2 });\n    });",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "EventProvider"
  },
  {
    "version": "2.1.0",
    "group": "EventProvider",
    "type": "register",
    "url": "EventProvider.register(name,maker,options);",
    "title": ".register()",
    "name": "evRegister",
    "description": "<p>Register custom event.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>String custom event name.</p> "
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "maker",
            "description": "<p>Function that handle event initialization. This function will be called by element if element listen to that event. You must manually trigger that event under this function.</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "options",
            "description": "<p>Custom event options. E.g { bubbles: false, cancelable: false, detail: undefind }</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "// Registering custom event.\nEventProvider.register('maxclick', function() {\n    // Listen click to the element.\n    $dom(this).click(function() {\n        if (!this.maxclick) this.maxclick = 1;\n\n        if (this.maxclick === 5) {\n            // Trigger the event to target and add maxclick property to event object.\n            EventProvider.dispatch('maxclick', this, { maxclick: this.maxclick });\n        } else {\n            this.maxclick++;\n        }\n    });\n});\n\n// Listening event.\n$dom('span').handle('maxclick', function(e) {\n    console.log('Your reached max click: ' + e.maxclick);\n});",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "EventProvider"
  },
  {
    "version": "2.1.0",
    "group": "EventProvider",
    "type": "",
    "url": "EventProvider.search(name);",
    "title": ".search()",
    "name": "evSearch",
    "description": "<p>Search custom event.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>String event name.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "EventProvider.search('swipe'); // Return swipe event provider object.",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "EventProvider"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "alias",
    "url": "DOMList.$alias(handler);",
    "title": "$alias",
    "name": "Alias",
    "description": "<p>Bind event or trigger event to selected elements. Alias is shortcut to bind event quickly. E.g DOMList.click(handler);</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "handler",
            "description": "<p>Function to handle event.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span').click(function() {}); // Bind click event.\n$dom('span').focus(); // Trigger focus event.",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "handle",
    "url": "DOMList.handle(type,handler);",
    "title": ".handle()",
    "name": "Handle",
    "description": "<p>Add event handler to selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Multi",
            "optional": false,
            "field": "type",
            "description": "<p>String event type or object contains events.</p> "
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "handler",
            "description": "<p>Function to handle event.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "// Hanlde single event.\n$dom('span').handle('click', function() {});\n\n// Handle multiple events.\n$dom('span').handle({\n    click: function() {},\n    mouseenter: function() {}\n});",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "listen",
    "url": "DOMList.listen(name,type,handler);",
    "title": ".listen()",
    "name": "Listen",
    "description": "<p>Add named event handler to selected elements. Named event handler give possibility to remove event handler only that has specific name, not remove all event handler.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Multi",
            "optional": false,
            "field": "name",
            "description": "<p>String handler name, or object contains names, types and handlers.</p> "
          },
          {
            "group": "Parameter",
            "type": "Multi",
            "optional": false,
            "field": "type",
            "description": "<p>String event type, or object contains types.</p> "
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "handler",
            "description": "<p>Function to handle event.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "// Handle click on spans with name fooclick.\n$dom('span').listen('fooclick', 'click', function() {});\n\n// Handle multiple event with name foo.\n$dom('span').listen('foo', {\n    click: function() {},\n    mouseenter: function() {}\n);\n\n// Handle mutiple name and events.\n$dom('span').listen({\n    foo: {\n        click: function() {}\n    },\n    bar: {\n        click: function() {}\n    }\n});",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "loaded",
    "url": "DOMList.loaded(handler);",
    "title": "$dom.loaded()",
    "name": "Loaded",
    "description": "<p>Add handler to handle when document is fully loaded.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "handler",
            "description": "<p>Function that handle when document is loaded to manipulate.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$dom.loaded(function() { console.log('document loaded'); });",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "ready",
    "url": "DOMList.ready(handler);",
    "title": "$dom.ready()",
    "name": "Ready",
    "description": "<p>Add handler to handle when document is ready to manipulate.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "handler",
            "description": "<p>Function that handle when document is ready to manipulate.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$dom.ready(function() { console.log('document ready'); });",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "trigger",
    "url": "DOMList.trigger(type,properties);",
    "title": ".trigger()",
    "name": "Trigger",
    "description": "<p>Dispatch an event to selected elements. You can also use alias .dispatch().</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>String event type. You can use array to dispatch multiple event.</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "properties",
            "description": "<p>Object contains additional properties to added to event object.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "// Dispatch click event to button.\n$dom('button').trigger('click');\n\n// Dispatch multiple event.\n$dom('button').trigger(['focus', 'click']);\n\n// Dispatch click event with additional properties.\n// Create listener.\n$dom('button').click(function(e) {\n    console.log(e.sender);\n};\n\n// Trigger\n$dom('button').trigger('click', { sender: 'document' });",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "unhandle",
    "url": "DOMList.unhandle(type);",
    "title": ".unhandle()",
    "name": "Unhandle",
    "description": "<p>Remove event handler from selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Multi",
            "optional": false,
            "field": "type",
            "description": "<p>String event type or array type list.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "// Remove single event.\n$dom('span').unhandle('click');\n\n// Remove multiple event.\n$dom('span').unhandle(['click', 'mouseenter']);",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "unlisten",
    "url": "DOMList.unlisten(name,type);",
    "title": ".unlisten()",
    "name": "Unlisten",
    "description": "<p>Remove named event handler from selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Multi",
            "optional": false,
            "field": "name",
            "description": "<p>handler name or array handler names.</p> "
          },
          {
            "group": "Parameter",
            "type": "Multi",
            "optional": true,
            "field": "type",
            "description": "<p>String event type or array event types. Leave blank to remove all event from that name.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "// Remove fooclick handler.\n$dom('span').unlisten('fooclick');\n\n// Remove click event from foo.\n$dom('span').unlisten('foo', 'click');\n\n// Remove click event from foo and bar.\n$dom('span').unlisten(['foo', 'bar'], 'click');\n\n// Remove click and mouseenter event from foo.\n$dom('span').unlisten('foo', ['click', 'mouseenter']);\n\n// Remove click and mouseenter event from foo and bar.\n$dom('span').unlisten(['foo', 'bar'], ['click', 'moueseenter']);",
        "type": "js"
      }
    ],
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "blur",
    "url": "DOMList.blur(handler);",
    "title": ".blur()",
    "name": "blur",
    "description": "<p>Handle blur event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "change",
    "url": "DOMList.change(handler);",
    "title": ".change()",
    "name": "change",
    "description": "<p>Handle change event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "click",
    "url": "DOMList.click(handler);",
    "title": ".click()",
    "name": "click",
    "description": "<p>Handle click event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "contet",
    "url": "DOMList.contextmenu(handler);",
    "title": ".contextmenu()",
    "name": "contextmenu",
    "description": "<p>Handle contextmenu event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "dblclick",
    "url": "DOMList.dblclick(handler);",
    "title": ".dblclick()",
    "name": "dblclick",
    "description": "<p>Handle dblclick event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "error",
    "url": "DOMList.error(handler);",
    "title": ".error()",
    "name": "error",
    "description": "<p>Handle error event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "focus",
    "url": "DOMList.focus(handler);",
    "title": ".focus()",
    "name": "focus",
    "description": "<p>Handle focus event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "focusin",
    "url": "DOMList.focusin(handler);",
    "title": ".focusin()",
    "name": "focusin",
    "description": "<p>Handle focusin event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "focusout",
    "url": "DOMList.focusout(handler);",
    "title": ".focusout()",
    "name": "focusout",
    "description": "<p>Handle focusout event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "hover",
    "url": "DOMList.hover(handler);",
    "title": ".hover()",
    "name": "hover",
    "description": "<p>Handle hover event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "keydown",
    "url": "DOMList.keydown(handler);",
    "title": ".keydown()",
    "name": "keydown",
    "description": "<p>Handle keydown event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "keypress",
    "url": "DOMList.keypress(handler);",
    "title": ".keypress()",
    "name": "keypress",
    "description": "<p>Handle keypress event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "keyup",
    "url": "DOMList.keyup(handler);",
    "title": ".keyup()",
    "name": "keyup",
    "description": "<p>Handle keyup event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "load",
    "url": "DOMList.load(handler);",
    "title": ".load()",
    "name": "load",
    "description": "<p>Handle load event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "mousedown",
    "url": "DOMList.mousedown(handler);",
    "title": ".mousedown()",
    "name": "mousedown",
    "description": "<p>Handle mousedown event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "mouseenter",
    "url": "DOMList.mouseenter(handler);",
    "title": ".mouseenter()",
    "name": "mouseenter",
    "description": "<p>Handle mouseenter event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "mouseleave",
    "url": "DOMList.mouseleave(handler);",
    "title": ".mouseleave()",
    "name": "mouseleave",
    "description": "<p>Handle mouseleave event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "mousemove",
    "url": "DOMList.mousemove(handler);",
    "title": ".mousemove()",
    "name": "mousemove",
    "description": "<p>Handle mousemove event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "mouseout",
    "url": "DOMList.mouseout(handler);",
    "title": ".mouseout()",
    "name": "mouseout",
    "description": "<p>Handle mouseout event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "mouseover",
    "url": "DOMList.mouseover(handler);",
    "title": ".mouseover()",
    "name": "mouseover",
    "description": "<p>Handle mouseover event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "mouseup",
    "url": "DOMList.mouseup(handler);",
    "title": ".mouseup()",
    "name": "mouseup",
    "description": "<p>Handle mouseup event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "resize",
    "url": "DOMList.resize(handler);",
    "title": ".resize()",
    "name": "resize",
    "description": "<p>Handle resize event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "scroll",
    "url": "DOMList.scroll(handler);",
    "title": ".scroll()",
    "name": "scroll",
    "description": "<p>Handle scroll event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "select",
    "url": "DOMList.select(handler);",
    "title": ".select()",
    "name": "select",
    "description": "<p>Handle select event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "submit",
    "url": "DOMList.submit(handler);",
    "title": ".submit()",
    "name": "submit",
    "description": "<p>Handle submit event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "switch",
    "url": "DOMList.switch(handler);",
    "title": ".switch()",
    "name": "switch",
    "description": "<p>Handle load event or trigger if no argument defined. Switch is toggle between on and off. &#39;state&#39; property provided on event object.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.1.0",
    "group": "Events",
    "type": "unload",
    "url": "DOMList.unload(handler);",
    "title": ".unload()",
    "name": "unload",
    "description": "<p>Handle unload event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Events"
  },
  {
    "version": "2.0.0",
    "group": "Injects",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Injects"
  },
  {
    "version": "2.0.0",
    "group": "Injects",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Injects"
  },
  {
    "version": "2.0.0",
    "group": "Injects",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Injects"
  },
  {
    "version": "2.0.0",
    "group": "Injects",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Injects"
  },
  {
    "version": "2.0.0",
    "group": "Injects",
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
            "description": "<p>Inner html value. Using DOMList or Array Element List will append them to the first selected element.</p> "
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Injects"
  },
  {
    "version": "2.0.0",
    "group": "Injects",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Injects"
  },
  {
    "version": "2.0.0",
    "group": "Injects",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Injects"
  },
  {
    "version": "2.0.0",
    "group": "Injects",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Injects"
  },
  {
    "version": "2.0.0",
    "group": "Injects",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Injects"
  },
  {
    "version": "2.0.0",
    "group": "Injects",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Injects"
  },
  {
    "version": "2.0.0",
    "group": "Injects",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Injects"
  },
  {
    "version": "2.0.0",
    "group": "Injects",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Injects"
  },
  {
    "version": "1.1.0",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Iterator"
  },
  {
    "version": "1.1.0",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Iterator"
  },
  {
    "version": "1.1.0",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Private"
  },
  {
    "version": "1.1.0",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Private"
  },
  {
    "version": "1.1.0",
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
    "filename": "tags/v2.0.0.js",
    "groupTitle": "Private"
  }
] });