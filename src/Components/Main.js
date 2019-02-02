import React, { Component } from 'react';
import Header from './Header';

import logo from "./logo.jpg";


class Main extends Component {
    render() {
        return (
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        );
    }
}

export default Main;