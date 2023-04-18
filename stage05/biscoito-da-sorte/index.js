const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const biscoito = document.querySelector(".biscoito")
const message = screen2.querySelector("p")
const reset = screen2.querySelector('button')

const messages = [
    "A vida trará coisas boas se tiver paciência.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Siga os bons e aprenda com eles.",
    "O riso é a menor distância entre duas pessoas.",
    "Amizade e Amor são coisas que se unem num piscar de olhos.",
    "Quem olha para fora sonha; quem olha para dentro acorda.",
    "Você sempre será a sua melhor companhia!",
    "Realize o óbvio, pense no improvável e conquiste o impossível.",
    "O Palmeiras não tem mundial"
]

biscoito.addEventListener("click", handleTryClick)
reset.addEventListener("click", toggleScreen)

function handleTryClick() {
    toggleScreen()
    clickBiscoito()
}

function clickBiscoito() {
    const allMessages = messages.length
    let randomMessage = Math.floor(Math.random() * allMessages)
    message.innerText = `${messages[randomMessage]}`
}


function toggleScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}