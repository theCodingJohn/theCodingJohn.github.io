import React, {useState} from 'react'

function Nav() {
  const [navStatus, setNavStatus] = useState('close');
  const handleClick = () => {
    setNavStatus(navStatus === 'close' ? 'open' : 'close'); 
    console.log(navStatus);
  }
  return (
    <header className={`${navStatus}`}>
      <nav className="nav">
        <svg className="nav__logo" id="Capa_1" enable-background="new 0 0 511.207 511.207" height="37" viewBox="0 0 511.207 511.207" width="37" xmlns="http://www.w3.org/2000/svg"><g id="XMLID_42_"><path id="XMLID_48_" d="m149.06 7.454-141.893 11.014 313.539 315.537 76.475-76.474z"/><path id="XMLID_49_" d="m374.175 191.75.164-191.724-95.568 95.568z"/><path id="XMLID_50_" d="m404.365 117.767 99.675-18.091-99.675-99.676z"/><path id="XMLID_51_" d="m164.942 219.81-21.437 291.397 155.988-155.988z"/></g></svg>
        <p className="nav__text">JCCUNANAN</p>
        <div onClick={handleClick} className="nav__burger">
          <div className="nav__line nav__line--top"></div>
          <div className="nav__line nav__line--center"></div>
          <div className="nav__line nav__line--bottom"></div>
        </div>
      </nav>
      <div className="nav-links-container">
        <ul className="nav-links-wrapper">

        </ul>
      </div>
    </header>
  )
}

export default Nav
