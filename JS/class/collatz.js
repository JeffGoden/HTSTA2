function DoTheCheck()
{
    let myNumber= document.getElementById("startNumber").value;
    myNumber= Number(myNumber);
    for(let i=0;myNumber>1;i++)
    {
        if (myNumber%2==0)
        {
            //my number is even
            myNumber= myNumber/2;
        }
        else
        {
            //my number is ODD
            myNumber= (myNumber*3)+1;
        }
        let newTrTag= "<tr><td>"+myNumber+"</tr></td>"
        document.getElementById("myresult").innerHTML += newTrTag
    }
}