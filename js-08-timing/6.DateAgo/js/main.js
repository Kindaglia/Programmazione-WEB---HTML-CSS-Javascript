/* 
● Create a function getDateAgo(date, days) that returns the day of the month
n days ago from the given date.
● For instance, if today is the 20th, then getDateAgo(new Date(), 1) should be
19th and getDateAgo(new Date(), 2) should be 18th.
● The function should work reliably with any valid Date object. Test it.
*/
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

function getDateAgo(date,days){
    date.setDate(date.getDate() - days);
    dateResult=(formatDate(date));
    return dateResult;
}

let date1 = new Date("2022-05-19");
let day = 4;
console.log(getDateAgo(date1,day));

