import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

// get on click

class Release extends Component {
    handleClick = () => {
        console.log("in release")
        this.props.selectRelease(this.props.release.resource_url)
    }


    render() {
        return (
            <a className="release-box"  >
                <h3>{this.props.release.artist}</h3>
                <h3>{this.props.release.title}</h3>
                <h3>{this.props.release.year}</h3>
                <h3>{this.props.release.catno}</h3>
                <button onClick={this.handleClick} >click!</button>


            </a >
        );
    }
}

export default Release;

