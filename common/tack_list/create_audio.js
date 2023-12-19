export  function createAudioElem(trackItemData){
        const playerAudio = document.createElement('audio');
        playerAudio.src = trackItemData.audioUrl;
        playerAudio.controls = true;
        playerAudio.setAttribute('preload', 'metadata');
        return playerAudio
    }

