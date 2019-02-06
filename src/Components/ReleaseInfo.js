import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import logo from "./logo.png";

class ReleaseInfo extends Component {

    // look into why redirect did not work. look up best practise
    state = {
        toSingleRelease: false,
    }

    handleSubmit = () => {
        this.props.selectRelease(this.props.release.resource_url)
        this.setState(() => ({ toSingleRelease: true }))
    }
    render() {
        if (this.state.toSingleRelease === true) {
            return <Redirect to="/album" />
        }

        return (
            <div className="release-info" >
                <a onClick={this.handleSubmit}  >
                    <img className="release-thumb" src={this.props.release.thumb} />
                    <h3 className="release-artist">{this.props.release.artist}:  </h3>
                    <p className="release-title">{this.props.release.title}: </p>
                    <p ckassname="release-year">{this.props.release.year} </p>
                    <p className="release-image"> {this.props.release.catno}</p>
                    {/* <img src={logo} /> */}
                </a >
            </div >
        );
    }
}

export default ReleaseInfo;

