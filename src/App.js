import React, { Component } from 'react';

// REACTSTRAP COMPONENTS: Reactstrap provides Bootstrap Components that have been re-implemented as React Components using JSX with the same styles and functionality as their Bootstrap counterparts
import { Navbar, NavbarBrand } from 'reactstrap';

// CUSTOM COMPONENTS
import Directory from "./components/DirectoryComponent";

// CUSTOM STYLES
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar>
        <Directory />
      </div>
    );
  }
}

export default App;
