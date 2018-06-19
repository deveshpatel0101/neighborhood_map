import React from 'react';
import './Map.css';
import MapWithMarker from '../Marker/Marker';

class Map extends React.Component {
  render() {
    return (
      <div className='map' id='map' role='application'>
        <MapWithMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `92vh` }} />}
          query={this.props.query}
          markers={this.props.markers}
          lat={this.props.lat}
          lng={this.props.lng}
          click={this.props.click}
        />
      </div>
    )
  }
};

export default Map;