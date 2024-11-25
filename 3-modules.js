//Modules-Encapsulated Code (only share minimum)
//Node uses CommonJS, in node every file is module

const names = require('./4-names.js');
const sayHi = require('./5-utils.js');
const data = require('./6-alternative-flavor.js')
require('./7-mind-grenade')
// console.log(names);
// console.log(data);
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
