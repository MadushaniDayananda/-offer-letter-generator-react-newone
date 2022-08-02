import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import'./form.css';


function Home() {
  const navigate = useNavigate();

  const navigateToCreate = ()=>{
    navigate('/form');
  };

  const navigateToList = ()=>{
    navigate('/formList');
  };

  return (
    <div style={{ 
        backgroundImage: `url("https://www.komando.com/wp-content/uploads/2019/10/electronic-signature.jpg")` , backgroundRepeat:"no-repeat",backgroundSize:"cover" ,width:"100vw",height:"85vh"
      }}>
        <button className='homeButton' onClick={navigateToCreate}><h1>Create Offering Letter</h1></button><br/>
        <button className='homeButton1' onClick={navigateToList}><h1>List of Offfering letters</h1></button>
    </div>
  )
}

export default Home;
