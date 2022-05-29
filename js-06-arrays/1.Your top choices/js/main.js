/*  1.Your top choices
Create an array to hold your top choices (colors, pets, books, whatever).
For each choice, log to the screen a string like: "My #1 choice is blue."
Bonus: Change it to add the correct number suffix, e.g. "My 1st choice, "My 2nd
choice", "My 3rd choice", "My 4th choice", etc.

*/ 

/*function*/ 
function readArray(someArray){
     for (let i = 0; i < someArray.length; i++) {
          console.log( "My #"+i+ " choice is " + (someArray[i]));
     }
     console.log("\n ----------- \n")
}

/*assigning values*/
let color = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
let pets = ['cats', 'dogs', 'birds', 'rabbits', 'horses', 'ferrets', 'fish'];
let books = ['Harry Potte', 'Se questo è un uomo'];
let pokemonGame = ['Omega Ruby', 'Alpha Sapphire', 'Gold', 'Green', 'Crystal', 'Silver'];


/*Show results*/
readArray(color);
readArray(pets);
readArray(books);
readArray(pokemonGame);


function readErrors(array){
     for (let i = 0; i < array.length; i++) {
          console.log((array[i]));
     }
}
