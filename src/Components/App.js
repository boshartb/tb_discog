import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import './ReleasePage.css';


import Header from './Header';
import NavBar from './NavBar';
import Main from './Main';
import Events from './Events';
import ReleasePage from './ReleasePage';
import SingleRelease from './SingleRelease';


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
    return (
      <Redirect to="/SingleRelease" />
    )
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
              <Route path="/search/:searchTerm" component={ReleasePage} />
              <Route path="/ReleasePage"
                render={(routeProps) =>
                  (<ReleasePage {...routeProps} selectRelease={this.selectRelease} />)} />
              <Route path="/events" component={Events} />
              <Route path="/SingleRelease" render={(routeProps) => (<SingleRelease {...routeProps} releaseUrl={this.state.releaseUrl} />)} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;