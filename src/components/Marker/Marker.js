import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import DisplayMarker from '../DisplayMarker/DisplayMarker';

class MapWithMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.lat,
      lng: this.props.lng,
      openedMarker: null
    }
    this.updateCenter = this.updateCenter.bind(this);
    this.updateOpenedMarker = this.updateOpenedMarker.bind(this);
  }

  updateCenter(lat, lng) {
    this.setState(() => ({ lat: lat, lng: lng }));
  }

	updateOpenedMarker(id) {
		this.setState(() => ({ openedMarker: id }));
	}

  render() {
    return (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: this.props.lat, lng: this.props.lng }}
        center={{ lat: this.state.lat, lng: this.state.lng }}
        options={{gestureHandling: 'greedy'}}
      >
        {
          this.props.query !== '' ?
            (this.props.query.map(marker => (
              <DisplayMarker
                {...marker}
                key={marker.id}
                opened={this.state.openedMarker}
                updateCenter={this.updateCenter}
                updateOpenedMarker={this.updateOpenedMarker}
                click={this.props.click === marker.id ? true : false}
              />
            ))) :
            this.props.markers.map(marker => (
              <DisplayMarker
                {...marker}
                key={marker.id}
                opened={this.state.openedMarker}
                updateCenter={this.updateCenter}
                updateOpenedMarker={this.updateOpenedMarker}
                click={this.props.click === marker.id ? true : false}
              />
            ))}
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(MapWithMarker));