import React, { useCallback, useState, useEffect } from 'react';

import useEventListener from '../component/use-event-listener';
import Sort from '../component/sort';
import Loading from '../component/loading';
import ProductList from '../component/product-list';

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`http://localhost:3002/products?_sort=size&_order=desc&_page=${page}&_limit=10`);
        const products = await response.json();
        setProducts(products)
      }catch(error){
      }
    }

    fetchProducts();
  }, []);

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if(!loading){
        setPage(page+1);
      }
    }
  };
  useEventListener("scroll", handleScroll);

  useEffect(() => {
    setLoading(true);
    getProducts();
  }, [page]);

  const setFilter = useCallback(async (state) => {
    try {
      const response = await fetch(`http://localhost:3002/products?_sort=${state.item}&_order=${state.order}&_page=10&_limit=10`);
      const products = await response.json();
      setProducts(products)
    }catch(error){
    }
  }, []);

  const getProducts = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:3002/products?_page=${page}&_limit=10`);
      const _products = await response.json();
      setProducts([...products, ..._products]);
      setLoading(false);
    }catch(error){
    }
  });

  return (
    <>
      <div className="row">
        <Sort setFilter={setFilter}/>
      </div>
      <div className="row">
        <ProductList products={products}/>
      </div>
      <Loading show={loading}/>
    </>
  );
}

export default ProductContainer;
