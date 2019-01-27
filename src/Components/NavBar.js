import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <Link to="/">Main</Link>{' '}
                <Link to="/events">Events</Link>{' '}
                <Link to="/recording">Recording</Link>{' '}
            </div>
        );
    }
}

export default NavBar;