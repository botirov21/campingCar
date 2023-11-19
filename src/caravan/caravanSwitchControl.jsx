import React from "react";

import CaravanH from "./caravanH";
import CaravanV from "./caravanV";

const CarvanSwitchControl = ({ active }) => {
  return <>{active ? <CaravanH/> : <CaravanV />}</>;
};

export default CarvanSwitchControl;