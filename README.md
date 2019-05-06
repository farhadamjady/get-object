# Get String Object
Make js object with given string

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save get-string-object
```
    
```js

const getObject = require('get-string-object');

getObject(); // {}

getObject('{"foo":"bar"}'); // {"foo":"bar"}

getObject('{"foo":"bar}'); // {}

```

### Running tests
```sh
$ node test.js
```

### License

Released under the [MIT License](LICENSE).