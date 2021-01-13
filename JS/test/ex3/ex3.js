function ComputeDelta()
{
    let AString=document.getElementById("A").value;
    let BString=document.getElementById("B").value;
    let CString=document.getElementById("C").value;

    let A= Number(AString);
    let B= Number(BString);
    let C= Number(CString);
    let delta= B*B-4*A*C;

    console.log(delta);
    if(delta<0)
    {
        let newDivString="<div class='redCell'></div>";
        document.getElementById("output").innerHTML= newDivString;
    }
    else{
        let newDivString="<div class='blueCell'></div>";
        document.getElementById("output").innerHTML= newDivString;
    }
}