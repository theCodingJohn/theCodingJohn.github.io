import React, {useEffect} from 'react'
import Project from "../../components/Project/Project"
import gsap from "gsap"

// Project Images
import photosnap from "../../assets/projects/photosnap.png"
import creativeAgency from "../../assets/projects/creativeAgency.png"
import restCountries from "../../assets/projects/restCountries.png"
import trakt from "../../assets/projects/trakt.png"
import strohl from "../../assets/projects/strohl.png"

const Projects = () => {

  useEffect(() => {
    gsap.from(".headingWrapper", {duration: 1, height: 0})
  }, [])

  return (
    <main className="projects">
      <div className="headingWrapper">
        <h1>Projects</h1>
        <div className="slant"></div>
      </div>
      <Project card={{title: "Photosnap", image: `${photosnap}`, id: "01", link: "https://github.com/theCodingJohn/Photosnap"}}/>
      <Project card={{title: "Creative Agency", image: `${creativeAgency}`, id: "02", link: "https://github.com/theCodingJohn/Creative-Agency"}}/>
      <Project card={{title: "Rest Countries API", image: `${restCountries}`, id: "03", link: "https://github.com/theCodingJohn/Where-In-The-World"}}/>
      <Project card={{title: "Trakt", image: `${trakt}`, id: "04", link: "https://github.com/theCodingJohn/traktTv-page-clone"}}/>
      <Project card={{title: "Strohl", image: `${strohl}`, id: "05", link: "https://github.com/theCodingJohn/strohl-clone"}}/>
    </main>
  )
}

export default Projects
