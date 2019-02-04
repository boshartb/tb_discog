import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Header extends Component {
    static propTypes = {
        siteName: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="header-banner">
                <img src="https://f4.bcbits.com/img/0013625030_100.png"></img>
                <h1>{this.props.siteName}</h1>
            </div>
        );
    }
};

export default Header;