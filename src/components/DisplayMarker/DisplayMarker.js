import React from 'react';
import { InfoWindow, Marker } from 'react-google-maps';
import './DisplayMarker.css';

class DisplayMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.onToggleOpen = this.onToggleOpen.bind(this);
  }

  onToggleOpen() {
    this.setState((prevState) => ({ isOpen: !(prevState.isOpen) }));
  }

  render() {
    return (
      <Marker
        position={{ lat: this.props.lat, lng: this.props.lng }}
        onClick={this.onToggleOpen}
      >
        {this.state.isOpen &&
          <InfoWindow onCloseClick={this.onToggleOpen}>
            <div>{this.props.name}</div>
          </InfoWindow>
        }
      </Marker>
    )
  }
}

export default DisplayMarker;