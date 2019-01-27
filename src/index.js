import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
import Header from './components/Header';
import Single from './components/Single';
import LandingPage from './components/LandingPage';

import { BrowserRouter, Route } from 'react-router-dom';
/* Import CSS */

const Root = function () {
    return (
        <BrowserRouter>
            <div>
                <Header siteName="Total Black" />

                <div>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/search/:searchTerm" component={Main} />
                    <Route path="/main" component={Main} />
                    <Route path="/recording/:recordingId/:recordingSlug" component={Single} />
                </div>
            </div>
        </BrowserRouter>
    );
};

render(<Root />, document.querySelector('#root'));
