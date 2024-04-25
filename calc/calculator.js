let screen = document.getElementById("screen");

let calculation = localStorage.getItem('calculation') || '';
function updateCalculation(input) {
    if (calculation == '0'){
        calculation = input;
    } else {
        calculation += input;
        screen.innerHTML = calculation;
    }
    screen.innerHTML = calculation;
    localStorage.setItem('calculation', calculation);
}

function clearBoard(){
    calculation = '0';
    localStorage.setItem('calculation', calculation);
    screen.innerHTML = calculation;
}

function result(){
    calculation = eval(calculation);
    screen.innerHTML = calculation;
}