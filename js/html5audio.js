
var progressTimer;

var playButton;
var stopButton;
var activityIndicator;
var textPosition;

function onError(error) 
{
	console.log(error.message);
}

function onConfirmRetry(button) {
	if (button == 1) {
		html5audio.play();
	}
}

function pad2(number) {
	return (number < 10 ? '0' : '') + number
}
	

var readyStateInterval = null;

var html5audio = {
	play: function()
	{
		isPlaying = true;
		myaudioURL = 'http://lactosefm.ru:8000/stream';
		myaudio = new Audio(myaudioURL);
		myaudio.play();
		
	
	
		readyStateInterval = setInterval(function(){
			 if (myaudio.readyState <= 1) {
				 playButton.style.display = 'none';
				 activityIndicator.style.display = 'block';
				 textPosition.innerHTML = 'loading...';
				 test2();
			 }
		},10000);
		myaudio.addEventListener("timeupdate", function() {
			 var s = parseInt(myaudio.currentTime % 60);
			 var m = parseInt((myaudio.currentTime / 60) % 60);
			 var h = parseInt(((myaudio.currentTime / 60) / 60) % 60);
			 if (isPlaying && myaudio.currentTime > 0) {
				 textPosition.innerHTML = pad2(h) + ':' + pad2(m) + ':' + pad2(s);
			 }
		}, false);
		myaudio.addEventListener("error", function() {
			 console.log('myaudio ERROR');
			 test2();
		}, false);
		myaudio.addEventListener("canplay", function() {
			 console.log('myaudio CAN PLAY');
		}, false);
		myaudio.addEventListener("waiting", function() {
			 //console.log('myaudio WAITING');
			 isPlaying = false;
			 playButton.style.display = 'none';
			 stopButton.style.display = 'none';
			 activityIndicator.style.display = 'block';
			test2();
		}, false);
		myaudio.addEventListener("playing", function() {
			 isPlaying = true;
			 playButton.style.display = 'none';
			 activityIndicator.style.display = 'none';
			 stopButton.style.display = 'block';
			 test1();	
		}, false);
		myaudio.addEventListener("ended", function() {
			 console.log('myaudio ENDED');
			html5audio.stop();
			test2();	
			 navigator.notification.alert('Streaming failed. Possibly due to a network error.', null, 'Stream error', 'OK');
			  navigator.notification.confirm(
			 	'Streaming failed. Possibly due to a network error.', // message
			 	onConfirmRetry,	// callback to invoke with index of button pressed
			 	'Stream error',	// title
			 	'Retry,OK'		// buttonLabels
			  );
			 if (window.confirm('Streaming failed. Possibly due to a network error. Retry?')) {
			 	onConfirmRetry();
			 }
		}, false);
	},
	pause: function() {
		isPlaying = false;
		clearInterval(readyStateInterval);
		myaudio.pause();
		test2();			
		stopButton.style.display = 'none';
		activityIndicator.style.display = 'none';
		playButton.style.display = 'block';
		myaudio = null;
	},
	stop: function() {
		isPlaying = false;
		clearInterval(readyStateInterval);
		myaudio.pause();
		test2();	
		stopButton.style.display = 'none';
		activityIndicator.style.display = 'none';
		playButton.style.display = 'block';
		myaudio = null;
		textPosition.innerHTML = '';
	}
};