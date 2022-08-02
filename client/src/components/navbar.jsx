import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Nheading() {


  return (

    <div>

    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand  href="#home" ><img
              src="https://pngimage.net/wp-content/uploads/2018/06/png-logo-free-5.png"
              width="30"
              height="30"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/" href="/">Home</Nav.Link>
            <Nav.Link to="/form" href="/form">Create</Nav.Link>
            <Nav.Link to="/formList" href="/formList">List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <h1 className='heading' style={{color:"black"}}>OFFER LETTER GENERATOR</h1>
    </div>
  );
}
export default  Nheading;
