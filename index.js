const calcSum = (first, second) => first + second;

const calcSubtraction = (first, second) => first - second;

const calcMultiply = (first, second) => first * second;

const calcDivision = (first, second) => first / second;

const calc = function(){
    const first = +prompt('Enter first number');
    const operation = prompt('Enter operation');    
    const second = +prompt('Enter second number');

    if (isNaN(first) || isNaN(second)){
        alert('некорректный ввод');
    } else
    
        if (operation === '+'){
            alert(calcSum(first, second));
        }
        if (operation === '-'){
            alert(calcSubtraction(first, second));
        }
        if (operation === '*'){
            alert(calcMultiply(first, second));
        }
        if (operation === '/'){
            alert(calcDivision(first, second));
        } 
}

calc();
