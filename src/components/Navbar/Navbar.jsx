import './Navbar.style.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

function Navbar({ handleChange, handleSubmit }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
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

  //Botton EXiT
  // const history = useHistory();

  const handleSalir = () => {
    history.push('/landing');
  };

  return (
    <nav className='navbar'>
      <div
        className={`navbar-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`menu-options ${menuOpen ? 'active' : ''}`}>
        <NavLink to='/artistas' onClick={toggleMenu}>Artistas</NavLink>
        <NavLink to='/tecnicas' onClick={toggleMenu}>Técnicas</NavLink>
        <NavLink to='/' onClick={toggleMenu}>Home</NavLink>
      </div>
      <div className='navbar-title'>Art & Culture</div>
      <div className='navlinks-container'>
        <NavLink to='/home' className='navlinks'>Home</NavLink>
        <NavLink to='/explorer' className='navlinks'>Explorer</NavLink>
        <NavLink to='/shopping' className='navlinks'>Carrito</NavLink>
        <NavLink to='/favorites' className='navlinks'>Favorites</NavLink>
      </div>
      <form onChange={handleChange}>
        <input placeholder='Busqueda' type='search' />
        <button type='submit' onClick={handleSubmit}>Buscar</button>
      </form>
      <div className='navbar-user'>Usuario</div>
      <button className='boton-out' onClick={handleSalir}>EXIT</button>
    </nav>
  );
}
Navbar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};


export default Navbar;
