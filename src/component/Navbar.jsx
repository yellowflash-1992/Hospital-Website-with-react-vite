import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { FaBarsStaggered } from 'react-icons/fa6';
import { ImCross } from 'react-icons/im';
import hospitalimage from '../assets/hospital image.png';
import DarkModeToggle from './Modes/Dark and light mode';


const Navbar = () => {
    const [Mobile, setMobile] = useState(false);


    
    // Define a separate handler for the nav-links-mob to prevent event propagation
    const handleNavLinksMobClick = (e) => {

      if (
        e.target.classList.contains('dark-mode-toggle') ||
        e.target.closest('.dark-mode-toggle')
    ) {
        // If so, do not close the nav-links-mob
        return;
    }

    // Set the Mobile state to false without allowing the event to propagate
    setMobile(false);
      
  };

  return (

    <nav className='navbar-custom'>

      <div className='flex text-2xl cursor-pointer items-center gap-1'>
      <h3 className='logo'><a href="#"><img src={hospitalimage} alt="logo" height={50} width={100} /></a></h3>
      <span id='logo2' className='font-bold hidden md:block'><a href="#">Opabode Hospital</a></span>
      </div>

      
      <ul className= {Mobile? "nav-links-mob" : "nav-links"} onClick={handleNavLinksMobClick}>
      <div className='tog'>
      <DarkModeToggle className="dark-mode-toggle" />
      </div>


      {Mobile && (
                    <li>
                        <div className='mob-menu-icon' onClick={() => setMobile(!Mobile)}>
                            <ImCross />
                        </div>
                    </li>
                )}

        <li>
          <Link  className='my-link text-green-700 hover:text-gray-400 hover:underline text-link-underline' to='/'>Home</Link>
        </li>
        <li>
          <Link className='text-green-700 hover:text-gray-400 hover:underline text-link-underline' to='/about'>About</Link>
        </li>
        <li>
          <Link className='text-green-700 hover:text-gray-400 hover:underline text-link-underline' to='/services'>Services</Link>
        </li>
        <li>
          <Link className='text-green-700 hover:text-gray-400 hover:underline text-link-underline' to='/contact'>Contact</Link>
        </li>
      </ul>

      <div className='appointment'>
          <Link className='btn bg-green-600 text-white py-2 px-3 hover:bg-green-700 md:ml-5 rounded-lg' to='/appointment'>Book an Appointment</Link>
        </div>



        {!Mobile && (
                <button className='mob-menu-icon' onClick={() => setMobile(!Mobile)}>
                    <FaBarsStaggered />
                </button>
            )}
    </nav>
  );
};

export default Navbar;
