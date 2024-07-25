import React from 'react'
import logo from '../.././Images/logo (1).svg'
import savat from '../../../src/Images/savat1.png'
import './Navbar.css'

import { NavLink } from 'react-router-dom';


const Navbar = () => {
    
  return (
    <div>
    <div className="navbar  container">
<div className="navbar-box">  
    <ul className="navbar-list">
    <li  className="navabr-item">
      <a       > <img src= {logo}    alt="logo"    className='navbar-img'  />  </a>
    </li>
    <li className="navbar-item">
        <a href="#" className="navbar-link"> <p className="navbar-title">  AkaPhone </p> </a>
        <a href="#" className="navbar-link"> <p className="navbar-text">Качестенное по доступное цену

</p></a>
    </li>

</ul>


    <li className="navbar-subitem">
        <p className="navbar-subtext"  > <a href="#navbar_a">Скидки</a>
        </p>
        <p className="navbar-subtext"> <a href="#navbar_b">Специальные предложения</a>
        </p>
        <p className="navbar-subtext"> <a href="#navbar_c">Каталог товаров</a>
        </p>
    </li>
    
    <ul className="navbar-list">
   
    <li className="navbar-item_a">
        <a href="tel:+998339260003" className="navbar-link"> <p className="navbar-title">  +998339260003 </p> </a>
        <a href="#" className="navbar-link"> <button className="navbar-btn"> Заказать звонок
        </button></a>
    </li>
    <li  className="navabr-item_a">
     
       <NavLink to='/korzinka'> <img src= {savat}    alt="savat"  className=' navbar-subimg' />  </NavLink>
    </li>
</ul>
   
    
    </div>
    </div>

    </div>
  )
}

export default Navbar
