import React, { Component } from 'react';

import Release from "./Release"
import './ReleasePage.css';
import ReleaseFilter from './ReleaseFilter';
import ReleaseList from './ReleaseList';
import SearchButton from './SearchButton'
import ClearButton from './ClearButton'
import ReleasePage from './ReleasePage';


class ReleaseSectionPage extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         releases: [],
    //         isLoaded: false
    //     }
    // }

    state = {
        // releases: [],
        isLoaded: false,
        releasesToDisplay: this.props.release,
        unmatchedReleases: [],
        filterValue: '',
        isMatching: false
    }




    handleMatchingClick = () => {
        this.setState({ isMatching: true })
    }

    handleUnmatchingClick = () => {
        this.setState({ isMatching: false })
    }

    // Do not modify this handleFilterChange method
    handleFilterChange = (event) => {
        event.preventDefault()
        const filterValue = event.target.value

        this.setState((prevState, props) => {
            const filteredReleasesList = props.releases.filter(release =>
                release.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
            )

            const unmatchedReleases = props.releases.filter(release =>
                !release.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
            )

            return {
                releasesToDisplay: filteredReleasesList,
                unmatchedReleases: unmatchedReleases,
                filterValue
            }
        })
    }


    render() {
        let button = null
        let releaseChoice = null

        if (this.state.isMatching) {
            button = <ClearButton onClick={this.handleUnmatchingClick} />
            releaseChoice = this.state.unmatchedReleases
        }
        else {
            button = <SearchButton onClick={this.handleMatchingClick} />
            releaseChoice = this.state.releasesToDisplay
        }

        return (
            <div className="ReleasePage">
                <div className="wrapper">
                    <h1>Discogs Release Page</h1>
                    <ReleaseFilter value={this.state.filterValue} onChange={this.handleFilterChange} />
                    {button}
                    <ReleaseList releases={releaseList}> </ReleaseList>
                </div>
            </div>
        );
    }
}

export default ReleaseSectionPage;
