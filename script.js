const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playBtn = document.getElementById('play')
const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

// Check if Playing
let isPlaying = false;

// Current Song
let songIndex = 0;

// Music
const songs = [
  {
    name: "123 Don't Cry  - Pipo",
    displayName: "123 Don't Cry",
    artist: 'Pipo'
  },
  {
    name: 'Bun Phum - Khmeng Khmer',
    displayName: ' Bun Phum',
    artist: 'Khmer Khmer'
  },
  {
    name: 'kado kmean ney',
    displayName: 'kado kmean ney',
    artist: 'Moun Mara'
  },
  {
    name: 'Khos Chum Nann - Tena',
    displayName: 'Khos Chum Nann',
    artist: 'Tena'
  },
  {
    name: 'Kong SaKur - Tena',
    displayName: 'Kong SaKur',
    artist: 'Tena'
  },
  {
    name: 'Kromom 3 - Vuthea ft MC JR',
    displayName: ' Kromom 3',
    artist: 'Vuthea ft MC JR'
  },
  {
    name: 'mean nek thea re nov',
    displayName: 'mean nek thea re nov',
    artist: 'Adda'
  },
  {
    name: 'mek kom pong pleang huey - Hak Record',
    displayName: 'mek kom pong pleang huey',
    artist: 'Hak Record'
  },
  {
    name: 'Min srolanh oun min ban - Chan samai',
    displayName: 'Min srolanh oun min ban',
    artist: 'Chan samai'
  },
  {
    name: 'Nek oun ban trem sromai - Soria Oung',
    displayName: 'Nek oun ban trem sromai',
    artist: 'Soria Oung'
  },
  {
    name: 'Pel velea min sak som- Nam bunnarath',
    displayName: 'Pel velea min sak som',
    artist: 'Nam bunnarath'
  },
  {
    name: 'Songsa leng leng- Nob panharith',
    displayName: 'Songsa leng leng',
    artist: 'Nob panharith'
  },
  {
    name: 'Su Kleat - Vong DaraRotana',
    displayName: 'Su Kleat',
    artist: 'Vong DaraRotana'
  },
];

// Play
const playSong = () => {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
};

// Pause
const pauseSong = () => {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
};

// Update DOM
const loadSong = (song) => {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.png`;
};

// Next Song
const nextSong = () => {
  songIndex++;
  if (songIndex > songs.length - 1) songIndex = 0;
  loadSong(songs[songIndex]);
  playSong();
};

// Prev Song
const prevSong = () => {
  songIndex--;
  if (songIndex < 0) songIndex = songs.length - 1;
  loadSong(songs[songIndex]);
  playSong();
};

const updateProgressBarDisplayTime = (time, element) => {
  const durationMinutes = Math.floor(time / 60);
  let durationSeconds = Math.floor(time % 60);
  durationSeconds = durationSeconds < 10 ? `0${durationSeconds}` : durationSeconds;
  if (durationSeconds) {
    element.textContent = `${durationMinutes}:${durationSeconds}`;
  }
};

const updateProgressBar = (e) => {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = progressPercent + '%';
    // Calculate display for duration
    updateProgressBarDisplayTime(duration, durationEl);
    updateProgressBarDisplayTime(currentTime, currentTimeEl);
  }
};

const setProgressBar = function (e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = music;
  music.currentTime = (clickX / width) * duration;
}

// Event listener
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
music.addEventListener('ended', nextSong);
progressContainer.addEventListener('click', setProgressBar);

// Play or Pause event listener
playBtn.addEventListener('click', () => {
  isPlaying ? pauseSong() : playSong()
});

// On Load
loadSong(songs[songIndex]);