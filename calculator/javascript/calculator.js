/* 
File Created By Daniel lim
Edited 3/22/20 By Daniel lim: added function for operator
Edited 3/22/20 by Jas Bawa: Added memory onclick function
Edited 3/23/20 by Daniel Lim: added operator click function
Edited 3/24/20 by Juhee Park: added click event handling for number buttons
Edited 3/24/20 by Lang Xu: added callback functions for number buttons and operator buttons
Edited 3/24/20 by Daniel Lim: changed the whole code for the operator
Edited 3/27/20 by Jas Bawa: Disables certain buttons when they are not valid, like memory and zero
Edited 3/29/20 by Juhee Park: Added display of history of calculations
Edited 3/29/20 by Daniel Lim: display the inverse and square button
Edited 3/29/20 by Jas Bawa: Fixed bug with opCall that didn't allow for more operators after equals was pressed
Edited 3/29/20 by Daniel Lim: wrote code for calculation history 
Edited 3/29/20 by Ern Chi Khoo: Added functionality for square
Edited 3/29/20 by Lang Xu: wrote code for percentage buttons
Edited 3/30/20 by Ern Chi Khoo: Simplified code 
Edited 3/30/20 by Lang Xu: Re-implement percentage button
Edited 3/30/20 by Lang Xu: Added comments for functions
Edited 3/30/20 by Juhee Park: Split up opCall to refreshTop, classicOpCall, classicOpDisplay,
                                extraOpCall, extraOpDisplay, calcMemOp using original code of Lang, Daniel, Ern Chi

*/

var display = document.getElementById("display");
var bottomDisplay = document.getElementById("bottomDisplay");
var topDisplay = document.getElementById("topDisplay");
document.getElementById("inverse").disabled = true;
var i;

/* Set up initial values for calculator */
bottomDisplay.value = "0";
topDisplay.value = "";
var numState = 1;
var memOp = ""; 
var result = 0;
var operand = "0";
var expr = [];
var extraOpFlag = false;
// Sets initial states of buttons
document.getElementById("clear").disabled = true;
document.getElementById("recall").disabled = true;

/*
    Updates top display with contents of expr array.

    Created 3/30/20 by Juhee Park
    Edited 3/30/20 by Jas Bawa: Refactored to use the reduce function
*/
function refreshTop(){
    if(expr.length > 0) {
        topDisplay.value = expr.reduce(function (total, op) {
            return total += op;
        });
    }
}

/*
    calls classicOpCall function if a operator button is pressed

    Created by Daniel Lim
    Edited 3/30/20 by Lang Xu: added comments for function
*/
function operatorEvent(){
  classicOpCall(this.getAttribute("value"));
}


// add addEventListener to operator sign
var operator_butts = document.getElementsByClassName("classicOp");
console.log(operator_butts.length);
for (i = 0; i < operator_butts.length; i++) {
  operator_butts[i].addEventListener("click", operatorEvent);
}

/* 
    calls extraOpCall function if an extra operator button is pressed
    
    Edited 3/30/20 by Lang Xu: added comments for function
*/
function extraOpEvent(){
  extraOpCall(this.getAttribute("value"));
}

// add addEventListener to operator sign
var extraOp_butts = document.getElementsByClassName("extraOp");
console.log(extraOp_butts.length);
for (i = 0; i < extraOp_butts.length; i++) {
  extraOp_butts[i].addEventListener("click", extraOpEvent);
}

/* 
    adds operation symbols to the expression array & refreshes top display
    
    Created 3/30/20 by Juhee Park using parts of ORIGINAL code of Lang Xu
    Edited 3/30/20 by Lang Xu: added comments for function
*/
function classicOpDisplay(operation){
    if(expr.length > 0 && /\d/.test(expr[expr.length-1])){
        expr.push(operation);
    } else {
        expr[expr.length - 1] = operation;
    }
    refreshTop(expr);
}

/* 
    calculation based on current memory operator and result
    
    Created 3/30/20 by Juhee Park using parts of ORIGINAL code of Lang Xu
    Edited 3/30/20 by Lang Xu: added comments for function
*/
function calculateMemOp(){
    console.log(operand);

    switch (memOp){
        case "+":
            result += parseFloat(operand);
            break;

        case "-":
            result -= parseFloat(operand);
            break;

        case "/":
            result /= parseFloat(operand);
            break;

        case "*":
            result *= parseFloat(operand);
            break;
        // case "="
        default:
            result = parseFloat(operand);
            break;
    }
}

