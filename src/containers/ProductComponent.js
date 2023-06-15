import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const ProductsList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map(function c(product) {
    const { p_id, brand, name, image, price } = product;
    return (

      <div className="four wide column" key={p_id}>
        <Link to={`/products/${p_id}`} className="Link">
          <div className="ui link cards">
            <div className="card" style={{width:'600px' ,borderRadius: '30px', padding: '10px' }}>
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="content">
                <div className="header" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: '25px' }}>{brand}</div>
                <div className="header" style={{background:'white',fontFamily:'Poppins, sans-serif',fontWeight:'900',fontSize:'25px'}}>{name}</div>
                <div className="meta price" style={{marginTop:'10px', background:'white',fontFamily:'Poppins, sans-serif',fontWeight:'300',fontSize:'25px'}}>{price}</div>
                <Button style={{background:'#E8D5C4',width:'90px',height:'30px',borderRadius:'35px'}}> <div style={{color:'black',fontWeight:'600',fontFamily:'Sofia-Sans, sans-serif',fontSize:'14px'}} >Buy Now</div></Button>
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
