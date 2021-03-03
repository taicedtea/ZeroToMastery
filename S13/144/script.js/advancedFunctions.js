// PRE-ES6
function first() {
    var greet = "Hit";
    function second() {
        alert(greet);
    }
    return second;
}
var newFunc = first();
newFunc();

// how you should be writing from now on
const first = () => {
    const greet = "Hi"; //good to be here because you cannot accidentally access outside of this fn
    const second = () => {
        alert(greet);
    }
    return second;
}
const newFunc = first();
newFunc(); // would return "Hi" because of CLOSURES, see below

// Closures = the child scope always has access to the parents scope
// a fn ran, it executed, will never execute again. 
// But it will remember references to variables,


//CURRYING
const multiple = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b; // function within a function, will create a function/variable which accepts a, when ran it then runs another fn which accepts b, and then multiplies a and b
curriedMultiply(3)(4); // assigns 3 to a and 4 to b, would return 12
// Why is this good?
const multiplyBy5 = curriedMultiply(5); //this created a function which will always multiple b by 5


//COMPOSE
const compose = (f, g) => (a) => f(g(a)); // f(g(a)) becomes sum(sum(5))

const sum = (num) => num + 1; // num becomes 5 

compose(sum, sum)(5); //returns 7 becauseeee

// both f and g are now sum: compose = (f, g) is now compose = (sum,sum)
// (a) is now 5
// so compose = (sum, sum) => (5) => sum(sum(5));
// sum(5) = 5 + 1 = 6
// sum(sum(5)) = 5 + 1 + 1 = 7


// Avoiding Side Effects, functional purity
var a = 1;
function b() {
    a = 2; //this is a side effect, it effects the code outside of
}

//Functional Purity aka. Deterministic - when no matter what parameters you give a fn, it will return the same value