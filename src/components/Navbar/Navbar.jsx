/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { auth } from '../../Firebase/config';
import { signOut } from 'firebase/auth';
import NavMenu from '../NavMenu/NavMenu';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import './Navbar.style.css';

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser);

  const { userName, profilePicture, userId } = loggedUser;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0 && !location.pathname.includes('/detail');

      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setLoggedIn(false);
    });
  };

  useEffect(() => {
    if (loggedUser) {
      setLoggedIn(true);
    }
  }, [loggedUser]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <NavMenu userId={userId} />
      <div className='navbar-title'>Henry Art Gallery</div>
      <div className='navlinks-container'>
        {loggedIn ? (
          <div className='profile-menu' onClick={handleLogout}>
            <p className='user-welcome'>{userName}</p>
            <div className='profile-menu-photo-container'>
              <img src={profilePicture} alt='' className='profile-menu-photo' />
            </div>
          </div>
        ) : (
          <NavLink to='/login' className='navlinks'>
            Log in
          </NavLink>
        )}
        <NavLink to='/cart' className='navlinks'>
          <AiOutlineShoppingCart className='cartLogo' />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
