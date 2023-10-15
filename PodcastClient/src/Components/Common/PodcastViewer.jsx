//Props Title, Podcast List Data
import { Component } from "react";
import PodcastData from "./PodcastData";

export default class PodcastViewer extends Component {
  //Supposed to return a list of podcast data components
  render() {
    return (
      <div>
        <PodcastData />
      </div>
    );
  }
}
