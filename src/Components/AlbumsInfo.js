import React, { Component } from "react";

class AlbumInfo extends Component {
  render() {
    return (
      <div className="album-info">
        <h2>Single Rlease Info</h2>
        <h3>{this.props.artists.artists}</h3>
        <h5>Style: {this.props.genres.genres}</h5>
      </div>
    );
  }
}

export default AlbumInfo;
