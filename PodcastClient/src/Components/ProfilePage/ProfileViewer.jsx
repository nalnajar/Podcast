import React, { useState, useEffect, Fragment } from "react";
import { HeaderBar } from "../Common/Common";
import axios from "axios";
import ProfilePicture from "../Assets/profilepic_placeholder.jpg";
import "./ProfileViewer.css";

const UserPage = ({ userId }) => {
  //   const [userData, setUserData] = useState(null);
  const username = localStorage.getItem("username");

  //   useEffect(() => {
  // const fetchUserData = async () => {
  //   try {
  //     // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
  //     const response = await axios.get(
  //       `http://localhost:8081/users/${userId}`
  //     );
  //     setUserData(response.data);
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // };

  // fetchUserData();
  //   }, [userId]);

  return (
    <div>
      <HeaderBar />
      {username !== "" ? (
        <Fragment>
          <div>
            {/* This is just dummy data to go off of */}
            <img
              src={ProfilePicture}
              alt="Profile"
              className="profile-picture"
            />
            <h2 className="username-header">{username}</h2>
            <p>
              <strong>Total Podcasts:</strong>
            </p>

            {/* Display other user data as needed */}
          </div>
        </Fragment>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserPage;
