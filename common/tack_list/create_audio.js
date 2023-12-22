import { getTime } from "../playlist_header/time_count.js";
export  function createAudioElem(trackItemData){
        const playerAudio = document.createElement('audio');
        playerAudio.src = trackItemData.audioUrl;
        playerAudio.controls = true;
        playerAudio.setAttribute('preload', 'metadata');
        playerAudio.addEventListener('loadedmetadata',getTime);
        return playerAudio
    }

    