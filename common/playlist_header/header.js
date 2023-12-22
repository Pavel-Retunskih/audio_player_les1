import {playlistTimeCountInfo} from "./time_count.js";
import {renderAllArtistsInPlaylist} from "./list_of_artists.js";
export function renderHeaderPlaylist(playlistTrackItemData){
    let headerPlaylistContainer = document.createElement('div');
    document.body.append(headerPlaylistContainer);
    headerPlaylistContainer.classList.add('playlist_header');

    let playlistCoverImg = document.createElement('img');
    playlistCoverImg.src = playlistTrackItemData.coverImg;
    playlistCoverImg.setAttribute('alt', 'playlistCoverImg');
    headerPlaylistContainer.append(playlistCoverImg);

    let playlistTitleInfoContainer = document.createElement('div');
    playlistTitleInfoContainer.classList.add('playlist_title_info_container');
    headerPlaylistContainer.append(playlistTitleInfoContainer);

    let playlistTitle = document.createElement('h2');
    playlistTitle.textContent = playlistTrackItemData.title;
    playlistTitleInfoContainer.append(playlistTitle);

    playlistTitleInfoContainer.append(playlistTimeCountInfo(playlistTrackItemData));

    playlistTitleInfoContainer.append(renderAllArtistsInPlaylist(playlistTrackItemData));
    return headerPlaylistContainer;

}



