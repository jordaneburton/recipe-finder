const apiKey = "72cb5b31608b4fde9b58b12b834a21a6";
const apiURL = "https://api.spoonacular.com/recipes/"
const apiKeyString = `apiKey=${apiKey}`;
const USE_API = false;

//This will ping the Spoonacular api with a complexSearch, to return recipes.
//parameters = a built string of parameters to attach to the search query.
function complexSearch(parameters, callback){
  if(USE_API){
    fetch(`${apiURL}complexSearch${(parameters.length > 0?parameters + "&":"?")}${apiKeyString}`)
    .then(result => result.json())
    .then(function(data){
      console.log(data);
      // setRecipes(data.results);
      callback(data.results);
    });
  }else{
    callback(testDataPastaRecipes.results);
  }
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