import axios from 'axios';
import React, { Component, useState } from 'react';
import { Card, Navbar, Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const DisplayShip = (props) => {
  let shipsData = require('../../JsonData/final_AIS_data.json');
  let shipsImages = require('../../JsonData/mmsi_image');
  const shipid = props.match.params.shipid;
  const history = useHistory();
  const [status, setStatus] = useState(null);
  const [markThreatStatus, setMarkThreatStatus] = useState(false);
  const [removeThreatStatus, setRemoveThreatStatus] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeThreat = async () => {
    const body = {
      lat: shipsData['Latitude'][shipid],
      long: shipsData['Longitude'][shipid],
    };
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      setRemoveThreatStatus(true);
      const res = await axios.post(
        `https://django-marine.herokuapp.com/location/delete_custom/`,
        body,
        config
      );
      setStatus('Threat removed successfully');
      setRemoveThreatStatus(false);
    } catch (error) {
      setStatus('Threat does not exists');
      setRemoveThreatStatus(false);
    }
    handleShow();
    setTimeout(function () {
      handleClose();
    }, 2000);
  };

  const markThreat = async () => {
    const body = {
      lat: shipsData['Latitude'][shipid],
      long: shipsData['Longitude'][shipid],
      satellite: true,
      shipid: shipid,
    };
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      setMarkThreatStatus(true);
      const res = await axios.post(
        `https://django-marine.herokuapp.com/location/`,
        body,
        config
      );
      setStatus('Threat marked successfully');
      setMarkThreatStatus(false);
    } catch (error) {
      setStatus('Threat already marked');
      setMarkThreatStatus(false);
    }
    handleShow();
    setTimeout(function () {
      handleClose();
    }, 2000);
  };

  const navigateMap = () => {
    props.setZoom(16);
    props.setLat(shipsData['Latitude'][shipid]);
    props.setLng(shipsData['Longitude'][shipid]);
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>{status}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

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
          <Card.Title className='font-weight-bold'>
            {shipsData['Vessel Name'][shipid]}
          </Card.Title>
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
        <button className='btn btn-danger mx-4 mb-2' onClick={markThreat}>
          {markThreatStatus ? `Working....` : 'Mark as threat'}
        </button>
        <button className='btn btn-success mx-4 mb-2' onClick={removeThreat}>
          {removeThreatStatus ? 'Working...' : 'Remove as threat'}
        </button>
        <button className='btn btn-info mx-4 mb-2' onClick={navigateMap}>
          Show satellite feed
        </button>
      </Card>
    </div>
  );
};

export default DisplayShip;
