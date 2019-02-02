import React, { Component } from 'react';

import SingleData from "./SingleData"
import SingleReleaseInfo from "./SingleReleaseInfo"

class SingleRelease extends Component {
    render() {
        return (
            <div className="single-release">
                <SingleReleaseInfo single={SingleData} />
            </div>
        );
    }
}

export default SingleRelease;