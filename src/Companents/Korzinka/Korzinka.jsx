import React from 'react';
import useShareStore from '../Store/Store';
import './Korzinka.css';

export default function Korzinka() {
  const { cards, setCards } = useShareStore();

  const deleteCards = (id) => {
    const updatedCards = cards.filter(item => item.id !== id);
    setCards(updatedCards);
  };

  return (
    <div className='korzinka container'>
      <h1> "Foods" sizning buyurtmalaringiz jadvali </h1>
      {cards && cards.map((item, index) => (
        <div className="card" key={index}>
          <h1>{item.title}</h1>
          <img className='korzinka-img' src={item.img} alt="rasm" />
          <h3>{item.price}</h3>
          <button className="card-btn" onClick={() => deleteCards(item.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}
