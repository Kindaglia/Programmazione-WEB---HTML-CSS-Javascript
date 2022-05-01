/*  7.FixStart
● Create a function called fixStart.
● It should take a single argument, a string, and return a version where all
occurrences of its first character have been replaced with '*', except for the
first character itself.
● You can assume that the string is at least one character long.
● For example:
fixStart('babble'): 'ba**le'
*/ 

/*creating function*/
function fixStart(s) {
  var c = s.charAt(0);
  return c + s.slice(1).replace(new RegExp(c, 'g'), '*');
}

/*assigning values*/
let word1 = "babble";
/*Show results*/
console.log(fixStart(word1));
