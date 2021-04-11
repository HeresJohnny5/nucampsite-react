import React, { Component } from 'react';

// REACTSTRAP COMPONENTS: Reactstrap provides Bootstrap Components that have been re-implemented as React Components using JSX with the same styles and functionality as their Bootstrap counterparts
import { Navbar, NavbarBrand } from 'reactstrap';

// CUSTOM COMPONENTS
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';

// CUSTOM JAVASCRIPT
import { CAMPSITES } from '../shared/campsites';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      selectedCampsite: null
    };
  }

  onCampsiteSelect(campsiteId) {
    this.setState({selectedCampsite: campsiteId});
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar>
        <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)}/>
        <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} />
      </div>
    );
  };
}

export default Main;