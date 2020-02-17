import React from 'react';
import { 
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Container, 
  Row, 
  Col 
} from 'shards-react';

import { timeSince } from '../helper/date';

const ProductList = ({products}) => {
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
