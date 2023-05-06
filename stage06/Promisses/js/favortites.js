export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);
    this.update();
  }

  update() {
    this.removeAllTr();
  }

  createRow() {
    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td class="user">
      <img
        src="https://github.com/Dev-JoaoVictor.png"
        alt="Imagem de João victor"
      />
      <a href="https://github.com/Dev-JoaoVictor" target="_blank">
        <p>João Victor</p>
        <span>Dev-JoaoVictor</span>
      </a>
    </td>
    <td class="repositories">53</td>
    <td class="followers">53</td>
    <td>
      <button class="remove">&times;</button>
    </td>
  `;

    return tr;
  }

  removeAllTr() {
    const tbody = this.root.querySelector("table tbody");

    tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }
}
