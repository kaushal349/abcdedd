import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import { ShipsID } from '../../extras/ShipsId';

const MapEmbedd = ({ satelliteFeed, activeZoom, intiLng, initLat }) => {
  const [formData, setFormData] = useState({
    showingInfoWindow: false,
    activeMarker: {},
  });

  const { showingInfoWindow, activeMarker } = formData;

  const history = useHistory();
  const google = window.google;
  let shipsData = require('../../JsonData/final_AIS_data.json');
  let markerColor = require('../../JsonData/marker_color.json');
  let satData = require('../../JsonData/satelite_feed.json');
  console.log(`reloaded active zoom ${activeZoom}`);
  return (
    <div>
      <Map
        google={google}
        mapType='satellite'
        zoom={activeZoom}
        onClick={() => console.log('map clicked')}
        initialCenter={{
          lat: initLat,
          lng: intiLng,
        }}
        style={{
          height: '800px',
        }}
      >
        {satelliteFeed &&
          satData.map((sati, index) => {
            return (
              <Marker
                key={index}
                onClick={() => {
                  history.push(`/shipdetails/${sati[0]}/${sati[1]}`);
                  window.location.reload(false);
                }}
                icon={{
                  path: google.maps.SymbolPath.CIRCLE,
                  fillColor: 'yellow',
                  strokeColor: 'yellow',
                  strokeWeight: 1,
                  fillOpacity: 0.5,
                  scale: 4,
                }}
                position={{
                  lat: sati[0],
                  lng: sati[1],
                }}
              />
            );
          })}

        {ShipsID.map((shipid, index) => {
          return (
            <Marker
              key={index}
              onClick={() => {
                history.push(`/shipdetails/${shipid}`);
                window.location.reload(false);
              }}
              // onMouseover={onMouseHover}
              icon={{
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                fillColor: markerColor[shipsData['Vessel Filter'][shipid]],
                fillOpacity: 0.5,
                strokeColor: markerColor[shipsData['Vessel Filter'][shipid]],
                // scaledSize: new window.google.maps.Size(500, 500),
                strokeWeight: 1,
                scale: 4,
                rotation: Number(
                  shipsData['Course'][shipid].slice(
                    0,
                    shipsData['Course'][shipid].length - 1
                  )
                ),
              }}
              position={{
                lat: shipsData['Latitude'][shipid],
                lng: shipsData['Longitude'][shipid],
              }}
            >
              <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
                <div>
                  <h1>Hello</h1>
                </div>
              </InfoWindow>
            </Marker>
          );
        })}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCvPv1nI4ihrAv3a7pAXjGZUCs_YRiIuOc',
})(MapEmbedd);
