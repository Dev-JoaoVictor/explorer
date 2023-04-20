//Varáveis - variables

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


//Funções
form.onsubmit = (event) => {
    event.preventDefault() // Tira o recarregamento da página

    const weight = inputWeight.value
    const height = inputHeight.value
}