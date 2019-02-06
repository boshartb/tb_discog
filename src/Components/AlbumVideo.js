import React, { Component } from "react";

class AlbumVideos extends Component {
  render() {
    return (
      <div className="container">
        <iframe
          width="420"
          height="315"
          src={this.props.videos.uri}
          frameborder="0"
          allowfullscreen
        />
      </div>
    );
  }
}

export default AlbumVideos;
