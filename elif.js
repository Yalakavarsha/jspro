//to print if a person is eligible to vote if their gender is male and age is 21 and above or gender is female and age is 18 and above

var age = window.prompt("Enter your age :");
var gender = window.prompt("Enter you gender :");
var age = 21;
if(gender == "male" && age < 21){
    document.getElementById("elif").innerHTML += ("This person is not eligible to vote");
}
else if(gender == "female" && age <18){
    document.getElementById("elif").innerHTML += ("This person is not eligible to vote");
}
else{
    document.getElementById("elif").innerHTML += ("This person is eligible to vote");
}