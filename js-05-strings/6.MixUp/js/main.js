/*  6.MixUp
● Create a function called mixUp.
● It should take in two strings, and return the concatenation of the two strings
(separated by a space) slicing out and swapping the first 2 characters of
each.
● You can assume that the strings are at least 2 characters long.
● For example:
mixUp('mix', 'pod'): 'pox mid'
mixUp('dog', 'dinner'): 'dig donner'
*/ 

/*creating function*/
function mixUp(string1, string2) {
    return string2.slice(0, 2) + string1.slice(2) + " " + string1.slice(0, 2) + string2.slice(2);
  }

/*assigning values*/
let word1 = "happy";
let word2 = "day";
/*Show results*/
console.log(mixUp(word1,word2));











