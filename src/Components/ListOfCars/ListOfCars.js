import React, { useEffect, useState } from 'react';
import '../../Styles/ListOfCars.css';
import { Car } from '../Car/Car';
import { Link } from 'react-router-dom';


export const ListOfCars = () => {
  useEffect( () =>  {
    fetchCarList();
  }, []); 

  const [cars, setCars] = useState([]);

  const fetchCarList = async () => {
    const data = await fetch(
      "https://localhost:5001/api/cars"
    );
    const cars = await data.json();
    setCars(cars);
  };

  return (
    <div className="ListOfCars mt-5 mx-auto">
      {cars.map(car => (
        <div key = {car.id} className="car m-5">
          <Link to={`/car/${car.id}`}>
            <Car
              src = {process.env.PUBLIC_URL + car.imagePath}
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
