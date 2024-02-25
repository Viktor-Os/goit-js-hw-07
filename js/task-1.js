const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItems = category.querySelectorAll("li");
  console.log(
    `Category: ${categoryName} 
    (Number of items: ${categoryItems.length})`
  );
});

// додаю додатково класи на ul та li для їх стилізації

// Знаходимо усі елементи <ul> всередині секції з id="categories"
const ulElements = document.querySelectorAll("#categories > .item > ul");

// Додаємо клас до кожного елемента <ul>
ulElements.forEach((ul) => {
  ul.classList.add("my-ul-class");

  // Знаходимо наступний сусідній елемент <ul>
  const nextUlElement = ul.nextElementSibling;
  if (nextUlElement) {
    nextUlElement.classList.add("my-ul-class");
  }

  // Знаходимо всі елементи <li> всередині кожного елемента <ul>
  const liElements = ul.querySelectorAll("li");
  // Додаємо клас до кожного елемента <li>
  liElements.forEach((li) => {
    li.classList.add("my-li-class");
  });
});

const hElement = document.querySelectorAll("h2");
hElement.forEach((h2) => {
  h2.classList.add("title-class");
});
