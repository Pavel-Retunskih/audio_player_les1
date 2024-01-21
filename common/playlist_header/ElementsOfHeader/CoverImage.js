export function CreateCoverImage(data) {
    const playlistCoverImg = document.createElement('img');
    playlistCoverImg.src = data.coverImg;
    playlistCoverImg.setAttribute('alt', 'playlistCoverImg');
    return playlistCoverImg;
}