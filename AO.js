var a = 5;
var b = 3;
var c = 4;
var temp;
if(a>b) {
    temp = a;
    a = b;
    b = temp;
}
if(a>c) {
    temp = a;
    a = c;
    c = temp;
}
if(b>c) {
    temp = b;
    b = c;
    c = temp;
}
document.getElementById("ao").innerHTML += (`Ascending order = ${a} ${b} ${c}`);