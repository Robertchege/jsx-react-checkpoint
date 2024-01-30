import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import product from './product';

const firstName = "Your Name"; // Replace with your name

function App() {
  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Image />
          <Card.Title><Name /></Card.Title>
          <Card.Subtitle className="mb-2 text-muted"><Price /></Card.Subtitle>
          <Card.Text><Description /></Card.Text>
        </Card.Body>
      </Card>
      <p>{firstName ? `Hello, ${firstName}` : "Hello, there!"}</p>
    </div>
  );
}

export default App;
