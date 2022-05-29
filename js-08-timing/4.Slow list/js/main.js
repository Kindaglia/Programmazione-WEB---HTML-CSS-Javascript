/* 


*/
//array
let listItems = [
    "mouse","keyboard","monitor","wii","nintendo","mouse","keyboard","monitor","wii","nintendo",
    "mouse","keyboard","monitor","wii","nintendo","mouse","keyboard","monitor","wii","nintendo",
    "mouse","keyboard","monitor","wii","nintendo","mouse","keyboard","monitor","wii","nintendo"
];

let i=-1;

function readArraySlow(){
    i++;
    if(i<30)console.log("item"+(i+1)+ " :  " +listItems[i]);
}
setInterval(readArraySlow,2000);