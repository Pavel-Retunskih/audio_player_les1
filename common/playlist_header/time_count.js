export function playlistTimeCountInfo(playlistTrackItemData) {
    let playlistTimeCountInfo = document.createElement('p');
    playlistTimeCountInfo.textContent = `${playlistTrackItemData.allTracksInfo.trackCount} tracks, ${(playlistTrackItemData.allTracksInfo.timeCountinSeconds/60).toFixed(2).split('.')[0]}m 
    ${(playlistTrackItemData.allTracksInfo.timeCountinSeconds/60).toFixed(2).split('.')[1]}s`;    
    return playlistTimeCountInfo;
}
let durationOfAllTracks = [];

console.log(durationOfAllTracks);
export function getTime(track){
    if(durationOfAllTracks.length<4){
        durationOfAllTracks.push(track.target.duration)
    }
    return durationOfAllTracks
    // time+=t;
    // console.log(time);
    // durationOfAllTracks.push(track.target.duration)
    
}

