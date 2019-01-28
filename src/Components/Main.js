import React, { Component } from 'react';

import Release from "./Release"
import './Main.css';


class Main extends Component {

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
        let discog = releases.releases.map(release => (
            <Release key="{release.id}" release={release} />

        ))

        return (
            <div className="main">
                <div className="wrapper">

                    {discog}
                </div>
            </div>
        );
    }
}

export default Main;


