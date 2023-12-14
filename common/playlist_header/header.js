import {playlistTimeCountInfo} from "./time_count.js";
import {renderAllArtistsInPlaylist} from "./list_of_artists.js";
export function renderHeaderPlaylist(playlistTrackItemData){
    let headerPlaylistContainer = document.createElement('div');
    document.body.append(headerPlaylistContainer);
    headerPlaylistContainer.classList.add('playlist_header')

    let playlistCoverImg = document.createElement('img');
    playlistCoverImg.src = playlistTrackItemData.coverImg;
    headerPlaylistContainer.append(playlistCoverImg);

    let playlistInfoContainer = document.createElement('div');
    playlistInfoContainer.classList.add('playlist_title_info_container')
    headerPlaylistContainer.append(playlistInfoContainer);

    let playlistTitle = document.createElement('h2');
    playlistTitle.textContent = playlistTrackItemData.title;
    playlistInfoContainer.append(playlistTitle);

    playlistInfoContainer.append(playlistTimeCountInfo(playlistTrackItemData));
 
    playlistInfoContainer.append(renderAllArtistsInPlaylist(playlistTrackItemData));
    return headerPlaylistContainer;

}