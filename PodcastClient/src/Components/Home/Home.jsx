import { HeaderBar } from "../Common/Common";
import { FlatList } from "node_modules/react-native";
import PodcastData from "../Common/PodcastData";
import PodcastList from "../Common/PodcastList";
import React from "react";

const Home = () => {
  var data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      name: "PodcastName",
      artist: "PodcastArtist",
      collection: "PodcastCollection",
    });
  }
  return (
    <div>
      <HeaderBar />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <PodcastData
            name={item.name}
            artist={item.artist}
            collection={item.collection}
          />
        )}
      />
      <PodcastData
        name={"podcast name"}
        artist={"podcast artist"}
        collection={"this is part of a collection"}
      />
      <PodcastData
        name={"another podcast name"}
        artist={"another podcast artist"}
      />
    </div>
  );
};

export default Home;
