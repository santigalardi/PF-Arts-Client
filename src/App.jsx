import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/create' element={<Form />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