/*
    event handler for classic operator buttons
    
    Created 3/30/20 by Juhee Park: REFACTORING of Lang's original code
    Edited 3/20/20 by Jas Bawa: Fixed bug to disable 0 when divide is pressed
*/
function classicOpCall(operation){
    if ((expr.length == 0 || !(/\d/.test(expr[expr.length-1])))&&operand) {
        if (/\.0*$/.test(operand)) operand = operand.substring(0, operand.indexOf('.'));
        expr.push(operand);
    }
    if (operand) calculateMemOp();
    classicOpDisplay(operation);
    bottomDisplay.value = result.toString();
    operand = "";
    
    if (operation == "="){
        updateCalcHistory(topDisplay.value + bottomDisplay.value);
        expr = [];
        operand = bottomDisplay.value;
    }
    memOp = operation;

    extraOpFlag = false;
    numState = 1;
    // disallow divide by zero
    document.getElementById("zero").disabled = (operation == "/");

    // disable inverse button if the result equals 0
    document.getElementById("inverse").disabled = (result == 0);

    // enable decimal button
    document.getElementById("decimal").disabled = false;

    document.getElementById("squareRoot").disabled = (result < 0);
    console.log(result);
}

/*
    Handles the display when extra operation button is pressed

    Created 3/30/2020 by Juhee Park using ORIGINAL CODE OF ERN CHI KHOO AND DANIEL LIM
    Edited 3/30/2020 by Ern Chi Khoo: Added functionality for square operation
    Edited 3/30/2020 by Daniel Lim: code edited by Juhee Park using Daniel's square root and inverse code
*/
function extraOpDisplay(operation){
    switch (operation){
        case "√":
            console.log("extraOp expr: " + expr);
            if(expr.length > 0 && /\d/.test(expr[expr.length-1])){
                expr[expr.length - 1] = "√(" + expr[expr.length - 1] + ")";
            } else {
                expr.push("√(" + bottomDisplay.value + ")");
            }
            bottomDisplay.value = Math.sqrt(parseFloat(bottomDisplay.value));
            break;
        case "%":
            if (memOp == "*" || memOp == "/"){
                bottomDisplay.value = (parseFloat(bottomDisplay.value) / 100).toString();
            } else {
                bottomDisplay.value = (result * ((parseFloat(bottomDisplay.value) / 100))).toString();
            }
            expr.push(bottomDisplay.value);
            break;

        case "1/x":
            if(expr.length > 0 && /\d/.test(expr[expr.length-1])){
                expr[expr.length - 1] = "1/(" + expr[expr.length - 1] + ")";
            } else {
                expr.push("1/(" + bottomDisplay.value + ")");
            }
            bottomDisplay.value = (1/parseFloat(bottomDisplay.value));
            break;

        case "^2":
            if(expr.length > 0 && /\d/.test(expr[expr.length-1])){
                expr[expr.length - 1] = "sqr(" + expr[expr.length - 1] + ")";
            } else {
                expr.push("sqr(" + bottomDisplay.value + ")");
            }
            bottomDisplay.value = Math.pow(parseFloat(bottomDisplay.value), 2);
            break;
        default:
            break;
    }
}

/* 
    event handler for extra operator buttons
    
    Created 3/30/20 by Juhee Park
    Edited 3/30/20 by Lang Xu: added comments for function
*/
function extraOpCall(operation){
    extraOpDisplay(operation);
    refreshTop(expr);
    operand = bottomDisplay.value;
    extraOpFlag = true;
    // disallow inverse of 0
    document.getElementById("inverse").disabled = (operand == "0");
    // enable decimal
    document.getElementById("decimal").disabled = false;

    document.getElementById("squareRoot").disabled = (bottomDisplay.value < 0);

}

