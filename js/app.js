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
//Think to add the input range for the duration of the video
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
