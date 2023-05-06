export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.entries = [
      {
        login: "Dev-JoaoVictor",
        name: "João Victor",
        public_repos: "30",
        followers: "120000",
      },
      {
        login: "Dev-JoaoVictor",
        name: "João Victor",
        public_repos: "30",
        followers: "120000",
      },
    ];
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");

    this.update();
  }

  update() {
    this.removeAllTr();

    this.entries.forEach((user) => {
      const row = this.createRow();

      row.querySelector(
        ".user img"
      ).src = `https://github.com/${user.login}.png`;
      row.querySelector(".user img").alt = `imagem de ${user.name}`;
      row.querySelector(".user p").textContent = user.name;
      row.querySelector(".user span").textContent = user.login;
      row.querySelector(".repositories").textContent = user.public_repos;
      row.querySelector(".followers").textContent = user.followers;

      this.tbody.append(row);
    });
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
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }
}
