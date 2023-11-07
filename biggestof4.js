var p = window.prompt("Enter p:")
var q = window.prompt("Enter q:")
var r = window.prompt("Enter r:")
var s = window.prompt("Enter s:")
if(p>q)
{
if(p>r)
{
if(p>s)
document.getElementById("biggestof4").innerHTML += (`${p} is greater`);
else
document.getElementById("biggestof4").innerHTML += (`${q} is greater`);
}
else{
    if(r>s)
    document.getElementById("biggestof4").innerHTML += (`${r} is greater`);
    else
    document.getElementById("biggestof4").innerHTML +=(`${s} is greater`); 
}
}
else{
    if(q>r)
    {
    if(q>s)
    document.getElementById("biggestof4").innerHTML += (`${q} is greater`);
    else 
    document.getElementById("biggestof4").innerHTML += (`${s} is greater`);
    }
    else{
        if(r>s)
        document.getElementById("biggestof4").innerHTML += (`${r} is greater`);
    document.getElementById("biggestof4").innerHTML += (`${s} is greater`);
    }
}
