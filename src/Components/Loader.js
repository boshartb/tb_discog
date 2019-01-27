import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div className="loader">
                <img src="/images/logo.jpg" />
                <h2>Your Message from props goes here</h2>
            </div>
        );
    }
}

export default Loader;