export function renderAllArtistsInPlaylist(playlistTrackItemData) {
    let allArtistsInPlaylist = document.createElement('p');
    allArtistsInPlaylist.innerHTML = playlistTrackItemData.playListTracks.length >= 3 ? `<span>${getAllArtists(playlistTrackItemData).join(', ')}</span> and others` : `<span>${getAllArtists(playlistTrackItemData).join(', ')}</span>`;
    return allArtistsInPlaylist
}

function getAllArtists(playlistTrackItemData) {
    const listOfArtists = playlistTrackItemData.playListTracks.map((e)=>e.artistName);
    return listOfArtists;
}
