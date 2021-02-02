import React, { useState } from 'react';
import MapEmbedd from './MapEmbedd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardMain from '../Dashboard/DashboardMain';
import alertDetail from '../Dashboard/alertDetail';
import DisplayShip from '../Dashboard/displayShip';
import { useHistory } from 'react-router-dom';

const MainPage = () => {
  const [satelliteFeed, setSatelliteFeed] = useState(true);
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
          <MapEmbedd satelliteFeed={satelliteFeed} />
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
                component={DisplayShip}
              />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
