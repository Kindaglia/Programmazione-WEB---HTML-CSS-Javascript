/*  2.The Reading List
Create an array of objects, where each object describes a book and has
properties for the title (a string), author (a string), and alreadyRead (a
boolean indicating if you read it yet).
● Iterate through the array of books. For each book, log the book title and
book author like so: "The Hobbit by J.R.R. Tolkien".
● Now use an if/else statement to change the output depending on whether
you read it yet or not. If you read it, log a string like 'You already read "The
Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read
"The Lord of the Rings" by J.R.R. Tolkien.'



*/ 
/*Functions */
function check(someArrayO){
     if(someArrayO.alreadyRead==true){
          return console.log("You already read" + someArrayO.title + " by " + someArrayO.author); 
     }else{
          return console.log("You still need to read" + someArrayO.title + " by " + someArrayO.author);
     }
}
function readArray(someArray){
     for (let i = 0; i < someArray.length; i++) {
          console.log(someArray[i]);
          check(objectseArray[i]);
     }
}

/*object*/ 
let book1 = {
     title : "Harry Potter",
     author : "J. K. Rowling",
     alreadyRead : true,
};

let book2 = {
     title: "Star Wars",
     author: "George Lucas",
     ingredients: false,
};
let book3 = {
     title: "winnie the pooh ",
     author: "A. A. Milne",
     alreadyRead: false,
};
/*Arrays*/
let objectseArray = [book1, book2, book3];
/*Test Array*/
readArray(objectseArray);