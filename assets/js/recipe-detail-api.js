var activeIngredientEl = [];
var activeDirectionsEl = [];
const activeButton = ["bg-blue-500", "hover:bg-blue-700", "text-white","font-bold", "border-blue-700"];
const inActiveButton = ["bg-transparent", "hover:bg-blue-500", "text-blue-700", "font-semibold", "hover:text-white", "border-blue-500", "hover:border-transparent"];

let showIngredients = true;

function onLoad(){
  const ingredientButton = document.getElementById("ingredients-button");
  const directionButton = document.getElementById("direction-button");
  const ingredientContainer = document.getElementById("ingredients-container");
  const directionContainer = document.getElementById("directions-container");
  directionContainer.classList.add("hidden");
  ingredientButton.classList.add("hidden");
  directionButton.classList.add("hidden");
  showIngredients = true;
  ingredientButton.onclick = (event) =>{
    if(showIngredients)
      return;
    showIngredients = true;
    ingredientContainer.classList.remove("hidden");
    directionContainer.classList.add("hidden");
    inActiveButton.forEach(item =>{
      ingredientButton.classList.remove(item);
      directionButton.classList.add(item);
    });
    activeButton.forEach(item =>{
      ingredientButton.classList.add(item);
      directionButton.classList.remove(item);
    });
  };
  directionButton.onclick = (event) =>{
    if(!showIngredients)
      return;
    showIngredients = false;
    ingredientContainer.classList.add("hidden");
    directionContainer.classList.remove("hidden");
    inActiveButton.forEach(item =>{
      ingredientButton.classList.add(item);
      directionButton.classList.remove(item);
    });
    activeButton.forEach(item =>{
      ingredientButton.classList.remove(item);
      directionButton.classList.add(item);
    });
    
  };
  
  fetchRecipeInformation(new URLSearchParams(window.location.search).get("id"), setDetailRecipe);
}

//array for multiple ingredients to be stored in
let checkedIngredients = [];

function setDetailRecipe(data){
  const directionContainer = document.getElementById("directions-container");
  for(let i = 0;i<activeDirectionsEl.length; i++){
    directionContainer.removeChild(activeDirectionsEl[i]);
  }
  activeDirectionsEl = [];

  const ingredientContainer = document.getElementById("ingredients-container");
  for(let i = 0;i<activeIngredientEl.length; i++){
    ingredientContainer.removeChild(activeIngredientEl[i]);
  }
  activeIngredientEl = [];

  document.getElementById("title").textContent = data.title;
  document.getElementById("ready-in").textContent = `(Ready in ${data.readyInMinutes} mins)`;
	document.getElementById("servings").textContent = `(Servings: ${data.servings})`;
  document.getElementById("main-image").src = data.image;
	
  for(let i = 0;i<data.extendedIngredients.length; i++){
    const div = buildIngredient(data.extendedIngredients[i]);
    ingredientContainer.append(div);
    activeIngredientEl.push(div);
  }
  
  for(let i = 0; i<data.analyzedInstructions[0].steps.length;i++){
    const step = data.analyzedInstructions[0].steps[i];
    const div = document.createElement("div");
    div.classList.add("flex");
    div.classList.add("m-2");
    const p = document.createElement("p");
    const h2 = document.createElement("h2");
    h2.classList.add("px-2");
    h2.textContent = step.number + ".";
    p.textContent = step.step;
    p.classList.add("pb-1");
    div.append(h2);
    div.append(p);
    directionContainer.append(div);
  }
  document.getElementById("ingredients-button").classList.remove("hidden");
  document.getElementById("direction-button").classList.remove("hidden");
}
//Create an ingredient container, set the content values,
//Then return the parent Div
function buildIngredient(data){
    const div = document.createElement("div");
    
    const imageEl = document.createElement("img");
    imageEl.src = `https://spoonacular.com/cdn/ingredients_100x100/${data.image}`;
    div.append(imageEl);
    imageEl.classList.add("py-1");
    

    const nameEl = document.createElement("h2");
    div.append(nameEl);
    nameEl.textContent = data.original;
    
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