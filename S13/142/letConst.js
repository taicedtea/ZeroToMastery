// ES6
// let and const
const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true; // anytime elt is wrapped in {}, it creates a new scope. Not accessible outside
    console.log("inside", wizardLevel)
}
console.log("outside", wizardLevel)

const obj = { //cannot reassign variable
    player: 'bobby',
    experience: 100,
    wizardLevel: false // you can change properties of object
}