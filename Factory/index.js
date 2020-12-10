var userFactory = require('./userFactory');
// var Shopper = require('./Shopper');
// var Employee = require('./Employee');

// var ramalaso = new Shopper('Raul Laredo', 100);
// var judith = new Employee('Judith Hinojosa', 200, 'This and that');

var ramalaso = userFactory('Raul Laredo', 100);
var judith = userFactory('Judith Hinojosa', 100, 'employee', 'My chef');

console.log(ramalaso.toString());
console.log(judith.toString());