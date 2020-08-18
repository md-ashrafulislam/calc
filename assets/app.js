const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//about user input 
function getUserNumberInput(){
    return parseInt(usrInput.value);
}

//about description
function creatAndWriteOutput (operator, resultBeforeCalc, calcNumber){
    const calcDescription =  `${resultBeforeCalc}  ${operator}  ${ calcNumber}`;
    outputResult(currentResult, calcDescription);
}

//about object data
function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
    ){
        const logEntry ={
            operation: operationIdentifier, 
            prevResult: prevResult,
            number:operationNumber, 
            result:newResult,
        };
        logEntries.push(logEntry);
        console.log(logEntries)
    }

    //about calculation solution
function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType === 'ADD'){
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if(calculationType === 'SUBTRACT'){
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if(calculationType === 'MULTIPLY'){
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if(calculationType === 'DIVIDE'){
        currentResult /= enteredNumber;
        mathOperator = '/';
    };
    
    creatAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}
function add (){
    calculateResult ('ADD');
}
function subtract (){
    calculateResult ('SUBTRACT');
    
}

function multiply (){
    calculateResult ('MULTIPLY');
}

function divide (){
    calculateResult ('DIVIDE');
   
}

//about click to html connection
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);