import React, { Component } from "react";

class AlbumGenre extends Component {
  render() {
    return (
      <div classname="album-genre">
        <p>{this.props.genre}</p>
      </div>
    );
  }
}

export default AlbumGenre;
