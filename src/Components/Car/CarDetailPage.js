import React from 'react';
import { Container } from 'react-bootstrap';
import '../../Styles/CarDetail.css';
import { Link } from 'react-router-dom';
import { CarDetail } from './CarDetail';

export const CarDetailPage = ({ match }) => {
  return (
    <div className="CarDetail mt-5">
      <Container>
        <CarDetail match={match}/>
        <Link className="link-to-order mt-5" to={`/car/order-page/${match.params.id}`}>Order</Link>
      </Container>
    </div>
  )
}
