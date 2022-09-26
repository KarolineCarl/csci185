const addNumbers = (ev) => {
    // something to memorize: if you want to get what 
    // the user typed out of a form element, use ".value"
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    answer = num1 + num2;

    document.querySelector('#answer').innerHTML = answer;
}

const subtractNumbers = (ev) => {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    answer = num1 - num2;

    document.querySelector('#answer').innerHTML = answer;
}

const multiplyNumbers = (ev) => {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    answer = num1 * num2;

    document.querySelector('#answer').innerHTML = answer;
}

const divideNumbers = (ev) => {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    answer = num1 / num2;

    document.querySelector('#answer').innerHTML = answer;
}