/*
    Displays parameter (val) to bottom display.

    Created 3/24/2020 by Juhee Park
    Edited 3/24/2020 by Ern Chi Khoo: Refactored code so that number displays in the bottom display
    Edited 3/24/2020 by Juhee Park: changed function to take a parameter so that testing can be done
    Edited 3/25/2020 by Jas Bawa: Enables 0 button if another number number button was pressed
    Edited 3/28/2020 by Daniel Lim: Deleted else statement because of error
*/
function numBottomDisplay(val){
    if (extraOpFlag){
        extraOpFlag = false;
        bottomDisplay.value = "";
    }
    if (numState || bottomDisplay.value == "0") {
        if (val == "." && !(document.getElementById("decimal").disabled)) {
            bottomDisplay.value = "0."
        } else {
            bottomDisplay.value = val;
        }
        numState = 0;
    }
    else {
        bottomDisplay.value += val;
    }
    operand = bottomDisplay.value;
    if(val != "0") {
        document.getElementById("zero").disabled = false;
        document.getElementById("inverse").disabled = false;
    }
    // disable decimal button if there is a decimal in the string
    if (val.indexOf(".") >= 0) {
        document.getElementById("decimal").disabled = true;
    }
}

/*
    Event handling for number buttons
    
    Created 3/24/2020 by Juhee Park
*/
var num_butts = document.getElementsByClassName("number");
console.log(num_butts.length);
for (i = 0; i < num_butts.length; i++) {
    num_butts[i].addEventListener("click", function(){numBottomDisplay(this.getAttribute("value"));});
}


/*
    Created 3/22/2020 by Jas Bawa
    Edited 3/24/2020 by Jas Bawa: Converted to chained registration
*/
var memoryNum = 0.0;
var mem_butts = document.getElementsByClassName("memory");
console.log(mem_butts.length);
for (i = 0; i < mem_butts.length; i++) {
    mem_butts[i].addEventListener("click", function(){memoryAction(this.getAttribute("value"));});
}

/*
Function performs the specified memory action contingent on each actions requirements
@param operation The string name used to classify the necessary memory operation, and is required!

    Edited 3/24/2020 by Ern Chi Khoo: Refactored code so that number is retrieved from bottom display
    Edited 3/24/2020 by Jas Bawa: Edited for the conversion to chained registration
    Edited 3/27/2020 by Jas Bawa: Disables buttons that are no longer valid based on current state
    Edited 3/20/20 by Jas Bawa: Fixed function from reformatting
*/
function memoryAction(operation){

    // Variable Declarations
    // document.getElementById("display").value = "12345";
    var displayNum = document.getElementById("bottomDisplay").value;
    console.log("The dislayNum is: " + displayNum);

    // Checks value to ensure correct string to float conversion
    if(displayNum == ""){
        displayNum = 0;
    }else{
        displayNum = parseFloat(displayNum);
    }
    sqrtAndInv = 0;
    // Based on action and its requirement(s), the appropriate steps are performed
    switch(operation){
        case "MC":
            memoryNum = 0;
            updateMemoryHistory(memoryNum);
            document.getElementById("clear").disabled = true;
            document.getElementById("recall").disabled = true;
            // console.log("MC");
            break;
        case "MR":
            document.getElementById("bottomDisplay").value = memoryNum;
            // console.log("MR");
            document.getElementById("inverse").disabled = memoryNum == 0;
            expr.push(memoryNum);
            operand = memoryNum;
            break;
        case "MS":
            console.log("memoryNum Before: " + memoryNum);
            memoryNum = displayNum;
            console.log("MS");
            console.log("memoryNum After: " + memoryNum);
            updateMemoryHistory(memoryNum);
            document.getElementById("clear").disabled = false;
            document.getElementById("recall").disabled = false;
            break;
        case "M+":
            memoryNum += displayNum;
            // console.log("M+");
            updateMemoryHistory(memoryNum);
            document.getElementById("clear").disabled = false;
            document.getElementById("recall").disabled = false;
            break;
    }
    // Return for testing purposes
    return memoryNum;
}

/*
    Changes the positive number currently displayed into a negative number and vice versa
    
    Created 3/24/2020 by Ern Chi Khoo
    Edited 3/28/2020 by Daniel Lim: added squareRoot disable 
    Edited 3/30/2020 by Ern Chi Khoo: fixed bug with decimal point
*/
function negative() {
    // get the currently displayed number 
    var displayNum = document.getElementById("bottomDisplay").value;
    sqrtAndInv = 0;
    if (displayNum.charAt(displayNum.length - 1) == ".") {
        bottomDisplay.value = -parseFloat(displayNum) + ".";
    } else {
        bottomDisplay.value = -parseFloat(displayNum);    
    }
    document.getElementById("squareRoot").disabled = displayNum > 0;
    operand = bottomDisplay.value;
    // for testing
    return bottomDisplay.value;
}

