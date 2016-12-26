//
  //  The Video Player Project
    //  This file works only if JS is activated
    //  Otherwise the video can still be read with pure HTML
  // Have fun!
//



// Creating the variables
var videoContainer = document.getElementById('video-container');
var videoElement = videoContainer.querySelector('video');
var videoControlsContainer = videoContainer.querySelector('div');
var progressBar = document.getElementById("progress-bar");
var playButton = document.createElement("img");
var pauseButton = document.createElement("img");
var timerElement = document.createElement("span");
var volumeOffIcon = document.createElement("img");
var volumeOnIcon = document.createElement("img");
var fullscreenIcon = document.createElement("img");


// Removing the elements to the page
  //Remove the default controls of the html video element
videoElement.removeAttribute('controls');


// Adding classes and styles to the elements
  //Set the class for each icon
playButton.setAttribute('class', 'button playButton');
pauseButton.setAttribute('class', 'button pauseButton');
timerElement.setAttribute('class', 'button timerElement');
volumeOffIcon.setAttribute('class', 'button volumeOffIcon');
volumeOnIcon.setAttribute('class', 'button volumeOnIcon');
fullscreenIcon.setAttribute('class', 'button fullscreenIcon');

  //Set the image for each icon
playButton.setAttribute('src', 'icons/play-icon.png');
pauseButton.setAttribute('src', 'icons/pause-icon.png');
timerElement.innerText = '00:00 - 01:00';
volumeOffIcon.setAttribute('src', 'icons/volume-off-icon.png');
volumeOnIcon.setAttribute('src', 'icons/volume-on-icon.png');
fullscreenIcon.setAttribute('src', 'icons/fullscreen-icon.png');



// Adding the elements to the page
progressBar.style.display = "initial";


videoControlsContainer.append(playButton);
videoControlsContainer.append(timerElement);
videoControlsContainer.append(volumeOnIcon);
videoControlsContainer.append(fullscreenIcon);




// Creating the functions
var playTheVideo = function() {
  console.log("And the video is now playing!");
  //Start the video
  videoElement.play();
  //Remove the play button
  videoControlsContainer.removeChild(playButton);
  //Add the pause button
  videoControlsContainer.append(pauseButton);
}

var stopTheVideo = function() {
  console.log("And the video is now stop!");
  //Pause the video
  videoElement.pause();
  //Remove the pause button
  videoControlsContainer.removeChild(pauseButton);
  //Add the play button
  videoControlsContainer.append(playButton);
}

var muteTheVideo = function() {
  console.log("And the sound of the video is now gone!");
  //Mute the video
  videoElement.muted = true;
  //Remove the volume ON button
  videoControlsContainer.removeChild(volumeOnIcon);
  //Add the volume OFF button
  videoControlsContainer.append(volumeOffIcon);
}

var unmuteTheVideo = function() {
  console.log("And the sound of the video is now back!");
  //Unmute the video
  videoElement.muted = false;
  //Remove the volume OFF button
  videoControlsContainer.removeChild(volumeOffIcon);
  //Add the volume ON button
  videoControlsContainer.append(volumeOnIcon);
}

var toggleFullscreenMode = function() {
  console.log("The fullscreen button has been clicked!");
  //According to the browser used, allow the user to go on fullscreen mode
  if (videoElement.requestFullscreen) {
    videoElement.requestFullscreen();
  } else if (videoElement.mozRequestFullScreen) {
    //For Mozilla
    videoElement.mozRequestFullScreen();
    //For Chrome
  } else if (videoElement.webkitRequestFullscreen) {
    videoElement.webkitRequestFullscreen();
  }
}



//Creating the event listeners
  //Controls the current duration of the video
videoElement.addEventListener('timeupdate', function() {
  //Set the duration variable
  var videoDuration = "01:00";
  //Round the result
  var currentTimer = Math.ceil(videoElement.currentTime);
  if (currentTimer < 10) {
    timerElement.innerText = "00:0" + currentTimer + " - " + videoDuration;
  } else {
    timerElement.innerText = "00:" + currentTimer + " - " + videoDuration;
  }
});

  //Controls the progression of the range input
videoElement.addEventListener('timeupdate', function() {
  var percentage = Math.floor((100 / videoElement.duration) *
   videoElement.currentTime);
   progressBar.value = percentage;
   progressBar.innerHTML = percentage + '% played';
  // //Set the duration variable
  // var videoDuration = videoElement.seekable.end(0);
  // //Set the current timer
  // var currentTimer = Math.ceil(videoElement.currentTime);
  // //Create a % variable
  // var rangeTimer = (currentTimer / videoDuration)*100;
  // //Update the range of the progress input
  // progressBar.value = rangeTimer;
});



//When the play button is clicked
playButton.onclick = playTheVideo;

//When the pause button is clicked
pauseButton.onclick = stopTheVideo;

//When the volume ON button is clicked
volumeOnIcon.onclick = muteTheVideo;

//When the volume OFF button is clicked
volumeOffIcon.onclick = unmuteTheVideo;

//When the fullscreen button is clicked
fullscreenIcon.onclick = toggleFullscreenMode;
