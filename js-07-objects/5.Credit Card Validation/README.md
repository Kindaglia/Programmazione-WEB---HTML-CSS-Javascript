# 1.The Recipe Card

### Text Exercises:
Write a function called “validateCreditCard” that checks credit card
numbers according to the following rules:
○ Number must be 16 digits, all of them must be numbers
○ You must have at least two different digits represented (all of the digits cannot be the same)
○ The final digit must be even
○ The sum of all the digits must be greater than 16
Continues on next page >>>
20
5.Credit Card Validation
● The following credit card numbers are valid:
○ 9999-9999-8888-0000
○ 6666-6666-6666-1666
● The following credit card numbers are invalid:
○ a923-3211-9c01-1112 invalid characters
○ 4444-4444-4444-4444 only one type of number
○ 1111-1111-1111-1110 sum less than 16
○ 6666-6666-6666-6661 odd final number
● Hint
○ Remove the dash '-' from the input string before checking if the input credit card number is
valid
Continues on next page >>>
21
5.Credit Card Validation
Call the function with several credit card numbers:
validateCreditCard('9999-9999-8888-0000');
validateCreditCard('4444-4444-4444-4444');
validateCreditCard('6666-6666-6666-1666');
The function returns an object saying that the credit card is valid, or what the error is:
{ valid: true, number: '9999-9999-8888-0000' }
{ valid: false, number: 'a923-3211-9c01-1112', error: 'wrong_length' }
For each card check, print out the result to the log in this format:
================================
= number : a923-3211-9c01-1112 =
= valid : false =
= error : wrong length =
================================




# Exercise Executed
I reinterpreted text by making my own variation with the possibility of doing everything through gui



## Author
* Matteo Drago

## Contact
Matteo Drago: matteo.drago@edu.itspiemonte.it 

## Repository GitHub:
https://github.com/Kindaglia/Programmazione-WEB---HTML-CSS-Javascript