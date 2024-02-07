let dynamicText = document.getElementById('textoDinamico');
let inputNumber = document.getElementById(`numeroIngresado`);
let tryButton = document.getElementById(`intentar`);
let restartButton = document.getElementById(`reiniciar`);
let maxAttempts = 100;
let secretNumber;
let attemptsCounter = 0;
let drawnNumbers = [];


function generateSecretNumber() {
    if (drawnNumbers.length == maxAttempts) {
        dynamicText.innerHTML = `Ya se sortearon Todos los números posibles!! :(`;
        tryButton.setAttribute(`disabled`, true);
        inputNumber.setAttribute('disabled', true);
    } else {
        secretNumber = Math.floor(Math.random() * maxAttempts) + 1;;
        if (drawnNumbers.includes(secretNumber)) {
            return generateSecretNumber()
        } else {
            drawnNumbers.push(secretNumber);
            return secretNumber;
        }
    }
}

function startConditions() {
    dynamicText.innerHTML = `Ingresa un Número entero entre 1 y 100`;
    inputNumber.value = '';
    tryButton.removeAttribute('disabled');
    restartButton.setAttribute('disabled', true)
    inputNumber.removeAttribute('disabled')
    attemptsCounter = 0;
    generateSecretNumber();
    console.log(secretNumber);
    console.log(drawnNumbers);
}
startConditions();


//Start Event
tryButton.addEventListener('click', process);
function process() {
    let evaluatedNumber = parseInt(inputNumber.value);
    attemptsCounter += 1;
    switch (true) {
        case (evaluatedNumber < 0 || evaluatedNumber > 100):
            dynamicText.innerHTML = `El número ingresado no es valido, el rango establecido es entre 1 y 100 (Intentos: ${attemptsCounter})`;
            break;
        case (evaluatedNumber === secretNumber):
            dynamicText.innerHTML = `Felicidades!! Adivinaste el Número Secreto ${evaluatedNumber} (Intentos: ${attemptsCounter})`;
            tryButton.setAttribute(`disabled`, true);
            restartButton.removeAttribute(`disabled`);
            inputNumber.setAttribute('disabled', true);
            break;
        case (evaluatedNumber > secretNumber):
            dynamicText.innerHTML = `Error!! El número Secreto es Menor (Intentos: ${attemptsCounter})`;
            break;
        case (evaluatedNumber < secretNumber):
            dynamicText.innerHTML = `Error!! El número Secreto es Mayor (Intentos: ${attemptsCounter})`;
            break;
    }
    inputNumber.value = ''
}

//Re-start Event
restartButton.addEventListener('click', restartGame)
function restartGame() {
    startConditions()
}