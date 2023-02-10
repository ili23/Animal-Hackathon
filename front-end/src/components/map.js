import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const location = {
  address: '225 Tulip Tree Dr, Ithaca, NY 14850',
  lat: 42.447013138256445,
  lng: -76.45344569651013,
}
const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)
const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Example Farm Map View</h2>

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
       <MapSection location={location} zoomLevel={17} /> {/* include it here */}
    </div>
  )
}

export default MapBox;