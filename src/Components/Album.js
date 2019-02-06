import React, { Component } from "react";
import dotenv from "dotenv";

import AlbumArtist from "./AlbumArtist";
import AlbumGenre from "./AlbumGenre";
import AlbumImage from "./AlbumImage";
import AlbumVideo from "./AlbumVideo";

dotenv.config();

class Album extends Component {
  state = {
    artists: [],
    images: [],
    videos: [],
    genres: [],
    isLoaded: false
  };
  componentDidMount = () => {
    const { releaseUrl } = this.props;
    fetch(
      `${releaseUrl}?&key=${process.env.REACT_APP_TMDB_API_KEY}&secret=${
        process.env.REACT_APP_TMDB_API_SECRET
      }`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          artists: json.artists,
          genres: json.genres,
          videos: json.videos,
          images: json.images
        });
      });
  };

  render() {
    const { artists, images, genres, videos } = this.state;
    const renderArtists = artists.map((artist, id) => (
      <AlbumArtist artist={artist} key={id} />
    ));
    const renderGenres = genres.map((genre, id) => (
      <AlbumGenre genre={genre} key={id} />
    ));
    const renderVideos = videos.map((videos, id) => (
      <AlbumVideo videos={videos} key={id} />
    ));
    const renderImages = images.map((image, id) => (
      <AlbumImage image={image} key={id} />
    ));

    return (
      <div>
        <div className="release">
          <div className="release">
            <h2>{renderArtists}</h2>
            <p> {renderGenres}</p>
            {renderImages}
            {/* {renderVideos} */}
          </div>
        </div>
      </div>
    );
  }
}

export default Album;
