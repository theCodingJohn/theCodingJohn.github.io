import React from 'react'
import {Link} from "react-router-dom"

const Project = ({card}) => {
  return (
    <a target="_blank" href={`${card.link}`} className="card container">
      <span className="number">
        {card.id}
      </span>
      <h2 className="title">{card.title}</h2>
      <span className="background" style={{background: `url(${card.image}) no-repeat center`}}>
        <span></span>
      </span>
    </a>
  )
}

export default Project