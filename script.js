// Зареждаме съществуващите карти от localStorage
let cards = JSON.parse(localStorage.getItem("cards")) || {};

function addCard() {
  const input = document.getElementById("cardName");
  const name = input.value.trim();

  if (name === "") return;

  cards[name] = (cards[name] || 0) + 1;
  input.value = "";

  save();
  render();
}

// Запазваме в localStorage
function save() {
  localStorage.setItem("cards", JSON.stringify(cards));
}

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  for (let card in cards) {
    const li = document.createElement("li");
    li.textContent = `${card} – ${cards[card]} бр.`;
    list.appendChild(li);
  }
}

// Когато зареди сайта, рендираме съхранените карти
render();
