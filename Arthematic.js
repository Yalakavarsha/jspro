var a,b,c,d
a = 10
b = 20
c = 30
d = 40
e = (a>b) && (a>c) && (a>d) ? a: (b>c)&&(b>d) ? b: (c>d) ? c:d

document.getElementById("GREATEST").innerHTML += e