import React from "react";
import axios from "axios";
import { SongModel } from "../SongModel";
import { setSong, deleteSong, GetAllSongs } from "../redux/actions";

export const middlewareSongFunction:any = () => {
    
    return async (dispatch: any) => {
        try{
            const res = await axios.get('http://localhost:8080/songs/getAllSongs');
            console.log(res.data) ;

            dispatch(GetAllSongs(res.data));
        }
        catch(err){ 
            return err;
        }
    }
}
    
export const add:any = (song: SongModel) => {
    return async (dispatch: any) => {
        try {
            const res = await axios.post('http://localhost:8080/songs/addSong',song, {
            headers: { 
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
        }
        catch (err) {  
            return err;
         }
    }
} 


export const getSongBtArtist:any= (artist: string) => {
    return async (dispatch : any) => {
        try{
            const res = await axios.get(`http://localhost:8080/songs/getSongsByArtist/${artist}`);
            dispatch(GetAllSongs(res.data));
        }   
        catch (err) {
            return err; 
        } 
    }
}

export const deleteS:any = (id: string) => {
    return async (dispatch: any) => {
        try{
            await axios.delete(`http://localhost:8080/songs/delete/${id}`,{
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            dispatch(deleteSong(id));
        }
        catch(err) {    
            return err;
        }
    }
}

export const editS :any = (song: SongModel) => {
    return async (dispatch: any) => {
        try {
           const res = await axios.put(`http://localhost:8080/songs/set/${song.id}`, 
           song,{
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
           });
           dispatch(setSong(song))
        }
        catch (err) {
            return err;
        }
    }
}

