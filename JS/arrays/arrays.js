/*var city1= "Luxembourg"
var city2= "Esch"
var city3= "Wiltz"
var city4= "Schengen"

alert("Welcome to " + city1)

var cities =["Luxembourg","Esch","Wiltz","Schengen"]
alert(cities[2])*/
var cities =["Luxembourg","Esch","Wiltz","Schengen","London"]
function arrays()
{ 
    for(let i=0;i<cities.length;i++)
    {
        document.getElementById("ListOfCities").innerHTML += "<option>"+ cities[i]+"</option>";
    }
    for(let i=cities.length-1;i>=0;i--)
    {
        document.getElementById("ListOfCitiesback").innerHTML += "<option>"+ cities[i] + "</option>";
    }
}


/*var MapOfMines = [
    [0,0,1,0],
    [0,0,0,0],
    [0,0,0,0]
]*/