const apiKey = "72cb5b31608b4fde9b58b12b834a21a6";
const apiURL = "https://api.spoonacular.com/recipes/"
const apiKeyString = `apiKey=${apiKey}`;
const USE_API = false;

//Grab the ID from URL
const urlParams = new URLSearchParams(window.location.search);
const recipeID = urlParams.get("id");

var activeIngredientEl = [];

//This function takes in a 'spoonacular" recipe ID
//Then fetches recipes info from API.
//Then will set the recipe in HTML.
function fetchRecipeInformation(id){
	if(id !== null && USE_API){
		fetch(`${apiURL}${id}/information?${apiKeyString}`)
		.then(result => result.json())
		.then(function(data){
			console.log(data);
			setDetailRecipe(data);
		});

		return;
	}

	setDetailRecipe(testRecipeData);
	const p = document.createElement("p");
	p.textContent = "(~Test Data~" + (id === null? " ID is null)":")");
	document.getElementById("title").append(p);
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

const testRecipeData =
{
	"vegetarian": false,
	"vegan": false,
	"glutenFree": false,
	"dairyFree": true,
	"veryHealthy": false,
	"cheap": false,
	"veryPopular": false,
	"sustainable": false,
	"lowFodmap": false,
	"weightWatcherSmartPoints": 13,
	"gaps": "no",
	"preparationMinutes": -1,
	"cookingMinutes": -1,
	"aggregateLikes": 1,
	"healthScore": 37,
	"creditsText": "foodista.com",
	"sourceName": "foodista.com",
	"pricePerServing": 298.3,
	"extendedIngredients": [
		{
			"id": 10218364,
			"aisle": "Ethnic Foods",
			"image": "flour-tortilla.jpg",
			"consistency": "SOLID",
			"name": "flour tortilla",
			"nameClean": "flour tortilla",
			"original": "4 Large Low-Fat Flour Tortilla",
			"originalName": "Large Low-Fat Flour Tortilla",
			"amount": 4.0,
			"unit": "",
			"meta": [
				"low-fat"
			],
			"measures": {
				"us": {
					"amount": 4.0,
					"unitShort": "",
					"unitLong": ""
				},
				"metric": {
					"amount": 4.0,
					"unitShort": "",
					"unitLong": ""
				}
			}
		},
		{
			"id": 23657,
			"aisle": "Meat",
			"image": "flank-steak.jpg",
			"consistency": "SOLID",
			"name": "flank steak",
			"nameClean": "flank steak",
			"original": "1/2 pound Flank Steak, sliced into thin strips",
			"originalName": "Flank Steak, sliced into thin strips",
			"amount": 0.5,
			"unit": "pound",
			"meta": [
				"sliced into thin strips"
			],
			"measures": {
				"us": {
					"amount": 0.5,
					"unitShort": "lb",
					"unitLong": "pounds"
				},
				"metric": {
					"amount": 226.796,
					"unitShort": "g",
					"unitLong": "grams"
				}
			}
		},
		{
			"id": 11821,
			"aisle": "Produce",
			"image": "red-pepper.jpg",
			"consistency": "SOLID",
			"name": "bell pepper",
			"nameClean": "red pepper",
			"original": "1 Red Bell Pepper (or any color combination), julienned",
			"originalName": "Red Bell Pepper (or any color combination), julienned",
			"amount": 1.0,
			"unit": "",
			"meta": [
				"red",
				"or any color combination), julienned"
			],
			"measures": {
				"us": {
					"amount": 1.0,
					"unitShort": "",
					"unitLong": ""
				},
				"metric": {
					"amount": 1.0,
					"unitShort": "",
					"unitLong": ""
				}
			}
		},
		{
			"id": 11282,
			"aisle": "Produce",
			"image": "brown-onion.png",
			"consistency": "SOLID",
			"name": "onion",
			"nameClean": "onion",
			"original": "1 Onion, julienned",
			"originalName": "Onion, julienned",
			"amount": 1.0,
			"unit": "",
			"meta": [
				"julienned"
			],
			"measures": {
				"us": {
					"amount": 1.0,
					"unitShort": "",
					"unitLong": ""
				},
				"metric": {
					"amount": 1.0,
					"unitShort": "",
					"unitLong": ""
				}
			}
		},
		{
			"id": 16015,
			"aisle": "Pasta and Rice",
			"image": "black-beans.jpg",
			"consistency": "SOLID",
			"name": "black beans",
			"nameClean": "black beans",
			"original": "1 cup Unsalted Black Beans, drained",
			"originalName": "Unsalted Black Beans, drained",
			"amount": 1.0,
			"unit": "cup",
			"meta": [
				"unsalted",
				"drained"
			],
			"measures": {
				"us": {
					"amount": 1.0,
					"unitShort": "cup",
					"unitLong": "cup"
				},
				"metric": {
					"amount": 172.0,
					"unitShort": "g",
					"unitLong": "grams"
				}
			}
		},
		{
			"id": 6599,
			"aisle": "Pasta and Rice",
			"image": "salsa-verde.png",
			"consistency": "SOLID",
			"name": "chipotlé enchilada sauce",
			"nameClean": "green enchilada sauce",
			"original": "1 1/2 cups Chipotlé Enchilada Sauce",
			"originalName": "Chipotlé Enchilada Sauce",
			"amount": 1.5,
			"unit": "cups",
			"meta": [],
			"measures": {
				"us": {
					"amount": 1.5,
					"unitShort": "cups",
					"unitLong": "cups"
				},
				"metric": {
					"amount": 360.0,
					"unitShort": "ml",
					"unitLong": "milliliters"
				}
			}
		},
		{
			"id": 6599,
			"aisle": "Pasta and Rice",
			"image": "harissa.jpg",
			"consistency": "SOLID",
			"name": "chipotlé enchilada sauce",
			"nameClean": "green enchilada sauce",
			"original": "1 1/2 cups Chipotlé Enchilada Sauce",
			"originalName": "Chipotlé Enchilada Sauce",
			"amount": 1.5,
			"unit": "cups",
			"meta": [],
			"measures": {
				"us": {
					"amount": 1.5,
					"unitShort": "cups",
					"unitLong": "cups"
				},
				"metric": {
					"amount": 360.0,
					"unitShort": "ml",
					"unitLong": "milliliters"
				}
			}
		},
		{
			"id": 27027,
			"aisle": "Canned and Jarred",
			"image": "pico-de-gallo.png",
			"consistency": "SOLID",
			"name": "pico de gallo",
			"nameClean": "pico de gallo",
			"original": "1 cup Pico de Gallo",
			"originalName": "Pico de Gallo",
			"amount": 1.0,
			"unit": "cup",
			"meta": [],
			"measures": {
				"us": {
					"amount": 1.0,
					"unitShort": "cup",
					"unitLong": "cup"
				},
				"metric": {
					"amount": 340.0,
					"unitShort": "ml",
					"unitLong": "milliliters"
				}
			}
		},
		{
			"id": 10211215,
			"aisle": "Produce",
			"image": "garlic.jpg",
			"consistency": "SOLID",
			"name": "garlic cloves",
			"nameClean": "whole garlic cloves",
			"original": "4 Garlic Cloves, 2 smashed, 2 finely minced",
			"originalName": "Garlic Cloves, 2 smashed, 2 finely minced",
			"amount": 4.0,
			"unit": "",
			"meta": [
				"finely minced",
				"smashed"
			],
			"measures": {
				"us": {
					"amount": 4.0,
					"unitShort": "",
					"unitLong": ""
				},
				"metric": {
					"amount": 4.0,
					"unitShort": "",
					"unitLong": ""
				}
			}
		},
		{
			"id": 11165,
			"aisle": "Spices and Seasonings",
			"image": "cilantro.png",
			"consistency": "SOLID",
			"name": "cilantro",
			"nameClean": "cilantro",
			"original": "8 tablespoons Chopped Cilantro",
			"originalName": "Chopped Cilantro",
			"amount": 8.0,
			"unit": "tablespoons",
			"meta": [
				"chopped"
			],
			"measures": {
				"us": {
					"amount": 8.0,
					"unitShort": "Tbsps",
					"unitLong": "Tbsps"
				},
				"metric": {
					"amount": 8.0,
					"unitShort": "Tbsps",
					"unitLong": "Tbsps"
				}
			}
		},
		{
			"id": 1034053,
			"aisle": "Oil, Vinegar, Salad Dressing",
			"image": "olive-oil.jpg",
			"consistency": "LIQUID",
			"name": "evoo",
			"nameClean": "extra virgin olive oil",
			"original": "EVOO",
			"originalName": "EVOO",
			"amount": 4.0,
			"unit": "servings",
			"meta": [],
			"measures": {
				"us": {
					"amount": 4.0,
					"unitShort": "servings",
					"unitLong": "servings"
				},
				"metric": {
					"amount": 4.0,
					"unitShort": "servings",
					"unitLong": "servings"
				}
			}
		},
		{
			"id": 1042027,
			"aisle": null,
			"image": "seasoning.png",
			"consistency": "SOLID",
			"name": "mexican herb seasoning",
			"nameClean": "seasoning",
			"original": "Mexican Dried Herb Seasoning",
			"originalName": "Mexican Dried Herb Seasoning",
			"amount": 4.0,
			"unit": "servings",
			"meta": [
				"dried"
			],
			"measures": {
				"us": {
					"amount": 4.0,
					"unitShort": "servings",
					"unitLong": "servings"
				},
				"metric": {
					"amount": 4.0,
					"unitShort": "servings",
					"unitLong": "servings"
				}
			}
		},
		{
			"id": 1042027,
			"aisle": null,
			"image": "seasoning.png",
			"consistency": "SOLID",
			"name": "cholula seasoning powder",
			"nameClean": "seasoning",
			"original": "Cholula Seasoning Powder",
			"originalName": "Cholula Seasoning Powder",
			"amount": 4.0,
			"unit": "servings",
			"meta": [],
			"measures": {
				"us": {
					"amount": 4.0,
					"unitShort": "servings",
					"unitLong": "servings"
				},
				"metric": {
					"amount": 4.0,
					"unitShort": "servings",
					"unitLong": "servings"
				}
			}
		},
		{
			"id": 9150,
			"aisle": "Produce",
			"image": "lemon.png",
			"consistency": "SOLID",
			"name": "limes",
			"nameClean": "lemon",
			"original": "2 Limes (or lemons), sliced into wedges",
			"originalName": "Limes (or lemons), sliced into wedges",
			"amount": 2.0,
			"unit": "",
			"meta": [
				"sliced into wedges",
				"(or lemons)"
			],
			"measures": {
				"us": {
					"amount": 2.0,
					"unitShort": "",
					"unitLong": ""
				},
				"metric": {
					"amount": 2.0,
					"unitShort": "",
					"unitLong": ""
				}
			}
		},
		{
			"id": 11979,
			"aisle": "Canned and Jarred",
			"image": "jalapeno-pepper.png",
			"consistency": "SOLID",
			"name": "jalapeno peppers",
			"nameClean": "jalapeno pepper",
			"original": "4 Jalapeno Peppers (optional)",
			"originalName": "Jalapeno Peppers (optional)",
			"amount": 4.0,
			"unit": "",
			"meta": [],
			"measures": {
				"us": {
					"amount": 4.0,
					"unitShort": "",
					"unitLong": ""
				},
				"metric": {
					"amount": 4.0,
					"unitShort": "",
					"unitLong": ""
				}
			}
		}
	],
	"id": 654857,
	"title": "Pasta On The Border",
	"readyInMinutes": 45,
	"servings": 4,
	"sourceUrl": "https://www.foodista.com/recipe/25DLQT8W/pasta-on-the-border",
	"image": "https://spoonacular.com/recipeImages/654857-556x370.jpg",
	"imageType": "jpg",
	"summary": "Need a <b>dairy free main course</b>? Pastan On The Border could be an outstanding recipe to try. One portion of this dish contains about <b>22g of protein</b>, <b>20g of fat</b>, and a total of <b>461 calories</b>. This recipe serves 4. For <b>$2.98 per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. A mixture of mexican herb seasoning, chipotlé enchilada sauce, evoo, and a handful of other ingredients are all it takes to make this recipe so flavorful. 1 person has tried and liked this recipe. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 70%</b>, which is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/south-of-the-border-chicken-pasta-skillet-281789\">South-of-the-Border Chicken & Pasta Skillet</a>, <a href=\"https://spoonacular.com/recipes/border-guacamole-101868\">Border Guacamole</a>, and <a href=\"https://spoonacular.com/recipes/border-guacamole-21289\">Border Guacamole</a>.",
	"cuisines": [],
	"dishTypes": [
		"side dish",
		"lunch",
		"main course",
		"main dish",
		"dinner"
	],
	"diets": [
		"dairy free"
	],
	"occasions": [],
	"winePairing": {
		"pairedWines": [],
		"pairingText": "No one wine will suit every pasta dish. Pasta in a tomato-based sauce will usually work well with a medium-bodied red, such as a montepulciano or chianti. Pasta with seafood or pesto will fare better with a light-bodied white, such as a pinot grigio. Cheese-heavy pasta can pair well with red or white - you might try a sangiovese wine for hard cheeses and a chardonnay for soft cheeses. We may be able to make a better recommendation if you ask again with a specific pasta dish.",
		"productMatches": []
	},
	"instructions": "Marinate strips of flank steak in a drizzle of EVOO, 2 smashed garlic cloves, juice of 1 lime (or lemon), 4 tbs. chopped cilantro and a dash of the seasonings for an hour or two.\nIf desired, brush jalapenos with a little oil and roast in 400F preheated oven for 30-40 minutes, turning over once halfway through.\nIn a sauce pan, heat the enchilada sauce until boiling then add the beans. Stir for another couple of minutes and turn off heat.\nIn a medium-heated skillet, add a little EVOO and saut the beef strips along with the minced garlic and the julienned onion and bell pepper(s).\nStack the tortillas on top of each other and roll as tight as you can without tearing it. Now, using a very sharp knife, thinly slice the roll from one end to the other creating fettuccine-like strands. Loosen strands and coat with EVOO and a dash of the seasonings.\nSpread tortilla strands out on individual serving platters, top each with enchilada/bean mixture, salsa and beef/veggie mixture. Garnish with remaining chopped cilantro, a lime (or lemon) wedge and a roasted jalapeno pepper.\nAnother optional item you can add is shredded cheese. Before garnishing, top with shredded cheese and pop the plate in the microwave for a minute or until cheese has fully melted.",
	"analyzedInstructions": [
		{
			"name": "",
			"steps": [
				{
					"number": 1,
					"step": "Marinate strips of flank steak in a drizzle of EVOO, 2 smashed garlic cloves, juice of 1 lime (or lemon), 4 tbs. chopped cilantro and a dash of the seasonings for an hour or two.",
					"ingredients": [
						{
							"id": 10211215,
							"name": "whole garlic cloves",
							"localizedName": "whole garlic cloves",
							"image": "garlic.jpg"
						},
						{
							"id": 23657,
							"name": "flank steak",
							"localizedName": "flank steak",
							"image": "flank-steak.jpg"
						},
						{
							"id": 1042027,
							"name": "seasoning",
							"localizedName": "seasoning",
							"image": "seasoning.png"
						},
						{
							"id": 11165,
							"name": "cilantro",
							"localizedName": "cilantro",
							"image": "cilantro.png"
						},
						{
							"id": 1019016,
							"name": "juice",
							"localizedName": "juice",
							"image": "apple-juice.jpg"
						},
						{
							"id": 9150,
							"name": "lemon",
							"localizedName": "lemon",
							"image": "lemon.png"
						},
						{
							"id": 1034053,
							"name": "extra virgin olive oil",
							"localizedName": "extra virgin olive oil",
							"image": "olive-oil.jpg"
						},
						{
							"id": 9159,
							"name": "lime",
							"localizedName": "lime",
							"image": "lime.jpg"
						}
					],
					"equipment": []
				},
				{
					"number": 2,
					"step": "If desired, brush jalapenos with a little oil and roast in 400F preheated oven for 30-40 minutes, turning over once halfway through.",
					"ingredients": [
						{
							"id": 11979,
							"name": "jalapeno pepper",
							"localizedName": "jalapeno pepper",
							"image": "jalapeno-pepper.png"
						},
						{
							"id": 4582,
							"name": "cooking oil",
							"localizedName": "cooking oil",
							"image": "vegetable-oil.jpg"
						}
					],
					"equipment": [
						{
							"id": 404784,
							"name": "oven",
							"localizedName": "oven",
							"image": "oven.jpg",
							"temperature": {
								"number": 400.0,
								"unit": "Fahrenheit"
							}
						}
					],
					"length": {
						"number": 40,
						"unit": "minutes"
					}
				},
				{
					"number": 3,
					"step": "In a sauce pan, heat the enchilada sauce until boiling then add the beans. Stir for another couple of minutes and turn off heat.",
					"ingredients": [
						{
							"id": 6599,
							"name": "enchilada sauce",
							"localizedName": "enchilada sauce",
							"image": "harissa.jpg"
						},
						{
							"id": 0,
							"name": "beans",
							"localizedName": "beans",
							"image": "kidney-beans.jpg"
						},
						{
							"id": 0,
							"name": "sauce",
							"localizedName": "sauce",
							"image": ""
						}
					],
					"equipment": [
						{
							"id": 404669,
							"name": "sauce pan",
							"localizedName": "sauce pan",
							"image": "sauce-pan.jpg"
						}
					]
				},
				{
					"number": 4,
					"step": "In a medium-heated skillet, add a little EVOO and saut the beef strips along with the minced garlic and the julienned onion and bell pepper(s).",
					"ingredients": [
						{
							"id": 0,
							"name": "minced garlic",
							"localizedName": "minced garlic",
							"image": "garlic.png"
						},
						{
							"id": 10211821,
							"name": "bell pepper",
							"localizedName": "bell pepper",
							"image": "bell-pepper-orange.png"
						},
						{
							"id": 11282,
							"name": "onion",
							"localizedName": "onion",
							"image": "brown-onion.png"
						},
						{
							"id": 23572,
							"name": "beef",
							"localizedName": "beef",
							"image": "beef-cubes-raw.png"
						},
						{
							"id": 1034053,
							"name": "extra virgin olive oil",
							"localizedName": "extra virgin olive oil",
							"image": "olive-oil.jpg"
						}
					],
					"equipment": [
						{
							"id": 404645,
							"name": "frying pan",
							"localizedName": "frying pan",
							"image": "pan.png"
						}
					]
				},
				{
					"number": 5,
					"step": "Stack the tortillas on top of each other and roll as tight as you can without tearing it. Now, using a very sharp knife, thinly slice the roll from one end to the other creating fettuccine-like strands. Loosen strands and coat with EVOO and a dash of the seasonings.",
					"ingredients": [
						{
							"id": 10020409,
							"name": "fettuccine",
							"localizedName": "fettuccine",
							"image": "egg-noodles.jpg"
						},
						{
							"id": 1042027,
							"name": "seasoning",
							"localizedName": "seasoning",
							"image": "seasoning.png"
						},
						{
							"id": 18364,
							"name": "tortilla",
							"localizedName": "tortilla",
							"image": "flour-tortilla.jpg"
						},
						{
							"id": 1034053,
							"name": "extra virgin olive oil",
							"localizedName": "extra virgin olive oil",
							"image": "olive-oil.jpg"
						},
						{
							"id": 0,
							"name": "roll",
							"localizedName": "roll",
							"image": "dinner-yeast-rolls.jpg"
						}
					],
					"equipment": [
						{
							"id": 404745,
							"name": "knife",
							"localizedName": "knife",
							"image": "chefs-knife.jpg"
						}
					]
				},
				{
					"number": 6,
					"step": "Spread tortilla strands out on individual serving platters, top each with enchilada/bean mixture, salsa and beef/veggie mixture.",
					"ingredients": [
						{
							"id": 18364,
							"name": "tortilla",
							"localizedName": "tortilla",
							"image": "flour-tortilla.jpg"
						},
						{
							"id": 0,
							"name": "spread",
							"localizedName": "spread",
							"image": ""
						},
						{
							"id": 6164,
							"name": "salsa",
							"localizedName": "salsa",
							"image": "salsa.png"
						},
						{
							"id": 23572,
							"name": "beef",
							"localizedName": "beef",
							"image": "beef-cubes-raw.png"
						}
					],
					"equipment": []
				},
				{
					"number": 7,
					"step": "Garnish with remaining chopped cilantro, a lime (or lemon) wedge and a roasted jalapeno pepper.",
					"ingredients": [
						{
							"id": 11979,
							"name": "jalapeno pepper",
							"localizedName": "jalapeno pepper",
							"image": "jalapeno-pepper.png"
						},
						{
							"id": 11165,
							"name": "cilantro",
							"localizedName": "cilantro",
							"image": "cilantro.png"
						},
						{
							"id": 9150,
							"name": "lemon",
							"localizedName": "lemon",
							"image": "lemon.png"
						},
						{
							"id": 9159,
							"name": "lime",
							"localizedName": "lime",
							"image": "lime.jpg"
						}
					],
					"equipment": []
				},
				{
					"number": 8,
					"step": "Another optional item you can add is shredded cheese. Before garnishing, top with shredded cheese and pop the plate in the microwave for a minute or until cheese has fully melted.",
					"ingredients": [
						{
							"id": 1011026,
							"name": "shredded cheese",
							"localizedName": "shredded cheese",
							"image": "cheddar-cheese.png"
						},
						{
							"id": 1041009,
							"name": "cheese",
							"localizedName": "cheese",
							"image": "cheddar-cheese.png"
						},
						{
							"id": 0,
							"name": "pop",
							"localizedName": "soft drink",
							"image": ""
						}
					],
					"equipment": [
						{
							"id": 404762,
							"name": "microwave",
							"localizedName": "microwave",
							"image": "microwave.jpg"
						}
					]
				}
			]
		}
	],
	"originalId": null,
	"spoonacularScore": 78.99817657470703,
	"spoonacularSourceUrl": "https://spoonacular.com/pasta-on-the-border-654857"
};


fetchRecipeInformation(recipeID);
