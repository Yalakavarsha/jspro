var a;{
function mult(...a){
    sum=0;
    for(let i of a){
        sum = sum+i;
        sum = sum*i;
        sum=sum-i;
    }
    return sum;
}
console.log(mult(2,3,4,5,2))
}
