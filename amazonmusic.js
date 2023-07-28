// Function to play the button with ID "detailHeaderButton1" one time
function playButtonOnce() {
  const button1 = $('#detailHeaderButton1');
  if (button1.length) {
    button1[0].click(); // Use [0] to access the DOM element from jQuery object
  }
}

// Function to play the button with ID "detailHeaderButton2" after 2 seconds
function playButtonSecond() {
  const button2 = $('#detailHeaderButton2');
  if (button2.length) {
    setTimeout(function() {
      button2[0].click(); // Use [0] to access the DOM element from jQuery object
    }, 2000); // Wait for 2 seconds before clicking the second button
  }
}

// Function to click the element with aria-label "Repeat All Songs" after 10 seconds
function clickRepeatAllSongs() {
  const repeatButton = $('[aria-label="Repeat All Songs"]');
  if (repeatButton.length) {
    setTimeout(function() {
      repeatButton.click(); // Use [0] to access the DOM element from jQuery object
    }, 10000); // Wait for 10 seconds before clicking the "Repeat All Songs" button
  }
}

// Function to refresh the page after 20 minutes
function refreshPageAfter20Minutes() {
  setTimeout(function() {
    window.location.reload();
  }, 20 * 60 * 1000); // Refresh the page after 20 minutes (20 minutes * 60 seconds * 1000 milliseconds)
}

// Function to play the button with ID "nextButton" every 40-50 seconds
function playButtonPeriodically() {
  const buttonNext = $('#nextButton');
  if (buttonNext.length) {
    buttonNext[0].click(); // Use [0] to access the DOM element from jQuery object
  }
}

// Start playing buttons after 5 seconds from script injection
setTimeout(function() {
  playButtonOnce();
  playButtonSecond();
  clickRepeatAllSongs();
  setInterval(playButtonPeriodically, 40000); // Play nextButton every 40 seconds
}, 5000);

// Refresh the page after 20 minutes
refreshPageAfter20Minutes();
