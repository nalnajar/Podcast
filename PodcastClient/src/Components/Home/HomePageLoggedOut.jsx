import React, { useState } from 'react';
import './HomePageLoggedout.css';
import logo from '../Images/SoundBarrierLogo.png';
import searchIcon from '../Images/search-icon.png';
import imageHolder from '../Images/imageholder.png';
import profile from '../Images/profile.png';
import add from '../Images/add.png'
import HomePage from './HomePage';

function HomePageLoggedOut() {
  const images = [imageHolder,imageHolder,imageHolder,imageHolder,imageHolder,imageHolder,imageHolder,imageHolder,imageHolder,imageHolder,imageHolder,imageHolder];
  const imagesPerSection = 6;

  const [currentSections, setCurrentSections] = useState({
    topPodcasts: 0,
    recommended: 0,
    categories: 0
  });  

  const nextSection = (section) => {
    setCurrentSections((prevSections) => {
      const totalSections = Math.ceil(images.length / imagesPerSection);
      const nextSection = (prevSections[section] + 1) % totalSections;
      return { ...prevSections, [section]: nextSection };
    });
  };

  const prevSection = (section) => {
    setCurrentSections((prevSections) => {
      const totalSections = Math.ceil(images.length / imagesPerSection);
      const prevSection = prevSections[section] === 0 ? totalSections - 1 : prevSections[section] - 1;
      return { ...prevSections, [section]: prevSection };
    });
  };

  const renderImagesForSection = (section) => {
    const start = currentSections[section] * imagesPerSection;
    const end = start + imagesPerSection;

    return images.slice(start, end).map((image, index) => (
      <div className="image" key={start + index}>
        <img src={image} alt={`Image ${start + index + 1}`} />
        <p className="caption">PODCAST TITLE {start + index + 1}</p>
      </div>
    ));
  };

  return (
    <div>
      <header>
        <nav>
          <div className="left-nav">
          <img className="home-logo-button" src={logo} alt="Home Icon" />
          </div>
          <div className="search-bar">
            <input className="search-input" placeholder="Search..." type="text" />
            <img className="search-button" src={searchIcon} alt="Search Icon" />
          </div>
          <div className="right-nav">
          <img className="add-button" src={add} alt="Add Icon" />

          <div className="profile-dropdown">
              <img className="profile-button" src={profile} alt="Profile Icon" />
              <div className="profile-options">
                <a href="#">View Profile</a>
                <a href="#">Manage Account</a>
                <a href="#">Logout</a>
              </div>
            </div>
          </div>
          <div className="nav-line"></div>
        </nav>
        <h1 className="header-title">Discover New Or Familiar Podcasts</h1>
      </header>

      <div className="sections-container">
        <h2 className="section-title">Top Podcasts</h2>
        <div className="section">
          <div className="section-buttons">
            <button onClick={() => prevSection('topPodcasts')}>Previous</button>
            <button onClick={() => nextSection('topPodcasts')}>Next</button>
          </div>
          <div className="images-container">{renderImagesForSection('topPodcasts')}</div>
        </div>
      </div>

      <div className="sections-container">
        <h2 className="section-title">Recommended For You</h2>
        <div className="section">
          <div className="section-buttons">
            <button onClick={() => prevSection('recommended')}>Previous</button>
            <button onClick={() => nextSection('recommended')}>Next</button>
          </div>
          <div className="images-container">{renderImagesForSection('recommended')}</div>
        </div>
      </div>

      <div className="sections-container">
        <h2 className="section-title">Categories</h2>
        <div className="section">
          <div className="section-buttons">
            <button onClick={() => prevSection('categories')}>Previous</button>
            <button onClick={() => nextSection('categories')}>Next</button>
          </div>
          <div className="images-container">{renderImagesForSection('categories')}</div>
        </div>
      </div>
    </div>
  );
}

export default HomePageLoggedOut;