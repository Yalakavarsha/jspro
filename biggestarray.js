var arr = [10,20,90,33];
var temp;
temp=arr[0];
for(let i of arr)
{
    if(i>temp)
    {
        temp = i
    }
 }console.log(`${temp}is biggest`)
