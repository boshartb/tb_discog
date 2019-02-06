import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import dotenv from "dotenv";



import Header from './Header';
import NavBar from './NavBar';
import Main from './Main';
import Events from './Events';
import Releases from './Releases';
import Album from './Album';

dotenv.config();


class App extends Component {
  // app state
  state = {
    releaseUrl: null,
    release: [],
    isLoaded: false

  }


  // "https://api.discogs.com/releases/4450215"

  componentDidMount() {
    fetch(`https://api.discogs.com/labels/528464/releases?page=1&per_page=100&key=${process.env.REACT_APP_TMDB_API_KEY}&secret=${process.env.REACT_APP_TMDB_API_SECRET}`)

      .then(res => res.json())
      .then(json => {
        console.log(json.releases)
        this.setState({
          isLoaded: true,
          release: json.releases
        });
      });
  }


  selectReleaseUrl = releaseUrl => {
    console.log(releaseUrl)
    this.setState({
      releaseUrl: releaseUrl
    })
  }

  selectRelease = (releaseUrl) => {
    this.selectReleaseUrl(releaseUrl)


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
              <Route path="/Releases"
                render={(routeProps) =>
                  (<Releases release={this.state.release} {...routeProps} selectRelease={this.selectRelease} />)} />
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