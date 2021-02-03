import React, { useState } from 'react';
import MapEmbedd from './MapEmbedd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardMain from '../Dashboard/DashboardMain';
import alertDetail from '../Dashboard/alertDetail';
import DisplayShip from '../Dashboard/displayShip';
import { Form, Col, InputGroup, FormControl } from 'react-bootstrap';
import DisplayUnknownShips from '../Dashboard/DisplayUnknownShips';

const MainPage = () => {
  const [satelliteFeed, setSatelliteFeed] = useState(true);
  const [threatFeed, setThreatFeed] = useState(false);
  const [activeZoom, setActiveZoom] = useState(10);
  const [initLat, setInitLat] = useState(1.30415);
  const [intiLng, setInitLng] = useState(103.86066);
  const [altState, setAltState] = useState(true);

  const rerenderDashbaord = () => {
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
          {/* <div className='pl-5 checkbox-lg bg-info d-flex align-items-center'> */}
          {/* <div class='form-row pl-5 bg-info'>
            <div class='form-group col-md-6 bg-danger mt-auto mb-auto'>
              <input
                className='form-check-input'
                type='checkbox'
                style={{
                  height: '50px',
                }}
                checked={satelliteFeed}
                onChange={() => {
                  setSatelliteFeed(!satelliteFeed);
                }}
              />
              <label className='form-check-label font-weight-bold text-white'>
                satellite
              </label>
            </div> */}
          {/* </div> */}
          <Form>
            <Form.Row className='align-items-center px-5 pt-2'>
              <Col xs='auto'>
                <Form.Check
                  type='checkbox'
                  id='autoSizingCheck'
                  className='mb-2'
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
                  className='mb-2'
                  label='Threat feed'
                  checked={threatFeed}
                  onChange={() => {
                    setThreatFeed(!threatFeed);
                  }}
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
            rerenderDashbaord={rerenderDashbaord}
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
                    altState={altState}
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
                    altState={altState}
                    {...props}
                  />
                )}
              />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
