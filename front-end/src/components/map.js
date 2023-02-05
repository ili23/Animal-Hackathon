import React from 'react';
import GoogleMapReact from 'google-map-react';

const location = {
  address: '225 Tulip Tree Dr, Ithaca, NY 14850',
  lat: 42.447013138256445,
  lng: -76.45344569651013,
}

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)
function MapBox() {
  return (
    <div>

    </div>
  )
}

export default MapBox;