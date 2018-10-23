# [ZingGrid](https://www.zinggrid.com)

ZingGrid is a Javascript library for rendering grids and data tables. We are a closed source grid library whose main focus is on fast, responsive, customizable grids. We achieve this through all native ES6 Javascript and native web components. We aim to solve the problem of creating a CRUD grid in under five minutes. With the appropriate REST endpoint, this is easily achievable.



### Include the library


***Node / CommonJS***

```js
var ZingGrid = require('zinggrid');
```

or

***Include the file***

```html
<script src="https://cdn.zinggrid.com/zinggrid.min.js"></script>
```

or

***ES6***

```js
import ZingGrid from 'zinggrid';
```


# Getting Started

```
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

## Integrations

ZingGrid requires **NO** wrapper for easy consumption with popular JS libraries and frameworks. Check out the following hello world demos:

- [Angular](https://www.zinggrid.com/docs/angular)
- [React](https://www.zinggrid.com/docs/react)
- [Vue](https://www.zinggrid.com/docs/vue)
- [Polymer](https://www.zinggrid.com/docs/polymer)
- [Angular JS (legacy)](https://www.zinggrid.com/docs/angularjs)
- [JQuery](https://www.zinggrid.com/docs/jquery)

## Support 

If you need any assistance or would like to report any bugs found in ZingGrid, 
please contact us directly at support@zinggrid.com or through our website https://www.zinggrid.com/contact


&copy; 2018 ZingSoft, Inc.