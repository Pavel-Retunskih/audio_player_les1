import {getAllArtists} from "./get_all_artists.js";
export function renderAllArtistsInPlaylist(playlistTrackItemData) {
    let allArtistsInPlaylist = document.createElement('p');
    allArtistsInPlaylist.innerHTML = playlistTrackItemData.playListTracks.length >= 3 ? `<span>${getAllArtists(playlistTrackItemData).join(', ')}</span> and others` : `<span>${getAllArtists(playlistTrackItemData).join(', ')}</span>`;
    return allArtistsInPlaylist
}


