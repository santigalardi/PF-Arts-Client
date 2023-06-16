import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import AdvisoryServices from './components/Footer/A-Services/A-Services';
import Buyer from './components/Footer/Buyer/Buyer';
import Aboutus from './components/Footer/Aboutus';
import Footer from './components/Footer/Footer';
import Favorites from './views/Favorites/Favorites';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <Navbar />
      <button className='darkModeButton' onClick={toggleDarkMode}>
        {darkMode ? <FaSun className='icon' /> : <FaMoon className='icon' />}
      </button>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/create' element={<Form />} />
        <Route path='/advisory' element={<AdvisoryServices />} />
        <Route path='/about-us' element={<Aboutus />} />
        <Route path='/FAQ' element={<Buyer />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
