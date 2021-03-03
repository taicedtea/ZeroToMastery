var a = 5; // a knows where primative value of 5 is
var b = a; // copies value and moves it to a new place, they are not the same "pass by value"

b++;

let obj1 = {name: 'Yao', password: '123'};
let obj2 = obj1; //obj1 and obj2 now both point to the same place, does not copy values OBJECTS/arrays

obj2.password = 'easy'; //updates password for both obj1 and obj2, bc pass by reference

console.log(obj1);
console.log(obj2);

let c = [1, 2, 3, 4, 5];
let d = [].concat(c); // adds array of c onto array d
d.push(1873263);

console.log(c);
console.log(d);

let obj = {
    a: 'a', 
    b: 'b', 
    c: {
        deep: 'copy me'
    }
};
let clone = Object.assign({}, obj);
let clone1 = {...obj};
let superClone = JSON.parse(JSON.stringify(obj)) // turns obj into a string, tuns that string into an object, "deep clone"

obj.c.deep = "haha"; // this would effect all clones, only "first level" is cloned, .deep would be passed by value aka "shallow cloning"
console.log(obj);
console.log(clone);
console.log(clone1);