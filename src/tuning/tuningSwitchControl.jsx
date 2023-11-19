import React from "react";
import TuningH from "./tuningH";
import TuningV from "./tuningV";



const TuningSwitchControl = ({ active }) => {
  return <>{active ? <TuningH/> : <TuningV />}</>;
};

export default TuningSwitchControl;