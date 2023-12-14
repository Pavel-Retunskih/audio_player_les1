export function renderTrackInContainer(playlistTrackItemData) {
    let trackContainer = document.createElement('div');
    document.body.append(trackContainer);
    trackContainer.classList.add('track')

    let trackCoverImg = document.createElement('img');
    trackCoverImg.src = playlistTrackItemData.coverTrackImg;

    let trackTitle = document.createElement('p');
    trackTitle.innerHTML = playlistTrackItemData.isHotTrack ? `<span class = "hot">${playlistTrackItemData.artistName} -</span> ${playlistTrackItemData.trackName}` : `<span>${playlistTrackItemData.artistName} -</span> ${playlistTrackItemData.trackName}`

    let playerAudio = document.createElement('audio');
    playerAudio.src = playlistTrackItemData.audioUrl;
    playerAudio.controls = true;
    playerAudio.setAttribute('preload', 'metadata');

    let trackTitleAndAudioContainer = document.createElement('div');
    trackTitleAndAudioContainer.classList.add('track_title_container');
    trackTitleAndAudioContainer.append(trackTitle, playerAudio);

    trackContainer.append(trackCoverImg, trackTitleAndAudioContainer);
    return trackContainer;
}