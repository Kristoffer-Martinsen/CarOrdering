import React, { useEffect, useState } from 'react';
import '../../Styles/ListOfCars.css';
import { Car } from '../Car/Car';
import { Link } from 'react-router-dom';
import CarMockData from '../../MockData/CarMockData';


export const ListOfCars = () => {
  useEffect( () =>  {
    fetchCarList();
  }, []); 


  const [cars, setCars] = useState([]);

  
  // Needs to be Async when making API calls later
  const fetchCarList = () => {
    setCars(CarMockData);
  };


  return (
    <div className="ListOfCars mt-5 mx-auto">
      {cars.map(car => (
        <div key = {car.id} className="car m-5">
          <Link to={`/car/${car.id}`}>
            <Car
              src = {process.env.PUBLIC_URL + car.src}
              year = {car.year}
              model = {car.model}
              price = {car.price}
            />
          </Link>
        </div>
        ))}
      </div>
  )
}
