//Props Title, Podcast List Data
import { Component } from "react";
import PodcastData from "./PodcastData";

export default class PodcastList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_list: props.data,
    };
  }
  //Supposed to return a list of podcast data components look into flatlist?
  //flatlist render each
  render() {
    return (
      <div className="PodcastRow">
        <ul className="PodcastRow">
          {this.state.data_list.map((podcast) => (
            <PodcastData
              name={podcast.name}
              artist={podcast.artist}
              collection={podcast.collection}
            />
          ))}
        </ul>
      </div>
    );
  }
}
