const savedIngredients = localStorage.getItem("checkedIngredients");

let checkedIngredients;

//Copy button for ingredient list


if (savedIngredients) {
  checkedIngredients = JSON.parse(savedIngredients);
  console.log("Retrieved checkedIngredients array from local storage:", checkedIngredients);
} else {
  checkedIngredients = [];
}

const ingredientDiv = document.getElementById("ingredient-div");
const ingredientList = document.getElementById("ingredient-list");

if (checkedIngredients.length > 0) {
  checkedIngredients.forEach(function(ingredient) {
    const ingredientEl = document.createElement("li");
    ingredientEl.textContent = ingredient;
    ingredientEl.classList.add("text-center");
    ingredientList.appendChild(ingredientEl);
    
  });
} else {
  const noIngredients = document.createElement("li");
  noIngredients.textContent = "Your ready to cook!";
  ingredientList.appendChild(noIngredients);
}

const copyButton = document.createElement("button");
copyButton.textContent = "Copy Ingredients";
copyButton.classList.add("mt-3");
ingredientDiv.appendChild(copyButton);

copyButton.addEventListener("click", function() {
  const ingredientList = checkedIngredients.join("\n");
  navigator.clipboard.writeText(ingredientList)
});