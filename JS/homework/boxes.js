var currentBoxColor= "redbox";
var number= 1;
function box()
{
    var inputvar= document.getElementById("inputbox").value;
    for(;number<=Number(inputvar);number++)
    {
        if(currentBoxColor== "redbox")
        {
            currentBoxColor="bluebox";
        }
        else
        if(currentBoxColor== "bluebox")
        {
            currentBoxColor="greenbox";
        }
        else
        if(currentBoxColor== "greenbox")
        {
            currentBoxColor="redbox";
        }
        
        let addBox = '<div class="boxes '+ currentBoxColor +'">' + number +' </div>';
        document.getElementById("boxbody").innerHTML+=addBox;
    }
}