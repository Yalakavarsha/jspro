var year = window.prompt("Enter a year : ")
if(year%4==0){
    if(year%100==0 && year%400 ==0){
      document.getElementById("leapyear").innerHTML += (`${year}year is a leap year`);
    }
    else{
        document.getElementById("leapyear").innerHTML += (`${year}year is not a leap year`);}
    }
else{
    document.getElementById("leapyear").innerHTML += (`${year}year is not a leap year`);}
