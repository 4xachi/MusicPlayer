const musicsData = [
  {
    musicFile: "1.mp3",
    albumFile: "1.jpeg",
    name: "Happy With You",
    performer: "Arthur Nery",
  },
  {
    musicFile: "staywithme.mp3",
    albumFile: "2.jpeg",
    name: "Stay With Me",
    performer: "Musicbeat",
  },
  {
    musicFile: "3.mp3",
    albumFile: "3.jpeg",
    name: "Paraluman",
    performer: "Adie",
  },
  {
    musicFile: "2.mp3",
    albumFile: "4.jpeg",
    name: "Take All The Love",
    performer: "Arthur Nery",
  },
  {
    musicFile: "5.mp3",
    albumFile: "5.jpeg",
    name: "Eyes Blue",
    performer: "Sista Prod",
  },
  {
    musicFile: "6.mp3",
    albumFile: "6.jpeg",
    name: "Death Bed",
    performer: "Powfu",
  },
  {
    musicFile: "7.mp3",
    albumFile: "7.jpeg",
    name: "Life Puzzle",
    performer: "Arthur",
  },
  {
    musicFile: "8.mp3",
    albumFile: "8.jpeg",
    name: "Empty Space",
    performer: "James Arthur",
  },
  {
    musicFile: "9.mp3",
    albumFile: "9.jpeg",
    name: "Photograph",
    performer: "Ed Sheeran",
  },
  {
    musicFile: "10.mp3",
    albumFile: "10.jpeg",
    name: "Galway Girl",
    performer: "Ed Sheeran",
  },
  {
    musicFile: "11.mp3",
    albumFile: "11.jpeg",
    name: "Thunder",
    performer: "Boys Like Girls",
  },
  {
    musicFile: "12.mp3",
    albumFile: "12.jpeg",
    name: "Home",
    performer: "Aurora Vibes",
  },
  {
    musicFile: "13.mp3",
    albumFile: "13.jpeg",
    name: "Hold On",
    performer: "Chord Overstreet",
  },
  {
    musicFile: "14.mp3",
    albumFile: "14.jpeg",
    name: "On My Way",
    performer: "ILLiJah",
  },
  {
    musicFile: "15.mp3",
    albumFile: "15.jpeg",
    name: "Something Just Like This",
    performer: "The Chainsmokers",
  },
  {
    musicFile: "16.mp3",
    albumFile: "16.jpeg",
    name: "7 Years",
    performer: "Lukas Graham",
  },
];

function createMusicWrapper(music, curr) {
  const queueMusic = document.createElement('div');
  const innerContent = `
    <div class="queue__music-album">
      <img src="./assets/images/${music.albumFile}" alt="">
    </div>
    <div class="queue__music-details">
      <h2 class="music-details__name">${music.name}</h2>
      <p class="music-details__performer">${music.performer}</p>
    </div>
    <div class="queue__music-like">
      <i class='bx bxs-heart' id="like-icon"></i>
    </div>
    <div class="queue__music-play">
      <i class='bx bx-play' data-music="${curr}"></i>
    </div>
  `;

  queueMusic.setAttribute('class', 'queue__music');
  queueMusic.innerHTML = innerContent;

  return queueMusic
}

export { musicsData, createMusicWrapper };