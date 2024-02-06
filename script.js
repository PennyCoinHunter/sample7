function openDoors() {
  var doorLeft = document.getElementById('doorLeft');
  var doorRight = document.getElementById('doorRight');
  var openButton = document.getElementById('openButton');
  var backgroundVideo = document.getElementById('backgroundVideo');

  // Open the doors by rotating them
  doorLeft.style.transform = 'rotateY(-90deg)';
  doorRight.style.transform = 'rotateY(90deg)';

  // Hide the button
  openButton.style.display = 'none';

  // Display and play the background video
  backgroundVideo.style.display = 'block';
  backgroundVideo.play();
}

function toggleMusic() {
  var backgroundVideo = document.getElementById('backgroundVideo');

  if (backgroundVideo.paused) {
      backgroundVideo.play();
  } else {
      backgroundVideo.pause();
  }
}
