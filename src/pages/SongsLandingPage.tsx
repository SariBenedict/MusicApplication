import React,  { useEffect, useState } from 'react';
import { SongModel } from "../SongModel";
import { Ganare } from "../Ganare";
import Song from "../components/Song";
import { Table, TableHead } from "@mui/material";
import Button from "@mui/material/Button";
import { AiOutlinePlusCircle, AiOutlineSearch } from "react-icons/ai";
import { connect, useDispatch, useSelector } from "react-redux";
import { createSong } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import { getSongBtArtist, middlewareSongFunction } from '../api/SongsApi';
import { RootState } from '..';
import { GrSearch } from 'react-icons/gr'



const SongsLandingPage = (prop : any) => 
{
  // let songs : SongModel[] ;
  let songsList=useSelector((state:any)=>state.sng.songs);
  const dispatch = useDispatch();
  const [artist, setArtist] = useState("");
  useEffect(() => {
      dispatch(middlewareSongFunction());
    }, [])

  const navigate = useNavigate();

  const addSong = () => {
    navigate('/songs/new');
  }

  const search = (artist: string) => {
    dispatch((getSongBtArtist(artist)));
  }
  

   return (
    <div className="SongsLanding">
      <h1>The Songs Shop</h1>
      <div>
        <input placeholder='search by artist' onChange={(e) => {setArtist(e.target.value);}}></input>
        <button onClick={()=>{search(artist)}}><GrSearch/></button>
      </div>
      <Table>
        <TableHead sx={{borderColor: 'aqua',borderStyle: 'double', borderSize: '5px'}}>
            <th>title</th>
            <th>artist</th>
            <th>ganare</th>
            <th>price</th>
            <th></th>
        </TableHead>

          {
            songsList.map((s: any) => ( 
              <Song song = {s} ></Song>
            ))
          }  

      </Table>
      <span>
       
        <AiOutlinePlusCircle onClick={addSong}/>
      </span>

    </div>
  )
}
export default SongsLandingPage;

