export function getAllArtists(playlistTrackItemData) {
    const listOfArtists = playlistTrackItemData.playListTracks.map((e)=>e.artistName);
    return listOfArtists;
}