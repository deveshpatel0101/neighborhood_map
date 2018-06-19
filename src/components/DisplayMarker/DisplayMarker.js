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
    if (this.props.click) {
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
            <div>
              {this.props.category.name ?
                <div><b>Category: </b>{this.props.category.name}</div> :
                null}
              {this.props.name ?
                <div><b>Name: </b>{this.props.name}</div> :
                null
              }
              {this.props.address ?
                <div>
                  <b>Address: </b>
                  {this.props.address}
                </div> :
                null}
            </div>
          </InfoWindow>
        }
      </Marker>
    )
  }
}

export default DisplayMarker;