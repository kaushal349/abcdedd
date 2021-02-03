import React, { useState, useEffect } from 'react';
import MapEmbedd from './MapEmbedd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardMain from '../Dashboard/DashboardMain';
import alertDetail from '../Dashboard/alertDetail';
import DisplayShip from '../Dashboard/displayShip';
import { Form, Col, Table } from 'react-bootstrap';
import DisplayUnknownShips from '../Dashboard/DisplayUnknownShips';

const MainPage = () => {
  const [satelliteFeed, setSatelliteFeed] = useState(true);
  const [threatFeed, setThreatFeed] = useState(true);
  const [activeZoom, setActiveZoom] = useState(10);
  const [initLat, setInitLat] = useState(1.30415);
  const [intiLng, setInitLng] = useState(103.86066);
  const [altState, setAltState] = useState(true);

  const [trackData, setTrackData] = useState(null);

  useEffect(() => {
    updateTrackData();
  }, []);

  const updateTrackData = () => {
    let tdata = require('../../JsonData/track.json');
    setTrackData(tdata);
  };

  const rerenderMaps = () => {
    console.log('inside re redner');
    setAltState(!altState);
  };
  const resetMap = () => {
    setActiveZoom(10);
    setInitLat(1.30415);
    setInitLng(103.86066);
  };
  const setZoom = (val) => {
    setActiveZoom(val);
  };
  const setLat = (val) => {
    setInitLat(val);
  };
  const setLng = (val) => {
    setInitLng(val);
  };
  const [categoryStates, setCategoryStates] = useState({
    'Unspecified Ships': true,
    Fishing: true,
    'Tugs & Special Craft': true,
    'High Speed Craft': true,
    'Passenger Vessels': true,
    'Pleasure Craft': true,
    Tankers: true,
    'Cargo Vessel': true,
  });
  return (
    <div className='container-fluid m-0 p-0'>
      <div className='row'>
        <div className='col-lg-8 p-0'>
          <Form>
            <Form.Row className='align-items-center px-5 pt-2 bg-dark'>
              <Col xs='auto'>
                <Form.Check
                  type='checkbox'
                  id='autoSizingCheck'
                  className='mb-2 font-weight-bold text-danger'
                  label='Satellite feed'
                  checked={satelliteFeed}
                  onChange={() => {
                    setSatelliteFeed(!satelliteFeed);
                  }}
                />
              </Col>
              <Col xs='auto' className='ml-4'>
                <Form.Check
                  type='checkbox'
                  id='autoSizingCheck'
                  className='mb-2 font-weight-bold text-danger'
                  label='Threat feed'
                  checked={threatFeed}
                  onChange={() => {
                    setThreatFeed(!threatFeed);
                  }}
                />
              </Col>
              <Col xs='auto' className='ml-4'>
                <Form.Check
                  type='checkbox'
                  id='autoSizingCheck'
                  className='mb-2 font-weight-bold text-danger'
                  label='Show past track'
                />
              </Col>
            </Form.Row>
          </Form>

          <MapEmbedd
            satelliteFeed={satelliteFeed}
            threatFeed={threatFeed}
            activeZoom={activeZoom}
            intiLng={intiLng}
            initLat={initLat}
            altState={altState}
            updateTrackData={updateTrackData}
          />
        </div>
        <div
          className='col-lg-4 p-0'
          style={{ height: '800px', overflowY: 'scroll' }}
        >
          <Router>
            <Switch>
              <Route exact path='/' component={DashboardMain} />
              <Route exact path='/alert-detail/:id' component={alertDetail} />
              <Route
                exact
                path='/shipdetails/:shipid'
                render={(props) => (
                  <DisplayShip
                    setLat={setLat}
                    setLng={setLng}
                    setZoom={setZoom}
                    resetMap={resetMap}
                    rerenderMaps={rerenderMaps}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path='/shipdetails/:lat/:lng'
                render={(props) => (
                  <DisplayUnknownShips
                    setLat={setLat}
                    setLng={setLng}
                    setZoom={setZoom}
                    resetMap={resetMap}
                    rerenderMaps={rerenderMaps}
                    {...props}
                  />
                )}
              />
            </Switch>
          </Router>
        </div>
      </div>

      {trackData && (
        <div className='col mt-4 py-5 px-4'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Time</th>
                <th>Event</th>
                <th>dest</th>
                <th>Speed</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
              {trackData.map((el, idx) => {
                return (
                  <tr>
                    <td>{idx + 1}</td>
                    <td>{el['time']}</td>
                    <td>{el['event']}</td>
                    <td>{el['dest']}</td>
                    <td>{el['speed']}</td>
                    <td>{el['course']}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default MainPage;
