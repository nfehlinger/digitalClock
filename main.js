var elHour
  , elMinute
  , elSecond
  , now = new Date()
  , message
  ;


document.addEventListener("DOMContentLoaded", function() {
	
	elHour = document.querySelector("#clock .hour");
	elMinute = document.querySelector("#clock .minute");
	elSecond = document.querySelector("#clock .second");
	message = document.querySelector("#message");
	secondHand = document.querySelector("#seconds");
	minuteHand = document.querySelector("#minutes");
	hourHand = document.querySelector("#hours");

	elSecond.innerText = now.getSeconds();
	elMinute.innerText = now.getMinutes();
	elHour.innerText = now.getHours();
	

	setInterval(function(){
		var seconds = parseInt(elSecond.innerText) + 1;
		if( seconds >= 60){
			var minutes = parseInt(elMinute.innerText) +1;
			seconds = 0;
		}else{
			minutes = parseInt(elMinute.innerText);
		};
		if(minutes >= 60){
			var hours = parseInt(elHour.innerText) +1;
			minutes = 0;
		}else{
			hours = parseInt(elHour.innerText);
		};
		if(hours >=25){
			hours = 1
		};
		if (seconds <= 9){
			elSecond.innerText = "0" + seconds;
		}else{
		elSecond.innerText = seconds;
		};
		if (minutes <= 9){
			elMinute.innerText = "0" + minutes;
		}else{
		elMinute.innerText = minutes;
		};
		if(hours <= 9){
			elHour.innerText = "0" + hours;
		}else{
		elHour.innerText = hours;
		};
		document.body.style.backgroundColor="#"+elHour.innerText*3 + elMinute.innerText + elSecond.innerText;
		if (hours >= 1) {
			message.innerText = "Go To Bed!";
		} if(hours >= 8){
			message.innerText = "Wake Up!";
		} if(hours >= 9){
			message.innerText = "Go To School!";
		} if(hours >= 10){
			message.innerText = "Get To Learning!";
		} if(hours >= 13){
			message.innerText = "Eat Something";
		} if(hours >= 14){
			message.innerText = "Back To Work!";
		} if(hours >= 18){
			message.innerText = "Go Home!";
		} if(hours >=23){
			message.innerText = "Go To Bed!";
		};
	
		secondHand.style.transform = "rotate(" + seconds*6 + "deg)";
		minuteHand.style.transform = "rotate(" + (minutes*60+seconds)*0.1 +"deg)";
		hourHand.style.transform = "rotate(" + (hours*3600+minutes*60+seconds)*0.00833+"deg)";

	},1000);
});