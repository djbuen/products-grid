import React from 'react';

import {
  Container,
  Row, 
  Col 
} from 'shards-react';

import './loading.css';

const Loading = ({show}) => {
  return (
    <Container>
      <Row>
        <Col>
          { 
            show && <h3 className="loading">loading...</h3>
          }
        </Col>
      </Row>
    </Container>
  )
}

export default Loading;
