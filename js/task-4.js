const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {};

  Array.from(loginForm.elements).forEach((element) => {
    if (element.tagName === "INPUT" && element.type !== "submit") {
      formData[element.name] = element.value.trim();
    }
  });

  const isFormValid = Object.values(formData).every((value) => value);

  if (!isFormValid) {
    alert("All form fields must be filled in");
    return;
  }

  console.log(formData);

  loginForm.reset();
});

const classLabel = document.querySelectorAll("label");
classLabel.forEach((label) => {
  label.classList.add("label-class");
});
const inputText = document.querySelectorAll("input");
inputText.forEach((input) => {
  input.classList.add("inp-class");
});
const btn = document.querySelector("button");
btn.classList.add("btn-login");
