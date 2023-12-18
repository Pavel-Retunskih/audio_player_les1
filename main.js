import { playList } from "./data/data.js";
import {renderSinglePlaylistContainer} from "./common/render_playlist.js";
renderPlaylist(playList);

//*------------------Full playlist rendering
function renderPlaylist(playlistForRender) {
    let allPlaylistsContainer = document.querySelector('#container')
    for (let i = 0; i < playlistForRender.length; i++) {
        const playlist = playlistForRender[i];
        allPlaylistsContainer.append(renderSinglePlaylistContainer(playlist))
    }
    return allPlaylistsContainer;
}




