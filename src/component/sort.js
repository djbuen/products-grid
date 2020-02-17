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

const Sort = ({setFilter}) => {
  const [open, setOpen] = useState(false);
  const [item, setActiveItem] = useState({ text: 'Sort', value: null });
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

  const clear = useCallback(() => {
    setActiveItem({ text: 'Sort', value: null });
  }, []);

  useEffect(() => {
    setFilter({
      item: item.value,
      order
    });
  }, [item, order]);

  const toggle = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <Container className="mt-5 mb-2">
      <Row>
        <Col md="6"></Col>
        <Col>
          <Dropdown open={open} toggle={toggle} className="d-table">
            <DropdownToggle>{item.text}</DropdownToggle>
            <DropdownMenu>
              {
                items.map((item, key) => (
                  <DropdownItem
                    key={key}
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
                active: 'ASC' === order
              })
            }
            onClick={()=>setOrder('ASC')}>
            asc
          </span>|
            <span className={
                classnames({
                  active: 'DESC' === order
                })
              }
              onClick={()=>setOrder('DESC')}>
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
