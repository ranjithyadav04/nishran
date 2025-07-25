function showLoveNote() {
  document.getElementById('loveNote').style.display = 'block';
}

function toggleMusic() {
  const music = document.getElementById('bgMusic');
  const btn = document.querySelector('#musicControl button');
  if (music.paused) {
    music.play();
    btn.textContent = 'Pause Music ⏸';
  } else {
    music.pause();
    btn.textContent = 'Play Music 🎵';
  }
}

