import React, { Component } from 'react';

class SingleReleaseInfo extends Component {
    render() {
        return (
            <div>
                <h2>Single Rlease Info</h2>
                <h3>{this.props.single.artists_sort}</h3>
                <h5>Style: {this.props.single.styles}</h5>
                <h5>{this.props.single.year}</h5>
                <h1>{this.props.url}</h1>
            </div>
        );
    }
}

export default SingleReleaseInfo;