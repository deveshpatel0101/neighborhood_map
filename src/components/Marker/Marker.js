import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import DisplayMarker from '../DisplayMarker/DisplayMarker';

class MapWithMarker extends React.Component {
  render() {
    return (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: this.props.lat, lng: this.props.lng }}
      >
        {
          this.props.markers.map((marker, value) => (
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