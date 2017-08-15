Vueforce-demo
---

![Build Status](https://travis-ci.org/limonte/sweetalert2.svg?branch=master)
![Downloads](https://img.shields.io/npm/dt/sweetalert2.svg) 
![Version](https://img.shields.io/npm/v/sweetalert2.svg)
![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)
![Gitter](https://badges.gitter.im/Join%20Chat.svg)
![PayPal Donate](https://img.shields.io/badge/donate-PayPal.me-ff69b4.svg)

An awesome and accessible (WAI-ARIA) frame for salesforce

Why we use Vueforce instead of Apex?
---

- Simple syntax
- Superior scalability
- More animation and special effects
- Can completely back away from class

Usage
---

To install:

```bash
npm install
```

To use:

Or:

```js
// ES6 Modules or TypeScript
import Vueforce from 'vueforce'

// CommonJS
const Vueforce = require('vueforce')
```

Please note that TypeScript is supported, so you don't have to install a third-party declaration file.


Examples
--------

The most basic message:

```js
dora('Hello world!')
```

A message signaling an error:

```js
dora('error', {title: 'Attention', text: 'Something went wrong!'})
```

[View more examples]()

Browser compatibility
---------------------

Alfredora works in most major browsers (yes, even IE). Some details:

- **IE: 11**, Promise polyfill should be included (see [usage example](#usage)).
- **Microsoft Edge: 12+**
- **Safari: 4+**
- **Firefox: 4+**
- **Chrome 14+**
- **Opera: 15+**

Contributing
------------

If you would like to contribute enhancements or fixes, please do the following:

1. Fork the `Vueforce` repository and clone it locally.

2. Make sure you have [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) installed.

3. When in the Vueforce directory, run `npm install` or `yarn install` to install dependencies.

4. Start gulp watcher `gulp watch` to automatically build and minify the SCSS and JS-files.

5. Check that your code is compliant with code linters: `gulp lint`.

6. Ensure that you didn't break any of tests: `npm test`.

7. Make sure that `dist/*` files aren't committed and create a pull request.

Particularly grateful
---
- Fish