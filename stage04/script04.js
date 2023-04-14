let nome = prompt("Digite o seu nome: ");
let mensage = alert(
  `Olá ${nome}, a seguir digite as sua três notas para saber se você passou para o próximo bimestre, ok?`
);

let noteOne = prompt("Digite a nota da primeira prova: ");
let noteTwo = prompt("Digite a nota da segunda prova: ");
let notethree = prompt("Digite a nota da terceira prova: ");

let media = (Number(noteOne) + Number(noteTwo) + Number(notethree) ) / 3;

media - media.toFixed(2)

if( media > 6) {
    alert(`Parabéns ${nome}, você obteve a média ${media} e passou para o próximo bimestre`)
} else {
    alert(`Puxa vida, ${nome} a sua média foi ${media}, infelizmente você não passou direto para o próximo bimestre, mas não desista você ainda tem a prova de recuperação!`)
}