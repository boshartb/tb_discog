import React, { Component } from "react";

class GenreComponent extends Component {
  render() {
    return (
      <div>
        <p>{this.props.genre}</p>
      </div>
    );
  }
}

export default GenreComponent;
