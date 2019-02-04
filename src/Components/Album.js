import React, { Component } from "react";
import AristComponent from "./AristComponent";
import GenreComponent from "./GenreComponent";
import ImageComponent from "./ImageComponent";

class Album extends Component {
  state = {
    artists: [],
    images: [],
    genres: [],
    isLoaded: false
  };

  componentDidMount() {
    // fetch('${releaseUrl}')
    fetch("https://api.discogs.com/releases/10402242")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          artists: json.artists,
          genres: json.genres
        });
      });
  }

  render() {
    const { genres, images, artists } = this.props;
    const renderArtists = artists.map(artist => <AristComponent artist={artist} />);
    const renderGenres = genres.map(genre => <GenreComponent genre={genre} />);
    const renderImages = images.map(image => <ImageComponent image={image} />);

    return (
      <div>
        {renderArtists()}
        {renderGenres()}
        {renderImages()}
      </div>
    );
  }
}

export default Album;

// import React, { Component } from "react";

// import AlbumInfo from "./AlbumsInfo";

// class Album extends Component {
//   state = {
//     album: []
//   };

//   componentDidMount() {
//     this.getItem();
//   }
//   getItem() {
//     // fetch('${releaseUrl}')
//     fetch("https://api.discogs.com/releases/10402242")
//       .then(results => results.json())
//       .then(results => this.setState({ album: results }));
//   }
//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.album.map(function(album, index) {
//             return (
//               <div key={index}>
//                 <h1>{album.artists}</h1>
//                 <p>{album.genres}</p>
//               </div>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// export default Album;
