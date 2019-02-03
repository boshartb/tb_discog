import React, { Component } from 'react';

import Release from "./Release"
import './ReleasePage.css';
import ReleaseFilter from './ReleaseFilter';
import ReleaseList from './ReleaseList';
import MatchingButton from './MatchingButton'
import UnmatchingButton from './UnmatchingButton'



class ReleaseSectionPage extends Component {

    state = {
        releasesToDisplay: this.props.releases,
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
            const filteredReleaseList = props.releases.filter(release =>
                release.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
            )

            const unmatchedReleases = props.releases.filter(release =>
                !release.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
            )

            return {
                releasesToDisplay: filteredReleaseList,
                unmatchedReleases: unmatchedReleases,
                filterValue
            }
        })
    }


    render() {
        let button = null
        let releaseChoice = null

        if (this.state.isMatching) {
            button = <UnmatchingButton onClick={this.handleUnmatchingClick} />
            releaseChoice = this.state.unmatchedReleases
        }
        else {
            button = <MatchingButton onClick={this.handleMatchingClick} />
            releaseChoice = this.state.releasesToDisplay
        }

        return (
            <div>
                <ReleaseFilter value={this.state.filterValue} onChange={this.handleFilterChange} />
                {button}
                <ReleaseList releases={releaseChoice} />
            </div>
        )
    }
}


export default ReleaseSectionPage;
