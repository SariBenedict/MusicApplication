import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../api/SongsApi";
import { createSong } from "../redux/actions";
import { SongModel } from "../SongModel";

const AddSong: React.FC = () =>
{
    const navigation = useNavigate();
    const dispatch = useDispatch()
    const [newSong, setNewSong] = useState<SongModel>({
        title: '',
        artist: '',
        ganere: '',
        length: 0,       
        price: 0
    })
   
    const addSong = () => {
        dispatch(add(newSong));
        navigation("/songs");
    }

    return (<div className="addSong"> 
        <h1>Add New Song</h1>       
        <form className="editForm">
            <label >title</label>
            <input defaultValue={''} onChange={(val) => { setNewSong({ ...newSong, title: val.target.value }) }}></input>
            <label >artist name</label>
            <input defaultValue={''} onChange={(val) => { setNewSong({ ...newSong, artist: val.target.value }) }}></input>
            <label >genre</label>
            <input defaultValue={''} onChange={(val) => { setNewSong({ ...newSong, ganere: val.target.value }) }}></input>
            <label >length</label>
            <input defaultValue={0} onChange={(val) => { setNewSong({ ...newSong, length: parseFloat(val.target.value )}) }}></input>
            <label >price</label>
            <input defaultValue={0} onChange={(val) => { setNewSong({ ...newSong, price: parseFloat(val.target.value )}) }}></input>
            <button name="editButton" type="submit" onClick={addSong}>ADD</button>
        </form>
        </div>)
};

export default AddSong;