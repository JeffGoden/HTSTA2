var boxColor= "redBox";

function changeBox()
{
    if(boxColor =="redBox")
    {
        boxColor= "blueBox";
    }
    else
    {
        boxColor="redBox"; 
    }

    myNewDiv = "<div class='boxSize " + boxColor + "'></div>";
    document.getElementById("resultingDiv").innerHTML= myNewDiv;
}