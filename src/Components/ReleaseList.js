import React, { Component } from 'react';

class ReleaseList extends Component {
    render() {
        return (
            <div className="releaselist">
                {this.props.release}
            </div>
        );
    }
}

export default ReleaseList;