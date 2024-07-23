import React from 'react'
import lenovo from '../../Images/lenovo.png'
import savat from '../../Images/savat1.png'
import './Section.css'
import quloqchin from '../../Images/quloqchin.png'
import soat from '../../Images/soat.png'
const Section = () => {
    return (
        <div>
            <div className="section  container">

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
                                <p> Add To Cart  </p>
                                <img className=' section-picture' src={savat} alt="rasm" />
                            </button>

                        </li>
                    </div>
                </ul>

            </div>
        </div>
    )
}

export default Section
