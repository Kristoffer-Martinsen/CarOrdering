import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarComponent } from './Components/Navbar/NavbarComponent';
import { ListOfCars } from './Components/ListOfCars/ListOfCars';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CarDetailPage } from './Components/Car/CarDetailPage';
import { Login } from './Components/User/Login';
import { Register } from './Components/User/Register';
import { Profile } from './Components/User/Profile';
import { PageNotFound } from './Components/NotFound/PageNotFound';
import { OrderCar } from './Components/Car/OrderCar';

function App() {
  return (
    <Router>
      <div className="app">
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={ListOfCars} />
          <Route exact path="/car/:id" component={CarDetailPage} />
          <Route exact path="/car/order-page/:id" component={OrderCar} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
