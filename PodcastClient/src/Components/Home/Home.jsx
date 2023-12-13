import { HeaderBar } from "../Common/Common";
import PodcastList from "../Common/PodcastList";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/posts/getAll")
      .then((response) => {
        console.log("Response status:", response.status);
        return response.json();
      })
      .then((postData) => {
        console.log("Raw data from server:", postData);

        const formattedData = postData.map((post) => ({
          name: post.title,
          artist: post.text,
          collection: post.url,
        }));

        console.log("Formatted data for the component:", formattedData);

        setData(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <HeaderBar />
      <PodcastList data={data} />
    </div>
  );
};

export default Home;
