const recipeSearchEl = document.getElementById("recipeSearch");
//Find Search button and setup click event
const searchButtonEl = document.getElementById("searchBtn");
searchButtonEl.onclick = searchRecipesClick;

const parameterList = [];
//Go to Recipes page and ping API with user entered value
function searchRecipesClick(event){
  event.preventDefault();
  const query = recipeSearchEl.value.trim();
  if(query === ""){
    console.log("No Value Entered...");
    return;
  }
  var queryParams = "";
  for(let i = 0;i<parameterList.length;i++){
    const chips = document.getElementById(parameterList[i].containerID).getElementsByClassName("chip-toggle");
    console.log(chips);
    for(let index = 0;index<chips.length; index++){
      if(chips[index].getAttribute("data-checked") === "true"){
        if(parameterList[i].paramValue !== "")
          parameterList[i].paramValue = `${parameterList[i].paramValue},${chips[index].textContent}`;
        else
          parameterList[i].paramValue = chips[index].textContent;
      }
    }
    if(parameterList[i].paramValue !== "")
      queryParams = `${queryParams}&${parameterList[i].name}=${parameterList[i].paramValue}`;
  }
  // const mealTypeChips = document.getElementById("chip-meal-container").getElementsByClassName("chip-toggle");
  // var mealTypeParam = "";
  // for(let i = 0;i<mealTypeChips.length;i++){
  //   if(mealTypeChips[i].getAttribute("data-checked") === "true"){
  //     mealTypeParam = mealTypeChips[i].textContent;
  //   }
  // }
  
  // sessionStorage.setItem("search", query);
  // if(mealTypeParam !== "")
  //   mealTypeParam = `&type=${mealTypeParam}`;

  
  document.location.replace(`./search.html?query=${query}${queryParams}`);
}

function setParameterCheck(paramName, containerID){
  parameterList.push({
    "name":paramName,
    "paramValue": "",
    "containerID":containerID
  });
}


// THEN 
//      The page displays a handful of the selected recipe types for me to read, 
//      with a star to save the recipe. 
//      Search bar moves to top of page

//      An array of objects with all recipes. Display info for each array element

// WHEN 
//      I click the star
// THEN 
//      The recipe is saved to local storage. 

//      Recipe elements have button with listener to store recipe in localStorage.
//      add/store recipes in array in localStorage

// WHEN 
//      I click the ‘My Cookbook’ button
// THEN 
//      I am taken to a page with the recipes that I previously 
//      starred with an option to remove the recipe. 

//      My cookbook button takes user to separate html page.
//      New html page displays recipes array from localStorage

// WHEN 
//      I click the remove symbol 
// THEN 
//      it will no longer show that recipe in ‘My Cookbook’.

//      Remove recipe objects from array with button
