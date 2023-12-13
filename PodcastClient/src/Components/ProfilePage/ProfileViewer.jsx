import React from "react";
import { HeaderBar } from "../Common/Common";

const ProfileViewer = () => {
  const username = localStorage.getItem("username");
  return (
    <div>
      <HeaderBar />
      <h1>{username}</h1>
    </div>
  );
};

export default ProfileViewer;
