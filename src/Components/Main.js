import React, { Component } from 'react';

import Recording from "./Recording"
import './Main.css';


class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="wrapper">
                    <Recording />

                </div>
            </div>
        );
    }
}

export default Main;


