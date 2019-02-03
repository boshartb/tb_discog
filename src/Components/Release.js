import React, { Component } from 'react';

// get on click

class Release extends Component {
    handleClicks = () => {
        console.log("in release")
        this.props.selectRelease(this.props.release.resource_url)
    }


    render() {
        return (
            <div className="release-box">
                <a onClick={this.handleClicks}  >


                    <h3>{this.props.release.artist}</h3>
                    <h3>{this.props.release.title}</h3>
                    <h3>{this.props.release.year}</h3>
                    <h3>{this.props.release.catno}</h3>



                </a >
            </div>
        );
    }
}

export default Release;

