import React from 'react'
import './Box.css'
import photo from '../../Images/product-1.png'
const Box = () => {
  return (
    <div>
<div className="box  container">
     <div className="box-right">
       <img  className='box-img' src={photo} alt="rasm" />
     </div>
     <div className="box-left">
  <ul className="box-list">
    <li className="box-item">
        <p className="box-text">
        HyperX
        </p>
        <h2 className="box-name"> HyperX </h2>
        <h6 className="box-subname">
        Коротко о товаре
        </h6>
<p className="box-subtext">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo non possimus molestiae, ratione in at? Saepe ratione architecto neque asperiores voluptatibus odio hic. Totam omnis repellendus tenetur accusamus, ut nihil dolore blanditiis expedita amet quas culpa nobis ratione corporis maiores quia aperiam et fugit recusandae. Necessitatibus blanditiis earum perspiciatis quas.
</p>
<h4 className="box-money">
    2 ₽
</h4>
<div className="box-button">
    <button className="box-btn">Back To Products</button>
    <button className="box-subbutton">Add To Cart</button>
</div>

    </li>
  </ul>
     </div>
    
</div>

    </div>
  )
}

export default Box
