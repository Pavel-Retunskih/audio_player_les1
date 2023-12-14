//*-----------------Data of playlists
let playList = [{
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
},{
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
},
];




//*-----------------DOM Render

renderPlaylist(playList)


//*------------------Full playlist rendering
function renderPlaylist(playlistForRender) {
    let allPlaylistsContainer = document.querySelector('#container')
    for (let i = 0; i < playlistForRender.length; i++) {
        const element = playlistForRender[i];
        allPlaylistsContainer.append(renderSinglePlaylistContainer(element))
    }
    return allPlaylistsContainer;
}

function renderSinglePlaylistContainer(playlistForRenderData){
    let singlePlaylistContainer = document.createElement('div')
    document.body.append(singlePlaylistContainer);
    singlePlaylistContainer.classList.add('playlist_container');
    singlePlaylistContainer.append(renderHeaderPlaylist(playlistForRenderData),renderTrackListContainer(playlistForRenderData));
    return singlePlaylistContainer;
}
//*------------------Tracklist container in Playlist render function
function renderTrackListContainer(playlistForRenderData){
    let trackListContainer = document.createElement('div');
    trackListContainer.classList.add('tracklist_container')
    for (let i = 0; i < playlistForRenderData.playListTracks.length; i++) {
        const element = playlistForRenderData.playListTracks[i];
        trackListContainer.append(renderTrackInContainer(element))
    };
    return trackListContainer
}
//*------------------Header playlist render function
function renderHeaderPlaylist(playlistTrackItemData){
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
    playlistInfoContainer.append(allArtistsInPlaylist)
    return headerPlaylistContainer;

}
//*------------------One track container render function
function renderTrackInContainer(playlistTrackItemData) {
    let trackContainer = document.createElement('div');
    document.body.append(trackContainer);
    trackContainer.classList.add('track')

    let trackCoverImg = document.createElement('img');
    trackCoverImg.src = playlistTrackItemData.coverTrackImg;

    let trackTitle = document.createElement('p');
    trackTitle.innerHTML = playlistTrackItemData.isHotTrack === true ? `<span class = "hot">${playlistTrackItemData.artistName} -</span> ${playlistTrackItemData.trackName}` : `<span>${playlistTrackItemData.artistName} -</span> ${playlistTrackItemData.trackName}`

    let playerAudio = document.createElement('audio');
    playerAudio.src = playlistTrackItemData.audioUrl;
    playerAudio.controls = true;

    let trackTitleAndAudioContainer = document.createElement('div');
    trackTitleAndAudioContainer.classList.add('track_title_container');
    trackTitleAndAudioContainer.append(trackTitle, playerAudio);

    trackContainer.append(trackCoverImg, trackTitleAndAudioContainer);
    return trackContainer;
}
