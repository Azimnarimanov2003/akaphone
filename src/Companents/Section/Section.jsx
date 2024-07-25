import React from 'react'
import lenovo from '../../Images/lenovo.png'
import savat from '../../Images/savat1.png'
import './Section.css'
import quloqchin from '../../Images/quloqchin.png'
import soat from '../../Images/soat.png'
const Section = () => {
    return (
        <div id='navbar_b'>
            <div className="section container">
                  <div className="section-container">
                <ul className="section-list">
                    <li className="section-item">
                        <div className="section-box">

                            <img src={lenovo} alt="photo" />
                            <div className="section-subbox">
                                <h3 className="section-name">
                                    Lenovo IdeaPad L340
                                </h3>
                                <h4 className="section-title">
                                    80 ₽
                                </h4>
                                <button className="section-btn">
                                    <p> Add To Cart  </p>
                                    <img className=' section-picture' src={savat} alt="rasm" />
                                </button>
                            </div>

                        </div>


                    </li>
                    <div className="section-card">
                        <li className="section-subitem">
                            <div className="section-inlane">
                                <h3 className="section-subname">
                                    HyperX Cloud Stinger
                                </h3>
                                <img className='section-image' src={soat} alt="photo" />
                            </div>
                            <h4 className="section-title">
                                2 ₽
                            </h4>
                            <button className="section-subbtn">
                                <p> Add To Cart  </p>
                                <img className=' section-picture' src={savat} alt="rasm" />
                            </button>

                        </li>
                        <li className="section-subitem_a">
                            <div className="section-inlane">
                                <h3 className="section-subname">
                                    HyperX Cloud Stinger
                                </h3>
                                <img className='section-image' src={quloqchin} alt="photo" />
                            </div>
                            <h4 className="section-title">
                                2 ₽
                            </h4>
                            <button className="section-subbtn_a">
                                <p className='button-btn'  > Add To Cart  </p>
                                <img className=' section-picture' src={savat} alt="rasm" />
                            </button>

                        </li>
                    </div>
                </ul>
                <ul className="main-list">
                    <li className="main-item">
                        <div className="main-box">
                            <h1 className="main-name">
                                Кресло INDI CA-1613A-1
                                5 ₽
                            </h1>
                            <img className='main-picture' src={require('../../Images/stul.png')} alt="Logo" />

                            <div className="main-subbox">
                                <button className="main-btn"> Add To Cart 
                                <img className='main-img' src={require('../../Images/savat1.png')} alt="" />
                                </button>
                                
                            </div>

                        </div>
                    </li>
<div className="main-subcard">
                    <li className="main-sublist">
                      <div className="main-subbox_a">
                        <h1 className="main-subname">               
Galaxy Tab S6
                        </h1>
                          <h2 className="main-subtitle">
                          25 ₽
                          </h2>
                          <div className="main-subbox_b">
                                <button className="main-subbtn"> Add To Cart 
                                <img className='main-img' src={require('../../Images/savat1.png')} alt="" />
                                </button>
                                
                            </div>   
                           
                      </div>
                    </li>
                    <li className="main-sublist">
                    <div className="main-subbox_a">
                        <h1 className="main-subname">               
Galaxy Tab S6
                        </h1>
                          <h2 className="main-subtitle">
                          25 ₽
                          </h2>
                          <div className="main-subbox_b">
                                <button className="main-subbtn"> Add To Cart 
                                <img className='main-img' src={require('../../Images/savat1.png')} alt="" />
                                </button>
                                
                            </div>   
                           
                      </div>
                    </li>
                    </div>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Section
