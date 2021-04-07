import React, { Component } from 'react';

// REACTSTRAP COMPONENTS: Reactstrap provides Bootstrap Components that have been re-implemented as React Components using JSX with the same styles and functionality as their Bootstrap counterparts
import { Navbar, NavbarBrand } from 'reactstrap';

// CUSTOM COMPONENTS
import Directory from "./components/DirectoryComponent";

// CUSTOM JAVASCRIPT
import { CAMPSITES } from './shared/campsites';

// CUSTOM STYLES
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campsites: CAMPSITES
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar>
        <Directory campsites={this.state.campsites} />
      </div>
    );
  }
}

export default App;
