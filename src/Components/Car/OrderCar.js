import React, { useEffect, useState } from 'react';
import '../../Styles/OrderCar.css'; 
import DatePicker from 'react-datetime-picker';
import { CarDetail } from './CarDetail';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export const OrderCar = ({match}) => {
  const [dateTime, setDateTime] = useState(new Date());

  return (
    <div className="OrderCar m-5">
      <Row>
        <Col>
          <h1>Order</h1>
          <CarDetail match={match}/>
        </Col>
        <Col className="pickup-date">
          <Row>
            <DatePicker 
              onChange={setDateTime}
              value={dateTime}
            />
            <Button className="mx-2">Order</Button>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
