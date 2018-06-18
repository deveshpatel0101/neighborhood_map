import React from 'react';
import { InfoWindow, Marker } from 'react-google-maps';
import './DisplayMarker.css';

class DisplayMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      animation: true
    }
    this.onToggleOpen = this.onToggleOpen.bind(this);
  }

  onToggleOpen() {
    this.setState((prevState) => ({ isOpen: !(prevState.isOpen) }));
  }

  render() {
    if(this.props.click) {
      setTimeout(() => {
        this.setState(() => ({ animation: false }));
      }, 1500);
    }
    return (
      <Marker
        position={{ lat: this.props.lat, lng: this.props.lng }}
        onClick={this.onToggleOpen}
        animation={this.props.click && this.state.animation ? window.google.maps.Animation.BOUNCE : false}
        onAnimationChanged={this.handleAnimation}
      >
        {(this.state.isOpen || this.props.click) &&
          <InfoWindow onCloseClick={this.onToggleOpen}>
            <div>{this.props.name}</div>
          </InfoWindow>
        }
      </Marker>
    )
  }
}

export default DisplayMarker;