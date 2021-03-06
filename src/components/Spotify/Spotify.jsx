import React, { useEffect, useContext } from 'react'
import gsap from "gsap"
import { Draggable } from "gsap/all";

import { SpotifyContext } from "../../contexts/SpotifyContext";
import gif from "../../assets/spotify-gif.gif";

const Spotify = () => {
  const { spotifyData } = useContext(SpotifyContext);

  const close = () => {
    const tl = gsap.timeline();
    tl.to(".spotify", { duration: 0.5, opacity: 0 })
    .to(".spotify", {duration: 0 , scaleX: 0, delay: 0.5})
  }

  const openLargeArtwork = () => {
    gsap.to(".spotify__image", { duration: 1, scale: 0 });
    gsap.to(".spotify__desc", { duration: 1, x: -50, width: "calc(100% + 50px)" });
    gsap.to(".spotify__equalizer", { duration: 1, x: -40 });
    gsap.to(".spotify__largeImage", { duration: 0, scaleY: 1});
    gsap.to(".spotify__largeImage", { duration: 0.5, opacity: 1});
  }

  const closeLargeArtwork = () => {
    gsap.to(".spotify__image", { duration: 1, scale: 1 });
    gsap.to(".spotify__desc", { duration: 1, x: -0, width: "100%" });
    gsap.to(".spotify__equalizer", { duration: 1, x: 0 });
    gsap.to(".spotify__largeImage", { duration: 0, scaleY: 0, delay: 0.5 });
    gsap.to(".spotify__largeImage", { duration: 0.5, opacity: 0});
  }

  useEffect(() => {
    gsap.registerPlugin(Draggable);
    Draggable.create(".spotify", {
      bounds: document.getElementsByTagName("body")
    });
  }, [])

  return (
  <div className="spotify">
      <div onClick={closeLargeArtwork} className="spotify__largeImage" style={{ background: `url(${spotifyData.album.images[1].url}) no-repeat center`, backgroundSize: "cover" }}>
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 12c0 6.623-5.377 12-12 12s-12-5.377-12-12 5.377-12 12-12 12 5.377 12 12zm-1 0c0 6.071-4.929 11-11 11s-11-4.929-11-11 4.929-11 11-11 11 4.929 11 11zm-11.5-4.828l-3.763 4.608-.737-.679 5-6.101 5 6.112-.753.666-3.747-4.604v11.826h-1v-11.828z"/></svg>
      </div>   
    <div onClick={openLargeArtwork} className="spotify__image" style={{background: `url(${spotifyData.album.images[2].url}) no-repeat center`, backgroundSize: "cover" }}> 
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 12c0 6.623-5.377 12-12 12s-12-5.377-12-12 5.377-12 12-12 12 5.377 12 12zm-1 0c0 6.071-4.929 11-11 11s-11-4.929-11-11 4.929-11 11-11 11 4.929 11 11zm-11.5-4.828l-3.763 4.608-.737-.679 5-6.101 5 6.112-.753.666-3.747-4.604v11.826h-1v-11.828z"/></svg>
    </div>
    <div className="spotify__desc">
      <p title={spotifyData.name} className="spotify__title">{spotifyData.name}</p>
      <p title={spotifyData.artists[0].name} className="spotify__artist">{spotifyData.artists[0].name}</p>
      </div>
      <img className="spotify__equalizer" src={gif} alt="equalizer icon"/>
    <svg onClick={close} className="close-button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>  
  </div>
  )
}

export default Spotify
