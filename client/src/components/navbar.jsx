import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Nheading() {


  return (

    <div>

    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/" href="/">Home</Nav.Link>
            <Nav.Link href="#form">Create</Nav.Link>
            <Nav.Link href="#list">List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <h1 className='heading'>OFFERING LETTER GENERATOR</h1>
    </div>
  );
}
export default  Nheading;
