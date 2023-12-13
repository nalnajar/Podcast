// PodcastList.jsx
import React, { Component } from "react";
import PodcastData from "./PodcastData";

export default class PodcastList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_list: props.data,
    };
  }

  handlePodcastClick = () => {
    // Make it so when it is clicked, it opens a new tab or something and plays the podcast selected
    console.log("Podcast is clicked!"); // for testing
  };

  render() {
    return (
      <div className="PodcastRow">
        <ul className="PodcastRow">
          {this.state.data_list.map((podcast, index) => (
            <button
              key={index}
              onClick={() => this.handlePodcastClick(podcast)}
              className="PodcastButton"
            >
              <PodcastData
                key={index}
                name={podcast.name}
                artist={podcast.artist}
                collection={podcast.collection}
              />
            </button>
          ))}
        </ul>
      </div>
    );
  }
}
