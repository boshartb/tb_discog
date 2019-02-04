import React, { Component } from "react";
import AlbumArtist from "./AlbumArtist";
import AlbumGenre from "./AlbumGenre";
import AlbumImage from "./AlbumImage";

class Album extends Component {
  state = {
    artists: [],
    images: [],
    genres: [],
    isLoaded: false
  };

  componentDidMount = () => {
    // console.log(this.props)
    // const { releaseUrl } = this.props
    // console.log(releaseUrl)
    // fetch(${ url })
    fetch("https://api.discogs.com/releases/10402242")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          artists: json.artists,
          genres: json.genres,
          images: json.images,
        });
      });
  }

  render() {
    const { artists, images, genres } = this.state;
    const renderArtists = artists.map((artist, id) => (
      <AlbumArtist artist={artist} key={id} />
    ));
    const renderGenres = genres.map((genre, id) => (
      <AlbumGenre genre={genre} key={id} />
    ));
    const renderImages = images.map((image, id) => (
      <AlbumImage image={image} key={id} />
    ));

    return (
      <div>
        {renderArtists}
        {renderGenres}
        {renderImages}
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
