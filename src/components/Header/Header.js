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
    this.props.newQuery(e.target.innerHTML, true);
  }

  render() {
    return (
      <div>
        <div className='header' id='header' role='navigation'>
          <nav>
            <span>
              <a href="#" onClick={this.handleOpen} tabIndex='0'>
                <svg width="30" height="30">
                  <path d="M0,5 30,5" stroke="#c2c2c2" strokeWidth="5" />
                  <path d="M0,14 30,14" stroke="#c2c2c2" strokeWidth="5" />
                  <path d="M0,23 30,23" stroke="#c2c2c2" strokeWidth="5" />
                </svg>
              </a>
            </span>
          </nav>
        </div>

        <div id='side-menu' className='side-nav'>
          <a href="#" onClick={this.handleClose} className='close'>&times;</a>
          <form>
            <input type="text" name="filter" onChange={this.handleChange} />
            <button>Filter</button>
          </form>
          <div className='content'>
            {
              this.props.query !== '' ?
                (this.props.query.map(marker =>
                  (<a href="#" className='content-text' key={marker.id} onClick={this.handleListClick}>{marker.name}</a>)
                )) :
                this.props.markers.map(marker =>
                  (<a href="#" className='content-text' key={marker.id} onClick={this.handleListClick}>{marker.name}</a>)
                )
            }
          </div>
        </div>
      </div>
    )
  }
};

export default Header;