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
                
              {/* This is just dummy data to go off of */}
             <img src={userData.profilePicture} alt="Profile" className='profile-picture' />
              <h3>{userData.username}</h3>
              <p><strong>Followers:</strong> {userData.totalFollowers}</p>
              <p><strong>Total Podcasts:</strong> {userData.totalPodcasts}</p>

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
