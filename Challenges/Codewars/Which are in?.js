/*
Given two arrays of strings a1 and a2 return a sorted array 
r in lexicographical order of the strings of a1 which are 
substrings of strings of a2.

#Example 1: a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]

*/

function inArray(array1, array2) {
	let final = [];
	for (let i = 0; i < array2.length; i++) {
		for (let j = 0; j < array1.length; j++) {
			if (array2[i].includes(array1[j]) && final.indexOf(array1[j]) === -1) {
				final.push(array1[j]);
			}
		}
	}
	return final.sort();
}
