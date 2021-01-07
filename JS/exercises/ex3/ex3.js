for(let i=200;i<=300;i++)
{
    if(i%5==0)
    {
        if(i%8!==0)
        {
            console.log(i+ "<<Non 8ter, here is a fiver:")
        }
        else
        {
            console.log(i+ "here is a fiver:")
        }
    }
    else
    {
        console.log(i)
    }
}