import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import AdvisoryServices from './components/Footer/A-Services/A-Services';
import Buyer from './components/Footer/Buyer/Buyer';
import Aboutus from './components/Footer/Aboutus';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/create' element={<Form />} />
        <Route path='/advisory' element={<AdvisoryServices />} />
        <Route path='/about-us' element={<Aboutus />} />
        <Route path='/FAQ' element={<Buyer />} />
      </Routes>
    </div>
  );
}

export default App;
