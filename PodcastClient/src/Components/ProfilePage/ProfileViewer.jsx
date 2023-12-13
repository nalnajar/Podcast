import React, { useState, useEffect, Fragment } from "react";
import { HeaderBar } from "../Common/Common";
import axios from "axios";
import ProfilePicture from "../Assets/profilepic_placeholder.jpg";
import "./ProfileViewer.css";

const ContentView = ({ userPodcasts }) => {
  return (
    <div className="content-view">
      <h2>Content View</h2>
      {userPodcasts ? (
        userPodcasts.map((podcast) => (
          <div key={podcast.id}>
            <h3>{podcast.title}</h3>
            {/* Other info needed */}
          </div>
        ))
      ) : (
        <p>No podcasts available</p>
      )}
    </div>
  );
};

const UserPage = ({ userId }) => {
  const [userPodcasts, setUserPodcasts] = useState([]);
  const [totalPodcasts, setTotalPodcasts] = useState(0); // Initialize totalPodcasts state
  const username = localStorage.getItem("username");

  useEffect(() => {
    const fetchUserPodcasts = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/user/${username}/podcasts`);
        setUserPodcasts(response.data); // Assuming the response is an array of user podcasts
        setTotalPodcasts(response.data.length); // Set totalPodcasts based on the fetched data length
      } catch (error) {
        console.error("Error fetching user podcasts:", error);
      }
    };

    if (username) {
      fetchUserPodcasts();
    }
  }, [username]);

  return (
    <div>
      <HeaderBar />

      <div className="user-page">
        {username !== "" ? (
          <Fragment>
            <div className="profile-card">
              <img
                src={ProfilePicture}
                alt="Profile"
                className="profile-picture"
              />
              <h2 className="username-header">{username}</h2>
              <p>
                <strong>Total Podcasts: {totalPodcasts}</strong>
              </p>
            </div>
            <div className="content-view-card">
              {/* Pass userPodcasts and totalPodcasts as props to ContentView */}
              <ContentView userPodcasts={userPodcasts} />
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
