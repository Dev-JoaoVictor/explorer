/*
    Capture 2 números e faça as operações matemáticas de: 
    soma, subtração, divisão, multiplicação e resto da divisão!
 */

let firstNumber = prompt("Digite o primeiro número: ");
let secondNumber = prompt("Digite o segundo número: ");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const rest = firstNumber % secondNumber;

alert("Soma: " + sum);
alert("Subtração: " + sub);
alert("multiplicação: " + multi);
alert("Divisão: " + div);
alert("Resto: " + rest);
