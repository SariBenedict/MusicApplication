import * as React from 'react';
import { SongModel } from "../SongModel";
import { AiTwotoneDelete,AiTwotoneEdit } from "react-icons/ai";
import { Table, TableBody } from "@mui/material";
import { deleteSong } from '../redux/actions';
import { useDispatch}   from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteS } from '../api/SongsApi';

type Props = {
    song: SongModel,
}

const Song = (prop : Props) => 
{
    const song : SongModel = prop.song;
    const songParameters : any[] =[song.title, song.artist, song.ganere, song.price];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const removeSong = (id: string) => {
        dispatch(deleteS(id));
    }

    const editSong = (id: any) => {
        navigate(`/songs/edit/`+id);
    }

 
    return(<>
            <TableBody sx={{borderColor: 'aqua',borderStyle: 'double', borderSize: '5px'}}>
            {
            songParameters.map((param : any) => ( 
              <td align='center' >{param}</td>
            ))
            }  

            <span>
                <AiTwotoneDelete onClick={()=>{removeSong(String(song.id))}}/>
            </span> 
            <span >
                <AiTwotoneEdit onClick={()=>{editSong(String(song.id))}}/>
            </span> 
            
          </TableBody>
          </> )
}
export default Song;


