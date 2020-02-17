import React, { useCallback, useState, useEffect } from 'react';

import Sort from '../component/sort';
import ProductList from '../component/product-list';

const ProductContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('http://localhost:3002/products?_sort=size&_order=desc');
        const products = await response.json();
        setProducts(products)
      }catch(error){
      }
    }

    fetchProducts();
  }, []);

  const setFilter = useCallback(async (state) => {
    try {
      const response = await fetch(`http://localhost:3002/products?_sort=${state.item}&_order=${state.order}`);
      const products = await response.json();
      setProducts(products)
    }catch(error){
    }
  }, []);

  return (
    <>
      <div className="row">
        <Sort setFilter={setFilter}/>
      </div>
      <div className="row">
        <ProductList products={products}/>
      </div>
    </>
  );
}

export default ProductContainer;
