import React from 'react';
import background from '../imgs/bg.png'; 
import BackButton from './Back'; 
import { useNavigate } from 'react-router-dom'; 
import Card from './Card';

const cardData = [
    { id: 1, image: '../imgs/pink-card.png' }, 
    { id: 2, image: '../imgs/pink-card.png' },
    { id: 3, image: '../imgs/pink-card.png' },
    { id: 4, image: '../imgs/pink-card.png' },
    { id: 5, image: '../imgs/pink-card.png' },
    { id: 6, image: '../imgs/pink-card.png' },
];

function CardPage() {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate(''); 
  };

  return (
    <div> 
      <img className='img1' src={background} alt="" />
      <BackButton onClick={handlePlayClick}/>
      <div className="card-container">
        {cardData.map((card) => (
          <Card key={card.id} /> // Use unique key for each card
        ))}
      </div>
    </div>
  );
}

export default CardPage;
