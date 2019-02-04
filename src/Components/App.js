import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';


import Header from './Header';
import NavBar from './NavBar';
import Main from './Main';
import Events from './Events';
import Releases from './Releases';
import Album from './Album';
import Fruits from "./Fruits"

class App extends Component {
  // app state
  state = {
    releaseUrl: null,
  }

  selectReleaseUrl = releaseUrl => {
    this.setState({
      releaseUrl: releaseUrl
    })
  }

  selectRelease = (releaseUrl) => {
    this.selectReleaseUrl(releaseUrl)
    // 2. Make sure it routes
    // redirect from method not workinjg

  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header siteName="Total Black" />
            <NavBar />

            <div>
              <Route exact path="/" component={Main} />
              <Route path="/fruits" component={Fruits} />
              <Route path="/Releases"
                render={(routeProps) =>
                  (<Releases {...routeProps} selectRelease={this.selectRelease} />)} />
              <Route path="/events" component={Events} />
              <Route path="/album" render={(routeProps) => (<Album {...routeProps} releaseUrl={this.state.releaseUrl} />)} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;