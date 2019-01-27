import React, { Component } from 'react';

import './Main.css';
import logo from './logo.jpg';


import Header from './Header';


class Main extends Component {
    render() {
        return (

            <div className="wrapper">
                <Header />

                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
        );
    }
}

export default Main;


