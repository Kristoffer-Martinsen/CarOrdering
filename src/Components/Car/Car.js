import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Car = (props) => {
  return (
    <div className="Car">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.model}</Card.Title>
          <Card.Text>
            {props.year}
            <br></br>
            {props.price} pr mnd
          </Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
