/*  1.The Timed Calculator  */
// for more info for old function see old exercise.

/*
We will modify ‘The Temperature Converter’ exercise from the lesson about
functions.
● Call celsiusToFahrenheit on temperatures from 0 to 100 so that one
temperature is printed to the console every second.
○ Use setInterval to achieve this goal.
○ Do the same thing using setTimeout.


*/
/*Functions */


function run(celsius){
    setTimeout( function(){
       
        celsius++;
        if(celsius<100) run(celsius);
    }, 100,celsius);
}


//run(0);

let celsius =0;

//funzione usa e getta, se incremento una variabile dentro alla funzione effetivamente
//è richiamta più volte quindi funzione come una specie di "for"
/*
setInterval(
    function(){
        var cTemp = celsius;
        var cToFahr = cTemp * 9 / 5 + 32;
        var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
        celsius++;
        console.log(message);
    },1000);
*/

//test con una funzione esterna

function run(){
    var cTemp = celsius;
        var cToFahr = cTemp * 9 / 5 + 32;
        var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
        celsius++;
        if(celsius<102)console.log(message);
}
setInterval(run,100);