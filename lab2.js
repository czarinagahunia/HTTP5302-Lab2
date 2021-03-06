//enums
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["February"] = 1] = "February";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["September"] = 8] = "September";
    months[months["October"] = 9] = "October";
    months[months["November"] = 10] = "November";
    months[months["December"] = 11] = "December";
})(months || (months = {}));
var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
console.log("Months enum");
console.log(months);
console.log('January ' + months.January);
console.log('Month 1: ' + months[1]);
//HTML elements
var pTodayDate = document.getElementById("p--today-date");
//Today's date
var today = new Date();
console.log(today);
//today's month
console.log(today.getMonth());
var todayMonth = months[today.getMonth()];
//today's day of week
console.log(today.getDay());
var todayDayofWeek = days[today.getDay()];
//today's date of month
console.log(today.getDate());
//today's year
console.log(today.getFullYear());
//display today's date to page
pTodayDate.innerHTML = "Today is " + todayDayofWeek + ", " + todayMonth + " " + today.getDate() + ", " + today.getFullYear();
