var year = parseInt(prompt("Enter a year:"));
var month = parseInt(prompt("Enter a month :"));
if (month >= 1 && month <= 12) {
  if (month == 2) {
    if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
      document.getElementById("readyear").innerHTML += (`February ${year} has 29 days (leap year).`);
    } else {
      document.getElementById("readyear").innerHTML += (`February ${year} has 28 days (non-leap year).`);
    }
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    document.getElementById("readyear").innerHTML += (`The month has 30 days.`);
  } else {
    document.getElementById("readyear").innerHTML += (`The month has 31 days.`);
  }
} else {
    document.getElementById("readyear").innerHTML += (`Invalid month input.`);
}

