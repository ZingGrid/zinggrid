# [ZingGrid](https://www.zinggrid.com)

![](https://img.shields.io/npm/dw/zinggrid)
![](https://img.shields.io/npm/v/zinggrid)

![](https://img.shields.io/david/zinggrid/zinggrid)
![](https://img.shields.io/david/peer/zinggrid/zinggrid)
![](https://img.shields.io/david/dev/zinggrid/zinggrid)

ZingGrid is a Javascript library for rendering grids and data tables. Our main focus is on fast, responsive, and customizable grids utilizing ES6 and native web components. Our goal is to solve the problem of creating a CRUD grid in under five minutes. With an appropriate REST endpoint, this is easily achievable.


[![](http://capture.zingsoft.com/99d1fb9abf6d/download/Screen%252520Recording%2525202019-09-10%252520at%25252001.45%252520PM.gif)](https://www.zinggrid.com/docs/your-first-grid)

### Include the library


***Include the library through script tag***

```html
<script src="https://cdn.zinggrid.com/zinggrid.min.js" defer></script>
```

### Include Library with NPM

```
npm i zinggrid
```

and include one of the following imports in your code:

***Import pollyfilled Version (Suggested)***

```js
import ZingGrid from 'zinggrid';
```

or

***Import No Pollyfills ES6 Version (Smallest)***

```js
import ZingGrid from 'zinggrid/es6';
```

or

***Import Pollyfills ES5 Version (Largest)***

```js
import ZingGrid from 'zinggrid/es5';
```

# Getting Started CDN

Open the `examples/index.html` file in your browser.

```html
<!DOCTYPE html>
<html>
<head>
  <!--Script Reference[1]-->
  <script src="https://cdn.zinggrid.com/zinggrid.min.js" defer></script>
</head>
<body>
  <!--Grid Component Placement[2]-->
  <zing-grid
    caption="Hello Futurama"
    data='[
      { "firstName": "Philip", "lastName": "Fry"},
      { "firstName": "Turanga", "lastName": "Leela"},
      { "firstName": "Bender", "lastName": "Rodriguez"},
      { "firstName": "Amy", "lastName": "Wong"}
    ]'>
  </zing-grid>
</body>
</html>
```

# Getting Started with Script Modules

1. Need to have a server running. `http-server` to fire up localhost a simple solution. 
  - install with `npm i http-server -g`
  - run `http-server` from root folder
  - traverse to localhost:xxxx/examples/index-modules.html

```html
<!DOCTYPE html>
<html>
<head>
  <!--Script Reference[1]-->
  <script type="module" src="../index.js">
    // can use this 
    // import ZingGrid from '../index.js';
  </script>
  <!-- fallback for no module support -->
  <script nomodule src="../dist/zinggrid.min.js"></script>
</head>
<body>
  <!--Grid Component Placement[2]-->
  <zing-grid
    caption="Hello Futurama"
    data='[
      { "firstName": "Philip", "lastName": "Fry"},
      { "firstName": "Turanga", "lastName": "Leela"},
      { "firstName": "Bender", "lastName": "Rodriguez"},
      { "firstName": "Amy", "lastName": "Wong"}
    ]'>
  </zing-grid>
</body>
</html>
```

## Integrations

ZingGrid requires **NO** wrapper for easy consumption with popular JS libraries and frameworks. In these frameworks you can typically include the library through native imports:

```js
  import ZingGrid from 'zinggrid';
```

Please check out the following hello world tutorials for frameworks:

- [Angular](https://www.zinggrid.com/docs/angular)
- [React](https://www.zinggrid.com/docs/react)
- [Vue](https://www.zinggrid.com/docs/vue)
- [Polymer](https://www.zinggrid.com/docs/polymer)
- [Angular JS (legacy)](https://www.zinggrid.com/docs/angularjs)
- [JQuery](https://www.zinggrid.com/docs/jquery)

## Support 

If you need any assistance or would like to report a bug, please contact us directly at support@zinggrid.com or through our website https://www.zinggrid.com/contact.


&copy; 2019 ZingSoft, Inc.
