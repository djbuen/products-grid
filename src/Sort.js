import React, { useState, useEffect, useCallback } from 'react';
import classnames from "classnames";
import {
    Col,
    Container,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Row
} from "shards-react";

const Sort = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setActiveItem] = useState({ text: 'Sort', value: null });
  const [order, setOrder] = useState(null);
  const items = [
    { 
      text: 'Size',
      value: 'size',
    },
    { 
      text: 'Price',
      value: 'price',
    },
    { 
      text: 'Date',
      value: 'date',
    }
  ];

  useEffect(() => {
  }, []);

  const toggle = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const clear = useCallback(() => {
    setActiveItem({ text: 'Sort', value: null });
  }, []);

  return (
    <Container className="mt-5 mb-2">
      <Row>
        <Col md="6"></Col>
        <Col>
          <Dropdown open={open} toggle={toggle} className="d-table">
            <DropdownToggle>{selectedItem.text}</DropdownToggle>
            <DropdownMenu>
              {
                items.map((item) => (
                  <DropdownItem 
                    onClick={() => setActiveItem({...item})}>
                    {item.text}
                  </DropdownItem>
                ))
              }
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
      <Row className="sort-order">
        <Col md="6"></Col>
        <Col md="1">
          <span className={
              classnames({
                active: 'asc' === order
              })
            }
            onClick={()=>setOrder('asc')}>
            asc
          </span>|
            <span className={
                classnames({
                  active: 'desc' === order
                })
              }
              onClick={()=>setOrder('desc')}>
            desc
          </span>|
            <span 
              onClick={()=>{
                setOrder(null)
                clear()
              }
             }>
            clear
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default Sort;
