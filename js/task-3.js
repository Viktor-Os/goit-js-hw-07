const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  const trimmedValue = nameInput.value.trim();
  nameOutput.textContent = trimmedValue || "Anonymous";
});

const nameInputElement = document.querySelector('input[type="text"]');
const nameOutputElement = document.querySelector("h1");

nameInputElement.classList.add("my-input-class");
nameOutputElement.classList.add("text-class");
