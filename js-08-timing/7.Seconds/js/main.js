/* 
Write two functions that based on the current date and time output the number
of seconds:
● getSecondsToday() returns the number of seconds from the beginning of
today.
● getSecondsToTomorrow() returns the number of seconds till tomorrow.
*/


// this example takes 2 seconds to run
let currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

let test  = currentDate.getSeconds();


function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 - d.getSeconds();
  }
  
  alert( getSecondsToday() );