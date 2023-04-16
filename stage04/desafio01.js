numOne = Number(prompt("Digite o primeiro número: "));
numSecond = Number(prompt("Digite o segundo número: "));

let sum = numOne + numSecond;
let sub = numOne - numSecond;
let multi = numOne * numSecond;
let div = numOne / numSecond;
let rest = numOne % numSecond;


alert(`A soma dos dois números é: ${sum}`);
alert(`A subtração dos dois números é: ${sub}`);
alert(`A multiplicação dos dois números é: ${multi}`);
alert(`A divisão dos dois números é: ${div}`);
alert(`O resto da divisão dos dois números é: ${rest}`);

if (sum % 2 === 0) {
    alert(`A soma dos dois números é par: ${sum}`);
  } else {
    alert(`A soma dos dois números é impar: ${sum}`);
  }
  
  if (numOne == numSecond) {
    alert("Os número inseridos são iguais");
  } else {
    alert("Os número inseridos são diferentes");
  }

