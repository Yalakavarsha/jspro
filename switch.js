var number = Number(window.prompt("Enter a number : "))
switch(number)
{
    case 0: document.getElementById("switch").innerHTML += ("Sunday");
             break;
    case 1: document.getElementById("switch").innerHTML += ("Monday");
             break;
    case 2: document.getElementById("switch").innerHTML += ("Tuesday");
             break;
    case 3: document.getElementById("switch").innerHTML += ("Wednesday");
             break;
    case 4: document.getElementById("switch").innerHTML += ("Thursday");
             break;
    case 5: document.getElementById("switch").innerHTML += ("Friday");
             break;
    case 6 : document.getElementById("switch").innerHTML += ("Saturday");
             break;
    default: document.getElementById("switch").innerHTML += ("Not available");
}