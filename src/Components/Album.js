import React, { Component } from 'react';

import AlbumInfo from "./AlbumsInfo"

class Album extends Component {
    state = {
        albumsData: [],
        isLoaded: false
    }

    componentDidMount() {
        // fetch('${releaseUrl}')
        fetch('https://api.discogs.com/labels/528464/releases')
            .then(res => res.json())
            .then(json => {

                this.setState({
                    isLoaded: true,
                    albumsData: json
                })
            });
    }

    render() {
        const { releaseUrl } = this.props;

        let { isLoaded, albumsData } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        let albumDataInfo = albumsData.map(album => (
            <AlbumInfo key={album.id} album={album} releaseUrl={releaseUrl} />
        ))

        return (
            <div className="album" >
                <div>{albumDataInfo}</div>
            </div>
        );
    }
}

export default Album;

// import SingleData from "./SingleData"


//                 render() {
//                     return (
//                         <div className="single-release" >
//                             <AlbumInfo single={SingleData}></AlbumInfo>
//                             {/* <div>{releaseList}</div> */}
//                         </div>
//                     );
//                 }
