import React from 'react';

import {
  Container,
  Row, 
  Col 
} from 'shards-react';

const Loading = ({show}) => {
  return (
    <Container>
      <Row>
        <Col>
          { 
            show 
              &&   
            <>
              <i class="fa-3x fas fa-spinner fa-pulse"></i>
            </>
          }
        </Col>
      </Row>
    </Container>
  )
}

export default Loading;
