/* Lista de exemplo de estudantes */
const listStudents = [
  {
    name: "João",
    firstTest: 7.3,
    secondTest: 9.2,
  },
  {
    name: "Pedro",
    firstTest: 5.3,
    secondTest: 8.2,
  },
  {
    name: "Marcos",
    firstTest: 4.3,
    secondTest: 6.2,
  },
];

/* função de calculo da média */
function media(firstTest, secondTest) {
  let calcMedia = (firstTest + secondTest) / 2;
  return calcMedia;
}

/* função de calculo da média de cada estudante e apresentação das notas*/
for (student of listStudents) {
  /* Variavel que envia os valores das notas para a funçõa media*/
  let mediaStudent = media(student.firstTest, student.secondTest);
  /* condição ternária que verifica se a média é maior que 7*/
  let aproved =
    mediaStudent > 7 ? "Você está aprovado!" : "Você está reprovado!";

  alert(`A média do aluno ${student.name} foi de ${mediaStudent}, ${aproved}`);
}
