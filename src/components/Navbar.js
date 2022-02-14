import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../img/Logo.png';

function Navbar() {
  
  return (
    <nav>
      <img className="siteLogo" src={LogoImage} alt="Rentomojo" />
       <div className='siteHeading'>RentoMojo</div>
      <ul className='nav-links-container'>
        <Link className='nav-links' to="/"><li >Home</li></Link>
        <Link className='nav-links' to="/blogsPage"><li className='nav-links'>Posts</li></Link>
        {/* <Link className='nav-links' to="/blog"><li className='nav-links'>Post Details</li></Link>   */}
        <li className='nav-links'>Post Details</li>
      </ul>
        
    </nav>
  )
}

export default Navbar;