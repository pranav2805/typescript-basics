"use strict";
const num1Element = document.getElementById('num1'); //typecasting
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button'); //telling typescript to ignore strict type option on this variable
const numResults = []; //generics
const textResults = []; //typecasting
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    return resultObj.val;
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const res = add(+num1, +num2);
    numResults.push(res); //typecasting
    const stringRes = add(num1, num2);
    textResults.push(stringRes);
    printResult({ val: res, timestamp: new Date() });
    console.log(numResults, textResults);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked!');
    }, 1000);
});
myPromise.then(result => {
    console.log(result.split(' '));
});
