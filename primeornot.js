var n=70;
var i;
var count=0;
for( i =2;i<=n;i++)
{
    if(n%i==0)
    {
        count++;
    }
}
if(count==1)
{
    console.log("it is prime");
}else{
    console.log("it is not prime");
}