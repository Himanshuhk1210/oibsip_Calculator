
var btn1 = document.querySelector(".btn1");

btn1.addEventListener("click",function(){

    var hiddenButtons = document.querySelectorAll('.hide');

    hiddenButtons.forEach(function(button) {
        if(button.hasAttribute('hidden')) {
            button.removeAttribute('hidden');
            btn1.innerHTML="↪";
        }
        else{
            btn1.innerHTML="↩";
            button.setAttribute('hidden', true);
        }
    });
});


function addInInput(value) {
    
    var currentInput = document.getElementById('txtbox').value;
    
    value = value.replace(/\*\*/g, '^');

    var newInput = currentInput + value;
    
    document.getElementById('txtbox').value = newInput;
}

function clearInput(){

    document.getElementById('txtbox').value = "";
}

function backspace(){

    var currentInput = document.getElementById('txtbox').value;

    var newInput = currentInput.slice(0, -1);

    document.getElementById('txtbox').value = newInput;
}

function calculate() {
    
    var expression = document.getElementById('txtbox').value;

    var result = eval(expression);

    document.getElementById('txtbox').value = result;

    try {
        
        expression = expression.replace(/\^/g, '**');
        
        var result = eval(expression);
        
        result = Math.round(result * 1e12) / 1e12;

        document.getElementById('txtbox').value = result;

    } catch (error) {

        document.getElementById('txtbox').value = 'Error';

    }
}

function calculateExponent() {
    addInInput('**');
}

function calculateSquareRoot() {
    var inputValue = parseFloat(document.getElementById('txtbox').value);
    if (!isNaN(inputValue) && inputValue >= 0) {
        var result = Math.sqrt(inputValue);
        document.getElementById('txtbox').value = result;
    } else {
        document.getElementById('txtbox').value = 'Error';
    }
}

function calculateFactorial() {
    var inputValue = parseInt(document.getElementById('txtbox').value);
    if (!isNaN(inputValue) && inputValue >= 0) {
        var result = factorial(inputValue);
        document.getElementById('txtbox').value = result;
    } else {
        document.getElementById('txtbox').value = 'Error';
    }
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function calculateInverse() {
    var inputValue = parseFloat(document.getElementById('txtbox').value);
    if (inputValue !== 0) {
        var result = 1 / inputValue;
        document.getElementById('txtbox').value = result;
    } else {
        document.getElementById('txtbox').value = 'Error';
    }
}

function calculateLogBase10() {
    var inputValue = parseFloat(document.getElementById('txtbox').value);
    if (!isNaN(inputValue) && inputValue > 0) {
        var result = Math.log10(inputValue);
        document.getElementById('txtbox').value = result;
    } else {
        document.getElementById('txtbox').value = 'Error';
    }
}

function calculateNaturalLog() {
    var inputValue = parseFloat(document.getElementById('txtbox').value);
    if (!isNaN(inputValue) && inputValue > 0) {
        var result = Math.log(inputValue);
        document.getElementById('txtbox').value = result;
    } else {
        document.getElementById('txtbox').value = 'Error';
    }
}