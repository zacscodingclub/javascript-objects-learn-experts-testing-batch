var playlist = {
  'Gary Clark': "Things Are Changin'"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  // return Object.assign(playlist, {artistName: songTitle});
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
}

function newPlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, { artistName: songTitle} )
}