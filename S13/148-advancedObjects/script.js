// reference type
var object1 = {value: 10}; // adds value: 10 to it own "box"
var object2 = object1; // references object1's box
var object3 = {value: 10}; // adds value:10 to its own "box", not the same as object1

object1 === object2 // true, object 2 just refernece object1's "box", thus they are the same
object1 === object3 // false, although the contents of their "boxes" may be the same, they are of different reference types, they are not the same as eachoter

//context vs scope
function b() {
    let a = 4; //only available in this function SCOPE
}

const object4 = {
    a: function(){
        console.log(this); // would output object4
    }
}
//instantiation
class Player { //every the class makes a copy, the constructor fn is ran, creating name and type properties, note CAPTIAL start
    constructor(name, type) {
        console.log('player', this)
        this.name = name; // "this" is used so it is connected to the player
        this.type = type;
    }
    introduce() { // a method, can be named
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player { //add wizard on top of player
    constructor(name, type) {
        super(name, type) // gives access to player constructor
        console.log('wizard', this);
    }
    play() {
        console.log(`weeee, I'm  a ${this.type}`);
    }
}

const wizard1 = new Wizard('John', 'Fire'); // "new" tells you to create new wizard
const wizard2 = new Wizard('Frank', 'Water');