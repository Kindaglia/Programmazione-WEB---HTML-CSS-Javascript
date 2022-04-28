/*  3.Dog age calculator
Calculate a puppy’s age in dog years
● Write a function named calculateDogAge that:
○ takes 1 argument: the dog's age in human years
○ calculates the dog's age based on the conversion rate of 1 human year to 7 dog years
○ outputs the result to the screen like so: "Your dog is NN years old in dog years!"
● Call the function three times with different sets of values

*/ 

/*creating function*/
function  calculateDogAge(ageHuman){
    return "Your dog is " + (ageHuman * 7) + " years old in dog years!";
}

/*assigning values*/
let ageDog = 10;



/*Show results*/
console.log(calculateDogAge(ageDog));











