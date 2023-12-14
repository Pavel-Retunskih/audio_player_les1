export function renderHeaderPlaylist(playlistTrackItemData){
    let headerPlaylistContainer = document.createElement('div');
    document.body.append(headerPlaylistContainer);
    headerPlaylistContainer.classList.add('playlist_header')

    let playlistCoverImg = document.createElement('img');
    playlistCoverImg.src = playlistTrackItemData.coverImg;
    headerPlaylistContainer.append(playlistCoverImg);

    let playlistInfoContainer = document.createElement('div');
    playlistInfoContainer.classList.add('playlist_title_info_container')
    headerPlaylistContainer.append(playlistInfoContainer);

    let playlistTitle = document.createElement('h2');
    playlistTitle.textContent = playlistTrackItemData.title;
    playlistInfoContainer.append(playlistTitle);

    let playlistTimeCountInfo = document.createElement('p');
    playlistTimeCountInfo.textContent = `${playlistTrackItemData.allTracksInfo.trackCount} tracks, ${(playlistTrackItemData.allTracksInfo.timeCountinSeconds/60).toFixed(2).split('.')[0]}m 
    ${(playlistTrackItemData.allTracksInfo.timeCountinSeconds/60).toFixed(2).split('.')[1]}s`;    
    playlistInfoContainer.append(playlistTimeCountInfo);
   
  

    let allArtistsInPlaylist = document.createElement('p');
    allArtistsInPlaylist.innerHTML = playlistTrackItemData.allTracksInfo.allArtists.length >= 3 ? `<span>${playlistTrackItemData.allTracksInfo.allArtists.join(', ')}</span> and others` : `<span>${playlistTrackItemData.allTracksInfo.allArtists.join(', ')}</span>`;
    playlistInfoContainer.append(allArtistsInPlaylist);
    return headerPlaylistContainer;

}