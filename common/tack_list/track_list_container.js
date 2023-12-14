import {renderTrackInContainer} from "./track.js";
export function renderTrackListContainer(playlistForRenderData){
    let trackListContainer = document.createElement('div');
    trackListContainer.classList.add('tracklist_container')
    for (let i = 0; i < playlistForRenderData.playListTracks.length; i++) {
        const element = playlistForRenderData.playListTracks[i];
        trackListContainer.append(renderTrackInContainer(element))
    };
    return trackListContainer
}