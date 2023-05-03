import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeh, faFrown, faSmile } from '@fortawesome/free-solid-svg-icons';

function ProductReviews({ productId }) {
  const [reviews, setReviews] = useState([]);

 
  useEffect(() => {
    axios.get(`http://localhost:5000/reviews/${productId}`)
      .then((response) => {
        console.log(response.data)
        const reviewsData = response.data || [];
        setReviews(reviewsData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  // Define an icon based on the review rating
  const getRatingIcon = (rating) => {
    if (rating < 3) {
      return <FontAwesomeIcon icon={faFrown} style={{fontSize:"30px",color:'grey'}} />;
    } else if (rating < 4) {
      return <FontAwesomeIcon icon={faMeh} style={{fontSize:"30px",color:'grey'}}/>;
    } else {
      return <FontAwesomeIcon icon={faSmile} style={{fontSize:"30px",color:'grey'}}/>;
    }
  };
// Add a new review
// eslint-disable-next-line


  // Do something with the reviews data, e.g. render them
  return (
    <div>

    <div className='card' style={{width: '100%', height: '100%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', borderRadius: '10px',padding:'30px'}}>
      <h2>Review History</h2>
      <ul> 
        {reviews.map((review) => (
          
          <li key={review.id}>
          <div style={{paddingTop:'15px'}}>
            {getRatingIcon(review.rating)}</div>
            <div style={{borderBottom: '2px solid #ddd',paddingBottom:'15px'}}>
            <p >{review.rating}</p>
            <p style={{fontSize:'15px'}}>{review.review}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default ProductReviews;
