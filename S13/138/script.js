// Scope

// Root Scope
var fun  = 5;

function funFunction() {
    //child scrop
    var fun = "hellooo";
    console.log(1, fun);
}

function funerFunction(){
    //child scope
    var fun = "Bye";
    console.log(2, fun);
}

function funestFunction() {
    //child scpoe
    fun = "AHHHH";
    console.log(3, fun);
}

console.log("window", fun);
funFunction();
funerFunction();
funestFunction();