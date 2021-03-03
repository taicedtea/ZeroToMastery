//condition ? expr1 : expr2;

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied"

var automatedAnswer = "Your acccount # is " + (isUserValid(false) ? "1234" : "Not available")

function condition() { //same sa answer, just longer
    if(isUserValid(true)) {
        return "You May Enter";
    } else {
        return "Access Denied";
    }
}

var answer2 = condition();