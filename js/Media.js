function playAudio(url) {
    // Play the audio file at url
    var myMedia = new Media("http://78.155.217.167:8000/radio");
  myMedia.play({ playAudioWhenScreenIsLocked : true });
  myMedia.setVolume('1.0');
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    // Play audio
    my_media.play();
}

