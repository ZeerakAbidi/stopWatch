var min = 0;
var sec = 0;
var mil = 0;
var minute = document.getElementById('min');
var second = document.getElementById('sec');
var millisecond = document.getElementById('mil');
var lapLi = document.getElementById("lap");
var button = document.getElementById('startBut');
var interval;

function timer(){
	mil++;
	millisecond.innerHTML= mil;
	
	if(mil >= 100){
		sec++;
		mil = 0;
		second.innerHTML= sec;
	}
	else if(sec >= 60){
		min++;
		sec = 0;
		minute.innerHTML= min;
	}
}

function start(){
	interval = setInterval(timer, 10);
	button.setAttribute('disabled','disabled');
}

function pause(){
	clearInterval(interval);
	button.removeAttribute('disabled','disabled');
}

function reset(){
	pause();
	min = 0;
	sec = 0;
	mil = 0;
	minute.innerHTML = min;
	second.innerHTML = sec
	millisecond.innerHTML = mil;
	button.removeAttribute('disabled','disabled');
}

function lap(){
	var li = document.createElement('li');
	lapLi.appendChild(li);
	li.innerHTML= min + " : " + sec + " : " + mil ;
}

function clearLap(){
	lapLi.innerHTML="";
}