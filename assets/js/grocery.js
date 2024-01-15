const savedIngredients = localStorage.getItem("checkedIngredients");
let checkedIngredients;

if (savedIngredients) {
  checkedIngredients = JSON.parse(savedIngredients);
  console.log("Retrieved checkedIngredients array from local storage:", checkedIngredients);
} else {
  checkedIngredients = [];
}

const ingredientDiv = document.getElementById("ingredient-div");

if (checkedIngredients.length > 0) {
  checkedIngredients.forEach(function(ingredient) {
    const ingredientEl = document.createElement("div");
    ingredientEl.textContent = ingredient;
    ingredientDiv.appendChild(ingredientEl);
  });
} else {
  const noIngredients = document.createElement("div");
  noIngredients.textContent = "Your ready to cook!";
  ingredientDiv.appendChild(noIngredients);
}