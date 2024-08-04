import React from 'react';
import './card.css';



const Card = ({ img , title, value, percentage, isPositive }) => {
 

  return (
    <div className="card">
          <img src={img} alt={title} className="card-image" />
          <p className="card-title">{title}</p>
      <div className="card-content">
        <h1 className="card-value">{value}</h1>
        <p className={`card-percentage ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? '▲' : '▼'} {percentage}
        </p>
      </div>
    </div>
  );
};

export default Card;
