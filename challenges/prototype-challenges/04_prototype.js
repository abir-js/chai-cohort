// You need to implement the Playlist constructor function and its prototype method

function Playlist() {
    // Initialize songs property
    this.songs = []
}

Playlist.prototype.addSong = function(song) {
  this.songs.push(song)
}

