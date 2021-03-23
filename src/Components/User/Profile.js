import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const orderList = [
  {
    id: "a1723",
    model: "asawfwf",
    pickuptime: "27.03.2021:1400|"
  },
  {
    id: "as34da113",
    model: "iuhgvbjh",
    pickuptime: "08.04.2021:1700|"
  },
  {
    id: "a17zfea23",
    model: "qwerty",
    pickuptime: "14.04.2021:1000|"
  }
]

export const Profile = () => {

  useEffect( () => {
    fetchOrders();
  })
  const [orders, setOrders] = useState([]);
  
  const fetchOrders = () => {
    setOrders(orderList);
  }

  return (
    <div className="Profile m-5">
      <Container>
        <Row>
          <Col>
            <h1>USER NAME</h1>
          </Col>
          <Col>
            <ul>
              {orders.map( order => (
                <li key={order.id}>{order.model}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
