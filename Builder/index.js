var PersonBuilder = require('./PersonBuilder');

var ramalaso = new PersonBuilder('Raul Laredo').makeEmployee().makeManager(60).build();
var judith = new PersonBuilder('Judith Hinojosa').makeEmployee().makePartTime().build();

var luz = new PersonBuilder('Luz Laredo').withMoney(500).withList(['jeans', `sunglasses`]).build();
var estefania = new PersonBuilder('Estefania Laredo').withMoney(1000).build();

console.log(ramalaso.toString());
console.log(judith.toString());
console.log(luz.toString());
console.log(estefania.toString());