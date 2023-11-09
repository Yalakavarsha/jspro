var a = 999;
var remainder=0;
var sum=0;
while(a>0)
{
    remainder = a%10;
    sum = sum+remainder;
    a=parseInt(a/10);
}
console.log(sum)
