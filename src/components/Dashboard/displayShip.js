import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const DisplayShip = (props) => {
  let shipsData = require('../../JsonData/final_AIS_data.json');
  let shipsImages = require('../../JsonData/mmsi_image');
  const shipid = props.match.params.shipid;
  const history = useHistory();

  return (
    <div>
      <Navbar style={{ background: '#9fa8da' }} variant='dark' sticky='top'>
        <Navbar.Brand
          className='text-capitalize font-weight-bold'
          style={{ textAlign: 'left', color: 'black' }}
        >
          <img
            src='https://img.icons8.com/metro/26/000000/circled-left.png'
            className='mr-3'
            style={{ cursor: 'pointer' }}
            onClick={() => history.goBack()}
          />{' '}
          Vessel Details
        </Navbar.Brand>
      </Navbar>

      <Card style={{ width: '18rem', marginLeft: '15%', marginTop: '5%' }}>
        <Card.Body>
          {console.log(shipsData['Vessel Name'])}
          <Card.Title>{shipsData['Vessel Name'][shipid]}</Card.Title>
          <Card.Text>
            <div style={{ height: '20em' }}>
              <img
                src={shipsImages['Image URL'][shipsData['MMSI'][shipid]]}
                height='100%'
                width='100%'
              />
            </div>
            <br />
            <h6>Course: {shipsData['Course'][shipid]}</h6>
            <h6>Speed: (Kn) {shipsData['Speed (Kn)'][shipid]}</h6>
            <h6>Current Draught: {shipsData['Current Draught'][shipid]}</h6>
            <h6>GT: {shipsData['Gross Tonnage'][shipid]}</h6>
            <h6>Built: {shipsData['Year of Built'][shipid]}</h6>
            <h6>IMO number: {shipsData['IMO'][shipid]}</h6>
            <h6>Length Overall: {shipsData['Length (m)'][shipid]}</h6>
            <h6>Last Updated: {shipsData['Last Updated'][shipid]}</h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DisplayShip;
