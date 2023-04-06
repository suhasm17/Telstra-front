import React, { useState } from 'react';
import axios from 'axios';

const SearchProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`/search?q=${searchQuery}`);
      setProducts(response.data.products);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
       
        <input type="text" value={searchQuery} onChange={handleInputChange} class="form-control me-1" style={{ marginTop: '20px',borderRadius:'30px',alignContent:'centre',width:'400px',height:'60px',marginLeft:'492px' }}  placeholder="Type here" aria-label="submit"/>
    <button type="submit" style= {{width:'50px',height:'50px',background:'white',borderColor:'white',borderRadius:'70px',    marginLeft: '670px',marginTop: '-54px'}} size="lg"><i class="fa fa-search me-6" style={{fontSize:"30px",alignContent:'center',color:'black',marginLeft:'-10px'}} aria-hidden="true"></i></button>

      </form>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product._id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default SearchProducts;
