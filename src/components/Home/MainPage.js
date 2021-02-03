import React, { useState } from 'react';
import MapEmbedd from './MapEmbedd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardMain from '../Dashboard/DashboardMain';
import alertDetail from '../Dashboard/alertDetail';
import DisplayShip from '../Dashboard/displayShip';
import { useHistory } from 'react-router-dom';
import DisplayUnknownShips from '../Dashboard/DisplayUnknownShips';

const MainPage = () => {
  const [satelliteFeed, setSatelliteFeed] = useState(true);
  const [activeZoom, setActiveZoom] = useState(10);
  const [initLat, setInitLat] = useState(1.30415);
  const [intiLng, setInitLng] = useState(103.86066);

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
          <div className='form-check pl-5 checkbox-lg bg-info d-flex align-items-center'>
            <input
              className='form-check-input'
              type='checkbox'
              style={{
                height: '50px',
              }}
              id='flexCheckChecked'
              checked={satelliteFeed}
              onChange={() => {
                setSatelliteFeed(!satelliteFeed);
              }}
            />
            <label
              className='form-check-label font-weight-bold text-white'
              for='flexCheckChecked'
            >
              satellite
            </label>
          </div>
          <MapEmbedd
            satelliteFeed={satelliteFeed}
            activeZoom={activeZoom}
            intiLng={intiLng}
            initLat={initLat}
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
