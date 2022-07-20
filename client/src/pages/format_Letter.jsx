import React, { useEffect, useState } from "react";

export default function Format_Letter() {

  const [formatData,setFormatData]= useState([]);

  const getLetter = async () => {
    try {
      const response = await fetch("http://localhost:5000/letterdt");
      const jsonData = await response.json();

      setFormatData(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getLetter();
  }, []);
  console.log(formatData);
  return (
    <div>
             
      <h1>format</h1>
      {getLetter}


    </div>
  )
}
