// variable for retrieving the stored array of recipes
const savedRecipes = localStorage.getItem("savedRecipes");

let recipesArray;

// Check if previous saved recipes exists
if (savedRecipes) {
  recipesArray = JSON.parse(savedRecipes);
  //If no than it will generate an empty array
} else {
  recipesArray = [];
}

// Variable for the Div that will be filled with the recipes
const savedRecipesDiv = document.getElementById("saved-recipes");

// For each that will itterate over the elements of our array
recipesArray.forEach(function(savedRecipe, index) {
  // Creating the recipe elements dynamically
  const div = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = savedRecipe.title;

  const image = document.createElement("img");
  image.src = savedRecipe.image;

  const link = document.createElement("a");
  link.href = `recipe-detail.html?id=${savedRecipe.id}`;
  link.appendChild(image);

  // append the link to the Saved-recipes Div
  const parentElement = document.getElementById("saved-recipes"); 
  parentElement.appendChild(link);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  // Append the recipe elements to the container
  div.append(title);
  div.append(link); // Append the link instead of just the image
  div.append(deleteButton);

  //Event listener to run the removeRecipe funtion at the declared index
  deleteButton.addEventListener("click", function() {
    removeRecipe(index);
  });

  savedRecipesDiv.append(div);
});



// Function to remove a recipe from the array and refresh the page
function removeRecipe(index) {
  // Remove the recipe from the array one at a time (could play with more than one at a time, possibly a clear all)
  recipesArray.splice(index, 1);

  // Update the saved recipes in local storage
  localStorage.setItem("savedRecipes", JSON.stringify(recipesArray));

  // Refresh the page
  location.reload();
}