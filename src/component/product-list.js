import React, { useCallback } from 'react';
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col
} from 'shards-react';

import { timeSince } from '../helper/date';
import './product-list.css';

const ProductList = ({products, renderEnd, renderAds}) => {
  const hashCode = useCallback(s => s.split('').reduce((a,b) => (((a << 5) - a) + b.charCodeAt(0))|0, 0), []);
  return (
    <Container className="product-container">
      {products.map((product, key) => {
        if(renderAds && key % 20 === 0 && key !== 0){
          return (
            <Row className="mb-2" key={key}>
              <Col>
                {renderAds(hashCode(`${key}`))}
              </Col>
            </Row>
          )
        }else{
          return (<Row className="mb-2" key={key}>
            <Col>
              <Card className="card">
                <CardBody>
                  <CardTitle>
                  </CardTitle>
                  <span className="face" style={{fontSize:`${product.size}px`}}>{product.face}</span>
                  <p>${product.price}.00</p>
                  <Button>Buy Now</Button>
                </CardBody>
                <CardFooter className="date">{timeSince(new Date(product.date))}</CardFooter>
              </Card>
            </Col>
          </Row>)
        }
      })}
      { renderEnd && renderEnd() }
    </Container>
  );
}

export default ProductList;