/*
    Clears both displays, sets the bottom display to 0
    
    Created 3/24/2020 by Ern Chi Khoo
    Edited 3/24/2020 by Ern Chi Khoo: Added functionality to clear top display and reset opState
    Edited 3/20/20 by Jas Bawa: Fixed bug from reformat
    Edited 3/30/2020 by Daniel Lim: Added enable button
*/
function clearDisplay() {
    bottomDisplay.value = "0";
    topDisplay.value = "";
    result = 0;
    document.getElementById("inverse").disabled = bottomDisplay.value == "0";
    document.getElementById("decimal").disabled = false;
    document.getElementById("squareRoot").disabled = false;

    expr = [];
    operand = bottomDisplay.value;
    // for testing
    return bottomDisplay.value;
}

/*
    Clears Bottom Display only
    
    Created 3/29/20 by Jas Bawa
    Edited 3/30/2020 by Daniel Lim: added enable button
*/
function clearBottomDisplay(){
    bottomDisplay.value = "0";
    operand = bottomDisplay.value;
    document.getElementById("decimal").disabled = false;
    document.getElementById("inverse").disabled = bottomDisplay.value == "0";
    document.getElementById("squareRoot").disabled = false;
}

/*
    Removes the last digit entered
    
    Created 3/24/2020 by Ern Chi Khoo
    Edited 3/29/2020 by Ern Chi Khoo: Added support for decimal numbers
    Edited 3/30/2020 by Ern Chi Khoo: Fixed bug where decimal points would not be removed
    Edited 3/30/2020 by Daniel Lim: added enable button
*/
function backspace() {
    var str = bottomDisplay.value;
    // enable decimal point button if character removed was a decimal point
    if (str.charAt(str.length - 1) == ".") {
        document.getElementById("decimal").disabled = false;
    }
    // enable squareroot button
    // display 0 if there is only one digit
    if (str.length == 1 || (str.length == 2 && str.charAt(0) == "-")) {
        bottomDisplay.value = "0";
        document.getElementById("squareRoot").disabled = false;
    } else {
        bottomDisplay.value = str.substring(0, str.length - 1);
    }
    document.getElementById("inverse").disabled = bottomDisplay.value == "0";
    // for testing
    return bottomDisplay.value;
}

/*
    Event handling for other operator buttons
    
    Created 3/24/2020 By Daniel lim:
    Edited 3/24/2020 by Daniel Lim: added inverse
    Edited 3/24/2020 by Jas Bawa: Added some semicolons
    Edited 3/24/2020 by Daniel Lim: added sqrt
    Edited 3/27/2020 by Ern Chi Khoo: Added exp
    Edited 3/29/2020 by Jas Bawa: Added clearBottomDisplay
    Edited 3/27/2020 by Ern Chi Khoo: Removed exp
    Edited 3/30/2020 by Juhee Park: Removed decimal func
*/
function otherButtonsEvent(){
    buttAction = this.getAttribute("action");
    switch(buttAction) {
        case "negative":
            negative();
            break;
        case "backspace":
            backspace();
            break;
        case "clearDisplay":
            clearDisplay();
            break;
        case "clearBottomDisplay":
            clearBottomDisplay();
            break;
	}
}

// adding event listeners for other buttons
var other_butts = document.getElementsByClassName("otherButtons");
for (i = 0; i < other_butts.length; i++) {
    other_butts[i].addEventListener("click", otherButtonsEvent);
}

/*
    updateMemoryHistory updates the memory history section to show any updates made to the memory variable
    newCurrent is a required parameter and is the new current value of the memory
    
    Created 3/28/20 by Jas Bawa
*/
function updateMemoryHistory(newCurrent){

    var table = document.getElementById("previousMem");
    var row = table.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = document.getElementById("currentMem").innerHTML;
    document.getElementById("currentMem").innerHTML = newCurrent;
}

/*
    updates html to show most recent and history of calculations
    
    Created 3/29/20 by Juhee Park
 */
function updateCalcHistory(newCurrent){
    var table = document.getElementById("prevCalc");
    var row = table.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = newCurrent;
}