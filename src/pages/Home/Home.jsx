import React, { useEffect, useContext, useState } from 'react';
import { gsap } from 'gsap';
import axios from "axios"

import Spotify from "../../components/Spotify/Spotify";
import { SpotifyContext } from "../../contexts/SpotifyContext";

const Home = () => {
  const hero = gsap.timeline({ defaults: { duration: 1 } });
  useEffect(() => {
    hero.from('.hero__line', { duration: 0.5, yPercent: -100 })
      .from("h1", { scale: 0, opacity: 0 })
      .from('.hero__line a', { opacity: 0 }, "-=0.5")
      .from(".social-icon", { duration: 0.5,y: -15, stagger: 0.5, opacity: 0 }, 0.5)
  }, [])

  // For Spotify
  const { setSpotifyData, isFetched, setIsFetched } = useContext(SpotifyContext);
  const [token, setToken] = useState("");

  const fetchData = async () => {
    try {
      const config = { headers: { authorization: `Bearer ${token}` } };
      const res = await axios.get("https://api.spotify.com/v1/me/player/currently-playing", config);
      setSpotifyData(res.data.item);
      res.data.item === undefined ? setIsFetched(false) : setIsFetched(true);
    } catch (e) {
      console.log(e);
    }
  } 
  
  useEffect(() => {
    fetchData()
  }, [token])

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const params = new URLSearchParams();
        params.append('grant_type', 'refresh_token');
        params.append('refresh_token', `${process.env.REACT_APP_REFRESH_TOKEN}`);

        const config = { headers: { authorization: `Basic ${process.env.REACT_APP_SPOTIFY_AUTHORIZATION}`,"Content-Type": 'application/x-www-form-urlencoded' } };
        const res = await axios.post("https://accounts.spotify.com/api/token", params, config);
        setToken(res.data.access_token);
        fetchData();
      } catch (e) {
        console.log(e);
      }
    }
    fetchToken();
  }, [])

  return (
    <main className="main" >
       {isFetched && <Spotify/>}
      <section className='hero'>
        <div className="hero__line">
          <h1><strong>John Cunanan</strong><br /> <span className="hero__role">— front-end developer —</span></h1>
          <a class="button button__double-border" href="mailto:thecodingjohn@outlook.com">
            <span>Work with Me</span>
          </a> 
        </div>
        <section className="container social-icon-container">
          <a href="https://github.com/theCodingJohn" target="_blank" className="social-icon social-icon--github">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path fill="currentColor" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path>
            </svg>
          </a>
          <a href="https://codepen.io/jccnnn" target="_blank" className="social-icon social-icon--codepen">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="codepen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/john-carlo-cunanan-11847a17a" target="_blank" className="social-icon social-icon--linkedIn">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
            </svg>
          </a>
        </section>
      </section>
    </main>
  )
}

export default Home
