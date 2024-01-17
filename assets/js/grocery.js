const savedIngredients = localStorage.getItem("checkedIngredients");

let checkedIngredients;

// Styles for various elements
const readyMsgStyles = ['text-xl', 'font-semibold', 'whitespace-pre-line'];
const copyButtonStyles = ['text-lg', 'font-semibold', 'rounded-full', 'w-44', 'text-lg', 'bg-lime-500', 'text-white', 'shadow-sm', 'hover:bg-lime-400', 'active:outline', 'active:outline-2', 'active:outline-offset-2', 'active:outline-lime-600'];

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
    
    const copyButton = document.createElement("button");
    copyButton.textContent = "Copy Ingredients";
    copyButton.classList.add("mt-3", 'p-2');
    ingredientDiv.appendChild(copyButton);
    for (style of copyButtonStyles) {copyButton.classList.add(style)}

    copyButton.addEventListener("click", function() {
      const ingredientList = checkedIngredients.join("\n");
      navigator.clipboard.writeText(ingredientList)
    });

  });
} else {
  const noIngredients = document.createElement("div");
  noIngredients.textContent = `You have all you need

  You're ready to cook!`;
  ingredientDiv.appendChild(noIngredients);
  for (style of readyMsgStyles) {noIngredients.classList.add(style)}
}
