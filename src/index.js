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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Navbar/>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="motor" element={<Motor/>}/>
     <Route path='caravan' element={<Caravan/>}/>
     <Route path='tuning' element={<Tuning/>}/>
     <Route path='usedCar' element={<UsedCar/>}/>
     <Route path='camping' element={<Camping/>}/>
     <Route path='MotorsCar-details/:id' element={<MotorsDetails/>}/>
     <Route path='Caravan-details/id' element={<CaravanDetails/>}/>
    </Routes>
  </BrowserRouter>
);

