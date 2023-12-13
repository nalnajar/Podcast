import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { HeaderBar } from "../Common/Common";
import axios from "axios";

const UserPage = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
        const response = await axios.get(`YOUR_API_ENDPOINT/users/${userId}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div>
      <HeaderBar />
      {userData ? (
        <Fragment>
          <div>
            {/* This is just dummy data to go off of */}
            <img
              src={userData.profilePicture}
              alt="Profile"
              className="profile-picture"
            />
            <h3>{userData.username}</h3>
            <p>
              <strong>Followers:</strong> {userData.totalFollowers}
            </p>
            <p>
              <strong>Total Podcasts:</strong> {userData.totalPodcasts}
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
