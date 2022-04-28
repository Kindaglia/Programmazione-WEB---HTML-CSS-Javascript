/*  4.Coffee supply calculator
● Write a function named calculateSupply that:
○ takes 2 arguments: age, amount per day.
○ calculates the amount consumed for rest of the life (based on a constant max age).
● outputs the result to the screen like so: "You will need NN cups of coffee to
last you until the ripe old age of X"
● Call that function three times, passing in different values each time

*/ 

/*creating function*/
function  calculateSupply(age,amountDay){
    return amountDay * (100-age); //100 max life
}

/*assigning values*/
let age = 45;
let amountDay = 2;



/*Show results*/
console.log("You will need " + calculateSupply(age,amountDay) + "  cups of coffee to last you until the ripe old age to 100");
 










