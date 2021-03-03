// CALL STACK - order in which fn is executed, js is single threaded, (has ONE STACK)
const one = () => { //first to be added to stack
    const two = () => { // added on top of stack
        console.log('4') // added on top of stack, removed in order backwards once executed
    }
    two();
} 
//this is an example of synchronous programming, line 1 gets executed, line 2 gets executed, line 3, ...

// Recursion
function foo(){
    foo()
}

foo(); //will cause a stack overflow

// Asynchronous Progamming'
console.log('1');
setTimeout(() => {
    console.log('2');
}, 2000)
console.log('3');

console.log('1');
setTimeout(() => {
    console.log('2');
}, 2000)
console.log('3');

callback() is added after 2000ms is over
// console.log('3'); will happen 
// console.log('1'); this will happen first
// CALL STACK

setTimeout() 2000 //this is recognized and starts counting 2s
// WEB API

callback() //once timeout time is reached
// CALLBACK QUEUE

//event loop is constantly checking if stack is empty and if therees a call back, if there is a callback() and the stack is empty
// it will add the callback() to the callstack
// EVENT LOOP 

console.log('1');
setTimeout(() => {
    console.log('2');
}, 0)
console.log('3');

//would output 
// 1
// 3
// 2
// this is because javascript one line at a time, console.log('1'); happens first, 
// the api/browserr then recognizes setTimeout() before it sees console.log('2');, 
// console.log('2') is added to the callback queue, before the event loop recognizes 
// an open call stack
// while this is happenening, console.log('3'); has already happened because it did not have to go through that process
// console.log('2'); had to wait for console.log('3'); 