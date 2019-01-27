import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { render } from 'react-dom';

import Main from './components/Main';
import Header from './components/Header';
import Single from './components/Single';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Events from './components/Events';

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
                    <Route path="/recording/:recordingId/:recordingSlug" component={Single} />
                </div>
            </div>
        </BrowserRouter>
    );
};

render(<Root />, document.querySelector('#root'));
