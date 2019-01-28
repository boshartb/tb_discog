import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { render } from 'react-dom';

import Main from './Components/Main';
import Header from './Components/Header';
import Single from './Components/Single';
import LandingPage from './Components/LandingPage';
import NavBar from './Components/NavBar';
import Events from './Components/Events';


import './index.css';

const Root = function () {
    return (
        <BrowserRouter>
            <div>
                <Header siteName="Total Black" />
                <NavBar />
                <div>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/search/:searchTerm" component={Main} />
                    <Route path="/main" component={Main} />
                    <Route path="/events" component={Events} />
                    <Route path="/releases/:releasesId/:releasesSlug" component={Single} />
                </div>
            </div>
        </BrowserRouter>
    );
};

render(<Root />, document.querySelector('#root'));
