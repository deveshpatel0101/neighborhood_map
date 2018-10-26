import React from 'react';
import './Header.css';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleListClick = this.handleListClick.bind(this);
  }

  handleOpen() {
    document.getElementById('side-menu').style.width = '300px';
  }

  handleClose() {
    document.getElementById('side-menu').style.width = '0';
  }

  handleChange(e) {
    this.props.newQuery(e.target.value, false);
  }

  handleListClick(e) {
    this.props.newQuery(e.target.id, true);
  }

  render() {
    return (
      <div>
        <div className='header' id='header' role='navigation'>
          <nav>
            <span>
              <span onClick={this.handleOpen} tabIndex='0' className='menu-open-icon'>
                <svg width='30' height='30'>
                  <path d='M0,5 30,5' stroke='#c2c2c2' strokeWidth='5' />
                  <path d='M0,14 30,14' stroke='#c2c2c2' strokeWidth='5' />
                  <path d='M0,23 30,23' stroke='#c2c2c2' strokeWidth='5' />
                </svg>
              </span>
            </span>
          </nav>
          <div className='api-used'>
            <a href='https://foursquare.com' target='_blank'>Foursquare API used.</a>
          </div>

        </div>

        <div id='side-menu' className='side-nav'>
          <span onClick={this.handleClose} className='close'>&times;</span>
          <form>
            <input type='text' name='filter' onChange={this.handleChange} placeholder='Search/Filter' />
          </form>
          <div className='content'>
            {
              this.props.query !== '' ?
                (this.props.query.map(marker =>
                  (<span className='content-text' id={marker.id} key={marker.id} onClick={this.handleListClick}>{marker.name}</span>)
                )) :
                this.props.markers.map(marker =>
                  (<span className='content-text' id={marker.id} key={marker.id} onClick={this.handleListClick}>{marker.name}</span>)
                )
            }
          </div>
        </div>
      </div>
    )
  }
};

export default Header;