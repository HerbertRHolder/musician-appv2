(function () {
  "use strict";

  let cont = document.getElementById("player")
  let prev = document.getElementById("prev");
  let play = document.getElementById("play");
  let playCopy = play;
  let next = document.getElementById("next");
  let pause = document.createElement("div");
  let pauseIcon = document.createElement("ion-icon");
  pauseIcon.setAttribute("name","pause-sharp");
  pause.classList.add("player-btn");
  pause.classList.add("player-play");
  pause.style.display = "flex";
  pause.style.justifyContent = "center";
  pause.style.paddingRight = ".5rem";
  pause.appendChild(pauseIcon);
  pause.addEventListener("click",pauseSong);
  const audio = document.getElementById("audio");
  let songTitle = document.getElementById("song-title");
  const songs = [
    "Chasin-Daisys",
    "Drifter",
    "Closer",
    "Railways",
    "A-Tribe-Called-Tenz",
    "Makai",
    "Sofa-Stories"
  ];

  let songIndex = 2;
  let songArry = 6;

  loadSong(songs[songIndex]);

  function loadSong(song) {
    audio.src = `music/${song}.mp3`;
    song = song.replaceAll('-', ' ');
    songTitle.innerText = song;
  }
  function pauseSong() {
    pause.remove();
    cont.insertBefore(playCopy,next);
    audio.pause();
    let blfy = document.getElementById("bfly");
    blfy.classList.remove("bfly0");
  }
  function playSong() {
    play.remove();
    let blfy = document.getElementById("bfly");
    blfy.classList.add("bfly0");
    cont.insertBefore(pause,next);
    audio.play();
  
    audio.addEventListener("play",()=>{
      audio.addEventListener("timeupdate",()=> {
        audio.addEventListener("ended", nextSong);
      })
        
     })

  }
  function prevSong() {
    songIndex--;

    if(songIndex < 0)
    {
        songIndex = songs.length - 1;
    }
    
    loadSong(songs[songIndex])

    playSong()
  }
  function nextSong() {
    songIndex++;

    if(songIndex > songArry)
    {
        songIndex = 0;
    }
    
    loadSong(songs[songIndex])

    playSong()
  }


play.addEventListener("click", playSong);
prev.addEventListener("click", prevSong);
next.addEventListener("click", nextSong);




})();
