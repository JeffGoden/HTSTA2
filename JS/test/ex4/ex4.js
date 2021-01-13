let countofclicks= 0;
function btnClick()
{
    countofclicks++;
    document.getElementById("clickCount").innerHTML= countofclicks
    if(countofclicks==10)
    {
        document.getElementById("myBox").classList.remove("redbox");
        document.getElementById("myBox").classList.add("bluebox");
    }
}