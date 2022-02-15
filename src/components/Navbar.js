import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../utils/Logo.png';

function Navbar() {
  
  return (
    <nav>
      <img className="siteLogo" src={LogoImage} alt="Rentomojo" />
       <div className='siteHeading'>RentoMojo</div>
      <ul className='nav-links-container'>
        <Link className='nav-links' to="/"><li >Home</li></Link>
        <Link className='nav-links' to="/allBlogs"><li className='nav-links'>Posts</li></Link>
        <Link className='nav-links' to="/randomBlog"><li className='nav-links'>Post Details</li></Link>
      </ul>
        
    </nav>
  )
}

export default Navbar;