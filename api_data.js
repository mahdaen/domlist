define({ "api": [
  {
    "version": "2.0.0",
    "group": "1__DOMList",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "1__DOMList"
  },
  {
    "version": "2.0.0",
    "group": "1__DOMList",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "1__DOMList"
  },
  {
    "version": "2.0.0",
    "group": "1__DOMList",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "1__DOMList"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
    "type": "comment",
    "url": "DOMList.comment()",
    "title": ".comment()",
    "name": "Comment",
    "description": "<p>Comment out a block of selected elements.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
    "type": "next",
    "url": "DOMList.next(query);",
    "title": ".next()",
    "name": "Next",
    "description": "<p>Get the next element after first selected element inside parent element.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "query",
            "description": "<p>CSS Selector to match the next element or Function to handle each next element and return true if match.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span.foo').next(); // Get the next element after span.foo inside parent element.\n$dom('span.foo').next('.bar'); // Get the next element after span.foo and the first match with .bar inside parent element.\n\n// Using function as query.\n$dom('.foo').next(function() {\n    return $dom(this).hasClass('bar') : true : false;\n});",
        "type": "js"
      }
    ],
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
    "type": "nextall",
    "url": "DOMList.nextAll(query);",
    "title": ".nextAll()",
    "name": "NextAll",
    "description": "<p>Get all element after first selected element.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "query",
            "description": "<p>CSS Selector to match the next element or Function to handle each next element and return true if match.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('.foo').nextAll(); // Get all elements after .foo inside parent element.\n$dom('.foo').nextAll('.bar'); // Get all .bar elements after .foo inside parent element.\n\n// Using function as query.\n$dom('.foo').nextAll(function() {\n    return $dom(this).hasClass('bar') : true : false;\n});",
        "type": "js"
      }
    ],
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
    "type": "parentuntil",
    "url": "DOMList.parentUntil(query);",
    "title": ".parentUntil()",
    "name": "ParentUntil",
    "description": "<p>Get recrusive parent element of first selected element until match with query.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>CSS Selector to match parent element or Function to handle each parent element to return true or false.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('.foo').parentUntil('.container'); // Get the container of .foo.\n\n// Using function as query.\n$dom('.foo').parentUntil(function() {\n    return $dom(this).hasClass('container') : true : false\n});",
        "type": "js"
      }
    ],
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
    "type": "prev",
    "url": "DOMList.prev(query);",
    "title": ".prev()",
    "name": "Prev",
    "description": "<p>Get the prev element after first selected element inside parent element.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "query",
            "description": "<p>CSS Selector to match the prev element or Function to handle each prev element and return true if match.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span.foo').prev(); // Get the prev element after span.foo inside parent element.\n$dom('span.foo').prev('.bar'); // Get the prev element after span.foo and the first match with .bar inside parent element.\n\n// Using function as query.\n$dom('.foo').prev(function() {\n    return $dom(this).hasClass('bar') : true : false;\n});",
        "type": "js"
      }
    ],
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
    "type": "prevall",
    "url": "DOMList.prevAll(query);",
    "title": ".prevAll()",
    "name": "PrevAll",
    "description": "<p>Get all element before first selected element.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "query",
            "description": "<p>CSS Selector to match the prev element or Function to handle each prev element and return true if match.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('.foo').prevAll(); // Get all elements before .foo inside parent element.\n$dom('.foo').prevAll('.bar'); // Get all .bar elements before .foo inside parent element.\n\n// Using function as query.\n$dom('.foo').prevAll(function() {\n    return $dom(this).hasClass('bar') : true : false;\n});",
        "type": "js"
      }
    ],
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
    "type": "remprop",
    "url": "DOMList.remProp(name);",
    "title": ".remProp()",
    "name": "RemProp",
    "description": "<p>Remove properties from selected elements. If properties also available in attributes, it&#39;s removed too.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "property",
            "description": "<p>String property name or array property name list.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span').remProp('foo'); // Remove foo prop.\n$dom('span').remProp(['foo', 'bar']); // Remove foo and bar prop.",
        "type": "js"
      }
    ],
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
    "type": "replace",
    "url": "DOMList.replace(target,source);",
    "title": ".replace()",
    "name": "Replace",
    "description": "<p>Replace matched target in selected elements with new element or existing element.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CSS",
            "description": "<p>Selector or HTML Element.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "HTML",
            "description": "<p>String to create new element or existing HTML Element.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span').replace('.foo', '<span class=\"bar\">'); // Replace using CSS Selector and HTML String.\n\nvar foo = $dom('span').filter('.foo').get();\nvar bar = $dom('span').filter('.bar').get();\n\n$dom('span').replace(foo, bar); // Replace using HTML Element.",
        "type": "js"
      }
    ],
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
    "type": "replacewith",
    "url": "DOMList.replaceWith(source);",
    "title": ".replaceWith()",
    "name": "ReplaceWith",
    "description": "<p>Replace each selected elements with new element or existing element. Replacing with HTML Element will only replace the first selected element.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>HTML String to create new element or existing HTML Element.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span').replaceWith('<a href=\"#\">'); // Replace all span with new anchor element.\n$dom('span').replaceWith(document.getElementById('foo')); // Replace with existing element.",
        "type": "js"
      }
    ],
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
    "type": "slice",
    "url": "DOMList.slice(index);",
    "title": ".slice()",
    "name": "Slice",
    "description": "<p>Remove element from the selected elements with specific index.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "index",
            "description": "<p>Element index number. Use array to remove multiple element.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span').slice(2); // Remove thrid element from selected elements.\n$dom('span').slice([0,3,2]); // Remove multiple element from selected elements.",
        "type": "js"
      }
    ],
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
    "type": "nextuntil",
    "url": "DOMList.nextUntil(query);",
    "title": ".nextUntil()",
    "name": "nextuntil",
    "description": "<p>Get all element after first selected element until found matched query.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>CSS Selector to match the next element or Function to handle each next element and return true if match.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('.foo').nextUntil('.bar'); // Get all elements after .foo until found .bar inside parent element.\n\n// Using function as query.\n$dom('.foo').nextUntil(function() {\n    return $dom(this).hasClass('bar') : true : false;\n});",
        "type": "js"
      }
    ],
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "2__Core",
    "type": "prevuntil",
    "url": "DOMList.prevUntil(query);",
    "title": ".prevUntil()",
    "name": "prevuntil",
    "description": "<p>Get all element before first selected element until found matched query.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>CSS Selector to match the prev element or Function to handle each prev element and return true if match.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('.foo').prevUntil('.bar'); // Get all elements before .foo until found .bar inside parent element.\n\n// Using function as query.\n$dom('.foo').prevUntil(function() {\n    return $dom(this).hasClass('bar') : true : false;\n});",
        "type": "js"
      }
    ],
    "filename": "tags/v2.1.0.js",
    "groupTitle": "2__Core"
  },
  {
    "version": "2.0.0",
    "group": "3__Class",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "3__Class"
  },
  {
    "version": "2.0.0",
    "group": "3__Class",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "3__Class"
  },
  {
    "version": "2.0.0",
    "group": "3__Class",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "3__Class"
  },
  {
    "version": "2.0.0",
    "group": "4__Injects",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "4__Injects"
  },
  {
    "version": "2.0.0",
    "group": "4__Injects",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "4__Injects"
  },
  {
    "version": "2.0.0",
    "group": "4__Injects",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "4__Injects"
  },
  {
    "version": "2.0.0",
    "group": "4__Injects",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "4__Injects"
  },
  {
    "version": "2.0.0",
    "group": "4__Injects",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "4__Injects"
  },
  {
    "version": "2.0.0",
    "group": "4__Injects",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "4__Injects"
  },
  {
    "version": "2.0.0",
    "group": "4__Injects",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "4__Injects"
  },
  {
    "version": "2.0.0",
    "group": "4__Injects",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "4__Injects"
  },
  {
    "version": "2.0.0",
    "group": "4__Injects",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "4__Injects"
  },
  {
    "version": "2.0.0",
    "group": "4__Injects",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "4__Injects"
  },
  {
    "version": "2.0.0",
    "group": "4__Injects",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "4__Injects"
  },
  {
    "version": "2.0.0",
    "group": "4__Injects",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "4__Injects"
  },
  {
    "version": "2.0.0",
    "group": "5__Checker",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "5__Checker"
  },
  {
    "version": "2.0.0",
    "group": "5__Checker",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "5__Checker"
  },
  {
    "version": "2.0.0",
    "group": "5__Checker",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "5__Checker"
  },
  {
    "version": "2.0.0",
    "group": "5__Checker",
    "type": "is",
    "url": "DOMList.is(query);",
    "title": ".is()",
    "name": "Is",
    "description": "<p>Check does first selected element is match with query or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>CSS Selector string or HTML Element.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span.foo').is('.foo'); // true\n$dom('span.foo').is('.bar'); // false if span.foo don't have class bar.",
        "type": "js"
      }
    ],
    "filename": "tags/v2.1.0.js",
    "groupTitle": "5__Checker"
  },
  {
    "version": "2.0.0",
    "group": "5__Checker",
    "type": "not",
    "url": "DOMList.not(query);",
    "title": ".not()",
    "name": "Not",
    "description": "<p>Check does first selected element is not match with query or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>CSS Selector string or HTML Element.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span.foo').not('.foo'); // false\n$dom('span.foo').not('.bar'); // true if span.foo don't have class bar.",
        "type": "js"
      }
    ],
    "filename": "tags/v2.1.0.js",
    "groupTitle": "5__Checker"
  },
  {
    "version": "2.1.0",
    "group": "6__EventProvider",
    "type": "eventprovider",
    "url": "EventProvider",
    "title": ".about",
    "name": "EventProvider",
    "description": "<p>Create or trigger custom event to element.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "6__EventProvider"
  },
  {
    "version": "2.1.0",
    "group": "6__EventProvider",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "6__EventProvider"
  },
  {
    "version": "2.1.0",
    "group": "6__EventProvider",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "6__EventProvider"
  },
  {
    "version": "2.1.0",
    "group": "6__EventProvider",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "6__EventProvider"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.3.2",
    "group": "7__Events",
    "type": "loaded",
    "url": "DOMList.loaded(handler);",
    "title": "$dom.loaded()",
    "name": "Loaded",
    "description": "<p>Add handler to handle when document is fully loaded. This event wont fired until all images loaded. Since v2.3.2, you can delay the load event with increasing loadQueue counter, since this event will loaded after loadQueue value is 0.</p> ",
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
      },
      {
        "title": "Queue Sample",
        "content": "$.ready(function() {\n    // Create custom background image loader.\n    $dom('[bg-img]').each(function() {\n        // Increase queue.\n        EventProvider.loadQueue++;\n\n        // Create image to detect load status.\n        var img = $dom('<img>').attr('src', this.getAttribute('bg-img'));\n\n        // Handle img load event to decrease queue.\n        img.get().onload = function() {\n            EventProvider.loadQueue--;\n\n            // Fire loadHandler if window already loaded to check the loadQueue count\n            // and check whether should be executed.\n            if (window.isloaded) EventProvider.loadHandler();\n        };\n    });\n});",
        "type": "js"
      }
    ],
    "filename": "tags/v2.3.2.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
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
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "blur",
    "url": "DOMList.blur(handler);",
    "title": ".blur()",
    "name": "blur",
    "description": "<p>Handle blur event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "change",
    "url": "DOMList.change(handler);",
    "title": ".change()",
    "name": "change",
    "description": "<p>Handle change event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "click",
    "url": "DOMList.click(handler);",
    "title": ".click()",
    "name": "click",
    "description": "<p>Handle click event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "contet",
    "url": "DOMList.contextmenu(handler);",
    "title": ".contextmenu()",
    "name": "contextmenu",
    "description": "<p>Handle contextmenu event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "dblclick",
    "url": "DOMList.dblclick(handler);",
    "title": ".dblclick()",
    "name": "dblclick",
    "description": "<p>Handle dblclick event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "error",
    "url": "DOMList.error(handler);",
    "title": ".error()",
    "name": "error",
    "description": "<p>Handle error event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "focus",
    "url": "DOMList.focus(handler);",
    "title": ".focus()",
    "name": "focus",
    "description": "<p>Handle focus event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "focusin",
    "url": "DOMList.focusin(handler);",
    "title": ".focusin()",
    "name": "focusin",
    "description": "<p>Handle focusin event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "focusout",
    "url": "DOMList.focusout(handler);",
    "title": ".focusout()",
    "name": "focusout",
    "description": "<p>Handle focusout event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "hover",
    "url": "DOMList.hover(handler);",
    "title": ".hover()",
    "name": "hover",
    "description": "<p>Handle hover event or trigger if no argument defined. &#39;status&#39; property will added to event object, status is &#39;enter&#39; or &#39;leave&#39;.</p> ",
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('a').hover(function(e) {\n    if (e.status === 'enter') {\n        console.log('entered');\n    else if (e.status === 'leave') {\n        console.log('leaving');\n    }\n});",
        "type": "js"
      }
    ],
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "keydown",
    "url": "DOMList.keydown(handler);",
    "title": ".keydown()",
    "name": "keydown",
    "description": "<p>Handle keydown event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "keypress",
    "url": "DOMList.keypress(handler);",
    "title": ".keypress()",
    "name": "keypress",
    "description": "<p>Handle keypress event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "keyup",
    "url": "DOMList.keyup(handler);",
    "title": ".keyup()",
    "name": "keyup",
    "description": "<p>Handle keyup event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "load",
    "url": "DOMList.load(handler);",
    "title": ".load()",
    "name": "load",
    "description": "<p>Handle load event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "mousedown",
    "url": "DOMList.mousedown(handler);",
    "title": ".mousedown()",
    "name": "mousedown",
    "description": "<p>Handle mousedown event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "mouseenter",
    "url": "DOMList.mouseenter(handler);",
    "title": ".mouseenter()",
    "name": "mouseenter",
    "description": "<p>Handle mouseenter event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "mouseleave",
    "url": "DOMList.mouseleave(handler);",
    "title": ".mouseleave()",
    "name": "mouseleave",
    "description": "<p>Handle mouseleave event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "mousemove",
    "url": "DOMList.mousemove(handler);",
    "title": ".mousemove()",
    "name": "mousemove",
    "description": "<p>Handle mousemove event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "mouseout",
    "url": "DOMList.mouseout(handler);",
    "title": ".mouseout()",
    "name": "mouseout",
    "description": "<p>Handle mouseout event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "mouseover",
    "url": "DOMList.mouseover(handler);",
    "title": ".mouseover()",
    "name": "mouseover",
    "description": "<p>Handle mouseover event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "mouseup",
    "url": "DOMList.mouseup(handler);",
    "title": ".mouseup()",
    "name": "mouseup",
    "description": "<p>Handle mouseup event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "resize",
    "url": "DOMList.resize(handler);",
    "title": ".resize()",
    "name": "resize",
    "description": "<p>Handle resize event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "scroll",
    "url": "DOMList.scroll(handler);",
    "title": ".scroll()",
    "name": "scroll",
    "description": "<p>Handle scroll event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "select",
    "url": "DOMList.select(handler);",
    "title": ".select()",
    "name": "select",
    "description": "<p>Handle select event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "submit",
    "url": "DOMList.submit(handler);",
    "title": ".submit()",
    "name": "submit",
    "description": "<p>Handle submit event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "switch",
    "url": "DOMList.switch(handler);",
    "title": ".switch()",
    "name": "switch",
    "description": "<p>Handle load event or trigger if no argument defined. Switch is toggle between on and off. &#39;state&#39; property will be added to event object, state is &#39;on&#39; or &#39;off&#39;.</p> ",
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('a').switch(function(e) {\n    if (e.state === 'on') {\n        console.log('turned on');\n    else if (e.state === 'off') {\n        console.log('turned off');\n    }\n});",
        "type": "js"
      }
    ],
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.1.0",
    "group": "7__Events",
    "type": "unload",
    "url": "DOMList.unload(handler);",
    "title": ".unload()",
    "name": "unload",
    "description": "<p>Handle unload event or trigger if no argument defined.</p> ",
    "filename": "tags/v2.1.0.js",
    "groupTitle": "7__Events"
  },
  {
    "version": "2.2.0",
    "group": "8__CSS",
    "type": "css",
    "url": "DOMList.css(property,value);",
    "title": ".css()",
    "name": "CSS",
    "description": "<p>Get or Set Inline CSS Styles. We detect and use native browser version of css. So you don&#39;t need to add prefix in non-standard css properties.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "property",
            "description": "<p>String CSS Property name. You can use object to set multiple CSS. Leave blank to get all available inline css and DOMList will return an object. CSS Property name is case incensitive.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>String CSS Value. You can use number or boolean as well.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "// Set single property.\n$dom('span').css('background-image', 'url(...)');\n\n// Set multiple properties.\n$dom('span').css({\n    backgroundImage: 'url(...)',\n    'background-color': '#ccc',\n    borderradius: 3\n});\n\n// Get single property.\nvar bg = $dom('span').css('background-image');\n\n// Get all css.\nvar csses = $dom('span').css();",
        "type": "js"
      }
    ],
    "filename": "tags/v2.2.0.js",
    "groupTitle": "8__CSS"
  },
  {
    "version": "2.2.0",
    "group": "8__CSS",
    "type": "cstyle",
    "url": "DOMList.cstyle(property);",
    "title": ".cstyle()",
    "name": "CStyle",
    "description": "<p>Get computed css from first selected element.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "property",
            "description": "<p>String CSS Property name or array property list to get multiple properties.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span').cstyle('width'); // Get computed width.\n$dom('span').cstyle(['width', 'height']); // Get computed width and height.",
        "type": "js"
      }
    ],
    "filename": "tags/v2.2.0.js",
    "groupTitle": "8__CSS"
  },
  {
    "version": "2.2.0",
    "group": "8__CSS",
    "type": "clientHeight",
    "url": "DOMList.clientHeight();",
    "title": ".clientHeight()",
    "name": "clientHeight",
    "description": "<p>Get clientHeight of first selected element.</p> ",
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span').clientHeight();",
        "type": "js"
      }
    ],
    "filename": "tags/v2.2.0.js",
    "groupTitle": "8__CSS"
  },
  {
    "version": "2.2.0",
    "group": "8__CSS",
    "type": "clientWidth",
    "url": "DOMList.clientWidth();",
    "title": ".clientWidth()",
    "name": "clientWidth",
    "description": "<p>Get clientWidth of first selected element.</p> ",
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span').clientWidth();",
        "type": "js"
      }
    ],
    "filename": "tags/v2.2.0.js",
    "groupTitle": "8__CSS"
  },
  {
    "version": "2.2.0",
    "group": "8__CSS",
    "type": "offset",
    "url": "DOMList.offset();",
    "title": ".offset()",
    "name": "offset",
    "description": "<p>Get offset of first selected element. Returns object { width, height, scrollTop, scrollLeft, top, left, ratio };</p> ",
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span').offset();",
        "type": "js"
      }
    ],
    "filename": "tags/v2.2.0.js",
    "groupTitle": "8__CSS"
  },
  {
    "version": "2.2.0",
    "group": "8__CSS",
    "type": "offsetHeight",
    "url": "DOMList.offsetHeight();",
    "title": ".offsetHeight()",
    "name": "offsetHeight",
    "description": "<p>Get offsetHeight of first selected element.</p> ",
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span').offsetHeight();",
        "type": "js"
      }
    ],
    "filename": "tags/v2.2.0.js",
    "groupTitle": "8__CSS"
  },
  {
    "version": "2.2.0",
    "group": "8__CSS",
    "type": "offsetWidth",
    "url": "DOMList.offsetWidth();",
    "title": ".offsetWidth()",
    "name": "offsetWidth",
    "description": "<p>Get offsetWidth of first selected element.</p> ",
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span').offsetWidth();",
        "type": "js"
      }
    ],
    "filename": "tags/v2.2.0.js",
    "groupTitle": "8__CSS"
  },
  {
    "version": "2.2.0",
    "group": "8__CSS",
    "type": "orientation",
    "url": "DOMList.orientation();",
    "title": ".orientation()",
    "name": "orientation",
    "description": "<p>Get and apply box orientation of first selected element. Attribute &#39;portrait&#39; or &#39;landscape&#39; will added to each elements.</p> ",
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span').orientation(); // Get the box orientation.",
        "type": "js"
      }
    ],
    "filename": "tags/v2.2.0.js",
    "groupTitle": "8__CSS"
  },
  {
    "version": "2.2.0",
    "group": "8__CSS",
    "type": "ratio",
    "url": "DOMList.ratio(ratio);",
    "title": ".ratio()",
    "name": "ratio",
    "description": "<p>Get or set box ratio of first selected element.</p> ",
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span').ratio(); // Get the box ratio.\n$dom('span').ratio('16:9'); // Set the box ratio.",
        "type": "js"
      }
    ],
    "filename": "tags/v2.2.0.js",
    "groupTitle": "8__CSS"
  },
  {
    "version": "2.2.0",
    "group": "8__CSS",
    "type": "scrollHeight",
    "url": "DOMList.scrollHeight();",
    "title": ".scrollHeight()",
    "name": "scrollHeight",
    "description": "<p>Get scrollHeight of first selected element.</p> ",
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span').scrollHeight();",
        "type": "js"
      }
    ],
    "filename": "tags/v2.2.0.js",
    "groupTitle": "8__CSS"
  },
  {
    "version": "2.2.0",
    "group": "8__CSS",
    "type": "scrollLeft",
    "url": "DOMList.scrollLeft();",
    "title": ".scrollLeft()",
    "name": "scrollLeft",
    "description": "<p>Get scrollLeft of first selected element.</p> ",
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span').scrollLeft();",
        "type": "js"
      }
    ],
    "filename": "tags/v2.2.0.js",
    "groupTitle": "8__CSS"
  },
  {
    "version": "2.2.0",
    "group": "8__CSS",
    "type": "scrollTop",
    "url": "DOMList.scrollTop();",
    "title": ".scrollTop()",
    "name": "scrollTop",
    "description": "<p>Get scrollTop of first selected element.</p> ",
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span').scrollTop();",
        "type": "js"
      }
    ],
    "filename": "tags/v2.2.0.js",
    "groupTitle": "8__CSS"
  },
  {
    "version": "2.2.0",
    "group": "8__CSS",
    "type": "scrollWidth",
    "url": "DOMList.scrollWidth();",
    "title": ".scrollWidth()",
    "name": "scrollWidth",
    "description": "<p>Get scrollWidth of first selected element.</p> ",
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('span').scrollWidth();",
        "type": "js"
      }
    ],
    "filename": "tags/v2.2.0.js",
    "groupTitle": "8__CSS"
  },
  {
    "version": "2.3.0",
    "group": "9__Animation",
    "type": "animate",
    "url": "DOMList.animate(properties,options,callback);",
    "title": ".animate()",
    "name": "animate",
    "description": "<p>Animate selected elements. Animation needs TweenMax (GSAP) to run. See TweenMax docs to find needed options.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "properties",
            "description": "<p>Object CSS Property and value list. Use CSS Properties only for each key. Don&#39;t put GSAP options here.</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "options",
            "description": "<p>Object animation options. Use number as duration if no special options like easing. Duration is in seconds not milliseconds. Default duration if no options defined or nor duration defined is 0.5s</p> "
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "callback",
            "description": "<p>Function to be called when animations finished.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "// Animate with callback and special options in 3s.\n$dom('.card').animate({\n    color: 'red',\n    opacity: 0.5\n}, {\n    duration: 3,\n    ease: Power4.easeInOut\n}, function() {\n    console.log('animation finished');\n});\n\n// Animate without callback and special options in 5s.\n$dom('.card').animate({\n    opacity: 0.5,\n    backgroundColor: 'green'\n}, 5);",
        "type": "js"
      }
    ],
    "filename": "tags/v2.3.0.js",
    "groupTitle": "9__Animation"
  },
  {
    "version": "2.3.0",
    "group": "9__Animation",
    "type": "fadeIn",
    "url": "DOMList.fadeIn(duration,callback)",
    "title": ".fadeIn()",
    "name": "fadeIn",
    "description": "<p>Fade in selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Fade duration in seconds.</p> "
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "callback",
            "description": "<p>Callback to be called when fade is done.</p> "
          }
        ]
      }
    },
    "filename": "tags/v2.3.0.js",
    "groupTitle": "9__Animation"
  },
  {
    "version": "2.3.0",
    "group": "9__Animation",
    "type": "fadeOut",
    "url": "DOMList.fadeOut(duration,callback)",
    "title": ".fadeOut()",
    "name": "fadeOut",
    "description": "<p>Fade out selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Fade duration in seconds.</p> "
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "callback",
            "description": "<p>Callback to be called when fade is done.</p> "
          }
        ]
      }
    },
    "filename": "tags/v2.3.0.js",
    "groupTitle": "9__Animation"
  },
  {
    "version": "2.3.0",
    "group": "9__Animation",
    "type": "fadeToggle",
    "url": "DOMList.fadeToggle(duration,callback)",
    "title": ".fadeToggle()",
    "name": "fadeToggle",
    "description": "<p>Toggle fade in-out selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Fade duration in seconds.</p> "
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "callback",
            "description": "<p>Callback to be called when fade is done.</p> "
          }
        ]
      }
    },
    "filename": "tags/v2.3.0.js",
    "groupTitle": "9__Animation"
  },
  {
    "version": "2.3.0",
    "group": "9__Animation",
    "type": "keyframes",
    "url": "DOMList.keyframes(times,options,callback);",
    "title": ".keyframes()",
    "name": "keyframes",
    "description": "<p>Animate selected elements with keyframes.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "times",
            "description": "<p>Object css timeline. Main key should use number. E.g { 10: {}, 50: {}, 100: {} }. 10 is mean 10%, 50 is 50% an so on.</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "options",
            "description": "<p>Each animation options. See .animate() docs to find out about the options.</p> "
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "callback",
            "description": "<p>Callback that will be called when keyframes finished.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$dom('.card').keyframes({\n   10: {\n       color: 'red'\n   },\n   50: {\n       color: 'green'\n   },\n   100: {\n       color: 'blue'\n   }\n}, {\n    duration: 5,\n    ease: Power3.easeInOut\n}, function() {\n    console.log('Keyframes finished.');\n});",
        "type": "js"
      }
    ],
    "filename": "tags/v2.3.0.js",
    "groupTitle": "9__Animation"
  },
  {
    "version": "2.3.0",
    "group": "9__Animation",
    "type": "pause",
    "url": "DOMList.pause()",
    "title": ".pause()",
    "name": "pause",
    "description": "<p>Pause animation in selected elements.</p> ",
    "filename": "tags/v2.3.0.js",
    "groupTitle": "9__Animation"
  },
  {
    "version": "2.3.0",
    "group": "9__Animation",
    "type": "resume",
    "url": "DOMList.resume()",
    "title": ".resume()",
    "name": "resume",
    "description": "<p>Resume animation in selected elements.</p> ",
    "filename": "tags/v2.3.0.js",
    "groupTitle": "9__Animation"
  },
  {
    "version": "2.3.0",
    "group": "9__Animation",
    "type": "reverse",
    "url": "DOMList.reverse()",
    "title": ".reverse()",
    "name": "reverse",
    "description": "<p>Reverse animation in selected elements.</p> ",
    "filename": "tags/v2.3.0.js",
    "groupTitle": "9__Animation"
  },
  {
    "version": "2.3.0",
    "group": "9__Animation",
    "type": "seek",
    "url": "DOMList.seek(time)",
    "title": ".seek()",
    "name": "seek",
    "description": "<p>Seek animation to time in selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>Time in seconds to jump in.</p> "
          }
        ]
      }
    },
    "filename": "tags/v2.3.0.js",
    "groupTitle": "9__Animation"
  },
  {
    "version": "2.3.0",
    "group": "9__Animation",
    "type": "!beta",
    "url": "DOMList.slideDown(duration,callback)",
    "title": ".slideDown()",
    "name": "slideDown",
    "description": "<p>Slide down selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Slide duration in seconds.</p> "
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "callback",
            "description": "<p>Callback to be called when slide is done.</p> "
          }
        ]
      }
    },
    "filename": "tags/v2.3.0.js",
    "groupTitle": "9__Animation"
  },
  {
    "version": "2.3.0",
    "group": "9__Animation",
    "type": "!beta",
    "url": "DOMList.slideLeft(duration,callback)",
    "title": ".slideLeft()",
    "name": "slideLeft",
    "description": "<p>Slide left selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Slide duration in seconds.</p> "
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "callback",
            "description": "<p>Callback to be called when slide is done.</p> "
          }
        ]
      }
    },
    "filename": "tags/v2.3.0.js",
    "groupTitle": "9__Animation"
  },
  {
    "version": "2.3.0",
    "group": "9__Animation",
    "type": "!beta",
    "url": "DOMList.slideRight(duration,callback)",
    "title": ".slideRight()",
    "name": "slideRight",
    "description": "<p>Slide right selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Slide duration in seconds.</p> "
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "callback",
            "description": "<p>Callback to be called when slide is done.</p> "
          }
        ]
      }
    },
    "filename": "tags/v2.3.0.js",
    "groupTitle": "9__Animation"
  },
  {
    "version": "2.3.0",
    "group": "9__Animation",
    "type": "!beta",
    "url": "DOMList.slideToggleX(duration,callback)",
    "title": ".slideToggleX()",
    "name": "slideToggleX",
    "description": "<p>Toggle slide left-right selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Slide duration in seconds.</p> "
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "callback",
            "description": "<p>Callback to be called when slide is done.</p> "
          }
        ]
      }
    },
    "filename": "tags/v2.3.0.js",
    "groupTitle": "9__Animation"
  },
  {
    "version": "2.3.0",
    "group": "9__Animation",
    "type": "!beta",
    "url": "DOMList.slideToggleY(duration,callback)",
    "title": ".slideToggleY()",
    "name": "slideToggleY",
    "description": "<p>Toggle slide up-down selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Slide duration in seconds.</p> "
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "callback",
            "description": "<p>Callback to be called when slide is done.</p> "
          }
        ]
      }
    },
    "filename": "tags/v2.3.0.js",
    "groupTitle": "9__Animation"
  },
  {
    "version": "2.3.0",
    "group": "9__Animation",
    "type": "!beta",
    "url": "DOMList.slideUp(duration,callback)",
    "title": ".slideUp()",
    "name": "slideUp",
    "description": "<p>Slide up selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Slide duration in seconds.</p> "
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "callback",
            "description": "<p>Callback to be called when slide is done.</p> "
          }
        ]
      }
    },
    "filename": "tags/v2.3.0.js",
    "groupTitle": "9__Animation"
  },
  {
    "version": "2.3.0",
    "group": "9__Animation",
    "type": "stop",
    "url": "DOMList.stop()",
    "title": ".stop()",
    "name": "stop",
    "description": "<p>Stop animation in selected elements.</p> ",
    "filename": "tags/v2.3.0.js",
    "groupTitle": "9__Animation"
  },
  {
    "version": "2.3.0",
    "group": "9__Animation",
    "type": "timeScale",
    "url": "DOMList.timeScale(scale)",
    "title": ".timeScale()",
    "name": "timeScale",
    "description": "<p>Scale animation time in selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scale",
            "description": "<p>Number of scale time.</p> "
          }
        ]
      }
    },
    "filename": "tags/v2.3.0.js",
    "groupTitle": "9__Animation"
  },
  {
    "version": "2.3.2",
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
            "description": "<p>String event type or object contains events or array type list.</p> "
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
        "content": "// Hanlde single event.\n$dom('span').handle('click', function() {});\n\n// Handle multiple events.\n$dom('span').handle({\n    click: function() {},\n    mouseenter: function() {}\n});\n\n// Handle multiple event with single handler.\n$dom('span').handle(['click', 'focus'], function() {});",
        "type": "js"
      }
    ],
    "filename": "tags/v2.3.2.js",
    "groupTitle": "Events"
  }
] });