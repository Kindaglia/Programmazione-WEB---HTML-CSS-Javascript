
/*  3.Palindrome
*/ 


function printReverse(s){
    return s.split("").reverse().join("");
}

function  isPalindrome(string){
    if(string == printReverse(string)){
        console.log(string ,":  Is palindrome ");
    }
    else
        console.log(string,":  is not palindrome");
}

/*assigning values*/
let palindrome1 = "madam";
let notpalindorme = "Happy";

/*Show results*/
isPalindrome(palindrome1);
isPalindrome(notpalindorme);



