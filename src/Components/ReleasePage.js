import React, { Component } from 'react';

import Release from "./Release"
import './ReleasePage.css';
// import ReleaseFilter from './ReleaseFilter';
// import ReleaseList from './ReleaseList';
// import ReleaseSectionPage from './ReleaseSectionFilter';
import dotenv from 'dotenv';
dotenv.config();

class ReleasePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            releases: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        const url = 'https://api.discogs.com//labels/528464/releases?page=1&per_page=100&key=${disc_key}&secret=${disc_secret}'

        fetch(url)
            .then(res => res.json())
            .then(json => {


                // santizied data here

                //     const santiztedREult ={};
                //     or  
                //     this.setState({
                //         isLoaded: true,
                //         releases: {

                //         }
                //     })
                // });

                this.setState({
                    isLoaded: true,
                    releases: json
                })
            });
    }

    render() {
        let { isLoaded, releases } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        let releaseList = releases.releases.map(release => (
            <Release key={release.id} release={release} selectRelease={this.props.selectRelease} />

        ))

        return (
            <div className="ReleasePage">
                <div className="wrapper">
                    <h1>Discogs Release Page </h1>
                    {/* <ReleaseSectionPage releases={releaseList} > </ReleaseSectionPage> */}
                    {/* <ReleaseList releases={releaseList} > </ReleaseList> */}
                    <div>{releaseList}</div>
                </div>
            </div>
        );
    }
}

export default ReleasePage;

