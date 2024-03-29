//This will ping the Spoonacular api with a complexSearch, to return recipes.
//parameters = a built string of parameters to attach to the search query.
function fetchComplexSearch(parameters, callback){
  if(USE_API){
		console.log(`complexSearch${(parameters.length > 0?parameters + "&":"?")}${apiKeyString}`);
    fetch(`${apiURL}complexSearch${(parameters.length > 0?parameters + "&":"?")}${apiKeyString}`)
    .then(result => {
			if(result.status === 200)
				return result.json();
			else{
				return testDataPastaRecipes;
			}
		})
    .then(function(data){
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