/*  5.Credit Card Validations
Write a function called “validateCreditCard” that checks credit card
numbers according to the following rules:
○ Number must be 16 digits, all of them must be numbers
○ You must have at least two different digits represented (all of the digits cannot be the same)
○ The final digit must be even
○ The sum of all the digits must be greater than 16

○ Il numero deve essere di 16 cifre e tutte devono essere numeri.
○ Devono essere rappresentate almeno due cifre diverse (le cifre non possono essere tutte uguali).
○ La cifra finale deve essere pari
○ La somma di tutte le cifre deve essere maggiore di 16

20

//somma di tutte le cifre = 16


/*Functions */
function validateCreditCard(numberCredit){
     code = transform(numberCredit);
     if((checkLenght(code) && isNumeric(code) && checkDifferentDigits(code) && checkLastDigit(code) && CheckSumDigits(code)) == true ){
          console.log(numberCredit + "  Valid credit card");
          return true;
     }else{
          console.log(numberCredit + "  Invalid credit card");
          return false; 
     }
     

}

function transform (numberLine){
     let newStr;
     newStr = numberLine.replace('-', '');
     let newStr2 = newStr.replace('-', '');
     let newStr3 = newStr2.replace('-', '');
     return newStr3;
}





//check 16 with string lenght
function checkLenght(code){
     if (code.length == 16){
          return true;
     }else{
          return false;
     }
} 
//areDigits
function isNumeric(code) {
     return /^-?\d+$/.test(code);
 }

//su Digits
function CheckSumDigits(code){
     let total=0;
     for (i=0; i<code.length; i++) {
          total +=  Number(code.charAt(i)); //use Number() for convert string to number
     }
     if (total > 16 ){
          return true;
     }else {
          return false;
     }

}

// The final digit must be even
function checkLastDigit(code){
     let check = Number(code.charAt(15)) % 2;
     if(check == 0){
          return true;
     }else{
          return false;
     }
}

//○ You must have at least two different digits represented (all of the digits cannot be the same)
function checkDifferentDigits(code){
     let count = 0;
     for (i=0; i<code.length; i++) {
          if(Number(code.charAt(i)) !== Number(code.charAt(i+1))){
               count++;
          }
     }
     if(count<2){
          return false;
     }else {
          return true;
     }


}



/*Number credit*/

let numberCard8 = "1111-2222-3333-4444";
let creditCard1 = "1111-2222-3333-4444";
let creditCard2 = "4929-2214-1053-4148";
let creditCard8 = "4929-2214-1053-4145";
let creditCard3 = "2222-2222-2222-2222";
let creditCard4 = "3333-3333-3333-3334";
let creditCard5 = "2212-3125-6222-";
let creditCard6 = "3333-3333-3333-5553334";
let creditCard7 = "444a-3333-eeee-ssss222"


//print result on console.log
console.log (validateCreditCard(numberCard8));
console.log (validateCreditCard(creditCard1));
console.log (validateCreditCard(creditCard2));
console.log (validateCreditCard(creditCard3));
console.log (validateCreditCard(creditCard4));
console.log (validateCreditCard(creditCard5));
console.log (validateCreditCard(creditCard6));
console.log (validateCreditCard(creditCard7));
console.log (validateCreditCard(creditCard8));


/*
The function returns an object saying that the credit card is valid, or what the error is:
{ valid: true, number: '9999-9999-8888-0000' }
{ valid: false, number: 'a923-3211-9c01-1112', error: 'wrong_length' }
For each card check, print out the result to the log in this format:
================================
= number : a923-3211-9c01-1112 =
= valid : false =
= error : wrong length =
================================
*/ 


