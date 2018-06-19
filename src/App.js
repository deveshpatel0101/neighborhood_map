import React, { Component } from 'react';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import { get } from './controllers/markers';
import filter from 'simple-text-search';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      markers: [],
      lat: 22.551263,
      lng: 72.971814,
      length: false,
      click: false
    }
    this.newQuery = this.newQuery.bind(this);
  }

  componentWillMount() {
    let that = this;
    if (navigator.geolocation) { //for displaying markers nearby your current location.
      navigator.geolocation.getCurrentPosition(function (position) {
        get(position.coords.latitude, position.coords.longitude).then(response => {
          that.setState(() => ({ markers: response, lat: position.coords.latitude, lng: position.coords.longitude }));
        });
      });
    }
  }

  componentDidMount() {
    get(this.state.lat, this.state.lng).then(response => {
      if (response) {
        this.setState(() => ({ markers: response }));
      }
    });
  }

  newQuery(query, click) { //will be called when filter is applied
    let filterSearch = filter(this.state.markers, 'name');
    let results = filterSearch(query);
    if (!click) this.setState(() => ({ query: results, click: false }));
    else this.setState(() => ({ click: query }));
  }

  render() {
    return (
      <div className="App">
        <Header
          newQuery={this.newQuery}
          markers={this.state.markers}
          query={this.state.query}
        />
        <Map
          query={this.state.query}
          lat={this.state.lat}
          lng={this.state.lng}
          markers={this.state.markers}
          click={this.state.click}
        />
      </div>
    );
  }
}

export default App;
