import React, { useEffect, useState } from 'react';
import CarMockData from '../../MockData/CarMockData';
import { Row, Col, Image } from 'react-bootstrap';

export const CarDetail = ({ match }) => {

  useEffect( () => {
    fetchCarById();
  });
  
  const [car, setCar] = useState({});

  // Make fetch request for Car with this ID
  const fetchCarById = () => {
    setCar(CarMockData[match.params.id]);
  };

  return (
    <div>
      <Row>
          <Col>
            <Image src={process.env.PUBLIC_URL + car.src} rounded />
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
