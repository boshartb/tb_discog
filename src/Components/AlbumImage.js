import React, { Component } from "react";


class AlbumImage extends Component {
  render() {
    return (
      <div  >
        <img className="album-image" src={this.props.image.resource_url} />
      </div >
    );
  }
}

export default AlbumImage;
