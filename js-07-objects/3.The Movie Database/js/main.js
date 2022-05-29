/*  3.The Movie Database
Create an object to store the following information about a movie: title (a
string), duration (a number), and stars (an array of strings).
● Create an Array of objects that can hold several movies.
● Create a function to print out the movie information like so: "Puff the Magic
Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
● Test the function by printing one movie.
● Use the function to print all the movies in the Array.

DA FINIRE


*/ 
/*Functions */
function readArray(someArray){
     for (let i = 0; i < someArray.length; i++) {
          console.log(someArray[i]);
     }
}

//parameter: film 
function infoFilm(film){
     return console.log(film.title + " last for " + film.duration + ". Stars: " + film.star);
}

//read all film with al
function readFilmInfo(someArray){
     for (let i = 0; i < someArray.length; i++) {
          infoFilm(someArray[i]);
     }
}



/*array of object*/ 
let films = [
     {
          "title": "Star wars",
          "duration": 126,
          "star" : ["Mark Hammil","Alek Guinness"]
     },
     {
          "title": "Harry Potter",
          "duration": 138,
          "star" : ["Daniel Radcliffe","Rupert Grint"]
     },
     {
          "title": "Fast and furius",
          "duration": 87.6,
          "star" : ["Vin Diesel","Paul Wal"]
     },
]


/*Arrays*/

/*Test Array*/
readFilmInfo(films);
console.log("one film: ");
infoFilm(films[0]);