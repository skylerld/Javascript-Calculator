const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
	return parseInt(userInput.value);
}
function createAndWriteOutput(operator, resultsBeforeCalc, calcNumber){
	const calcDescription = `${resultsBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription);
}
function add() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult = currentResult + enteredNumber;
	createAndWriteOutput('+', initialResult, enteredNumber);
}
function subtract() {
	//getuser function have parenthesis bc calls function when parent function called
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult = currentResult - enteredNumber;
	createAndWriteOutput('-', initialResult, enteredNumber);
}
function multiply() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult = currentResult * enteredNumber;
	createAndWriteOutput('x', initialResult, enteredNumber);
}
function divide() {
	const enteredNumber = getUserNumberInput;
	const initialResult = currentResult;
	currentResult = currentResult / enteredNumber;
	createAndWriteOutput('/', initialResult, enteredNumber);
}
//add and subtract functions dont have quotations otherwise function would be called when page loads
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
