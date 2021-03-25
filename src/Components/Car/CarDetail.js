import React, { useEffect, useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

export const CarDetail = ({ match }) => {

  useEffect( () => {
    fetchCarById();
  }, []);
  
  const [car, setCar] = useState({});

  const fetchCarById = async () => {
    const data = await fetch(
      `https://localhost:5001/api/cars/${match.params.id}`
    )
    const car = await data.json();
    setCar(car);
  };

  return (
    <div>
      <Row>
          <Col>
            <Image src={process.env.PUBLIC_URL + car.imagePath} rounded />
          </Col>
          <Col>
            <ul>
              <li>Model: {car.model}</li>
              <li>Year: {car.year}</li>
              <li>Transmission: {car.transmission}</li>
              <li>Fuel: {car.fuel}</li>
              <li>Storage: {car.storage}</li>
              <li>Price per month: {car.price},-</li>
            </ul>
          </Col>
        </Row>
    </div>
  )
}
