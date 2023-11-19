import React from "react";
import UsedCarH from "./usedCarH";
import UsedCarV from "./usedCarV";



const UsedCarSwitchControl = ({ active }) => {
  return <>{active ? <UsedCarH/> : <UsedCarV />}</>;
};

export default UsedCarSwitchControl;