
/* -scroll- */
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('fondo-nav');
  } else {
    nav.classList.remove('fondo-nav');
  }
});

   /* -video- */


document.addEventListener('DOMContentLoaded', (event) => {
  const video = document.querySelector('video');
  const playButton = document.getElementById('play');
  const pauseButton = document.getElementById('pause');
  const volumeControl = document.getElementById('volumen');
  const showTime = document.getElementById('showTime');
  const durationTime = document.createElement('p');
  durationTime.id = 'durationTime';
  document.querySelector('.barra').appendChild(durationTime);

  playButton.addEventListener('click', () => {
      video.play();
  });

  pauseButton.addEventListener('click', () => {
      video.pause();
  });

  volumeControl.addEventListener('input', (event) => {
      video.volume = event.target.value;
  });

  video.addEventListener('timeupdate', () => {
      const minutes = Math.floor(video.currentTime / 60);
      const seconds = Math.floor(video.currentTime % 60);
      showTime.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  });

  video.addEventListener('loadedmetadata', () => {
      const durationMinutes = Math.floor(video.duration / 60);
      const durationSeconds = Math.floor(video.duration % 60);
      durationTime.textContent = `Duración: ${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
  });
});

