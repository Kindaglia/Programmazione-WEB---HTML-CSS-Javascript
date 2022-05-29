/*  2.The Word Guesser
*/ 

/*function*/ 
function readArray(someArray){
     let string = "";
     for (let i = 0; i < someArray.length; i++) {
           string+=someArray[i];
           if(someArray[i]=="_") string+=" ";
     }
     console.log(string);
     return string;
}

function sendLetter(){
     count++;
     if(count>=time){
          document.getElementById("demo").innerHTML = "HAI PERSO";
     }else{
          let a;
          a= document.getElementById("letter").value;
          let flag=false;
          for (i=0;i<5;i++){
               if(a.toUpperCase()==word[i]){
                    flag=true;
                    underscore[i]=a.toUpperCase();
                    document.getElementById("demo").innerHTML = readArray(underscore);
               }
          }
          if(flag==false){
               const error = document.createTextNode("la lettera " + a.toUpperCase() + " non c'è");
               document.getElementById("error").appendChild(error);
               let br = document.createElement("br");
               document.getElementById("error").appendChild(br);
          }else if( readArray(underscore) == readArray(word) ){
               document.getElementById("demo").innerHTML = "HAI VINTO";
          }
     }
     
}



/*assigning values*/
const  word = ["H", "O", "U", "S", "E" ];
let underscore  = ["_", "_", "_", "_", "_" ];
let count=0; //global
const time=10;



/*Show results*/
readArray(word);
document.getElementById("demo").innerHTML = readArray(underscore);


//TO DO LISTfor win count per ongni volta che viene indovinata quando coindidono uscirà hai vinto