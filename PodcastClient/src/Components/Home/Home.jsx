import { HeaderBar } from "../Common/Common";
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
      <PodcastList data={data} />
    </div>
  );
};

export default Home;
