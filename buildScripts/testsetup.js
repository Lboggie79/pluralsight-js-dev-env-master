//This files isn't transpiled, so much use CommonJS and ES5

//Register babyl to transpile before out test run
require('babel-register')();

//Disable webpack features that Mocha doesn't undertand.
require.extensions['.css'] = function() {};
