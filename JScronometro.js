var sec=0
var min=0
var hours=0
var intervalo
/**/
function doisdigitos(digit){
 if (digit<10) {
 	return('0'+digit)
 }else{
 	return(digit)
 }
}
function start(){
	counter()
	intervalo = setInterval(counter,999) 
}

function pause(){
	clearInterval(intervalo)
}

function stop(){
	clearInterval(intervalo)
	min=0
	sec=0
	hours=0
	document.getElementById('timezero').innerText="00:00:00"
}


function counter(){
	sec=sec+1
	document.getElementById('timezero').innerText=doisdigitos(hours)+":"+doisdigitos(min)+":"+doisdigitos(sec)
	if (sec==60) {
		min=min+1
		sec=0

		if (min==60) {
			hours=hours+1
			min=0
			sec=0
			var alertah = document.getElementById("timezero")
			alertah.style.color="FireBrick"

		}
	}
}