import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';

export default function Format_Letter() {

  
  const location = useLocation();
   
    

  return (
    <div>
             
      <h1>format</h1>
      {/* <div>{location.state.name}</div> */}
      <div>{location.state.details}</div>



    </div>
  )
}
