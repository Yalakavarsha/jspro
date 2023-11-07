var s1 = 1;
var s2 = 2;
var s3 = 4;
if(s1==s2 && s2==s3)
{
    document.getElementById("triangles").innerHTML += ("Equilateral traingle");
}
else if((s1 == s2 && s2 != s3) || (s2 == s3 && s3 != s1) || (s1 == s3 && s3!=s2)){
    document.getElementById("triangles").innerHTML += ("Isosceles Triangle");
}
else{
    document.getElementById("triangles").innerHTML += ("Scalen Triangle");
}
