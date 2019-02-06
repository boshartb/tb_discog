import React, { Component } from "react";


class AlbumImage extends Component {
  render() {
    return (
      <div className="album-image" >
        <img src={this.props.image.resource_url} />
      </div >
    );
  }
}

export default AlbumImage;
