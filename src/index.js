import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { render } from 'react-dom';

import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import Events from './Components/Events';
import ReleasePage from './Components/ReleasePage';
import SingleRelease from './Components/SingleRelease';


import './index.css';

const Root = function () {
    return (
        <BrowserRouter>
            <div>
                <Header siteName="Total Black" />
                <NavBar />
                <div>
                    <Route exact path="/" component={Main} />
                    <Route path="/search/:searchTerm" component={ReleasePage} />
                    <Route path="/ReleasePage" component={ReleasePage} />
                    <Route path="/events" component={Events} />
                    <Route path="/singlerelease" component={SingleRelease} />
                    <Route path="/releases/:releasesId/:releasesSlug" component={SingleRelease} />
                </div>
            </div>
        </BrowserRouter>
    );
};

render(<Root />, document.querySelector('#root'));
