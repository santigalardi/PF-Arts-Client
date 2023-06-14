import './Navbar.style.css';
import { NavLink } from 'react-router-dom';
import Searchbar from '../SearchBar/Searchbar';
import NavMenu from '../NavMenu/NavMenu';
import {AiOutlineShoppingCart} from 'react-icons/ai'
function Navbar() {

  return (
    <nav className='navbar'>
      <NavMenu/>
      <div className='navbar-title'>Art & Culture</div>
      <div className='navlinks-container'>
        <NavLink to='/' className='navlinks'>Home</NavLink>
        <NavLink to='/explore' className='navlinks'>Explore</NavLink>
        <NavLink to='/favorites' className='navlinks'>Favorites</NavLink>
        <NavLink to='/create' className='navlinks'>Create</NavLink>
      </div>
      <Searchbar/>
      <div className='navbar-user'>Usuario</div>
      <NavLink to='/shopping' className='navlinks'>
        <AiOutlineShoppingCart />
        Shoppings
      </NavLink>
    </nav>
  );
}

export default Navbar;
