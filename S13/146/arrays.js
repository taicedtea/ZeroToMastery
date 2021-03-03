//Advanced Arrays

// forEach review
var array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach((num) => { //for each number in array, do this function, only loops and does what function says
    double.push(num * 2);
})

console.log('forEach', double);

//map, filter, reduce

//map
const mapArray = array.map((num) => { // loops through element and applies fn to each value, automatically adds new value to new array, a return is expected
    return num + 2; 
});
// can be simplified to
const mapArrayClean = array.map(num => num + 2);
console.log('map', mapArray); //map reduces/should have no side effects

// filter
const filterArray = array.filter(num => num > 5); // cycles through array and runs function, will create new array with values from funciton, in this case all values greater than 5
console.log('filer', filterArray);

//reduce
const reduceArray = array.reduce((accumulator, num) => { //adds all values within array
    return accumulator + num;
}, 0)
console.log('reduce', reduceArray);