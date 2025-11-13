import "./TrafficLight.css";
import { useState, useEffect } from "react";
export const TrafficLight = () => {
  const TrafficLightConfig = [
    {
      background: "red",
      duration: 4000,
      next:'yellow'
    },
    {
      background: "yellow",
      duration: 500,
      next:'green'
    },
    {
      background: "green",
      duration: 3000,
      next:'red'
    },
  ];
  const [lightStatus, setLightStatus] = useState('green');
  useEffect(() => {
    const currentLight=TrafficLightConfig.find((item)=>item.background==lightStatus)
    const timer = setTimeout(() => {
      setLightStatus(currentLight.next);
    }, currentLight.duration);
    return () => {
      clearTimeout(timer);
    };
  },[lightStatus]);
  return (
    <div className="traffic-light-container">
      <div className="heading-traffic">
        <h2>Frontend Machine Coding</h2>
        <h3>Traffic Light</h3>
      </div>
    <div className="traffic-container">
    {TrafficLightConfig.map((light)=>{
        return ( <div
            className="traffic-light"
            style={{ background: light.background==lightStatus ? light.background : "white" }}
          ></div>
          )
     })}
    </div>
    </div>
  );
};
