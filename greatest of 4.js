var a = 9 
var b = -9
var c = 90
var d = -90
e = (a>b) && (a>c) && (a>d) ? a: (b>c) && (b>d)? b:(c>d)? c:d
document.write("e= "+e)