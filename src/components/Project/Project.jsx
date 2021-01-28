import React from 'react'

const Project = ({card}) => {
  return (
    <a target="_blank" rel="noreferrer noopener" href={`${card.link}`} className="card container">
      <span className="number">
        {card.id}
      </span>
      <h2 className="title">{card.title}</h2>
      <span className="background" style={{background: `url(${card.image}) no-repeat center`, backgroundSize: "cover"}}>
        <span></span>
      </span>
    </a>
  )
}

export default Project
