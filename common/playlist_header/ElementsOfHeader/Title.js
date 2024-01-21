import {playlistTimeCountInfo} from "../time_count.js";
import {renderAllArtistsInPlaylist} from "../list_of_artists.js";
export function Title (playlistTrackItemData) {
    let playlistTitleInfoContainer = document.createElement('div');
    playlistTitleInfoContainer.classList.add('playlist_title_info_container');

    let playlistTitle = document.createElement('h2');
    playlistTitle.textContent = playlistTrackItemData.title;
    playlistTitleInfoContainer.append(playlistTitle);
    playlistTitleInfoContainer.append(playlistTimeCountInfo(playlistTrackItemData));

    playlistTitleInfoContainer.append(renderAllArtistsInPlaylist(playlistTrackItemData));
    return playlistTitleInfoContainer;
}
