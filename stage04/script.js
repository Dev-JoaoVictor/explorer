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
    name: "Carlos",
    age: 18,
    weight: 70,
    height: 1.8,
  },
  {
    name: "Pedro",
    age: 22,
    weight: 90,
    height: 1.85,
  },
];

let patientsName = []

for (let patient of patients) {
    patientsName.push(patient.name)
}

alert(patientsName)