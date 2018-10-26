import React from 'react';
import { InfoWindow, Marker } from 'react-google-maps';
import './DisplayMarker.css';

class DisplayMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      animation: false,
      count: 0
    }
    this.onToggleOpen = this.onToggleOpen.bind(this);
  }

  onToggleOpen() {
    this.setState((prevState) => ({ isOpen: !(prevState.isOpen) }));
    if (this.state.isOpen) {
      this.props.updateCenter(this.props.lat, this.props.lng);
    }
  }

  componentDidUpdate() {
    if (this.props.click && !this.state.animation) {
      this.setState(() => ({ animation: true, isOpen: true }));
      this.props.updateCenter(this.props.lat, this.props.lng);
      setTimeout(() => {
        this.setState(() => ({ animation: false }))
      }, 1500);
    }
  }

  render() {
    return (
      <Marker
        position={{ lat: this.props.lat, lng: this.props.lng }}
        onClick={this.onToggleOpen}
        animation={this.props.click ? window.google.maps.Animation.BOUNCE : false}
        onAnimationChanged={this.handleAnimation}
      >
        {(this.state.isOpen) &&
          <InfoWindow onCloseClick={this.onToggleOpen}>
            <div>
              {this.props.category ?
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