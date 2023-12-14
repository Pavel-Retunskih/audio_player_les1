export function renderAllArtistsInPlaylist(playlistTrackItemData) {
    let allArtistsInPlaylist = document.createElement('p');
    allArtistsInPlaylist.innerHTML = playlistTrackItemData.allTracksInfo.allArtists.length >= 3 ? `<span>${playlistTrackItemData.allTracksInfo.allArtists.join(', ')}</span> and others` : `<span>${playlistTrackItemData.allTracksInfo.allArtists.join(', ')}</span>`;
    return allArtistsInPlaylist
}