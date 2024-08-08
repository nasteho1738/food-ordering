import React, { useState } from 'react';
import { ListGroup, Button, Card, Form, Row, Col } from 'react-bootstrap';

function OrderList({ order, setOrder, updateQuantity }) {
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');

  const total = order.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrderConfirm = () => {
    if (order.length > 0 && paymentMethod) {
      setIsOrderConfirmed(true);
    }
  };

  const handleOrderReset = () => {
    setOrder([]);
    setIsOrderConfirmed(false);
    setPaymentMethod('');
  };

  return (
    <Card className="order-list mt-4">
      <Card.Body>
        <Card.Title>Your Order</Card.Title>
        <ListGroup variant="flush">
          {order.map(item => (
            <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
              <div>
                {item.name} - ${item.price.toFixed(2)} x {item.quantity}
              </div>
              <div>
                <Button variant="outline-primary" size="sm" className="ml-2" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                <Button variant="outline-primary" size="sm" className="ml-2" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        {order.length > 0 && (
          <>
            <Card.Footer className="text-right">
              <h3>Total: ${total.toFixed(2)}</h3>
            </Card.Footer>
            <Card.Body>
              <Form.Group>
                <Form.Label>Select Payment Method</Form.Label>
                <Form.Control
                  as="select"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Debit Card">Debit Card</option>
                  <option value="PayPal">Swish</option>
                </Form.Control>
              </Form.Group>
            </Card.Body>
            <Row className="mt-3 justify-content-between">
              <Col xs="auto">
                <Button variant="warning" onClick={handleOrderReset}>Reset Order</Button>
              </Col>
              <Col xs="auto">
                <Button variant="success" onClick={handleOrderConfirm} disabled={!paymentMethod}>
                  Confirm Order
                </Button>
              </Col>
            </Row>
          </>
        )}
      </Card.Body>
      {order.length > 0 && isOrderConfirmed && (
        <Card.Body>
          <h4>Thank you for your order!</h4>
          <p>Your food will be ready shortly.</p>
        </Card.Body>
      )}
    </Card>
  );
}

export default OrderList;


