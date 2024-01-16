var activeIngredientEl = [];

function onLoad(){
	const urlParams = new URLSearchParams(window.location.search);
	const recipeID = urlParams.get("id");

	//Call is to --> 'recipe-information.js'
	fetchRecipeInformation(recipeID, setDetailRecipe);
}

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

    const amountEl = document.createElement("h3");
    amountEl.textContent = `${data.amount} ${data.unit}`;
    div.append(amountEl);
    amountEl.style.display = "inline-block";
    amountEl.style.paddingLeft = "10px";

    const nameEl = document.createElement("h2");
    div.append(nameEl);
    nameEl.textContent = data.original;
    div.style.paddingBottom = "5px";
    div.style.border = "2px dotted black";
    div.style.maxWidth = "100%";
    return div;
}