import React, { Component } from 'react';

// import SingleData from "./SingleData"
import SingleReleaseInfo from "./SingleReleaseInfo"

class SingleRelease extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singles: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        // fetch('${releaseUrl}')
        fetch('https://api.discogs.com/labels/528464/releases')
            .then(res => res.json())
            .then(json => {


                this.setState({
                    isLoaded: true,
                    singles: json
                })
            });
    }


    render() {
        const { releaseUrl } = this.props;

        let { isLoaded, singles } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        let releaseList = singles.singles.map(single => (
            <SingleReleaseInfo key={single.id} single={single} releaseUrl={releaseUrl} />
        ))


        return (
            <div className="single-release" >
                <div>{releaseList}</div>
            </div>
        );
    }
}

export default SingleRelease;

             // santizied data here

                //     const santiztedREult ={};
                //     or  
                //     this.setState({
                //         isLoaded: true,
                //         releases: {

                //         }
                //     })
                // });