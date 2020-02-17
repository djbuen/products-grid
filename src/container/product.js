import React, { useState, useEffect } from 'react';
import { 
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Container, 
  Row, 
  Col 
} from 'shards-react';

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

  return (
    <>
      <div className="row">
        <Sort />
      </div>
      <div className="row">
        <ProductList/>
      </div>
    </>
  );
}

export default ProductContainer;
