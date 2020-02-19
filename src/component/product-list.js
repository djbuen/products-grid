import React, { useCallback } from 'react';
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

const ProductList = ({products, renderEnd, renderAds}) => {
  const hashCode = useCallback(s => s.split('').reduce((a,b) => (((a << 5) - a) + b.charCodeAt(0))|0, 0), []);
  return (
    <Container className="product-container">
      {products.map((product, key) => {
        if(renderAds && key % 20 === 0 && key !== 0){
          return renderAds(hashCode(`${key}`))
        }else{
          return (<Row className="mb-2" key={key}>
            <Col>
              <Card style={{maxWidth: "300px"}}>
                <CardBody>
                  <CardTitle>
                    <span style={{fontSize:`${product.size}px`}}>{product.face}</span>
                  </CardTitle>
                  <p>${product.price}.00</p>
                </CardBody>
                <CardFooter style={{fontSize: '10px'}}>{timeSince(new Date(product.date))}</CardFooter>
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
