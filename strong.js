var num = 145;
var temp = 0;
var sum = 0;
var b;
while(num!=0)
{
    rem = num %10;
    b = rem;
    for(var i = 1;i<=rem;i++){
    temp=i*b;
    }
    sum = sum+temp;
    num = parseInt(num/10);
}
if(temp==sum){
    console.log("it is a strong number")
}else{
    console.log("it is not a strong number")
}