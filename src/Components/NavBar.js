import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <Link to="/">Home</Link>{' '}
                <a href="https://soundcloud.com/totalblack">SAMPLE</a>{' '}
                <Link to="/events">Events</Link>{' '}
                <a href="http://totalblack.bigcartel.com">STORE</a>{' '}
                <a href="http://totalblack.bandcamp.com/">DIGITAL</a>
                <Link to="/ReleasePage" > Releases</Link > {' '}
            </div >
        );
    }
}

export default NavBar;
