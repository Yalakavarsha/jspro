var arr = [100,20,999,89];
var i=0;
var j = i+1;
for(i=0;i<arr.length;i++)
{
    for(j=0;j<arr.length;j++)
    {
        if(arr[i]<arr[j])
        {
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
}
}console.log(arr);