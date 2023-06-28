import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import AdvisoryServices from './components/Footer/A-Services/A-Services';
import Buyer from './components/Footer/Buyer/Buyer';
import Aboutus from './components/Footer/Aboutus/About';
import Footer from './components/Footer/Footer';
import Favorites from './views/Favorites/Favorites';
import Users from './views/Users/Users';
import UserDetail from './components/UserDetail/UserDetail';
import Cart from './views/Cart/Cart';
import Checkout from './views/Checkout/Checkout';
import Dashboard from './views/Dashboard/Dashboard';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      {location.pathname !== '/register' && location.pathname !== '/login' && (
        <Navbar />
      )}
      <button className='darkModeButton' onClick={toggleDarkMode}>
        {darkMode ? <FaSun className='icon' /> : <FaMoon className='icon' />}
      </button>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/create' element={<Form />} />
        <Route path='/advisory' element={<AdvisoryServices />} />
        <Route path='/about-us' element={<Aboutus />} />
        <Route path='/FAQ' element={<Buyer />} />
        <Route path='/favorites/:userId' element={<Favorites />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/detail/:userId' element={<UserDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      {location.pathname !== '/register' && location.pathname !== '/login' && (
        <Footer />
      )}
      {/* hola */}
    </div>
  );
}

export default App;
