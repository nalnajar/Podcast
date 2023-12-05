import { HeaderBar } from "../Common/Common";
import PodcastData from "../Common/PodcastData";

const Home = () => {
  return (
    <div>
      <HeaderBar />
      <PodcastData
        name={"podcast name"}
        artist={"podcast artist"}
        collection={"this is part of a collection"}
      />
      <PodcastData
        name={"another podcast name"}
        artist={"another podcast artist"}
        collection={""}
      />
    </div>
  );
};

export default Home;
