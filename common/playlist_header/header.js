import {CreateCoverImage} from "./ElementsOfHeader/CoverImage.js";
import { Title } from "./ElementsOfHeader/Title.js";
export function renderHeaderPlaylist(data){
    let headerPlaylistContainer = document.createElement('div');
    document.body.append(headerPlaylistContainer);
    headerPlaylistContainer.classList.add('playlist_header');
    headerPlaylistContainer.append(CreateCoverImage(data))
    headerPlaylistContainer.append(Title(data))
    return headerPlaylistContainer;

}



