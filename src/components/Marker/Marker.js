import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import DisplayMarker from '../DisplayMarker/DisplayMarker';

class MapWithMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.lat,
      lng: this.props.lng
    }
    this.updateCenter = this.updateCenter.bind(this);
  }

  updateCenter(lat, lng) {
    this.setState(() => ({ lat: lat, lng: lng }));
  }

  render() {
    return (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: this.props.lat, lng: this.props.lng }}
        center={{ lat: this.state.lat, lng: this.state.lng }}
      >
        {
          this.props.query !== '' ?
            (this.props.query.map(marker => (
              <DisplayMarker
                lat={marker.lat}
                lng={marker.lng}
                name={marker.name}
                address={marker.address}
                category={marker.category}
                key={marker.id}
                id={this.props.click === marker.id ? marker.id : false}
                updateCenter={this.updateCenter}
                click={this.props.click === marker.id ? true : false}
              />
            ))) :
            this.props.markers.map(marker => (
              <DisplayMarker
                lat={marker.lat}
                lng={marker.lng}
                name={marker.name}
                address={marker.address}
                category={marker.category}
                key={marker.id}
                id={this.props.click === marker.id ? marker.id : false}
                updateCenter={this.updateCenter}
                click={this.props.click === marker.id ? true : false}
              />
            ))}
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(MapWithMarker));