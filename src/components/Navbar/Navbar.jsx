import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Navbar.style.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <NavMenu />
      <div className="navbar-title">Art & Culture</div>
      <div className="navlinks-container">
        <NavLink to="/" className="navlinks">
          Home
        </NavLink>
        <NavLink to="/create" className="navlinks">
          Create
        </NavLink>
      </div>
      <div className="navlinks-container">
        <NavLink to="/register" className="navlinks">
          Register
        </NavLink>
        {/* <NavLink to="/favorites" className="navlinks">
          🤍
        </NavLink> */}
        <NavLink to="/cart" className="navlinks">
          <AiOutlineShoppingCart className="cartLogo" />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
