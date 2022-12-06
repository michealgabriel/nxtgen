import React, { useState, useEffect } from 'react';
import './Header.css';

import { IoMenu, IoClose } from "react-icons/io5";

const Header = (props) => {

  const [navOpen, setnavOpen] = useState(false);

  useEffect(() => {
    const navLinks = document.getElementsByClassName("main-nav-link");

    function closeNav() {
      setnavOpen(false);
    }

    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", closeNav, true);
    }
  
    return () => {
      // clean ups here

      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].removeEventListener("click", closeNav, true);
      }
    }
  }, [])
  

  return (

    <div className={`header ${!props.stickHeader ? 'sticky ' : '' }${navOpen ? 'nav-open ' : '' }`}>
        {/* { console.log(props.stickHeader) } */}
        <div className='header-logo'>
            <img src='https://avatars.githubusercontent.com/u/99659402?v=4' alt='Gabriel A.Micheal'/>
        </div>
        

        <nav className='main-nav'>
            <ul className='main-nav-list'>
                <li><a className="main-nav-link" href="#skills">Skills</a></li>
                <li><a className="main-nav-link" href="#projects">Projects</a></li>
                <li><a className="main-nav-link" href="https://docs.google.com/document/d/1Bl3DMo4-daSsVVdHe_vWjhT95_HCIJvZWQhKFeqBKCk/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
                <li><a className="main-nav-link nav-cta" href="#reachme">Say Hello</a></li>
            </ul>
        </nav>

        <button className='btn-mobile-nav'>
          <IoMenu className='icon-mobile-nav' name='menu-icon' onClick={() => setnavOpen(true)} />
          <IoClose className='icon-mobile-nav' name='menu-close-icon' onClick={() => setnavOpen(false)} />
        </button>
    </div>

  );
}

export default Header;
