
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
import Review from './Review'
import ReactStars from "react-rating-stars-component";
import { MDBIcon } from 'mdbreact';
const ProductDetails = () => {
  const { productId } = useParams();
  
  const selected_products = useSelector((state) => state.product);
  const firstproduct = selected_products[0];
  const { category, description, image, name, p_id, price} = firstproduct || { };
  const dispatch = useDispatch();
  const [productID, setProductID] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setProductID(productID)
    console.log(rating)
    console.log(review)
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
        <div class="card mb-3"  style={{maxWidth:'80%', height: '500px',display:'flex', justifyContent:'center', padding:'30px'}}>
          <div class="row g-0" style={{}}>
            <div class="col-md-4">
            <img className="ui fluid image" style={{height: "100%", width: "100%", objectFit: "cover", objectPosition: "center",}} src={image} alt="img" />
            </div>
            <div class="col-md-8">
              <div class="card-body" style={{display:'flex', flexDirection: 'column' ,justifyContent: 'left', alignContent:'flex-start', alignSelf: 'flex-start',marginLeft:'30px'}}>
                <h1 class="card-title" style={{fontFamily: 'Sora', fontSize: '50px', marginBottom:'50px'}}>{name}</h1>
                <p class="card-text" style={{marginBottom:'40px', fontFamily:'Sora', fontWeight: '300px'}}>
                {description}
                </p>
                <h2 style={{marginBottom:'30px', fontFamily:'Sora', fontWeight: '300px', fontSize:'30px'}}>
                    {price}
                </h2>
                <div style={{display:'flex', justifyContent:'center'}}> 
                <button style={{ width:'300px',height:'50px', border: 'None', marginRight:'20px', backgroundColor: '#1CBD97', borderRadius:'10px'}}><a href='/'  style={{color:'white', textDecoration:'None', fontFamily: "'Sofia Sans'", fontSize: '25px', fontWeight: '400px'}}><MDBIcon style={{fontSize:'20px',color:'#000000'}} className='me-4' icon='fire' />Buy Now</a></button>
                <button style={{ width:'300px',height:'50px', border: 'None', marginLeft:'20px', backgroundColor: '#DDCB26', borderRadius:'10px'}}><a href='/'  style={{color:'white', textDecoration:'None', fontFamily: "'Sofia Sans'", fontSize: '25px', fontWeight: '400px'}}><MDBIcon style={{fontSize:'20px',color:'#000000'}} className='me-4' icon='shopping-cart' />Add To Cart</a></button>

                </div>
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
  <div class="card">
  <div class="card-header">Add Your Review</div>
  <div class="card-body">
    <h5 class="card-title">Rate the product</h5>
    <ReactStars
      count={5}
      onChange={(e) => setRating(toString(e))}
      size={24}
      activeColor="#ffd700"
    />
    <p class="card-text">Review</p>
    <div class="form-outline">
      <input type="text" id="typeText" class="form-control" value={review} onChange={(e) => setReview(e.target.value)} />
      <label class="form-label" for="typeText">Text input</label>
    </div>
    <button type="button" onClick={handleSubmit} class="btn btn-primary">Submit</button>
  </div>
</div>
</div>
<div style={{marginTop: '40px', width: '100%'}}> <Review productId={productId}></Review> </div>
  </div>
  
  );
};

export default ProductDetails;