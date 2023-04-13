import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
import Review from './Review'
const ProductDetails = () => {
  const { productId } = useParams();
  
  const selected_products = useSelector((state) => state.product);
  const firstproduct = selected_products[0];
  const { brand, category, description, image, name, p_id, price} = firstproduct || { };
  const dispatch = useDispatch();
  
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
    <div className="ui grid container">
    {Object.keys(selected_products).length === 0 ? (
      <div>...Loading</div>
    ) : (
      <div>
        {/* Render current product card */}
        <div className="ui two column stackable center aligned grid">
            <div className="ui divider"></div>
          <div className="middle aligned row">
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
            .slice(0,4) // Skip the first product
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
    <div style={{marginTop:'40px',width:'100%'}}><Review></Review></div>
  </div>
  
  );
};

export default ProductDetails;