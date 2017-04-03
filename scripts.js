 function stopPlaying() {
    document.addEventListener('play', function(e){
      let videos = document.getElementsByTagName('video');
        for(let i = 0; i < videos.length; i++) {
          if(videos[i] != e.target){
            videos[i].pause();
          }
        }
    }, true);
  }

  stopPlaying();
