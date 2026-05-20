const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.play();
}

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
}

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add('active');  👈
}

.white.active {
  background-color: #ccc;
}

.black.active {
  background-color: #333;
}

noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  });
