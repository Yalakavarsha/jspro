var i,j
var n=4;
var rows =4;
var concat = ""
for(i=0;i<=rows;i++)
{
    for(j=1;j<=n-i;j++){
        concat += "*" + " ";
    }
    console.log(concat);
    concat  = "";
}