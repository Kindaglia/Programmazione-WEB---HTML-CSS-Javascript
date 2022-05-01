/*  5.Money
● Create a function called Money
● It should take a single argument, an amount, and return '<amount> dollars'
● Add a smiley at the end if the amount is 1 million. Deal with edge cases
● For example:
Money(1): 10 dollar
Money(10): 10 dollars
Money(1000000): 1000000 dollars ;)
*/ 

/*creating function*/
function  money(amount){
    if(amount == 1){
        return (amount + " dollar");
    }else{
        return (amount + " dollars");
    }
}

/*assigning values*/
let wallet = 10;
let wallet2 = 1;
/*Show results*/
console.log(money(wallet));
console.log(money(wallet2));











