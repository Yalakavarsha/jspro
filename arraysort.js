var arr = [10,20,99,89];
var i=0;
var j = i+1;
for(i=0;i<arr.length;i++)
{
    for(j=0;j<arr.length;j++)
    {
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
}