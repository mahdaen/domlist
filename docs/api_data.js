define({ "api": [
  {
    "version": "1.0.0",
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
    "filename": "source/domlist.js",
    "groupTitle": "DOMList"
  },
  {
    "group": "DOMList_Module_Basic",
    "version": "1.0.0",
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
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Basic"
  },
  {
    "version": "1.0.0",
    "group": "DOMList_Module_Basic",
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
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Basic"
  },
  {
    "version": "1.0.0",
    "group": "DOMList_Module_Basic",
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
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Basic"
  },
  {
    "version": "1.0.0",
    "group": "DOMList_Module_Basic",
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
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Basic"
  },
  {
    "version": "1.0.0",
    "group": "DOMList_Module_Basic",
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
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Basic"
  },
  {
    "version": "1.0.0",
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
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Class"
  },
  {
    "version": "1.0.0",
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
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Class"
  },
  {
    "version": "1.0.0",
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
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Class"
  },
  {
    "version": "1.0.0",
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
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Inject"
  },
  {
    "version": "1.0.0",
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
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Inject"
  },
  {
    "version": "1.0.0",
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
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Inject"
  },
  {
    "version": "1.0.0",
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
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Inject"
  },
  {
    "version": "1.0.0",
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
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Inject"
  },
  {
    "version": "1.0.0",
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
    "filename": "source/domlist.js",
    "groupTitle": "DOMList_Module_Inject"
  }
] });