/*  1.The Timed Calculator  */
// for more info for old function see old ex.
/*Functions */
function squareNumber(side){
    let square = Math.pow(side, 2);
    console.log("The result of squaring the number "+ side + " is " + square+".");
    return square;
}
function halfNumber(number){
    half = number/2;
    console.log("Half of " + number +  " is " +  half + ".");
    return half;
}
function percentOf(number,secondNum){
    percent = (secondNum * 100) / number;
    console.log(secondNum +  " is " +  percent + " of " + number );
    return percent.toFixed(2);
}

//areaOfCircle
function areaOfCircle(radius){
    area = radius * radius * Math.PI;
    console.log("The area for a circle with radius" + radius + "  is " + area);
    return area.toFixed(0);
}
//this function use for "wait" 3 second between other function
function mathTest(num){
    let halfRes = (setTimeout(halfNumber, 3000, num));
    let squareRes = (setTimeout (squareNumber,6000,num));
    let areaRes = (setTimeout(areaOfCircle,9000,num));
    let percentRes = (setTimeout(percentOf,12000,areaRes,squareRes)+"%");
    return percentRes;
}

//example number
let number1 = 10;
let number2 = 2 ;

//print result on console.log
document.getElementById("result").innerHTML = mathTest(number1);

