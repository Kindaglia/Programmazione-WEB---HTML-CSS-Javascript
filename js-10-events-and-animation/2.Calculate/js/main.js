document.body.style.backgroundColor = "gray";

//get all input in obj
const allInput = document.getElementsByTagName("input");

//print all result on index
const allP = document.getElementsByTagName("p");
//import funtion from old exc
{
  function squareNumber(side) {
    let square = Math.pow(side, 2);
    allP[0].textContent =
      "The result of squaring the number " + side + " is " + square + ".";
    return square;
  }

  function halfNumber(number) {
    half = number / 2;
    allP[1].textContent = "Half of " + number + " is " + half + ".";
    return half;
  }
  //percent
  function percentOf(number, secondNum) {
    percent = (secondNum * 100) / number;
    allP[2].textContent = secondNum + " is " + percent + " of " + number;
    return percent.toFixed(2);
  }
  //areaOfCircle
  function areaOfCircle(radius) {
    area = radius * radius * Math.PI;
    allP[3].textContent =
      "The area for a circle with radius of " + radius + "  is " + area;
    return area.toFixed(0);
  }
}
//btn for square
const btnSquare = document.getElementById("square-button");
//event Square
btnSquare.addEventListener("click", function (event) {
  number = allInput[0].value;
  squareNumber(number);
});

//btn for half
const btnHalf = document.getElementById("half-button");
//event Half
btnHalf.addEventListener("click", function (event) {
  number = allInput[1].value;
  halfNumber(number);
});

const btnpercentage = document.getElementById("percentOf-button");
//event Half
btnpercentage.addEventListener("click", function (event) {
  number = allInput[3].value;
  number2 = allInput[2].value;
  percentOf(number, number2);
});
const btnareaOfCircle = document.getElementById("areaOfCircle-button");
//event Half
btnareaOfCircle.addEventListener("click", function (event) {
  number = allInput[4].value;
  areaOfCircle(number);
});
