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
let getBirthday = document.getElementById("button--birthday");
let userBirthday = document.getElementById("input--date-picker");
let pBdayMsg = document.getElementById("p--birthday-message");

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


//Part 2 branch lab2
let userBday : string;

//function button
getBirthday.onclick = function() {
    //assign userBday value to input value
    userBday = userBirthday.value;
    console.log(userBday);

    let userBdayDate : Date = new Date(userBday + " GMT-0400");
    console.log(userBdayDate);

    pBdayMsg.innerHTML = constructDateString(userBdayDate);
}

function constructDateString(inputDate : Date) : string {
    //return 'Happy birthday' if the user's birthday is today
    if( (inputDate.getMonth() === today.getMonth() ) && ( inputDate.getDate() === today.getDate()) ) {
        return 'Happy Birthday';
    }

    //return the date of the birthday of the current year
    let currentYearBday : Date = new Date(`${today.getFullyear}-${inputDate.getMonth() + 1}-${inputDate.getDate()}`);

    return `Your birthday is on ${days[currentYearBday.getDay()]}, ${months[currentYearBday.getMonth()]} ${currentYearBday.getDate()}, ${today.getFullYear()}`;

}
