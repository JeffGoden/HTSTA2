function ComputeTemp()
{
    let FahrenheitString= document.getElementById("TempF").value
    let FTemp= Number(FahrenheitString)
    let CTemp= (FTemp-32)/(9/5)
    document.getElementById("ComputeResult").innerHTML= CTemp
    if(CTemp>0)
    {
        alert("Its FREEZING")
    }
    else{
        if(CTemp<=10)
        {
            alert("Its Chilli")
        }
        else{
            if(CTemp<=25){
                alert("its normal")
            }
            else{
               alert("Its Hot")
            }
        }
    }
}