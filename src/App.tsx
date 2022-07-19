
import React, { useState } from 'react';
import './App.css';
import { Routes,Route,Link, useNavigate } from 'react-router-dom';
import AddSong from './pages/AddSong';
import EditSong from './pages/EditSong';
import { SongModel } from './SongModel';
import { Ganare } from './Ganare';
import SongsLandingPage from './pages/SongsLandingPage';

function App() {
   
  return (
    <div className="App">
      <Routes>
        <Route path="/songs"  element={<SongsLandingPage/>}></Route>
        <Route path="/songs/new"  element={<AddSong/>}></Route>
        <Route path="/songs/edit/:id" element={<EditSong/>}></Route> 
      </Routes>
    </div>
  );
}

export default App;
