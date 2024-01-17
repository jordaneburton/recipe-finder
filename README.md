# Recipe Finder
Welcome to our recipe finding application! As avid home chefs we know how crazy it can be when using a new recipe. From finding that fun new recipe to putting together a grocery list of needed ingredients to make it.
Our Recipe Finder is here to alleviate that stress and be your One-Stop Shop for all your recipe needs. With our application you will be able to search recipes by searching a food item, and then you can hone your search by adding additional filters such as main course, gluten free, vegetarian, and more! After you search, you can scroll through the available recipes. You always have the chance to make another search if the results are not as specific as you want. Clicking on the star in the top right of each recipe card allows you to save that recipe to your own cookbook )accessible through the "My Cookbook" button in the top left of every page. Once you are inside of your cookbook, you can click on any recipe to open up an interactive list of the recipe's ingredients. You will be able to see the cook time of the recipe, serving size, an image of the dish, and the list of its ingredients. Checking the box by an ingredient will save that ingredient to the local storage to display it later in your grocery list. Clicking the "Grocery List" button in the top left of the page will bring you to your copy and pastable grocery list! All the ingredients you selected will show up for you to copy and paste into a text or email to your roommate before they leave work. 

For this application we used HTML to build out the structure of our pages as well as the elements that persist from page to page. CSS was used in very specific cases to effect sizing, create custom breakpoints, and create custom style classes. Javascript was used to create and style dynamicly updated elements for our pages. Tailwind was used to style the entire project, using its framework to do so. By being sinmplistic in our HTML structure it was extremely easy for three people to code side by side, by using the dynamically created elements both styling and functionality of the pages became more fluid, appealing, and useable. We decided to use CSS as a scalpel in very specific situations to make sure the application looked they way we desired and worked on multiple screen sizes as intended. 




## Table Of Contents
  1. [Dependencies](#deps)
  2. [Usage](#use)
     - [Home Page](#home)
     - [Recipe Search Page](#search)
     - [My Recipe Page](#saved)
     - [Detailed Ingredients Page](#ingredient)
     - [Grocery List Page](#groceries)
  3. [Authors](#authors)
  4. [Helpful Documentation](#docs)
  5. [Acknowledgements](#credits)

## <a name="deps"></a> Dependencies

- An up-to-date browser

## <a name="use"></a> Usage
Here is a walkthrough on what you will see as you navigate our application, as well as the functionality you should expect to see. 

### <a name="home"></a> Home Page
![Home Page](https://github.com/jordaneburton/recipe-finder/assets/153530625/6638d8b2-ddb9-4e25-b516-5019dbafd5f5)

Here you see our homepage. From here there are a few things that you can do! If it is your first time running the page on your machine than you should look towards the search bar. Here you can enter a food item, beef for instance, and then use the chip buttons below to further filter your search. You can select the Main Course meal type to make sure that you only get back dishes that would be cooked as a main course. You can also select dietary restrictions for those that are vegan, vegetarian, popular diets, or dietary restrictions. 

In the top left of the page you will see two buttons for navigation. The "My Recipes" Button will take you to a page that will store any saved recipes, if it is your first time opening the page on your machine this will be empty. Below that is the "Groceries" button which will navigate you to a page that will house any ingredients you need to buy to make your dish. We will talk more on this in the "Grocery List Page" section. 

In the footer you can see three pill buttons giving credit to the three original creators of the application. Clicking these buttons will navigate you to their respective Github profiles so that you can explore more of their work. 

Lastly, clicking "Find" will take you to our next page. The search results page. 

### <a name="search"></a> Recipe Search Page
![Recipe Search](https://github.com/jordaneburton/recipe-finder/assets/153530625/c881bf96-bc81-4437-b029-32cb1c5518de)

Here you see the results a search. On this page you have a few things that you can do! You still have the ability to navigate to your saved recipes and grocery list in the top left corner of the page. You will also still have access to the search function and its filters, this will now be located in the top right of the page. 

The body of the page will be populated with different recipes meeting your search criteria, if your search was too broad make sure to modify it and re search using the bar in top right of your page. 

Each recipe will have a star in the top right, clicking this star will save the recipe as a favorite. Storing the recipe image, ID, and Title in local storage in order to call it back in the "My Recipe" page. 

### <a name="saved"></a> My Recipe Page
![Saved Recipes](https://github.com/jordaneburton/recipe-finder/assets/153530625/27f37dcf-386e-4adb-bc6f-3f679c7b7ca0)

Upon navigating to the "My Recipe" page you will be presented with the recipes that you chose to save.These recipes will be populating using the local storage to grab the ID, Title, and Image of the recipe from your search and then displaying them here.  Each recipe will have an "X" in the top right of the card. Clicking on this will delete from the stored array of objects and remove it from your page entirely. If you wish to add it back, in the current version, you must find it through the search and add it back to your saved recipes. 

Our footer remains the same, enabling you to view the Github profiles of the original creators. 

Lastly, clicking on the image of a recipe will take you to its detailed ingredient list! 

### <a name="ingredient"></a> Detailed Ingredients Page
![Detailed Ingredients](https://github.com/jordaneburton/recipe-finder/assets/153530625/b5a3f5b2-ecb3-4853-a468-ffb1a04a8ecd)


Upon navigating to the Detailed Ingredients Page by clicking on a recipe from "My Recipes" you will see the page above. The page should retain the "My Recipe" and "Groceries" buttons in the top left of your page. As well as the search and filter options in the top right of your page. 

In the main body you will see the name of your dish, the cook time of your dish, and the serving size of your dish. Below that the image of the dish (if availabale). Then a list of the ingredients alongside images of the ingredients. Each ingredient will have a checkbox tied to it, clicking this checkbox will save the ingredient into your local storage to display on your "Groceries" page. Unchecking a box will remove it from local storage as to not display an un-needed ingredient. 

Once you have checked the ingredients you will need to buy in order to make your recipe. Click the "Groceries" button! 

### <a name="groceries"></a> Groceries Page
![grocery list](https://github.com/jordaneburton/recipe-finder/assets/153530625/76308a2b-cd1a-43c3-9d56-a1096d9c3d00)

Upon navigation to the "Groceries Page" you will be presented with a list of the ingredients you saved on the "Detailed Ingredients Page". There should only be one ingredient per line. You will also see a button to copy the list of ingredients. When you click the button it should copy the list of ingredients to your clipboard for you to paste wherever you would like. 


## <a name="authors"></a> Authors

Jordan Burton 
[@jordaneburton](https://github.com/jordaneburton)

Luke Garnsey
[@LukeGarnsey](https://github.com/LukeGarnsey)

Winston Steidley
[@Schtitle24](https://github.com/Schtitle24)

## <a name="docs"></a> Helpful Documentation

 - [Spoonacular API](https://spoonacular.com/food-api/docs)
 - [Tailwind CSS](https://tailwindcss.com/docs/installation/play-cdn)
 - [Heroicons](https://heroicons.com/)
 - [MDN Web Docs CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) 
 - [MDN Web Docs JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
 - [How to Format a README](https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/)

## <a name="credits"></a> Live Application & Repository Link
    -[Repository](https://github.com/jordaneburton/recipe-finder)
    -[Live Application](https://jordaneburton.github.io/recipe-finder/)
    

## <a name="credits"></a> Acknowledgments

We would like to thank our instructors Rachel and Ian for helping us put together this idea and turn it into a reality. As well as the other bootcamp students who suggessted features and acted as a sounding board for our application. 
