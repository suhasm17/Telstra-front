import { useState } from 'react';

function ReviewForm() {
  const [formData, setFormData] = useState({
    p_id: '',
    reviews: '',
    rating: '',
  });
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data.message);
      setSuccessMsg('Review added successfully!');

      setFormData({
        p_id: '',
        reviews: '',
        rating: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
  
<div className='card' style={{height:'100%',padding:'30px'}}>
{successMsg && (
        <div className='alert alert-success' role='alert'>
          {successMsg}
          </div>
      )}
    <form onSubmit={handleSubmit} >
      
<label style={{marginRight:'20px',fontSize:'20px',display:'flex',color:'black'}}> 
        Rating : 
        <input style={{marginLeft:'90px',width:'80%'}}
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
      </label>
      <div style={{display:'flex',marginTop:'20px'}}>
   <label style={{fontSize:'20px',color:'black'}}>
        Review :
        <textarea style={{marginLeft:'160px',width:'100%'}} 
          name="reviews"
          value={formData.reviews}
          onChange={handleChange}
          
        />
        
      </label>
      <button type="submit" style={{width:'auto',borderRadius:'70px',borderColor:'white',marginLeft:'160px',marginTop:'25px'}}><i class="fa fa-paper-plane" aria-hidden="true" style={{fontSize:'30px',display:'contents'}}></i>
</button>
</div>
    </form>
    </div>
  );
}

export default ReviewForm;