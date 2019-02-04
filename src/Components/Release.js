import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Release extends Component {

    // look into why redirect did not work. look up best practise
    state = {
        toSingleRelease: false,
    }

    handleSubmit = () => {
        this.props.selectRelease(this.props.release.resource_url)
        this.setState(() => ({ toSingleRelease: true }))
    }
    render() {
        if (this.state.toSingleRelease === true) {
            return <Redirect to="/single-release" />
        }

        return (
            <div className="release-box">
                <a onClick={this.handleSubmit}  >
                    <ul>
                        <p>
                            <div classname="artist">{this.props.release.artist}:  </div>
                            <div classname="title">{this.props.release.title}: </div>
                            <div ckassname="year">{this.props.release.year} </div>
                            <div className="release"> {this.props.release.catno}</div>
                            <img src="{this.props.release.thumb}" className="release" />

                        </p>
                    </ul>
                </a >
            </div >
        );
    }
}

export default Release;

