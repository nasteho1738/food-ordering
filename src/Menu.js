import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const menuItems = [
  { id: 1, name: 'Burger', price: 5.99, image: '/1.jpg' },
  { id: 2, name: 'Fries', price: 2.99, image: '/2.png' },
  { id: 4, name: 'Pizza', price: 8.99, image: '/4.jpg' },
];

function Menu({ addToOrder }) {
  return (
    <Row>
      {menuItems.map(item => (
        <Col md={4} key={item.id}>
          <Card className="mb-3">
            <Card.Img variant="top" src={item.image} alt={item.name} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>${item.price.toFixed(2)}</Card.Text>
              <Button variant="primary" onClick={() => addToOrder(item)}>Add to Order</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Menu;
