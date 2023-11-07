var s1 = window.prompt("Enter the first value : ")
var s2 = window.prompt("Enter the second value : ")
var s3 = window.prompt("Enter the third value : ")
if (s1 == s2 && s2 == s3) {
    document.getElementById("tri").innerHTML = ("Equilateral triangle");
}
else if (s1 == s2 || s2 == s3 || s1 == s3) {
    document.getElementById("tri").innerHTML = ("Isosceles triangle");
}
else {
    document.getElementById("tri").innerHTML = ("Scalene triangle");
}