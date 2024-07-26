import React from 'react';
import './Card.css';
import useShareStore from '../Store/Store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ data }) => {
  const { cards, setCards } = useShareStore();

  const notify = () => toast("Wow so easy!");

  const handleAdd = (item) => {
    setCards([...cards, item]);
    notify();
  };

  if (!data) {
    return <div></div>;
  }


  
  return (
    <div className="card">
      <div className="container">
        <ToastContainer />
        <div className="card-box">
          <h3 className="card-name">{data.title}</h3>
          <img src={data.img} alt="photo" className="card-img" /> 
          <p className="card-text">{data.text}</p>
          <li className="card-item">
            <p className="card-money">{data.price}$</p>
            <button className="card-button" onClick={() => handleAdd(data)}>Enter</button>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Card;
