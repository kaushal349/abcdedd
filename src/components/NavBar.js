import React from 'react';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <div>
      <Navbar
        className='row'
        style={{ background: '#3F51B5', height: '3.5em' }}
        variant='dark'
        expand='lg'
      >
        <Navbar.Brand href='/'>Team 8 - ASEAN Furry Cats</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link active href='/imagedetection'>
              <b>Image Detection</b>
            </Nav.Link>
            <Nav.Link active href='/addthreat'>
              <b>Add Threat</b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
