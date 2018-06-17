import React, { Component } from 'react';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import { get } from './controllers/markers';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      markers: [],
      lat: 22.551263,
      lng: 72.971814
    }
    this.newQuery = this.newQuery.bind(this);
  }

  componentWillMount() {
    let that = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        get(position.coords.latitude, position.coords.longitude).then(response => {
          that.setState(() => ({ markers: response, lat: position.coords.latitude, lng: position.coords.longitude }));
        });
      });
    }
  }

  componentDidMount() {
    get(this.state.lat, this.state.lng).then(response => {
      this.setState(() => ({ markers: response }));
    });
  }

  newQuery(query) {
    console.log('From main components: ', query);
    this.setState(() => ({ query: query }));
  }

  render() {
    return (
      <div className="App">
        <Header newQuery={this.newQuery} markers={this.state.markers} />
        <Map query={this.state.query} lat={this.state.lat} lng={this.state.lng} markers={this.state.markers} />
      </div>
    );
  }
}

export default App;
