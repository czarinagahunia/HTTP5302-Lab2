//enums
enum months{
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

enum days{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

console.log("Months enum");
console.log(months);
console.log('January ' + months.January);
console.log('Month 1: ' + months[1]);
//HTML elements
let pTodayDate = document.getElementById("p--today-date");

//Today's date
let today : Date = new Date();
console.log(today);

//today's month
console.log(today.getMonth());
let todayMonth : string = months[today.getMonth()];

//today's day of week
console.log(today.getDay());
let todayDayofWeek : string = days[today.getDay()];

//today's date of month
console.log(today.getDate());

//today's year
console.log(today.getFullYear());

//display today's date to page
pTodayDate.innerHTML = `Today is ${ todayDayofWeek }, ${ todayMonth } ${ today.getDate() }, ${ today.getFullYear() }`;