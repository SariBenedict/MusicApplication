import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { idText } from "typescript";
import { RootState } from "..";
import { middlewareSongFunction } from "../api/SongsApi";
import BackButton from "../components/BackButton";
import { GetAllSongs, setSong } from "../redux/actions";
import { SongModel } from "../SongModel";
import { editS } from '../api/SongsApi';

const EditSong: React.FC = () => {   
const navigation = useNavigate();
const dispatch = useDispatch();
const location = useLocation();
let { id } = useParams();
console.log("**************************"+id);
let songsList=useSelector((state:any)=>state.sng.songs);
useEffect(() => {
    dispatch(middlewareSongFunction());
    songsList && seteditSong(songsList.find((x: SongModel) => x.id == id)); 
  }, [])

const [editSong, seteditSong] = useState<SongModel>({
    title: '',
    artist: '',
    ganere: '',
    length: 0,       
    price: 0
})


// const edit = () => {
//     dispatch(editSong(editSong));
//     navigation("/songs")
// }

const edit = (editSong: SongModel) => {    
    dispatch(editS(editSong));
    navigation("/songs");
}

return (<div className="Edit">
    <h1>Edit Song</h1>
    <form className="editForm" >
        <label >title</label>
        <input  value={editSong.title} onChange={(val) => { seteditSong({ ...editSong, title: val.target.value }) }}></input>
        <label >artist name</label>
        <input  defaultValue={editSong.artist} onChange={(val) => { seteditSong({ ...editSong, artist: val.target.value }) }}></input>
        <label >genre</label>
        <input  defaultValue={editSong.ganere} onChange={(val) => { seteditSong({ ...editSong, ganere: val.target.value }) }}></input>
        <label >length</label>
        <input  defaultValue={editSong.length} onChange={(val) => { seteditSong({ ...editSong, length: parseFloat(val.target.value) }) }}></input>
        <label >price</label>
        <input  defaultValue={editSong.price} onChange={(val) => { seteditSong({ ...editSong, length: parseFloat(val.target.value) }) }}></input>
        <button name="editButton" type="submit" onClick={()=>{edit(editSong)}}>EDIT</button>
    </form>
    <BackButton></BackButton>
</div>)
};

export default EditSong;

