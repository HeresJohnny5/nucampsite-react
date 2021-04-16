import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// CUSTOM COMPONENTS
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Directory from './DirectoryComponent';
import Home from "./HomeComponent";
import Contact from "./ContactComponent";

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
    const HomePage = () => {
      return (
        <Home />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
          <Route path="/contactus" component={Contact} /> 
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  };
}

export default Main;