## Strict Mode

Strict Mode allows you to opt in to a restricted varient of javascript.

*See [strict mode example](https://github.com/robin-mckenna/slp-javascript/blob/robin/7/parts-61-76/js/strict-mode.js)*

To use strict mode insert the string

`"use strict";`

Can be used at the top of a javascript file, script tag, or function.

*Not every javascript engine implements strict mode in the same way*

## JQuery

- Jquery handles a lot of browser compatability queries
- Jquery allow you to manipulate the DOM

[See jquery-examples.js](https://github.com/robin-mckenna/slp-javascript/blob/robin/7/parts-61-76/js/jquery-examples.js)

```javascript=
var q = $("ul.people li");
console.log(q);
```

Jquery returns an object

`r.fn.init(3) [li, li, li, prevObject: r.fn.init(1)]`

In jquery you can do method chaining.

##### For example:

``$('ul.people').addClass('newClass').removeClass('people');``

## Mini Library

See [greetr](https://github.com/robin-mckenna/slp-javascript/blob/robin/mini-framework/js/Greetr.js)
