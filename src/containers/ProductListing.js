import React, { useEffect, useCallback } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();


// eslint-disable-next-line
  const fetchProducts = useCallback (async () => {
    const response = await axios
      .get("http://localhost:5000/Phone")
      .catch((err) => {
        console.log("Err: ", err);
        });
    dispatch(setProducts(response.data));
      });
 
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  

  console.log("Products :", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
