var recipeContainer = undefined;
var recipesElements = [];

// Styling classes for recipe cards
const recipeDivStyles = ['relative', 'p-2', 'rounded-xl', 'text-white', 'bg-lime-500'];
const recipeNameStyles = ['font-semibold', 'ml-4', 'w-2/3', 'pb-2', 'text-xl'];
const recipeButtonStyles = ['absolute', 'top-2', 'right-3', 'md:rounded-full', 'md:bg-gray-900/10'];
const recipeSaveStyles = ['md:hidden', 'font-semibold', 'text-xl'];
const recipeSVGStyles = ['hidden', 'md:block', 'w-6', 'h-6'];

//Call once this script is loaded to initialize the search bar
//containerID = the id of the element to put all the recipes.
function onLoad(containerID){
	recipeContainer = document.getElementById(containerID);
	document.getElementById("recipeSearch").value = new URLSearchParams(window.location.search).get("query");
	//Find Search button and setup click event
	document.getElementById("searchBtn").onclick = searchRecipesClick;

	searchRecipes(window.location.search);
}

//Call this when the Find/Search button is clicked.
function searchRecipesClick(event){
	event.preventDefault();
	const query = document.getElementById("recipeSearch").value.trim();
	if(query === ""){
		console.log("No Value Entered...");
		return;
	}
	const fullQuery = `?query=${query}${buildParameters()}`;
	// console.log(fullQuery);
	searchRecipes(fullQuery);
}

//This will clear the recipeContainer of current recipes
//Then will execute the search for new recipes.
function searchRecipes(query){
	if(recipeContainer === undefined){
    console.log("no where to put the recipes");
    return;
  }
	for(let i = 0;i<recipesElements.length;i++){
		recipeContainer.removeChild(recipesElements[i]); 
	}
	recipesElements = [];

  //Call is to --> 'complex-search.js'
  fetchComplexSearch(query, setRecipes);
}

//This will create the recipe elements and attach them to the container Div.
function setRecipes(data){
  // console.log(data);
  recentData = data;

  for(let i =0;i<data.length;i++){
    const div = buildRecipe(data[i]);
    recipeContainer.append(div);
		recipesElements.push(div);
  }
}

//This builds the recipe for display.
function buildRecipe(recipeData){
	// console.log(recipeData);
  const div = document.createElement("div");
  const title = document.createElement("h1");
  const image = document.createElement("img");

  //Creating the save buttons
  const saveButton = document.createElement("button");
  const saveText = document.createElement('span');
  const saveSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  saveText.textContent = "Save";
  
  // Styling the svg element
  saveSVG.setAttribute('viewBox', '0 0 24 24');
  saveSVG.setAttribute('fill', 'currentColor');
  // Creating svg path
  const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  svgPath.setAttribute('d', 'M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z');
  svgPath.setAttribute('clip-rule', 'evenodd');
  saveSVG.append(svgPath);
  // appending span and svg to save buttons
  saveButton.append(saveText);
  saveButton.append(saveSVG);

  // apply classes to the recipe elements
  for (style of recipeDivStyles) {div.classList.add(style)}
  for (style of recipeNameStyles) {title.classList.add(style)}
  for (style of recipeButtonStyles) {saveButton.classList.add(style)}
  for (style of recipeSaveStyles) {saveText.classList.add(style)}
  for (style of recipeSVGStyles) {saveSVG.classList.add(style)}

  div.append(title);
  //appending the save buttons to the div
  div.append(saveButton);
  
  div.append(image);

  title.textContent = recipeData.title;
  image.src = recipeData.image;
	
  // Click event listener for save
  saveButton.addEventListener("click", function() {
    // Create an object with the API call info
    const savedRecipe = {
      id: recipeData.id,
      title: recipeData.title,
      image: recipeData.image,
    };

    // animate button ping
    if (!this.classList.contains('click-ping')) {
      this.classList.remove('unclick-ping');
      this.classList.add('click-ping');
    }else{
      this.classList.add('unclick-ping');
      this.classList.remove('click-ping');
    }

    // Retrieve existing saved recipes from local storage
    const existingRecipes = localStorage.getItem("savedRecipes");

    let recipesArray;
    if (existingRecipes) {
      recipesArray = JSON.parse(existingRecipes);
    } else {
      recipesArray = [];
    }

    // Push the new recipe to the array
    recipesArray.push(savedRecipe);

    // Convert the updated array to a JSON string
    const updatedRecipes = JSON.stringify(recipesArray);

    // Store the updated JSON string in local storage
    localStorage.setItem("savedRecipes", updatedRecipes);

    console.log("Recipe saved:", savedRecipe);
  });

  return div;
}