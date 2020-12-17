/*

Create an HTML page with two inputs, one select box and one button.

When the user clicks on the button, we need to display on the HTML page a "matrix" (a grid) of boxes with 
background colors.

We need to display as many rows as specified by the first input box.
The number of columns in the grid is given by the second input box.
The background color of the boxes should be specified by the select -> choose between three different possible 
colors.

To make this easier, I will provide the HTML code.


*/
/* my try
function CreateGrid()
{
    var numberrow= 0
    for(var row=document.getElementById("Rows").value;numberrow<=Number(row);numberrow++)
    {
        
    }
    var numbercol= 0
    for(var col=document.getElementById("Cols").value;numbercol<=Number(col);numbercol++)
    {
        
    }
    if(value=="1")
    {
        document.getElementById("boxColor").value= "<div class='box redBox'></div>"
    }
    if(value=="2")
    {
        document.getElementById("boxColor").value= "<div class='box blueBox'></div>"
    }
    if(value=="3")
    {
        document.getElementById("boxColor").value= "<div class='box yellowBox'></div>"
    }
    document.getElementById("Result").innerHTML

}*/

function CreateGrid()
{
    let numberOfRows= document.getElementById("Rows").value;
    numberOfRows= Number(numberOfRows);

    let numberOfColumms= document.getElementById("Cols").value;
    numberOfColumms= Number(numberOfColumms);

    let boxColor= document.getElementById("boxColor").value;
    boxColor= Number(boxColor);

    let outputResult=""
    
    for(let rowsIndex=0;rowsIndex<numberOfRows;rowsIndex++)
    {
        outputResult+="<div>"
        for(let i=0;i<numberOfColumms;i++)
        {
            let colorofBox=""
            if(boxColor==1)
            {
                colorofBox += "redBox"
            }
            if(boxColor==2)
            {
                colorofBox += "blueBox"
            }
            if(boxColor==3)
            {
                colorofBox += "yellowBox"
            }
            outputResult += "<div class='box"+ colorofBox+"'></div>"
        }   
        outputResult+="</div>"  
    }
    document.getElementById("Result").innerHTML = outputResult
}