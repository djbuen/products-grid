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

import { timeSince } from './helper/date';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    async function fetchProducts() {
      try {
        const response = await fetch('http://localhost:3002/products');
        const products = await response.json();
        setProducts(products)
      }catch(error){
      }
    }

    fetchProducts();
  }, []);

  return (
    <Container className="product-container">
      {products.map(product => (
        <Row className="mb-2" key={product.id}>
          <Col>
            <Card style={{ maxWidth: "300px" }}>
              <CardBody>
                <CardTitle>
                  <span style={{fontSize:`${product.size}px`}}>{product.face}</span>
                </CardTitle>
                <p>${product.price}.00</p>
              </CardBody>
              <CardFooter style={{fontSize: '10px'}}>{timeSince(new Date(product.date))}</CardFooter>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default ProductList;
