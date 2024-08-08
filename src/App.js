import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from './Menu';
import OrderList from './OrderList';
import ThemeToggle from './ThemeToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [order, setOrder] = useState([]);
  const [theme, setTheme] = useState('light');

  const addToOrder = (item) => {
    const existingItem = order.find(orderItem => orderItem.id === item.id);
    if (existingItem) {
      setOrder(order.map(orderItem =>
        orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
      ));
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setOrder(order.filter(item => item.id !== id));
    } else {
      setOrder(order.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <Container>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <h1 className="mt-3 mb-4 text-center">Fast Food Ordering App</h1>
        <Row className="menu-container">
          <Col md={12}>
            <Menu addToOrder={addToOrder} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6}>
            <OrderList order={order} setOrder={setOrder} updateQuantity={updateQuantity} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
