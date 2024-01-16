var recipeContainer = undefined;
var recipesElements = [];

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
  saveButton.textContent = "Save";

  div.append(title);
  div.append(image);
  //appending the save buttons to the div
  div.append(saveButton);

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