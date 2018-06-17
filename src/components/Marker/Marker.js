import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import markers from '../../controllers/markers';
import DisplayMarker from '../DisplayMarker/DisplayMarker';

class MapWithMarker extends React.Component {
  render() {
    return (
      <GoogleMap
        defaultZoom={7}
        defaultCenter={{ lat: 22.551263, lng: 72.971814 }}
      >
        {
          markers.map((marker, value) => (
            <DisplayMarker
              lat={marker.lat}
              lng={marker.lng}
              name={marker.name}
              key={value}
            />
          ))}
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(MapWithMarker));