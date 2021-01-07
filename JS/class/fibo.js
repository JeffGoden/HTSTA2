
function DoCompute()
{
    
    let a=0;
    let b=1;
    let c=a+b;

    for(let i=0;a<1000000;i++)
    {
        a=b;
        b=c;
        c=a+b;
        document.getElementById("result").innerHTML+= a+", "+i+"<BR> ";
    }
    
}