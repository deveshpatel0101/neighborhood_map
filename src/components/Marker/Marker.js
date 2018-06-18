import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import DisplayMarker from '../DisplayMarker/DisplayMarker';

class MapWithMarker extends React.Component {

  render() {
    return (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: this.props.lat, lng: this.props.lng }}
        center={{ lat: this.props.lat, lng: this.props.lng }}
      >
        {
          this.props.query !== '' ?
            (this.props.query.map(marker => (
              <DisplayMarker
                lat={marker.lat}
                lng={marker.lng}
                name={marker.name}
                key={marker.id}
                click={this.props.click === marker.name ? true : false}
              />
            ))) :
            this.props.markers.map(marker => (
              <DisplayMarker
                lat={marker.lat}
                lng={marker.lng}
                name={marker.name}
                key={marker.id}
                click={this.props.click === marker.name ? true : false}
              />
            ))}
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(MapWithMarker));