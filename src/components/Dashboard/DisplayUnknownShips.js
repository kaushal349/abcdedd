import axios from 'axios';
import React, { Component, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const DisplayUnknownShips = (props) => {
  let shipsData = require('../../JsonData/final_AIS_data.json');
  let shipsImages = require('../../JsonData/mmsi_image');
  console.log(props.match.params);
  const latProp = props.match.params['lat'];
  const lngProp = props.match.params['lng'];
  const history = useHistory();
  const [status, setStatus] = useState(null);

  const markThreat = async () => {
    const body = {
      lat: 0,
      long: 0,
    };
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post(
      `https://django-marine.herokuapp.com/location/`,
      body,
      config
    );
    console.log('res obtained');
    console.log(res);
  };

  const navigateMap = () => {
    props.setZoom(16);
    props.setLat(latProp);
    props.setLng(lngProp);
  };

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
            onClick={() => {
              props.resetMap();
              history.push('/');
            }}
          />{' '}
          Vessel Details
        </Navbar.Brand>
      </Navbar>

      <Card
        style={{
          width: '22em',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '5%',
        }}
      >
        <Card.Body>
          {/* {console.log(shipsData['Vessel Name'])} */}
          <Card.Title className='font-weight-bold'>Unknown Ship</Card.Title>
          <Card.Text>
            <div style={{ height: '20em' }}>
              <img
                src={shipsImages['Image URL'][shipsData['MMSI']['2111929']]}
                height='100%'
                width='100%'
              />
            </div>
            <br />
            <h6>Latitude: {latProp}</h6>
            <h6>Longitude: {lngProp}</h6>
          </Card.Text>
        </Card.Body>
        <button className='btn btn-danger mx-4 mb-2' onClick={markThreat}>
          Mark as threat
        </button>
        <button className='btn btn-success mx-4 mb-2'>Remove as threat</button>
        <button className='btn btn-info mx-4 mb-2' onClick={navigateMap}>
          Show satellite feed
        </button>
        {status}
      </Card>
    </div>
  );
};

export default DisplayUnknownShips;
