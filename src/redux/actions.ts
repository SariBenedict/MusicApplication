import { SongModel } from "../SongModel";

export function GetAllSongs(songs: SongModel[]) 
{
    return { type: "GET_ALL_SONGS", payload: songs };
}

export function setSong(song: SongModel)
{
    return { type: 'SET_SONG', payload: song }; 
}

export function deleteSong(songId: string)
{
    return { type: 'DELETE_SONG', payload: songId }; 
}

export function createSong(song: SongModel)
{
    return { type: 'CREATE_SONG', payload: song };
}

export function getByArtist(artist: string)
{
    return{ type: 'GET_BY_ARTIST', payload: artist}
}