var i,j
var rows =4;
var concat = ""
for(i=1;i<rows;i++)
{
    for(j=1;j<=i;j++){
        concat += "*" + " ";
    }
    console.log(concat);
    concat  = "";
}