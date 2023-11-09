var num = 44444444444444;
var count = 0;
while(num!=0)
{
    num=parseInt(num/10);
    count++;
}
//document.getElementById("noofdigits").innerHTML += (`${count}`);
console.log(count);