const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

const numResuls: Array<number>= [];
const textResuls:string[] = [];

type NumOrString = number | string;
type Result = { val: number; timestamp: Date };

interface ResultObj {
    val: number;
    timestamp: Date;
}

function add(num1:number | string, num2:number | string) {
    if(typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
    
function printResult(resultObj: ResultObj) {
    console.log(resultObj.val);
}


buttonElement?.addEventListener('click', function() {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numResuls.push(result as number); 
    const stringResult = add(num1, num2);
    textResuls.push(stringResult as string);
    console.log(result);
    console.log(stringResult);
    printResult({val: result as number, timestamp: new Date()});
    console.log(numResuls, textResuls);

});

const myPromise = new Promise<string>((res,rej) => {
    setTimeout(() => {
        res('It worked!');
    }, 1000);   
})
myPromise.then(res => {
    console.log(res.split('w'));
});