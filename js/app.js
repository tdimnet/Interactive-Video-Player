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
var playButton = document.createElement("img");
var pauseButton = document.createElement("img");
var progressBar = document.createElement("input");
var volumeOffIcon = document.createElement("img");
var volumeOnIcon = document.createElement("img");
var fullscreenIcon = document.createElement("img");


// Removing the elements to the page
  //Remove the default controls of the html video element
videoElement.removeAttribute('controls');


// Adding classes and styles to the elements
  //Set the class for each icon
    //Think to add the progressBar attributes here
playButton.setAttribute('class', 'button playButton');
pauseButton.setAttribute('class', 'button pauseButton');
volumeOffIcon.setAttribute('class', 'button volumeOffIcon');
volumeOnIcon.setAttribute('class', 'button volumeOnIcon');
fullscreenIcon.setAttribute('class', 'button fullscreenIcon');
  //Set the image for each icon
playButton.setAttribute('src', 'icons/play-icon.png');
pauseButton.setAttribute('src', 'icons/pause-icon.png');
volumeOffIcon.setAttribute('src', 'icons/volume-off-icon.png');
volumeOnIcon.setAttribute('src', 'icons/volume-on-icon.png');
fullscreenIcon.setAttribute('src', 'icons/fullscreen-icon.png');




// Adding the elements to the page
    //videoControlsContainer.append(progressBar); => add it once it's ok!
videoControlsContainer.append(playButton);
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



//When the play button is clicked
playButton.onclick = playTheVideo;

//When the pause button is clicked
pauseButton.onclick = stopTheVideo;

//When the volume ON button is clicked
volumeOnIcon.onclick = muteTheVideo;

//When the volume OFF button is clicked
volumeOffIcon.onclick = unmuteTheVideo;






//  The project

// When the mouse is outside the video element
  // A following bar should be present

// When the mouse is inside the video element
  // These elements should be present:
    //A play button
    //A pause button
    //A progress bar
    //A fullscreen button
    //A volume control button

// When the video is played
  // The following bar should move
  // The text should be highlighted

// When the video is stopped
  // The following bar should stop moving
  // The text should stop moving
