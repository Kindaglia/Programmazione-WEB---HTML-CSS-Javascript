/*  5.Geometry library

● Create a function called calcCircumfrence:
○ Pass the radius to the function
○ Calculate the circumference based on the radius, and output "The circumference is NN"
● Create a function called calcArea:
○ Pass the radius to the function.
○ Calculate the area based on the radius, and output "The area is NN

*/ 

/*creating function*/
function  calcCircumfrence(radius){
    let circumference = 2 * Math.PI * radius
    console.log("The circumference is " + circumference);
    return  ""
}
function  calcArea(radius){
    let area = Math.PI * Math.pow(radius, 2);
    console.log("The area is " +  (area));
    return  ""
}


/*assigning values*/
let radius = 45;



/*Show results*/
console.log(calcCircumfrence(radius));
console.log(calcArea(radius));
 










