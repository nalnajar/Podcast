//Props Title, Podcast List Data
import { Component, FlatList, SafeAreaView } from "react";
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
      <SafeAreaView>
        <FlatList
          data={this.state.data_list}
          renderItem={({ item }) => (
            <PodcastData
              name={item.name}
              artist={item.artist}
              collection={item.collection}
            />
          )}
        />
      </SafeAreaView>
    );
  }
}
