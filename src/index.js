import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './navbar/navbar';
import Home from './home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Motor from './motor/motor';
import Caravan from './caravan/caravan';
import Tuning from './tuning/tuning';
import UsedCar from './usedCar/usedCar';
import MotorsDetails from './CarDetails/motorsDetails';
import Camping from './campingPlace/camping';
import CaravanDetails from './CarDetails/caravanDetails';
import CampingDetails from './campingPlace/campingDetails';
import TunedDetails from './CarDetails/tunedDetails';
import UsedCarDetails from './CarDetails/usedCarDetails';
import SignIn from './loginPage/signIn';
import DisplayNavbar from './navbar/displayNavbar';
import SignUp from './loginPage/signUp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <DisplayNavbar>
      <Navbar />
    </DisplayNavbar>
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="home" element={<Home />} />
      <Route path="home2" element={<Home />} />
      <Route path="motor" element={<Motor />} />
      <Route path='caravan' element={<Caravan />} />
      <Route path='tuning' element={<Tuning />} />
      <Route path='usedCar' element={<UsedCar />} />
      <Route path='camping' element={<Camping />} />
      <Route path='MotorsCar-details/:id' element={<MotorsDetails />} />
      <Route path='Caravan-details/:id' element={<CaravanDetails />} />
      <Route path='Camping-details/:id' element={<CampingDetails />} />
      <Route path='Tuning-details/:id' element={<TunedDetails />} />
      <Route path='UsedCar-details/:id' element={<UsedCarDetails />} />
    </Routes>
  </BrowserRouter>
);
