import {renderHeaderPlaylist} from "./playlist_header/header.js";
import {renderTrackListContainer} from "./tack_list/track_list_container.js";

export function renderSinglePlaylistContainer(playlistForRenderData){
    let singlePlaylistContainer = document.createElement('div')
    document.body.append(singlePlaylistContainer);
    singlePlaylistContainer.classList.add('playlist_container');

    singlePlaylistContainer.append(renderHeaderPlaylist(playlistForRenderData),renderTrackListContainer(playlistForRenderData));
    return singlePlaylistContainer;
}


