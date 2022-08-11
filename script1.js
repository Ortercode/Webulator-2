
// Test script 1



// This is used to display calculations

let inputTxtD = document.getElementById("inputTxt");

let displayData = {
    inputTxt: document.getElementById("inputTxt"),
    
    reslt: document.getElementById("resultTxt")
}

// This is used to actually do the calculations

let equationData = {
    
    intEq: '0'
    

    
}



// Buttons and clickables

// 0 BUTTON

let bttn0 = document.getElementById("divBttn13");

// NUMBER BUTTONS 1 - 3
let bttn1 = document.getElementById("divBttn1");
let bttn2 = document.getElementById("divBtnn2");
let bttn3 = document.getElementById("divBttn3");

// NUMBER BUTTONS 1 - 6
let bttn4 = document.getElementById("divBttn5");
let bttn5 = document.getElementById("divBtnn6");
let bttn6 = document.getElementById("divBttn7");

// NUMBER BUTTON 7 - 9
let bttn7 = document.getElementById("divBttn9");
let bttn8 = document.getElementById("divBtnn10");
let bttn9 = document.getElementById("divBttn11");

// Special BUTTONS

let acBttn = document.getElementById("divBtnn4");
let delBttn = document.getElementById("divBtnn8");


let decimalPnt = document.getElementById("divBttn19");

let openBracket = document.getElementById("divBtnn12");

let closeBracket = document.getElementById("divBtnn16");

// OPERATORS 

let mult = document.getElementById("divBtnn14");

let divid = document.getElementById("divBttn15");


let plusBttn = document.getElementById("divBttn17");

let minusBttn = document.getElementById("divBtnn18");

let equalBttn = document.getElementById("divBtnn20");



// THE FUN STUFF

function func1() {
    if(equationData.intEq == '0' && inputTxtD.innerHTML == 0) {
        
        equationData.intEq = '1';
        displayData.inputTxt.innerHTML = '1';
        
    } else {
        equationData.intEq += '1';
        displayData.inputTxt.innerHTML += '1';
    }
}

function func2() {
    if(equationData.intEq == '0' && inputTxtD.innerHTML == 0) {
        
        equationData.intEq = '2';
        displayData.inputTxt.innerHTML = '2';
        
    } else {
        equationData.intEq += '2';
        displayData.inputTxt.innerHTML += '2';
    }
}

function func3() {
    if(equationData.intEq == '0' && inputTxtD.innerHTML == 0) {
        
        equationData.intEq = '3';
        displayData.inputTxt.innerHTML = '3';
        
    } else {
        equationData.intEq += '3';
        displayData.inputTxt.innerHTML += '3';
    }
}
function func4() {
    if(equationData.intEq == '0' && inputTxtD.innerHTML == 0) {
        
        equationData.intEq = '4';
        displayData.inputTxt.innerHTML = '4';
        
    } else {
        equationData.intEq += '4';
        displayData.inputTxt.innerHTML += '4';
    }
}

function func5() {
    if(equationData.intEq == '0' && inputTxtD.innerHTML == 0) {
        
        equationData.intEq = '5';
        displayData.inputTxt.innerHTML = '5';
        
    } else {
        equationData.intEq += '5';
        displayData.inputTxt.innerHTML += '5';
    }
}

function func6() {
    if(equationData.intEq == '0' && inputTxtD.innerHTML == 0) {
        
        equationData.intEq = '6';
        displayData.inputTxt.innerHTML = '6';
        
    } else {
        equationData.intEq += '6';
        displayData.inputTxt.innerHTML += '6';
    }
}
function func7() {
    if(equationData.intEq == '0' && inputTxtD.innerHTML == 0) {
        
        equationData.intEq = '7';
        displayData.inputTxt.innerHTML = '7';
        
    } else {
        equationData.intEq += '7';
        displayData.inputTxt.innerHTML += '7';
    }
}

function func8() {
    if(equationData.intEq == '0' && inputTxtD.innerHTML == 0) {
        
        equationData.intEq = '8';
        displayData.inputTxt.innerHTML = '8';
        
    } else {
        equationData.intEq += '8';
        displayData.inputTxt.innerHTML += '8';
    }
}

function func9() {
    if(equationData.intEq == '0' && inputTxtD.innerHTML == 0) {
        
        equationData.intEq = '9';
        displayData.inputTxt.innerHTML = '9';
        
    } else {
        equationData.intEq += '9';
        displayData.inputTxt.innerHTML += '9';
    }
}

// ZERO 

function func0() {
    if(equationData.intEq == '0' && inputTxtD.innerHTML == 0) {
        
        equationData.intEq = '0';
        displayData.inputTxt.innerHTML = '0';
        
    } else {
        equationData.intEq += '0';
        displayData.inputTxt.innerHTML += '0';
    }
}



