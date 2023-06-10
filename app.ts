const num1Element = document.getElementById('num1') as HTMLInputElement; //typecasting
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!; //telling typescript to ignore strict type option on this variable

const numResults: Array<number> = []; //generics
const textResults: string[] = []; //typecasting
type NumOrString = number | string; //type alias
type Result = {val: number; timestamp: Date};

interface Resultobj{ //interface
    val: number; 
    timestamp: Date
}

function add(num1: NumOrString, num2: NumOrString){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    } else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}

function printResult(resultObj: Resultobj){  //handling object
    return resultObj.val;
}

buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const res = add(+num1, +num2);
    numResults.push(res as number); //typecasting
    const stringRes = add(num1, num2);
    textResults.push(stringRes as string);
    printResult({val: res as number, timestamp: new Date()});
    console.log(numResults, textResults); 
})

const myPromise = new Promise<string>((resolve, reject) => {  //generics on Promise object
    setTimeout(() => {
        resolve('It worked!');
    },1000)
});

myPromise.then(result => {
    console.log(result.split(' '));
    
})

