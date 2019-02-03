import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Release extends Component {

    // look into why redirect did not work. look up best practise
    state = {
        toSingleRelease: false,
    }

    handleSubmit = () => {
        console.log("in release")
        this.props.selectRelease(this.props.release.resource_url)
        this.setState(() => ({ toSingleRelease: true }))
    }
    render() {
        if (this.state.toSingleRelease === true) {
            return <Redirect to="/single-release" />
        }

        return (
            <div className="release-box">
                <a onClick={this.handleSubmit}  >
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

