/* 
Write a function getWeekDay(date) to show the weekday in short format:
‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
● Write another function that does the same in Italian.
● Add a language parameter to the function that accepts ‘en’ or ‘it’ and
outputs the day in the correct language.

*/
//array
/*
const weekdayEng = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

const d = new Date();
let day = weekdayEng[(d.getDay()-1)];

console.log(day);
*/

const weekdayEng = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
const weekdayIT = ["LU", "MA", "ME", "GIO", "VE", "SA", "DO"];

function getWeekDay(date){
    let dayofWeek = date.getDay();
    let day = weekdayEng[dayofWeek-1];
    console.log(day);

}
function getWeekDayLang(date,lang){
    let day="";
    let dayofWeek = date.getDay();
    if(lang=="eng"){
        day = weekdayEng[dayofWeek-1];
    }else if(lang == "it"){
        day = weekdayIT[dayofWeek-1];
    }
    console.log(day);
}

let day1 = new Date("2022-05-19");
let langEng="eng";
let langIt="it";

getWeekDay(day1);
getWeekDayLang(day1,langIt);
getWeekDayLang(day1,langEng);


