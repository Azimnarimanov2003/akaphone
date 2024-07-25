import React from 'react';
import './Card.css';
import useShareStore from '../Store/Store';

const Card = ({ data }) => {
  // useShareStore Hook-ini komponent ichida chaqiring
  const { cards, setCards } = useShareStore();

  const handleAdd = (item) => {
    setCards([...cards, item]);
  };

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
              <button className="card-button" onClick={() => handleAdd(data)}> Enter</button>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
