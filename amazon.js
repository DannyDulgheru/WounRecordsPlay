var refreshInterval = setInterval(function(){
    location.reload();
  }, 18000000); 

  setTimeout(function(){
    var playButton = document.querySelector('[aria-label="Play"]'); 
    if(playButton) {
      playButton.click();
    }
  }, 5000); 

  setTimeout(function(){
    var playButton = document.querySelector('[aria-label="Play"]'); 
    if(playButton) {
      playButton.click();
    }
  }, 15000); 
  
  setInterval(function () {
    document.querySelector('[aria-label="Next"]').click();
},40000);