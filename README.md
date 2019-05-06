# Get Object
Make js object with given string

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save get-object
```
    
```js

const getObject = require('get-object');

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