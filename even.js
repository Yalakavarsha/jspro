var a = window.prompt("Enter a number : ")
if(a%2==0)
{
    document.getElementById("even").innerHTML =`${a} is an even number`;
}
else{
    document.getElementById("even").innerHTML =`${a} is an odd number`;
}
