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


function media(firstTest, secondTest) {
    let calcMedia = (firstTest + secondTest) / 2
    return calcMedia
}

for(student of listStudents) {
    let mediaStudent = media(student.firstTest, student.secondTest)
    let aproved = mediaStudent > 7 ? "Você está aprovado!" : 'Você está reprovado!'
    alert(`A média do aluno ${student.name} foi de ${mediaStudent}, ${aproved}`)
}