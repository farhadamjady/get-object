const getObject = require('./');

let emptyObject = getObject();

console.log( 'emptyObject', emptyObject );

let object = getObject('{"foo":"bar"}');

console.log( 'object', object );

let incObject = getObject('{"foo":"bar}');

console.log( 'incObject', incObject );