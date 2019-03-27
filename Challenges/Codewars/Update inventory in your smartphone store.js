/*
You will be given an array which lists the current inventory 
of stock in your store and another array which lists the new 
inventory being delivered to your store today.

Your task is to write a function that returns the updated 
list of your current inventory in alphabetical order.
*/

function updateInventory(curStock, newStock) {
	let allStock = curStock.concat(newStock);
	allStock.sort(function(a, b) {
		let x = a[1];
		let y = b[1];
		return x < y ? -1 : x > y ? 1 : 0;
	});
	for (let z = 0; z < allStock.length; z++) {
		if (allStock[z + 1] && allStock[z][1] === allStock[z + 1][1]) {
			allStock[z][0] = allStock[z][0] + allStock[z + 1][0];
			allStock.splice(z + 1, 1);
		}
	}
	return allStock;
}
