
let currentResult=0;
let logEntries = [];


// This is a Function that extract userInput
function getUserInput(){
    return parseInt(usrInput.value);
}

// Create and write output
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber ){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
     
}

// writing Logs
function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    let mathoperator;
    if (calculationType === 'ADD'){
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if(calculationType === 'SUBTRACT'){
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if(calculationType === 'MULTIPLY'){
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber,currentResult)

}

// Addition Function  
function add() {
    calculateResult('ADD');
}

// subtraction Function 
function subtract(){
    calculateResult('SUBTRACT');
}

// multiply Function 
function multiply(){
    // const enteredNumber = getUserInput();
    // const initialResult = currentResult;
    // currentResult *= enteredNumber;
    // createAndWriteOutput('*', initialResult, enteredNumber);
    // writeToLog('MULTIPLY', initialResult, enteredNumber,currentResult);
    calculateResult('MULTIPLY');
}

// division function 
function divide(){
    // const enteredNumber = getUserInput();
    // const initialResult = currentResult;
    // currentResult /= enteredNumber;
    // createAndWriteOutput('/', initialResult, enteredNumber);
    // writeToLog('DIVIDE', initialResult, enteredNumber,currentResult);
calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
