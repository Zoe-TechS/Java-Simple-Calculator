alert ("What Operation would you like to perform?\n" +
        "For Addtion enter(+)\n" +
        "For Subtraction enter(-)\n" +
        "For Multiplication enter(*)\n" +
        "For Division enter(/)\n"
);
var operator = prompt("Enter Choice Operator: ");
var firstNumber = parseFloat(prompt("Enter First Number:"));
var secondNumber = parseFloat(prompt("Enter Second Number:"));

if (operator == '+') {
    var result = firstNumber + secondNumber
    alert(firstNumber + " + " + secondNumber + '\n' +
    "Result =" + result 
    );
} else if (operator == "-") {
    var result = firstNumber - secondNumber
     alert(firstNumber + " - " + secondNumber + '\n' +
    "Result =" + result 
    );
} else if (operator == "*") {
    var result = firstNumber * secondNumber
     alert(firstNumber + " * " + secondNumber + '\n' +
    "Result =" + result 
    );
} else if (operator == "/") {
    if (secondNumber == 0){
        alert("Division by zero error!!")
    } else {
        var result = firstNumber / secondNumber
     alert(firstNumber + " / " + secondNumber + '\n' +
    "Result =" + result 
    );
    }  
}