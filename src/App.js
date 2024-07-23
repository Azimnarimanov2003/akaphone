
import './App.css';

import Navbar from './Companents/Navbar/Navbar';

import Box from './Companents/Box/Box';
import { Outlet, Route, Routes } from 'react-router-dom';
import Layout from './Companents/Layout';
import Footer from './Companents/Footer/Footer';
import Section from './Companents/Section/Section';


function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/' element={<Navbar />} />
        <Route path='/detail/:id' element={<Box />} />
        <Route />
      </Routes>
      <Outlet />
      <Section/>
<Footer/>
    </div>
   
  );
}

export default App;
