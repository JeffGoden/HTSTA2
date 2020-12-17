box= 1
input= document.getElementById("inputbox").value
function create()
{
    
    for(;box<input;box++)
    {
        body= document.getElementById("Body").innerHTML='<div class="box">'+box+'</div>'
    }
}