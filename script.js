var w=document.querySelector(".wbutton");
var l=document.querySelector(".lbutton");
var k=document.querySelector(".kbutton");
var j=document.querySelector(".jbutton");
var d=document.querySelector(".dbutton");
var s=document.querySelector(".sbutton");
var a=document.querySelector(".abutton");
var audio = document.querySelector("#snare");

w.onclick = function() {wfunction()};
function wfunction()
{
	audio.setAttribute("src", "snare.wav");
	audio.play();
	console.log("Played Snare");
}

a.onclick = function() {afunction()};
function afunction()
{
	audio.setAttribute("src", "bass.wav");
	audio.play();
	console.log("Played drum");
}

s.onclick = function() {sfunction()};
function sfunction()
{
	audio.setAttribute("src", "toms.wav");
	audio.play();
	console.log("Played toms");
}

d.onclick = function() {dfunction()};
function dfunction()
{
	audio.setAttribute("src", "hat.wav");
	audio.play();
	console.log("Played hat");
}

j.onclick = function() {jfunction()};
function jfunction()
{
	audio.setAttribute("src", "crash.wav");
	audio.play();
	console.log("Played crash");
}

k.onclick = function() {kfunction()};
function kfunction()
{
	audio.setAttribute("src", "ride.wav");
	audio.play();
	console.log("Played ride");
}

l.onclick = function() {lfunction()};
function lfunction()
{
	audio.setAttribute("src", "beat.wav");
	audio.play();
	console.log("Played beat");
}

function clicked()
{
	alert('clicked!');
}

document.onkeydown = function (e){
	var keycode = e.keyCode;
	if(keycode == 87)
	{
		wfunction();
	}
	else if(keycode == 65)
	{
		afunction();
	}
	else if(keycode == 83)
	{
		sfunction();
	}
	else if(keycode == 68)
	{
		dfunction();
	}
	else if(keycode == 74)
	{
		jfunction();
	}
	else if(keycode == 75)
	{
		kfunction();
	}
	else if(keycode == 76)
	{
		lfunction();
	}
};