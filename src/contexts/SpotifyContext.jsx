import React, { createContext, useState } from 'react'; 

export const SpotifyContext = createContext(null);

export const SpotifyProvider = (props) => {
  const [spotifyData, setSpotifyData] = useState({});
  const [isFetched, setIsFetched] = useState(false);
  return (
    <SpotifyContext.Provider value={{spotifyData, setSpotifyData, isFetched, setIsFetched}}>
      {props.children}
    </SpotifyContext.Provider>
  )
}