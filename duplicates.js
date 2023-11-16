var arr = [12,22,22,32,32,10,9]
for(i=0;i<arr.length;i++)
{
    for(j=i+1;j<arr.length;j++)
    {
        if(arr[i]==arr[j])
            {
console.log(`${arr[j]}`);
            }
    }
}