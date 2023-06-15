import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactStars from "react-rating-stars-component";
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

  function getReviewListHeight(reviews) {
    return reviews.length > 4 ? '300px' : `${reviews.length * 80}px`;
  }

  return (
    <div>
      <div class="card" style={{marginBottom:'50px'}}>
      <div class="card-header px-3" style={{fontFamily: "'Sofia Sans Condensed', 'sans-serif'", fontSize: '30px'}}>Reviews By Other Customers</div>
          {reviews.length === 0 ? (
            <div class="alert alert-info" role="alert" style={{margin:'10px'}}>
              No reviews yet! Please review the product.
            </div>
          ) : (
            <ul class="list-group list-group-light list-group-small" style={{height: getReviewListHeight(reviews), overflow: "auto"}}>
              {reviews.map((review) => (
                <li class="list-group-item px-3" key={review.id}>
                  <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={review.rating}
                    activeColor="#ffd700"
                  />
                  <p>{review.review}</p>
                </li>
              ))}
            </ul>
            )}
      </div>

    </div>
  );
}

export default ProductReviews;
