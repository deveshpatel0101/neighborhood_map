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
    this.updateOpenedMarker = this.updateOpenedMarker.bind(this);
  }

	updateOpenedMarker(id) {
		this.setState(() => ({ openedMarker: id }));
  }

  componentDidUpdate() {
    if(this.props.lat !== this.state.lat && this.props.lng !== this.state.lng) {
      this.setState(() => ({lat: this.props.lat, lng: this.props.lng}))
    }
  }

  render() {
    return (
      <GoogleMap
        defaultZoom={15}
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
                updateOpenedMarker={this.updateOpenedMarker}
                click={this.props.click === marker.id ? true : false}
              />
            ))) :
            this.props.markers.map(marker => (
              <DisplayMarker
                {...marker}
                key={marker.id}
                opened={this.state.openedMarker}
                updateOpenedMarker={this.updateOpenedMarker}
                click={this.props.click === marker.id ? true : false}
              />
            ))}
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(MapWithMarker));