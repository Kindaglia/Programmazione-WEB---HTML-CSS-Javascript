
/*  4.Capital

● Write a JavaScript function called capital which has one parameter, a string,
and which returns that string with the first letter capitalized.
● For example, the call capital("hello world") should return the string "Hello
world".

*/ 


function capital(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}

/*assigning values*/
let oneString = "happy day";

/*Show results*/
console.log(capital(oneString));



