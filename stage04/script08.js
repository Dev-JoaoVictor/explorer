/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const patients = [
  {
    name: "João",
    age: 22,
    weight: 90,
    height: 1.85,
  },
  {
    name: "Pedro",
    age: 20,
    weight: 80,
    height: 1.75,
  },
  {
    name: "Paulo",
    age: 18,
    weight: 70,
    height: 1.65,
  },
];

let patientsName = []

for(let patient of patients) {
    patientsName.push(`O paciente ${patient.name}, tem ${patient.age} anos, pesa ${patient.weight}kg e tem ${patient.height} de altura`)
}

alert(patientsName)