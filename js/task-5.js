function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const button = document.querySelector(".change-color");
const body = document.body;
const colorSpan = document.querySelector(".color");

button.addEventListener("click", function () {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});

const widgetDiv = document.querySelector(".widget");

const paragraphElements = widgetDiv.querySelectorAll("p");

paragraphElements.forEach((paragraph) => {
  paragraph.classList.add("text-parag");
});
