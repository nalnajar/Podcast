import "./PersonalProfilePage.css";
import React, { useState, useEffect, useRef } from "react";
import { Link, Route, Routes } from "react-router-dom";
import defaultCoverPic from "../Assets/defaultCoverPic.jpg";
import defaultProfilePic from "../Assets/defaultProfilePic.png";
import PersonalPostsPage from "./PersonalPostsPage";

const PersonalProfilePage = () => {
  const [selectedMode, setSelectedMode] = useState("regular");

  const handleModeChange = (event) => {
    setSelectedMode(event.target.value);
  };

  return (
    <div>
      <div className={`container ${selectedMode}`}>
        <div className="cover-photo-div">
          <img
            src={defaultCoverPic}
            alt="Cover Photo"
            className="cover-photo"
          />
          <div className="profile-photo-div">
            <img
              src={defaultProfilePic}
              alt="Profile Photo"
              className="profile-photo"
            />
          </div>
          <div className={`profile-name ${selectedMode}`}>
            <h3>User Name (Nick Name)</h3>
          </div>
          <div className={`line ${selectedMode}`}>
            <p></p>
          </div>
        </div>
        <div className="content">{/* Content inside the container */}</div>

        <div className={`tabs ${selectedMode}`}>
          <Link className={`tab ${selectedMode}`} to="/personalposts">
            Posts
          </Link>
          <Link className={`tab ${selectedMode}`} to="/personalphotos">
            Photos
          </Link>
          <Link className={`tab ${selectedMode}`} to="/personalabout">
            About
          </Link>
          <Link className={`tab ${selectedMode}`} to="/personalvideos">
            Videos
          </Link>
          <div className={`more-dropdown ${selectedMode}`}>
            <select value={selectedMode} onChange={handleModeChange}>
              <option value="regular">Regular Mode</option>
              <option value="dark">Dark Mode</option>
            </select>
          </div>
        </div>

        {/* Content */}
        <div className="content"></div>
      </div>
    </div>
  );
};

export default PersonalProfilePage;
