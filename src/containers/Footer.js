import React, { useState } from 'react';
import '../footer.css'
const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/review", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating, review }),
    });

    if (response.ok) {
      // Do something with the successful response
    } else {
      // Handle the error response
    }
  };

  return (
    <div className='card'  style={{width:'100%',height:'500px',marginTop:'700px',backgroundColor:'#E8E8E8'}}>

    <form onSubmit={handleSubmit}>
      <label htmlFor="rating" style={{color:'black',fontSize:'20px'}}>Rating:</label>
      <select value={rating} onChange={(event) => setRating(event.target.value)} >
    
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <label htmlFor="review" style={{color:'black',fontSize:'20px',paddingTop:'100px'}}>Review:</label>
      <textarea value={review} onChange={(event) => setReview(event.target.value)} id="review" style={{width:'80%'}} ></textarea>
  
      <button type="submit" style={{borderRadius:'70px',height:'50px',width:'50px',marginLeft: '1199px',marginTop: '-56px',backgroundColor:'black'}}><i className="fa fa-paper-plane" style={{fontSize:'30px',color:'white',marginLeft: '-10px'}}></i></button>
    </form>
    </div>
  );
};

export default ReviewForm;
