/*  2.Fortune calculator
● Write a function named tellFortune that:
○ Takes 4 arguments: number of children, partner's name, geographic location, job title.
○ outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N
kids."
● Call that function 3 times with 3 different values for the arguments
*/ 

/*creating function*/
function  tellFortune(nChildren,namePartner,location,job){
    console.log("You will be a " + job + " in " + location + " , and married to " + namePartner + " with " +  nChildren +" kinds.");
    return "";
}

/*assigning values*/
let a = 10;
let b = "York City";
let c = "Samanta";
let d = "Junior developer";



/*Show results*/
console.log(tellFortune(a,c,b,d));











