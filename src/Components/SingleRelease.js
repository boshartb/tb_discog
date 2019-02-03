import React, { Component } from 'react';

import SingleData from "./SingleData"
import SingleReleaseInfo from "./SingleReleaseInfo"

class SingleRelease extends Component {

    // 3. call the fetch of the api



    render() {
        const { releaseUrl } = this.props;


        return (
            <div className="single-release">
                <SingleReleaseInfo single={SingleData} />
            </div>
        );
    }
}

export default SingleRelease;