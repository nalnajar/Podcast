import React, { useState, useEffect, Fragment } from "react";
import { HeaderBar } from "../Common/Common";
import axios from "axios";
import ProfilePicture from "../Assets/profilepic_placeholder.jpg";
import "./ProfileViewer.css";
import PodcastList from "../Common/PodcastList";

const UserPage = () => {
  const [userPodcasts, setUserPodcasts] = useState([]);
  const username = localStorage.getItem("username");
  const userid = localStorage.getItem("userId");
  const [userCreationDate, setUserCreationDate] = useState("");

  useEffect(() => {
    if (userid) {
      axios
        .get(`http://localhost:8081/users/${userid}`)
        .then((response) => {
          if (response.data.length > 0) {
            const userDate = response.data[0].DateCreated;
            const date = new Date(userDate);
            const options = { year: "numeric", month: "long", day: "numeric" };
            const userFriendlyDate = date.toLocaleDateString("en-US", options);
            setUserCreationDate(userFriendlyDate);
          }
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });

      axios
        .get(`http://localhost:8081/posts/getAllFromUser/${userid}`)
        .then((response) => {
          const formattedData = response.data.map((post) => ({
            name: post.title,
            artist: post.text,
            collection: post.url,
          }));

          setUserPodcasts(formattedData);
        })
        .catch((error) => {
          console.error("Error fetching user podcasts:", error);
        });
    }
  }, [userid]);

  return (
    <div>
      <HeaderBar />
      <div className="user-page">
        {username ? (
          <Fragment>
            <div className="profile-card">
              <img
                src={ProfilePicture}
                alt="Profile"
                className="profile-picture"
              />
              <h2 className="username-header">{username}</h2>
              <p>
                <strong>Total Podcasts: {userPodcasts.length}</strong>
              </p>
              <p>
                <strong>Joined on: {userCreationDate}</strong>
              </p>
            </div>
            <div className="content-view-card">
              <div className="content-view">
                <h2>Content View</h2>
                <div>
                  {userPodcasts.length > 0 ? (
                    <PodcastList data={userPodcasts} />
                  ) : (
                    <p>No podcasts available</p>
                  )}
                </div>
              </div>
            </div>
          </Fragment>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default UserPage;
