// variable for retrieving the stored array of recipes
const savedRecipes = localStorage.getItem("savedRecipes");

let recipesArray;

// Styling classes for recipe cards
const recipeDivStyles = ['relative', 'p-2', 'rounded-xl', 'text-white', 'bg-lime-500'];
const recipeNameStyles = ['font-semibold', 'ml-4', 'w-2/3', 'pb-2', 'text-xl'];
const recipeButtonStyles = ['absolute', 'top-2', 'right-3', 'md:rounded-full', 'md:bg-gray-900/10'];
const recipeDeleteStyles = ['md:hidden', 'font-semibold', 'text-xl'];
const recipeSVGStyles = ['hidden', 'md:block', 'w-6', 'h-6'];

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
  const deleteText = document.createElement('span');
  deleteText.textContent = "Delete";
  const deleteSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  // Styling the svg element
  deleteSVG.setAttribute('viewBox', '0 0 24 24');
  deleteSVG.setAttribute('fill', 'currentColor');
  // Creating svg path
  const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  svgPath.setAttribute('d', 'M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z');
  svgPath.setAttribute('clip-rule', 'evenodd');
  
  deleteSVG.append(svgPath);
  // appending span and svg to delete buttons
  deleteButton.append(deleteText);
  deleteButton.append(deleteSVG);

  // Append the recipe elements to the container
  div.append(title);
  // Append the link instead of just the image
  div.append(deleteButton);
  div.append(link); 

  //Event listener to run the removeRecipe funtion at the declared index
  deleteButton.addEventListener("click", function() {
    removeRecipe(index);
    // animate button ping
    this.classList.add('click-ping');
  });

  savedRecipesDiv.append(div);
    
  // apply classes to the recipe elements
  for (style of recipeDivStyles) {div.classList.add(style)}
  for (style of recipeNameStyles) {title.classList.add(style)}
  for (style of recipeButtonStyles) {deleteButton.classList.add(style)}
  for (style of recipeDeleteStyles) {deleteText.classList.add(style)}
  for (style of recipeSVGStyles) {deleteSVG.classList.add(style)}
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