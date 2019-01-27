import React, { Component } from 'react';
import Header from './Header';

import logo from "./logo.jpg";


class LandingPage extends Component {
    render() {
        return (
            <div className="logo">
                <Header siteName="Total Black" />
                <img src={logo} alt="logo" />
            </div>
        );
    }
}

export default LandingPage;