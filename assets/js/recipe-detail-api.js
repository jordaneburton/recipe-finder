var activeIngredientEl = [];

function onLoad(){
  fetchRecipeInformation(new URLSearchParams(window.location.search).get("id"), setDetailRecipe);
}

//array for multiple ingredients to be stored in
let checkedIngredients = [];

function setDetailRecipe(data){
  const nutritionDiv = document.getElementById("nutrition-div");
  for(let i = 0;i<activeIngredientEl.length; i++){
    nutritionDiv.removeChild(activeIngredientEl[i]);
  }
  activeIngredientEl = [];

  document.getElementById("title").textContent = data.title;
  document.getElementById("ready-in").textContent = `(Ready in ${data.readyInMinutes} mins)`;
	document.getElementById("servings").textContent = `(Servings: ${data.servings})`;
  document.getElementById("main-image").src = data.image;
	
  for(let i = 0;i<data.extendedIngredients.length; i++){
    const div = buildIngredient(data.extendedIngredients[i]);
    nutritionDiv.append(div);
    activeIngredientEl.push(div);
  }
  
}
//Create an ingredient container, set the content values,
//Then return the parent Div
function buildIngredient(data){
    const div = document.createElement("div");
    
    const imageEl = document.createElement("img");
    imageEl.src = `https://spoonacular.com/cdn/ingredients_100x100/${data.image}`;
    div.append(imageEl);
    imageEl.classList.add("py-1");
    // const amountEl = document.createElement("h3");
    // amountEl.textContent = `${data.amount} ${data.unit}`;
    // div.append(amountEl);
    // amountEl.style.display = "inline-block";
    // amountEl.style.borderBlockEnd = "1px dotted black";
    // amountEl.classList.add("mb-1");

    const nameEl = document.createElement("h2");
    div.append(nameEl);
    nameEl.textContent = data.original;
    // nameEl.style.borderBlockEnd = "1px dotted black";
    nameEl.classList.add("mb-1");
    div.style.paddingBottom = "5px";
    div.style.border = "2px solid black";
    div.classList.add("w-1/3");
    div.classList.add("p-2")
    
    // checkbox to save an ingredient to the local storage
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    div.append(checkBox);
    



    // event listener to trigger, using an if else if so that they can uncheck items. 
    checkBox.addEventListener("change", function() {
      if (this.checked) {
        checkedIngredients.push(data.original);
        console.log("added:", data.original);
      } else {
        const index = checkedIngredients.indexOf(data.original);
        if (index > -1) {
          checkedIngredients.splice(index, 1);
          console.log("removed:", data.original);
        }
      }
      localStorage.setItem("checkedIngredients", JSON.stringify(checkedIngredients));
      console.log("Updated checkedIngredients in local storage:", checkedIngredients);
    });
    
    return div;
}