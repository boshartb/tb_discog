import React, { Component } from "react";

class AlbumArtists extends Component {
  render() {
    return (
      <div className="album-artist">
        <p>{this.props.artist.name}</p>
      </div>
    );
  }
}

export default AlbumArtists;
