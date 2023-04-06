import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductsList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map(function c(product) {
    const { p_id, brand, name, image, price } = product;
    return (

      <div className="four wide column" key={p_id}>
        <Link to={`/products/${p_id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="content">
                <div className="header">{name}</div>
                <div className="meta price">{price}</div>
                <div className="meta">{brand}</div>
                
              </div>
            </div>
            
          </div>
        </Link>
        
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductsList;
