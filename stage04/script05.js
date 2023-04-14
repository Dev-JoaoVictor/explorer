/*
    Capture 10 items para compor a lista de um supermecado.
    Após capturtar os 10 items, imprima-os, separando por vírgula.
*/

let items = [];
for (let item = 0; item < 3; item++) {
  let itemName = prompt("Digite o item escolhido: " + (item + 1));

  items[item] = itemName;
}

alert(items);
