import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { MDBIcon } from 'mdbreact';

const SearchProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // const [products] = useState('');
  const history = useHistory();
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/search?q=${searchQuery}`);
      const products = response.data.products;
      history.push(`/search-results?q=${searchQuery}`, { products });
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    // <div>
    //   <form>
       
    //     <input type="text" value={searchQuery} onChange={handleInputChange} class="form-control me-1" style={{ marginTop: '20px',borderRadius:'30px',alignContent:'centre',width:'400px',height:'60px',marginLeft:'492px' }}  placeholder="Type here" aria-label="submit"/>
    // <button onClick={handleSubmit} style={{height:'50px',width:'40px',borderRadius:'70px',marginTop:'-55px'}} size="lg">
    // <i className="fa fa-search me-6" style={{fontSize:"27px",alignContent:'center',color:'gray',marginLeft:'-10px'}} aria-hidden="true"></i></button>

    //   </form>
    // </div>


    <div class="input-group" style={{display:'flex', justifyContent:'center', flexDirection: 'row', marginTop:'40px'}}>
      <div class="form-outline" style={{}}>
        <input type="search" value={searchQuery} onChange={handleInputChange} style={{borderRadius:'30px',alignContent:'centre',width:'400px',height:'40px'}} id="form1" placeholder='  Search Product' class="form-control" />
      </div>
      <div onClick={handleSubmit}  style={{display:'flex',  justifyContent:'center', alignItems:'center', marginLeft:'5px'}}><MDBIcon style={{fontSize:'25px',color:'#676767'}} onClick={handleSubmit} className='me-4' icon='search' /></div>
    </div>
  );
};

export default SearchProducts;
