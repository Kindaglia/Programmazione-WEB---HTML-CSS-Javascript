/*  1.The Recipe Card
● Create an object to hold information on your favorite recipe. It should have
properties for title (a string), servings (a number), and ingredients (an
array of strings).
● On separate lines (one console.log statement for each), log the recipe
information


*/ 
/*Functions */

/*object*/ 
let biscuitsRecipe = {
     title: "biscuits",
     servings: 5,
     ingredients: ["butter", "sugar","egg","vanilla","flour"],
};

let bakingRecipes = {
     title: "Banana bread",
     servings: 8,
     ingredients: ["butter", "sugar","egg","vanilla","self-raising flour","bananas"," icing sugar"],
};

/*Arrays*/
let recipeArray = [biscuitsRecipe, bakingRecipes];
/*Test Array*/
console.log(recipeArray[0]);
console.log(recipeArray[1]);

/*Show results*/
console.log("\n title of recipe: " + biscuitsRecipe.title);
console.log("servings: " + biscuitsRecipe.servings);
console.log("ingredients: " + biscuitsRecipe.ingredients);

console.log("\n");

console.log("title of recipe: " + bakingRecipes.title);
console.log("servings: " + bakingRecipes.servings);
console.log("ingredients: " + bakingRecipes.ingredients);

