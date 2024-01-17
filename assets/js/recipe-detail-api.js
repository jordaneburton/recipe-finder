var activeIngredientEl = [];
var activeDirectionsEl = [];
const activeButton = ["bg-lime-500", "hover:bg-lime-700", "text-white","font-bold", 'ring-4', "ring-lime-600"];
const inActiveButton = ["bg-lime-100", "hover:bg-lime-500", "text-lime-700", "font-semibold", "hover:text-white", 'ring-4', "ring-lime-300", "hover:border-transparent"];

let showIngredients = true;

function onLoad(){
  const ingredientButton = document.getElementById("ingredients-button");
  const directionButton = document.getElementById("direction-button");
  const ingredientContainer = document.getElementById("ingredients-container");
  const directionContainer = document.getElementById("directions-container");
  directionContainer.classList.add("hidden");
  ingredientButton.classList.add("hidden");
  directionButton.classList.add("hidden");

  // setup button initial styling
  ingredientContainer.classList.remove("hidden");
  inActiveButton.forEach(item =>{
    directionButton.classList.add(item);
  });
  activeButton.forEach(item =>{
    ingredientButton.classList.add(item);
  });

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
    h2.classList.add("text-xl");
    h2.classList.add("md:text-2xl");
    h2.classList.add("font-semibold");
    h2.textContent = step.number + ".";
    p.textContent = step.step;
    p.classList.add("pb-1");
    p.classList.add("text-xl");
    p.classList.add("md:text-2xl");
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
    imageEl.classList.add("justify-self-center");
    imageEl.classList.add("rounded-2xl");
    imageEl.src = `https://spoonacular.com/cdn/ingredients_100x100/${data.image}`;
    div.append(imageEl);
    imageEl.classList.add("py-1");
    

    const nameEl = document.createElement("h2");
    div.append(nameEl);
    nameEl.textContent = data.original;
    
    // style ingredient name elements
    nameEl.classList.add("mt-3");
    nameEl.classList.add("text-xl");
    nameEl.classList.add("text-center");
    nameEl.classList.add("md:text-start");

    // style div elements
    const divStyleList = ["lg:w-1/3", "md:w-1/2", "w-full", "p-2", "my-3", "rounded-2xl", "relative", "grid", "grid-col-1", "lg:grid-col-2", "place-content-center", "bg-lime-200", "ring-inset", "border-4", "border-lime-700"];
    for (style of divStyleList) {div.classList.add(style)}
    
    // checkbox to save an ingredient to the local storage
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    div.append(checkBox);
    const checkboxStyleList = ['absolute', 'top-3', 'right-3', 'appearance-none', 'rounded-full', 'bg-lime-100', 'checked:bg-lime-700', 'ring', 'ring-lime-500', 'size-8'];
    for (style of checkboxStyleList) {checkBox.classList.add(style)}
    



    // event listener to trigger, using an if else if so that they can uncheck items. 
    checkBox.addEventListener("change", function() {
      if (this.checked) {
        checkedIngredients.push(data.original);
        this.classList.add('click-ping');
        this.classList.remove('unclick-ping');
        console.log("added:", data.original);
      } else {
        this.classList.remove('click-ping');
        this.classList.add('unclick-ping');
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