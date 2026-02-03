import React from 'react'
import  { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date ());
    }, 1000);
  }, []);

  return (
    <h2>{time.getHours()} :{time.getMinutes()} :{time.getSeconds()} </h2>
    
  )
}

export default Time;
