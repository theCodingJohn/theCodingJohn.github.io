import React, { useState } from 'react'

function Nav() {
  const [navStatus, setNavStatus] = useState('close');
  const handleClick = () => {
    setNavStatus(navStatus === 'close' ? 'open' : 'close');
  }
  return (
    <>
    <header className={`mainNav ${navStatus}`}>
      <nav className="nav">
        <svg className="nav__logo" id="Capa_1" enable-background="new 0 0 511.207 511.207" height="37" viewBox="0 0 511.207 511.207" width="37" xmlns="http://www.w3.org/2000/svg"><g id="XMLID_42_"><path id="XMLID_48_" d="m149.06 7.454-141.893 11.014 313.539 315.537 76.475-76.474z"/><path id="XMLID_49_" d="m374.175 191.75.164-191.724-95.568 95.568z"/><path id="XMLID_50_" d="m404.365 117.767 99.675-18.091-99.675-99.676z"/><path id="XMLID_51_" d="m164.942 219.81-21.437 291.397 155.988-155.988z"/></g></svg>
        <p className="nav__text">JCCUNANAN</p>
        <div onClick={handleClick} className="nav__burger">
          <div className="nav__line nav__line--top"></div>
          <div className="nav__line nav__line--center"></div>
          <div className="nav__line nav__line--bottom"></div>
        </div>
      </nav>
    </header>
    <header className={`nav-links-container-${navStatus} nav-links-container`}>
      <div className="container nav-links-wrapper">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a target="_blank" rel="noreferrer noopener"href="https://drive.google.com/file/d/1Kvj1U9-QTpeAdSHtBdE5PQ-y0jqtbNE2/view">Resume</a>
        {/* <a href="/playground">Playground</a> */}
      </div>
    </header>
    </>
  )
}

export default Nav
