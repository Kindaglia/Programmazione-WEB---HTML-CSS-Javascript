/*  1.Variable Scope
1. Recreate the local and global scope examples in your browser
2. Try to call the function “addNumbers” a few more times
3. Write a new .js file that uses both local and global variables in the same
project
4. Make sure that you understand exactly what’s happening at every stage

*/ 

/*local*/
function addNumbers(num1, num2){
    let localResult = num1 + num2;
    console.log("The local result is: " + localResult);
}
addNumbers(5, 7);
console.log(localResult);

/*global*/
let globalResult;
function addNumbers(num1, num2) {
globalResult = num1 + num2;
console.log("The global result is: " + globalResult);
}
addNumbers(5, 7);
console.log(globalResult);

