
import './App.css';

import Navbar from './Companents/Navbar/Navbar';

import Box from './Companents/Box/Box';
import { Outlet, Route, Routes } from 'react-router-dom';
import Layout from './Companents/Layout';
import Footer from './Companents/Footer/Footer';
import Korzinka from './Companents/Korzinka/Korzinka';



function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/' element={<Navbar />} />
      
        <Route path='/detail/:id' element={<Box />} />
        <Route path='/Korzinka' element={<Korzinka/>} />
        <Route />
      </Routes>
      <Outlet />
     
<Footer/>
    </div>
   
  );
}

export default App;
