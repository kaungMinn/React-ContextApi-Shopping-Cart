import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="glass-bg min-vh-100 d-flex justify-content-center align-items-center">
      <Container className="glass-container rounded-lg shadow-lg p-5">
        <h1 className="text-center mb-4">404</h1>
        <p className="text-center mb-4">Page not found</p>
        <div className="d-flex justify-content-center">
          <Button href="/" variant="outline-light">Go Back Home</Button>
        </div>
        <div className="glass-effect"></div>
      </Container>
    </div>
  );
};

export default NotFound;
