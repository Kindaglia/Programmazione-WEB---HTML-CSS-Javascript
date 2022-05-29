/*  5.Credit Card Validations


/*Array for errors */
errors = [];
/*Functions */
function validateCreditCard(numberCredit) {
     code = transform(numberCredit);
     if ((checkLenght(code, errors) & isNumeric(code, errors) & checkDifferentDigits(code, errors) & checkLastDigit(code, errors) & CheckSumDigits(code, errors)) == true) {
          console.log("================================\n"
               + "= Number  : " + numberCredit + " = \n"
               + "= Valid  : " + true + " = \n"
               + "================================");
          return card = { "valid": true, "number": numberCredit };
     }
     console.log("================================\n"
          + "= Number  : " + numberCredit + " = \n"
          + "= Valid  : " + false + "  = \n"
          + "= Error   :" + errors + "  = \n"
          + "================================");
     return card = { "valid": false, "number": numberCredit, "errror": errors };
}
function transform(numberLine) {
     let newStr;
     newStr = numberLine.replace('-', '');
     let newStr2 = newStr.replace('-', '');
     let newStr3 = newStr2.replace('-', '');
     return newStr3;
}
//check 16 with string lenght
function checkLenght(code, errors) {
     if (code.length == 16) {
          return true;
     }
     errors.push("invalid lenght \n");
     return false;

}
//areDigits
function isNumeric(code, errors) {
     x = /^-?\d+$/.test(code);
     if (x == true) {
          return true;
     } else {
          errors.push("hey are not all numbers \n");
          return false;

     }
}
//su Digits
function CheckSumDigits(code, errors) {
     let total = 0;
     for (i = 0; i < code.length; i++) {
          total += Number(code.charAt(i)); //use Number() for convert string to number
     }
     if (total > 16) {
          return true;
     } else {
          errors.push("The sum is less than 16 \n");
          return false;
     }
}

// The final digit must be even
function checkLastDigit(code, errors) {
     let check = Number(code.charAt(15)) % 2;
     if (check == 0) {
          return true;
     } else {
          errors.push("the last digit is not even \n");
          return false;
     }
}

//○ You must have at least two different digits represented (all of the digits cannot be the same)
function checkDifferentDigits(code, errors) {
     let count = 0;
     for (i = 0; i < code.length; i++) {
          if (Number(code.charAt(i)) !== Number(code.charAt(i + 1))) {
               count++;
          }
     }
     if (count < 2) {
          errors.push("must have at least two different digits represented \n");
          return false;
     } else {
          return true;
     }
}
/*Number credit*/
let numberCard8 = "1111-2222-3333-4444";
let creditCard1 = "1111-2222-3333-5552";
let creditCard2 = "4929-2214-1053-4148";
let creditCard8 = "4929-2214-1053-4145";
let creditCard3 = "2222-2222-2222-2222";
let creditCard4 = "3333-3333-3333-3334";
let creditCard5 = "2212-3125-6222-";
let creditCard6 = "3333-3333-3333-5553334";
let creditCard7 = "444a-3333-eeee-ssss222"
//print result on console.log
console.log(validateCreditCard(numberCard8));
errors = [];
console.log(validateCreditCard(creditCard1));
errors = [];
console.log(validateCreditCard(creditCard2));
errors = [];
console.log(validateCreditCard(creditCard3));
errors = [];
console.log(validateCreditCard(creditCard4));
errors = [];
console.log(validateCreditCard(creditCard5));
errors = [];
console.log(validateCreditCard(creditCard6));
errors = [];
console.log(validateCreditCard(creditCard7));
errors = [];
console.log(validateCreditCard(creditCard8));
errors = []; 

function myFunction() {
     let testsss = ""
      testsss = document.getElementById("containe2").value;
     let jsonBello = JSON.stringify(validateCreditCard(testsss));
     document.getElementById("container").innerHTML = jsonBello;
     errors = []; 
}
function reset(){
     document.getElementById("container").innerHTML = "";
     document.getElementById("containe2").value = " ";

}

var input = document.getElementById("containe2");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
     event.preventDefault();
     myFunction();
     errors = []; 
  }
});
