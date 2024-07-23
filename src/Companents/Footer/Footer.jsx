import React from 'react'
import logo from '../../Images/logo (1).svg'
import './Footer.css'
import instagram from '../../Images/instagram.png'
import telegram from '../../Images/telegram.png'
import facebook from '../../Images/facebook.png'
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="logo-section">
          <a href="/">
            <div className="logo-container">
              <img src={logo} alt="logo"  className='footer-logotip' />
            </div>
            <h3>AkaPhone</h3>
          </a>
          <p>Высокое качество по низкой цене</p>
        </div>
        <div className="links-section">
          <ul>
            <li>
              <a href="/">О нас</a>
            </li>
            <li>
              <a href="/">Каталог продукции</a>
            </li>
            <li>
              <a href="/">Доставка</a>
            </li>
            <li>
              <a href="/">Контакты</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">Смартфоны</a>
            </li>
            <li>
              <a href="/">Умные часы</a>
            </li>
            <li>
              <a href="/">Планшеты</a>
            </li>
            <li>
              <a href="/">Камеры</a>
            </li>
            <li>
              <a href="/">Аксессуары</a>
            </li>
          </ul>
        </div>
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019432724356!2d144.9631573153185!3d-37.81410797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727d7b2bbd4f48!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1595833241071!5m2!1sen!2sau"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-section">
          <p>Email: narimonovazim@gmail.com</p>
          <p>Телефон: +998 33 926 00 03</p>
          <div className="footer-box">
          <a href="#"><img src={instagram} alt="instagram" className="footer-img" /> </a>
        <a href="#">  <img src={telegram} alt="instagram" className="footer-img" /></a>
         <a href="#"> <img src={facebook} alt="instagram" className="footer-img" /> </a>
          </div>
        </div>
      </div>
    </div>
  )
}
