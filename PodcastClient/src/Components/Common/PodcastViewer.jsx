//Props Title, Podcast List Data
import { Component } from "react";
import PodcastData from "./PodcastData";

export default class PodcastViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_list: [],
    };
  }
  //Supposed to return a list of podcast data components look into flatlist?
  //flatlist render each
  render() {
    return (
      <div>
        <PodcastData
          name={"podcast name"}
          artist={"podcast artist"}
          collection={"this is part of a collection"}
        />
      </div>
    );
  }
}
