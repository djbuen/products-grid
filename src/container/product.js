import React, { useCallback, useState, useEffect } from 'react';

import useEventListener from '../component/use-event-listener';
import Sort from '../component/sort';
import Loading from '../component/loading';
import ProductList from '../component/product-list';

import './product.css';

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [end, setEnd] = useState(false);
  const [state, setState] = useState({
    item: null,
    order: null,
    page: 1,
  });

  //on mount
  useEffect(() => {
    async function fetchProducts() {
      try {
        getProducts();
      }catch(error){
      }
    }
    fetchProducts();
  }, []);

  //on state change
  useEffect(() => {
    setLoading(true);
    getProducts();
  }, [state]);

  const handleScroll = useCallback(() => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if(!loading && !end){
        setState({
          ...state,
          page: state.page+1
        });
      }
    }
  });
  useEventListener("scroll", handleScroll);

  const getProducts = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:3002/products?_sort=${state.item}&_order=${state.order}&_page=${state.page}&_limit=100`);
      const _products = await response.json();
      if(_products.length === 0){
        setEnd(true);
      }else{
        setProducts([...products, ..._products]);
      }
      setLoading(false);
    }catch(error){
    }
  });

  //reset to initial state if new filter selected
  const _setFilter = useCallback(async (_state) => {
    setProducts([]);
    setState({ ..._state, page: 1 });
    setEnd(false);
  });

  return (
    <>
      <Sort setFilter={_setFilter}/>
      <ProductList
        products={products}
        renderAds={(key)=>(<img key={key} className="ad" src={`http://localhost:3002/ads/?r=${key}`}/>)}
        renderEnd={() => {
            let _return=<></>;
            if(end){
              _return = (<h5>~end of catalogue~</h5>)
            }
            return _return;
          }
        }/>
      <Loading show={loading}/>
    </>
  );
}

export default ProductContainer;
