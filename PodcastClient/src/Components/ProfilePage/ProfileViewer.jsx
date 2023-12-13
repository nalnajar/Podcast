import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { HeaderBar } from "../Common/Common";


const UserPage = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);



  return (
    <div>
      <HeaderBar />
      {isAuthenticated ? (
        <Fragment>
          {userData ? (
            <div>
              <h2>{userData.username}'s Podcast Page</h2>
              {/* Display other user data as needed */}

            </div>
          ) : (
            <p>Loading user data...</p>
          )}
        </Fragment>
      ) : (
        <p>
          Please <Link to="/login">log in</Link> to view this page.
        </p>
      )}
    </div>
  );
};

export default UserPage;
