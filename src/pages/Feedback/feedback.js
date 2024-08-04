import React from 'react';
import './feedback.css';
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";


const Feedback = () => {
  const data = [
    {
      id: "1",
      src: img1,
      name: "Jenny Wilson",
      rating: "⭐⭐⭐⭐⭐",
      review: "The food was excellent and so was the service. I had mushroom risotto with scallops which was awesome. I had a burger over greens which was also very good. They were very conscientious about gluten allergies."
    },
    {
      id: "2",
      src: img2,
      name: "Dianne Russell",
      rating: "⭐⭐⭐⭐",
      review: "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service."
    },
    {
      id: "3",
      src: img3,
      name: "Devon Lane",
      rating: "⭐⭐⭐⭐",
      review: "Normally wings and wings but are lean meaty and tender."
    }
  ];


  return (
    <div className="feedback-container">
      <h2 className="feedback-title">Customer's Feedback</h2>
      {data.map(feedback => (
        <div key={feedback.id} className="feedback-item">
          <div className="feedback-header">
            <img src={feedback.src} alt={feedback.name} className="feedback-image" />
            <h3 className="feedback-name">{feedback.name}</h3>
          </div>
          <div className="feedback-content">
            <p className="feedback-rating">{feedback.rating}</p>
            <p className="feedback-review">{feedback.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
