import React from 'react';
import './Card.css';



const Card = ({ data }) => {
   
    if (!data) {
      return <div></div>;
    }
  return (
    <>
      <div className="card">
        <div className="container">
          <div className="card-box">
          <h3 className="card-name">
              {data.title}
            </h3>
            <img src={data.img} alt="photo" className="card-img" />
           
            <p className="card-text">{data.text}</p>
            <li className="card-item">
              <p className="card-money">{data.price}$</p>
              <button className="card-button"> Enter</button>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
