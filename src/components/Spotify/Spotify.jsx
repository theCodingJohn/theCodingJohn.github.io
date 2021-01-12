import React, { useState, useEffect, useContext } from 'react'
import axios from "axios";

import {SpotifyContext} from "../../contexts/SpotifyContext"

const Spotify = () => {
  const { spotifyData } = useContext(SpotifyContext);

  return (
   <div className="spotify">
      <div className="spotify__image" style={{background: `url(${spotifyData.album.images[2].url}) no-repeat center`, }}> 
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 12c0 6.623-5.377 12-12 12s-12-5.377-12-12 5.377-12 12-12 12 5.377 12 12zm-1 0c0 6.071-4.929 11-11 11s-11-4.929-11-11 4.929-11 11-11 11 4.929 11 11zm-11.5-4.828l-3.763 4.608-.737-.679 5-6.101 5 6.112-.753.666-3.747-4.604v11.826h-1v-11.828z"/></svg>
      </div>
      <div className="spotify__desc">
        <div className="spotify__title">{spotifyData.name}</div>
        <p className="spotify__artist">{spotifyData.artists[0].name}</p>
      </div>
    </div>
  )
}

export default Spotify
