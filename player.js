//*-----------------Data of playlists
let playList = {
    title:'Hip-Hop Hits',
    coverImg:'./img/01.png',
    allTracksInfo:{
        trackCount: 4,
        timeCountinSeconds: 728,
        allArtists:[
            'Eminem',
            '50cent',
            'Lioyd Banks'
        ]
    },
    playListTracks:[
        {artistName:'Eminem',
         trackName:'Rap God',
         coverTrackImg:'./img/eminem.png',
         audioUrl: './track/Eminem_-_Rap_God.mp3',
         isHotTrack: true
        },
        {artistName:'50cent',
         trackName:'In da Club',
         coverTrackImg:'./img/50cent.png',
         audioUrl: './track/50cent - In da club.mp3',
         isHotTrack: false
        },
        {artistName:'DMX',
         trackName:'X Gon\' Give It To Ya',
         coverTrackImg:'./img/DMX.png',
         audioUrl: './track/DMX - X Gon\' Give It To Ya.mp3',
         isHotTrack: true
        },
        {artistName:'Eminem feat 50 Cent, Cashis, Lloyd Banks',
         trackName:'You Don\'t Know',
         coverTrackImg:'./img/Rectangle 106.png',
         audioUrl:'./track/eminem-50cent-you-dont-know.mp3',
         isHotTrack: false
        },
        
    ]
}

let playList2 = {
    title:'Rap Hits 1990s',
    coverImg:'./img/Rectangle 101.png',
    allTracksInfo:{
        trackCount: 4,
        timeCountinSeconds: 728,
        allArtists:[
            'Public Enemy',
            'Vanila Ice',
            'MC Hammer'
        ]
    },
    playListTracks:[
        {artistName:'Public Enemy',
         trackName:'Fight the Power',
         coverTrackImg:'./img/Rectangle 106 — 1.png',
         audioUrl: './track/Public Enemy - Fight The Power.mp3',
         isHotTrack: true
        },
        {artistName:'Vanila Ice',
         trackName:'Ice Ice Baby',
         coverTrackImg:'./img/Rectangle 106-2.png',
         audioUrl: './track/Vanila Ice - Ice Baby.mp3',
         isHotTrack: true
        },
        {artistName:'MC Hammer',
         trackName:'You Can\’t Touch This',
         coverTrackImg:'./img/Rectangle 106-3.png',
         audioUrl: './track/Mc Hammer - You Can\'t Touch This.mp3',
         isHotTrack: false
        },
        {artistName:'Brand Nubian',
         trackName:'Brand Nubian',
         coverTrackImg:'./img/Rectangle 106-4.png',
         audioUrl:'./track/Brand Nubian - Brand Nubian.mp3',
         isHotTrack: false
        },
        
    ]
}


//*-----------------DOM Render

renderPlaylist(playList)
renderPlaylist(playList2)

//*------------------Current playlist rendering
function renderPlaylist(playlistForRender) {
    let playlistContainer = document.createElement('div')
    document.body.append(playlistContainer);
    playlistContainer.classList.add('playlist_container');

    let trackListContainer = document.createElement('div');
    trackListContainer.classList.add('tracklist_container')
    trackListContainer.append(renderTrackInList(playlistForRender.playListTracks[0]),
    renderTrackInList(playlistForRender.playListTracks[1]),
    renderTrackInList(playlistForRender.playListTracks[2]),
    renderTrackInList(playlistForRender.playListTracks[3]));

    playlistContainer.append(renderHeaderPlaylist(playlistForRender),trackListContainer)

    let allPlaylistsContainer = document.querySelector('#container')
    allPlaylistsContainer.append(playlistContainer)
    return 
}
//*------------------Header render function
function renderHeaderPlaylist(playlistItem){
    let headerPlaylistContainer = document.createElement('div');
    document.body.append(headerPlaylistContainer);
    headerPlaylistContainer.classList.add('playlist_header')

    let playlistCoverImg = document.createElement('img');
    playlistCoverImg.src = playlistItem.coverImg;
    headerPlaylistContainer.append(playlistCoverImg);

    let playlistInfoContainer = document.createElement('div');
    playlistInfoContainer.classList.add('playlist_title_info_container')
    headerPlaylistContainer.append(playlistInfoContainer);

    let playlistTitle = document.createElement('h2');
    playlistTitle.textContent = playlistItem.title;
    playlistInfoContainer.append(playlistTitle);

    let playlistTimeCountInfo = document.createElement('p');
    playlistTimeCountInfo.textContent = `${playlistItem.allTracksInfo.trackCount} tracks, ${(playlistItem.allTracksInfo.timeCountinSeconds/60).toFixed(2).split('.')[0]}m 
    ${(playlistItem.allTracksInfo.timeCountinSeconds/60).toFixed(2).split('.')[1]}s`;    
    playlistInfoContainer.append(playlistTimeCountInfo);

    let allArtistsInPlaylist = document.createElement('p');
    allArtistsInPlaylist.innerHTML = playlistItem.allTracksInfo.allArtists.length >= 3 ? `<span>${playlistItem.allTracksInfo.allArtists.join(', ')}</span> and others` : `<span>${playlistItem.allTracksInfo.allArtists.join(', ')}</span>`;
    playlistInfoContainer.append(allArtistsInPlaylist)
    return headerPlaylistContainer;

}
//*------------------Track list render function
function renderTrackInList(playlistTrackItem) {
    let trackContainer = document.createElement('div');
    document.body.append(trackContainer);
    trackContainer.classList.add('track')

    let trackCoverImg = document.createElement('img');
    trackCoverImg.src = playlistTrackItem.coverTrackImg;

    let trackTitle = document.createElement('p');
    trackTitle.innerHTML = playlistTrackItem.isHotTrack === true ? `<span class = "hot">${playlistTrackItem.artistName} -</span> ${playlistTrackItem.trackName}` : `<span>${playlistTrackItem.artistName} -</span> ${playlistTrackItem.trackName}`

    let playerAudio = document.createElement('audio');
    playerAudio.src = playlistTrackItem.audioUrl;
    playerAudio.controls = true;

    let trackTitleAndAudioContainer = document.createElement('div');
    trackTitleAndAudioContainer.classList.add('track_title_container');
    trackTitleAndAudioContainer.append(trackTitle, playerAudio);

    trackContainer.append(trackCoverImg, trackTitleAndAudioContainer);
    return trackContainer;
}
