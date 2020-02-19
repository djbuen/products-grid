import React, { useCallback, useState, useEffect } from 'react';

import useEventListener from '../component/use-event-listener';
import Sort from '../component/sort';
import Loading from '../component/loading';
import ProductList from '../component/product-list';

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    item: null,
    order: null,
    page: 1
  });

  useEffect(() => {
    async function fetchProducts() {
      try {
        getProducts();
      }catch(error){
      }
    }
    fetchProducts();
  }, []);

  const handleScroll = useCallback(() => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if(!loading){
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
      const response = await fetch(`http://localhost:3002/products?_sort=${state.item}&_order=${state.order}&_page=${state.page}&_limit=10`);
      const _products = await response.json();
      setProducts([...products, ..._products]);
      setLoading(false);
    }catch(error){
    }
  });

  useEffect(() => {
    setLoading(true);
    getProducts();
  }, [state]);

  const _setFilter = useCallback(async (_state) => {
    setProducts([]);
    setState({ ..._state, page: 1 });
  });

  return (
    <>
      <Sort setFilter={_setFilter}/>
      <ProductList products={products}/>
      <Loading show={loading}/>
    </>
  );
}

export default ProductContainer;
