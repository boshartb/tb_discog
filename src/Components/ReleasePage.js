import React, { Component } from 'react';

import Release from "./Release"
import './ReleasePage.css';
import ReleaseFilter from './ReleaseFilter';
import ReleaseList from './ReleaseList';

class ReleasePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            releases: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        fetch('https://api.discogs.com//labels/528464/releases?page=1&per_page=100')
            .then(res => res.json())
            .then(json => {
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
            <Release key="{release.id}" release={release} />

        ))

        return (
            <div className="ReleasePage">
                <div className="wrapper">
                    <h1>Discogs Release Page</h1>
                    <ReleaseFilter />
                    <ReleaseList release={releaseList}> </ReleaseList>
                </div>
            </div>
        );
    }
}

export default ReleasePage;


