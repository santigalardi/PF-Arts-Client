import './Navbar.style.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillHouseFill, BsPersonFill, BsTools } from 'react-icons/bs';
import { GiPencilBrush } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaPowerOff } from 'react-icons/fa';
import {MdManageSearch} from 'react-icons/md';

function Navbar({ handleChange, handleSubmit }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = (event) => {
    event.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const menuOptions = document.querySelector('.menu-options');
      if (!menuOptions.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <nav className='navbar'>
      <div className={`navbar-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`menu-options ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <BsPersonFill />
            <NavLink to='/artistas' onClick={toggleMenu}>
              {' '}
              Artists
            </NavLink>
          </li>
          <hr />
          <li>
            <BsTools />
            <NavLink to='/tecnicas' onClick={toggleMenu}>
              {' '}
              Techniques
            </NavLink>
          </li>
          <hr />
          <li>
            <BsFillHouseFill />
            <NavLink to='/' onClick={toggleMenu}>
              {' '}
              Home
            </NavLink>
          </li>
          <hr />
          <li>
            <GiPencilBrush />
            <NavLink to='/create' onClick={toggleMenu}>
              {' '}
              Create
            </NavLink>
          </li>
          <hr />
          <li>
            <GiPencilBrush />
            <NavLink to='/MyCreations' onClick={toggleMenu}>
              {' '}
              My creations
            </NavLink>
          </li>
          <hr />
          <li>
            <FaPowerOff />
            <NavLink to='/login' onClick={toggleMenu}>
              {' '}
              Login
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='navbar-title'>Art & Culture</div>
      <div className='navlinks-container'>
        <NavLink to='/' className='navlinks'>
          Home
        </NavLink>
        <NavLink to='/explore' className='navlinks'>
          Explore
        </NavLink>
        <NavLink to='/favorites' className='navlinks'>
          Favorites
        </NavLink>
        <NavLink to='/create' className='navlinks'>
          Create
        </NavLink>
      </div>
      <form onChange={handleChange}>
        <input className='NavSearch' placeholder='Search...' type='search' />
        <button className='BottonSearch'type='submit' onClick={handleSubmit}>
          <MdManageSearch className='icon'/>
        </button>
      </form>
      <div className='navbar-user'>Usuario</div>
      <NavLink to='/shopping' className='navlinks'>
        <AiOutlineShoppingCart />
        Shoppings
      </NavLink>
    </nav>
  );
}
Navbar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Navbar;
