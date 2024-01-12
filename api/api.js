const apiKey = "72cb5b31608b4fde9b58b12b834a21a6";
const apiURL = "https://api.spoonacular.com/recipes/"
const apiKeyString = `apiKey=${apiKey}`;

const USE_API = false;

// For Go Home functionality -- but there is no going home
// document.getElementById("home").onclick = (event) =>{
// 	event.preventDefault();
// 	document.location.replace("../index.html");
// }
var recentData = undefined;
var recipesElements = [];

const recipeSearchEl = document.getElementById("recipeSearch");
//Find Search button and setup click event
const searchButtonEl = document.getElementById("searchBtn");
searchButtonEl.onclick = searchRecipesClick;

//Go to Recipes page and ping API with user entered value
function searchRecipesClick(event){
  event.preventDefault();
  const query = recipeSearchEl.value.trim();
  if(query === ""){
    console.log("No Value Entered...");
    return;
  }

	searchRecipes(query);
}
function searchRecipes(query){
	const recipesDiv = document.getElementById("recipe-div");
	for(let i = 0;i<recipesElements.length;i++){
		console.log(recipesElements[i]);
		recipesDiv.removeChild(recipesElements[i]);
	}
	recipesElements = [];
	if(USE_API){//includeIngredients=rice&type=main
		console.log(USE_API);
  	complexSearch(`&query=${query}`);
	}
	else{
		document.getElementById("last-query").textContent = "TestData: " + `&query=${query}`;
  	setRecipes(testDataPastaRecipes.results);
	}
}

function complexSearch(parameters){
	document.getElementById("last-query").textContent = parameters;
  fetch(`${apiURL}complexSearch?${apiKeyString}${parameters}`)
  .then(result => result.json())
  .then(function(data){
		console.log(data);
    setRecipes(data.results);
  });
}
function complexSearchResults(result){
  return result.json();
}
function setRecipes(data){
  // console.log(data);
  recentData = data;

  const recipesDiv = document.getElementById("recipe-div");
  for(let i =0;i<data.length;i++){
    const div = buildRecipe(data[i]);
    recipesDiv.append(div);
		recipesElements.push(div);
  }
}

function buildRecipe(recipeData){
	console.log(recipeData);
  const div = document.createElement("div");
  const title = document.createElement("h1");
  const image = document.createElement("img");
  div.append(title);
  div.append(image);
  title.textContent = recipeData.title;
  image.src = recipeData.image;
	
  return div;
}

const testDataPastaRecipes = {
  "results": [
		{
			"id": 654959,
			"title": "Pasta With Tuna",
			"image": "https://spoonacular.com/recipeImages/654959-312x231.jpg",
			"imageType": "jpg"
		},
		{
			"id": 511728,
			"title": "Pasta Margherita",
			"image": "https://spoonacular.com/recipeImages/511728-312x231.jpg",
			"imageType": "jpg"
		},
		{
			"id": 654857,
			"title": "Pasta On The Border",
			"image": "https://spoonacular.com/recipeImages/654857-312x231.jpg",
			"imageType": "jpg"
		},
		{
			"id": 654883,
			"title": "Pasta Vegetable Soup",
			"image": "https://spoonacular.com/recipeImages/654883-312x231.jpg",
			"imageType": "jpg"
		},
		{
			"id": 654928,
			"title": "Pasta With Italian Sausage",
			"image": "https://spoonacular.com/recipeImages/654928-312x231.jpg",
			"imageType": "jpg"
		},
		{
			"id": 654926,
			"title": "Pasta With Gorgonzola Sauce",
			"image": "https://spoonacular.com/recipeImages/654926-312x231.jpg",
			"imageType": "jpg"
		},
		{
			"id": 654944,
			"title": "Pasta With Salmon Cream Sauce",
			"image": "https://spoonacular.com/recipeImages/654944-312x231.jpg",
			"imageType": "jpg"
		},
		{
			"id": 654905,
			"title": "Pasta With Chickpeas and Kale",
			"image": "https://spoonacular.com/recipeImages/654905-312x231.jpg",
			"imageType": "jpg"
		},
		{
			"id": 654901,
			"title": "Pasta With Chicken and Broccoli",
			"image": "https://spoonacular.com/recipeImages/654901-312x231.jpg",
			"imageType": "jpg"
		},
		{
			"id": 654913,
			"title": "Pasta With Chicken and Mushrooms",
			"image": "https://spoonacular.com/recipeImages/654913-312x231.jpg",
			"imageType": "jpg"
		}
	],
	"offset": 0,
	"number": 10,
	"totalResults": 261
};

//TODO think about this!!
const query = sessionStorage.getItem("search");
if(query !== null){
	searchRecipes(query);
	sessionStorage.clear();
}