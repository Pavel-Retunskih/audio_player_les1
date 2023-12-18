import { createAudioElem } from "./create_audio.js";
export function createTrackInContainer(playlistTrackItemData) {
    const trackContainer = document.createElement('div');
    document.body.append(trackContainer);
    trackContainer.classList.add('track')

    const trackCoverImg = document.createElement('img');
    trackCoverImg.src = playlistTrackItemData.coverTrackImg;
    trackCoverImg.setAttribute('alt','trackCoverImg');

    const trackTitle = document.createElement('p');
    trackTitle.innerHTML = playlistTrackItemData.isHotTrack ? `<span class = "hot">${playlistTrackItemData.artistName} -</span> ${playlistTrackItemData.trackName}` : `<span>${playlistTrackItemData.artistName} -</span> ${playlistTrackItemData.trackName}`

    const trackTitleAndAudioContainer = document.createElement('div');
    trackTitleAndAudioContainer.classList.add('track_title_container');
    trackTitleAndAudioContainer.append(trackTitle, createAudioElem(playlistTrackItemData));
    
    trackContainer.append(trackCoverImg, trackTitleAndAudioContainer);
    return trackContainer;
}
export function getTime(container){
    let track = container.querySelector('audio');
}