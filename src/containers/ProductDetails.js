import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
// import Review from './Review'
const ProductDetails = () => {
  const { productId } = useParams();
  
  const selected_products = useSelector((state) => state.product);
  const firstproduct = selected_products[0];
  const { category, description, image, name, p_id, price} = firstproduct || { };
  const dispatch = useDispatch();
  const [productID, setProductID] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setProductID(productID)
    const data = { p_id, review, rating };
    fetch('http://localhost:5000/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }
  
  const fetchProductDetail = async (productId) => {
    const response = await axios
      .get(`http://localhost:5000/products/${productId}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };


  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };// eslint-disable-next-line
  }, [productId]);
  return (
    <div className="ui grid container" >
    {Object.keys(selected_products).length === 0 ? (
      <div>...Loading</div>
    ) : (
      <div>

        {/* Render current product card */}
        <div className="ui two column stackable center aligned grid">
            <div className="ui divider"></div>
          <div className="middle aligned row" style={{marginBottom:'100px'}}>
            <div className="column lp">
              <img className="ui fluid image" src={image} alt="img" />
            </div>
            <div className="column rp">
              <h1>{name}</h1>
              <h2>
                <a className="ui teal tag label" href="/">
                  {price}
                </a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              
              </div>
          
            </div>
          </div>
        </div>
        
        <div className="ui stackable three column grid">
       
          {/* Get array of product objects from selected_products */}
          {Object.values(selected_products)
            .slice(1) // Skip the first product
            .map(product => (
              <div className="four wide column" key={product.p_id}>
        <Link to={`/products/${product.p_id}`}>

          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="content">
                <div className="header">{product.name}</div>
                <div className="meta price">{product.price}</div>
                <div className="meta">{product.brand}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      
            ))}
        </div>
      </div>
   
      
    )}
    <div style={{marginTop: '40px', width: '100%'}}>
  <Container>
    <div className='card' style={{width: '100%', height: '100%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', borderRadius: '10px'}}>
      <div className='card__body'>
        <form onSubmit={handleSubmit} style={{padding: '30px'}}>
          <h2 style={{paddingBottom: '30px', borderBottom: '2px solid #ddd'}}>Add your Review Here</h2>
          <div style={{display: 'flex', alignItems: 'center', paddingBottom: '30px'}}>
            <label htmlFor="rating" style={{fontSize: '24px', color: 'black', marginRight: '20px'}}>Rating:</label>
            <select
              id="rating"
              name="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              style={{width: '50%'}}
            >
              <option value="">--Select--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', paddingBottom: '30px'}}>
            <label htmlFor="review" style={{fontSize: '24px', color: 'black', paddingBottom: '10px'}}>Review:</label>
            <textarea
              id="review"
              name="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              style={{width: '100%', height: '150px', padding: '10px', borderRadius: '5px', border: '1px solid #ddd'}}
            />
          </div>
          <button 
  style={{ 
    width: '15%', 
    padding: '8px', 
    borderRadius: '5px', 
    fontSize: '16px', 
    backgroundColor: '#4bb9e1', 
    color: 'white', 
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', 
    border: 'none',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = '#3da2c2';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = '#4bb9e1';
  }}
>
  Submit
</button>


        </form>
      </div>
    </div>
  </Container>
</div>
  </div>
  
  );
};

export default ProductDetails;