function getDate() 
{
	var dateString = new Date();
	document.getElementById("date").innerHTML=dateString;
}

function blue()
{
	document.getElementById("date").style.color="blue";
}

function brown()
{
	document.getElementById("date").style.color="brown";
}