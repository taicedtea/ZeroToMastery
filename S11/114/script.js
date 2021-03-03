// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.

// 2. Sort the array in order.

// 3. Put "Kiwi" at the end of the array.

// 4. Remove "Apples" from the array.

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

//you should have at the end:
//["Kiwi", "Oranges", "Blueberries"]

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.shift();
array.sort();
array.push("Kiwi");
array.shift();
array.reverse();
console.log(array);

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1][0]);