import React from "react";

import CarsInfoH from "./carsInfoH";
import CarsInfoV from "./carsInfoV";

const MotorSwitchControl = ({ active }) => {
  return <>{active ? <CarsInfoH/> : <CarsInfoV />}</>;
};

export default MotorSwitchControl;