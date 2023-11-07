var year = window.prompt("enter the year : "); 
if ((year % 4 == 0 &&  year % 100 !== 0  ) || year % 400 == 0) {
    document.getElementById("leapornot").innerHTML += (`${year}year is a not leap year`);
} else {
    document.getElementById("leapornot").innerHTML += (`${year}year is a leap year`);
}