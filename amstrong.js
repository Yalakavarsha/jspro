var a = 222;
var b=0;
var n=a;
var c;
var count = 0;
while(n!=0)
{
    n=parseInt(n/10);
    count++;
}
n=a;
while(n!=0)
{
    c = n%10;
    b += c**count;
    n = parseInt(n/10);
}
console.log(b)