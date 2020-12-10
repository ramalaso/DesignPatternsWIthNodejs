// var Shopper = require('./Shopper');

// var alex = new Shopper('Alex');
// alex.addItemToList('Camping Knife');
// alex.addItemToList('tent');
// alex.addItemToList('backpack');
// alex.addItemToList('map');

// var ramalaso = new Shopper('Ramalaso');

// ramalaso.addItemToList('Camping Knife');
// ramalaso.addItemToList('tent');
// ramalaso.addItemToList('backpack');
// ramalaso.addItemToList('map');

var scout_prototype = require('./scout');

var alex = scout_prototype.clone();
alex.name = 'Alex Banks';
alex.addItemToList('slinsghost');

var ramalaso = scout_prototype.clone();
ramalaso.name = 'Raul Laredo';
ramalaso.addItemToList('reading list');


console.log(`${alex.name}: ${alex.shoppingList}`);
console.log(`${ramalaso.name}: ${ramalaso.shoppingList}`);
