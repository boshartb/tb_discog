import React, { Component } from 'react';


class Release extends Component {
    render() {
        return (
            <div className="release">
                <h3>{this.props.release.artist}</h3>
                <h3>{this.props.release.title}</h3>
                <h3>{this.props.release.year}</h3>
                <h3>{this.props.release.catno}</h3>
            </div>
        );
    }
}

export default Release;

