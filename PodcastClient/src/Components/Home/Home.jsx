import { HeaderBar } from "../Common/Common";
import PodcastList from "../Common/PodcastList";
import React, { useEffect, useState } from "react";
import "./HomePage.css";

const Home = () => {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("podcastData");
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    fetch("http://localhost:8081/posts/getAll")
      .then((response) => response.json())
      .then((postData) => {
        const formattedData = postData.map((post) => ({
          name: post.title,
          artist: post.text,
          collection: post.url,
        }));

        setData(formattedData);
        localStorage.setItem("podcastData", JSON.stringify(formattedData));
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
