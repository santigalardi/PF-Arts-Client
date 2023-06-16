import { NavLink } from 'react-router-dom';
import Searchbar from '../SearchBar/Searchbar';
import NavMenu from '../NavMenu/NavMenu';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Navbar.style.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <NavMenu />
      <div className='navbar-title'>Art & Culture</div>
      <div className='navlinks-container'>
        <NavLink to='/' className='navlinks'>
          Home
        </NavLink>

        <NavLink to='/create' className='navlinks'>
          Create
        </NavLink>
      </div>
      <Searchbar />
      <div className='navlinks-container'>
        <NavLink to='/login' className='navlinks'>
          Login
        </NavLink>
        <NavLink to='/favorites' className='navlinks'>
          🤍
        </NavLink>
        <NavLink to='/cart' className='navlinks'>
          <AiOutlineShoppingCart className='cartLogo' />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
