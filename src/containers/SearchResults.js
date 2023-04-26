import { useLocation } from 'react-router-dom';
import { useDispatch} from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import { useState, useEffect } from 'react';

const SearchResults = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [products_array, setProductsArray] = useState(location.state.products);

  useEffect(() => {
    setProductsArray(location.state.products);
    dispatch(setProducts(location.state.products));
  }, [dispatch,location]);

  return (
    <div>
      {products_array.length > 0 ? (
        <div className="ui grid container">
          <ProductComponent />
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
