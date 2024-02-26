function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

function createBoxes(amount) {
  // Спочатку очищуємо контейнер перед створенням нових блоків
  destroyBoxes();

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.classList.add("box");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }
  boxesDiv.appendChild(fragment);
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }
  createBoxes(amount);
  input.value = "";
});

destroyBtn.addEventListener("click", destroyBoxes);

// додаю клас
const inpClass = document.querySelector("input");
inpClass.classList.add("input-class");
// додаю клас до кнопки
const createBtn1 = document.querySelector("button[data-create]");
const destroyBtn2 = document.querySelector("button[data-destroy]");
createBtn1.classList.add("my-btn-create");
destroyBtn2.classList.add("my-btn-destroy");
const box = document.querySelector("#boxes");
box.classList.add("box-air");
