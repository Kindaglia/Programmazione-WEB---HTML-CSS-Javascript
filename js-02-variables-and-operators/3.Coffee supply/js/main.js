/*  3.Coffee supply
● Store your current age into a variable.
● Store a maximum age into a variable.
● Store the amount of coffee you drink per day (as a number).
● Calculate how much coffee you would drink for the rest of your life.
● Output the result to the screen like so: "You will need NN cups of coffee to
last you until the ripe old age of X".

*/ 

/*assigning values*/
let currentAge = 40;
let maximumAge = 101;
let coffeeDrinkAtDay = 3;
/*Processing*/
let restYear = maximumAge - currentAge;
let restCoffe = restYear * 365 * coffeeDrinkAtDay;
/*Show results*/
console.log("You will need " + restCoffe + " last you until the ripe old age of " + maximumAge);













