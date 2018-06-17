import React, { Component } from 'react';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this.newQuery = this.newQuery.bind(this);
  }

  newQuery(query) {
    console.log('From main components: ', query);
    this.setState(() => ({query: query}));
  }

  render() {
    return (
      <div className="App">
        <Header newQuery={this.newQuery}/>
        <Map query={this.state.query}/>
      </div>
    );
  }
}

export default App;
