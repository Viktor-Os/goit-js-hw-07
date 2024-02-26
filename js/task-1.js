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

const ulElements = document.querySelectorAll("#categories > .item > ul");

ulElements.forEach((ul) => {
  ul.classList.add("my-ul-class");

  const nextUlElement = ul.nextElementSibling;
  if (nextUlElement) {
    nextUlElement.classList.add("my-ul-class");
  }
  const liElements = ul.querySelectorAll("li");
  liElements.forEach((li) => {
    li.classList.add("my-li-class");
  });
});

const hElement = document.querySelectorAll("h2");
hElement.forEach((h2) => {
  h2.classList.add("title-class");
});