// OPERATIONS 

function plusFunc() {
    if(equationData.intEq == '0' && inputTxtD.innerHTML == 0) {
        
        equationData.intEq += '+';
        displayData.inputTxt.innerHTML +="+";
        
    } else {
        equationData.intEq += '+';
        displayData.inputTxt.innerHTML += '+';
    }
}
function multFunc() {
    if(equationData.intEq == '0' && inputTxtD.innerHTML == 0) {
        
        equationData.intEq += '*';
        displayData.inputTxt.innerHTML += '×';
        
    } else {
        equationData.intEq += '*';
        displayData.inputTxt.innerHTML += '×';
    }
}

function divFunc() {
    if(equationData.intEq == '0' && inputTxtD.innerHTML == 0) {
        
        equationData.intEq += '/';
        displayData.inputTxt.innerHTML += '÷';
        
    } else {
        equationData.intEq += '/';
        displayData.inputTxt.innerHTML += '÷';
    }
}

function subtrFunc() {
    if(equationData.intEq == '0' && inputTxtD.innerHTML == 0) {
        
        equationData.intEq = '-';
        displayData.inputTxt.innerHTML = '-';
        
    } else {
        equationData.intEq += '-';
        displayData.inputTxt.innerHTML += '-';
    }
}
function dotFunc() {
    if(equationData.intEq == '0' && inputTxtD.innerHTML == 0) {
        
        equationData.intEq += '.';
        displayData.inputTxt.innerHTML += '.';
        
    } else {
        equationData.intEq += '.';
        displayData.inputTxt.innerHTML += '.';
    }
}

function openBracketFunc() {
    if(equationData.intEq == '0' && inputTxtD.innerHTML == 0) {
        
        equationData.intEq = '(';
        displayData.inputTxt.innerHTML = '(';
        
    } else {
        equationData.intEq += '(';
        displayData.inputTxt.innerHTML += '(';
    }
}

function closeBracketFunc() {
    if(equationData.intEq == '0' && inputTxtD.innerHTML == 0) {
        
        equationData.intEq += ')';
        displayData.inputTxt.innerHTML += ')';
        
    } else {
        equationData.intEq += ')';
        displayData.inputTxt.innerHTML += ')';
    }
}

function equalFunc() {
    if(equationData.intEq == '0' && inputTxtD.innerHTML == 0) {
        
        equationData.intEq = '0';
        displayData.inputTxt.innerHTML = ' ';
        displayData.reslt.innerHTML = equationData.intEq;
        
        
        
    } else {
        ansr = eval(equationData.intEq);
        displayData.reslt.innerHTML = ansr;
    
    }
}

function clearFunc() {
    displayData.reslt.innerHTML = " ";
    equationData.intEq = '0';
    inputTxtD.innerHTML = 0;
}

function delFunc() {
    
    if(equationData.intEq.lenth == 1 && displayData.inputTxt.innerHTML.length == 1 ) {
        equationData.intEq = '0';
        displayData.inputTxt.innerHTML = '0';
        
    } else {
       /* let innerEq = equationData.intEq;
        let innerDisp = displayData.inputTxt.innerHTML;*/
    
        let oriLength1 = equationData.intEq.length;
        let oriLength2 = displayData.inputTxt.innerHTML.length;
    
        let newLngt1 = oriLength1 - 1;
        let newLngt2 = oriLength2 - 1;
    
        newStr1 = equationData.intEq.slice(0, newLngt1);
        newStr2 = displayData.inputTxt.innerHTML.slice(0, newLngt2);
    
        equationData.intEq = newStr1;
        displayData.inputTxt.innerHTML = newStr2;
    }
    
    
    // HOW MY DELETE FUNCTION WORKS  >>>>>>
    
    // 
    /* Take the full string equations 
       ( we're changing them both and returning new values )
       
       string1 = innerEq;
       string2 = innerDisp;
       
    let oriLength1 = string1.length;
    let oriLengtg2 = string2.length;
    
    let newLngth = oriLength1 - 1;
    let newLenght2 = oriLength2 - 1;
    
    basically we use the slice() method to make a new string starting from [0] to the new length which will be 1 less than the orginal length everytime the function is called
    
        We update the value the new sliced string. We minus one character each time - There's no whitespace so we don't have to worry about that
    
    let newString1 = string1.slice(0, newLength);
    
    
   */ 
}

function preEval() {
    try {
      equalFunc();
    }
    catch(err) {
        /*
        let whatErr = errStr.search("SyntaxError");
        if(whatErr == -1) {
            alert(err);
        } else {
            alert("You caused a syntax error you SUSSY BAKA ! Press 'AC' to reset the calculator or use 'DEL' to delete it NOW !")
        }*/
        
        alert(err + ". Press 'AC' to reset calculator or 'DEL' to remove the syntax error")
    }
}