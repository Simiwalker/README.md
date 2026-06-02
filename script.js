const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

const songs = ['hey', 'summer', 'ukulele'];

let songIndex = 2;

// Load song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

// Initial load
loadSong(songs[songIndex]);

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn
    .querySelector('i.fas')
    .classList.replace('fa-play', 'fa-pause');

  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn
    .querySelector('i.fas')
    .classList.replace('fa-pause', 'fa-play');

  audio.pause();
}

// Toggle play/pause
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Previous song
function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;

  loadSong(songs[songIndex]);
  playSong();
}

// Next song
function nextSong() {
  songIndex = (songIndex + 1) % songs.length;

  loadSong(songs[songIndex]);
  playSong();
}

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;

  const progressPercent = (currentTime / duration) * 100;

  progress.style.width = `${progressPercent}%`;
}

audio.addEventListener('timeupdate', updateProgress);

// Seek song position
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;

  audio.currentTime = (clickX / width) * audio.duration;
}

progressContainer.addEventListener('click', setProgress);

// Auto play next song
audio.addEventListener('ended', nextSong);