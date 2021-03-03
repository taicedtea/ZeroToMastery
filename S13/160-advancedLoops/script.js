const basket = ['apples', 'bananas', 'blueberries'];
const detailedBasket = {
    apples: 5,
    bananas: 7,
    blueberries: 30
}

//1
for (let i = 0; i < basket.length; i++){
    console.log(basket[i]);
}

//2
basket.forEach(item => {
    console.log(item);
})

// for of
// ITERATING - arrays and strings
for (item of basket) { // item can be named anything, goes through basket array and loops
    console.log(item);
}

// for in - loops over and see obj properties
// ENUMERATING - objects
for (item in detailedBasket) {
    console.log(item);
}