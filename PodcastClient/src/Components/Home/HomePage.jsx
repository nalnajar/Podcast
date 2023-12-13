import React, {useState} from 'react';
import './HomePage.css';
import logo from '../Images/SoundBarrierLogo.png';
import searchIcon from '../Images/search-icon.png';
import imageHolder from '../Images/imageholder.png';
import PodcastViewer from '../Common/PodcastViewer'; 
import { HeaderBar } from "../Common/Common";

function HomePage() {
  const imagesPerSection = 6;

  const renderPodcastViewerForSection = (section, data) => {
    const start = section * imagesPerSection;
    const end = start + imagesPerSection;

    return (
      <PodcastViewer
        key={section}
        data_list={data.slice(start, end)} 
      />
    );
  };

  const podcastData = [
    {
      name: 'Podcast 1',
      artist: 'Artist 1',
      collection: 'Collection 1',
      imageB64: 'base64-encoded-image-1',
    },

    {
      name: 'Podcast 2',
      artist: 'Artist 2',
      collection: 'Collection 2',
      imageB64: 'base64-encoded-image-1',
    },

    {
      name: 'Podcast 3',
      artist: 'Artist 3',
      collection: 'Collection 3',
      imageB64: 'base64-encoded-image-1',
    },

    {
      name: 'Podcast 4',
      artist: 'Artist 4',
      collection: 'Collection 4',
      imageB64: 'base64-encoded-image-1',
    },

    {
      name: 'Podcast 5',
      artist: 'Artist 5',
      collection: 'Collection 5',
      imageB64: 'base64-encoded-image-1',
    },

    {
      name: 'Podcast 6',
      artist: 'Artist 6',
      collection: 'Collection 6',
      imageB64: 'base64-encoded-image-1',
    },
    
    {
      name: 'Podcast 7',
      artist: 'Artist 7',
      collection: 'Collection 7',
      imageB64: 'base64-encoded-image-1',
    },
  
    {
      name: 'Podcast 8',
      artist: 'Artist 8',
      collection: 'Collection 8',
      imageB64: 'base64-encoded-image-1',
    },
  
    {
      name: 'Podcast 9',
      artist: 'Artist 9',
      collection: 'Collection 9',
      imageB64: 'base64-encoded-image-1',
    },
  
    {
      name: 'Podcast 10',
      artist: 'Artist 10',
      collection: 'Collection 10',
      imageB64: 'base64-encoded-image-1',
    },
  
    {
      name: 'Podcast 11',
      artist: 'Artist 11',
      collection: 'Collection 11',
      imageB64: 'base64-encoded-image-1',
    },
  
    {
      name: 'Podcast 12',
      artist: 'Artist 12',
      collection: 'Collection 12',
      imageB64: 'base64-encoded-image-1',
    },
  
    {
      name: 'Podcast 13',
      artist: 'Artist 13',
      collection: 'Collection 13',
      imageB64: 'base64-encoded-image-1',
    },
  
    {
      name: 'Podcast 14',
      artist: 'Artist 14',
      collection: 'Collection 14',
      imageB64: 'base64-encoded-image-1',
    },
  
    {
      name: 'Podcast 15',
      artist: 'Artist 15',
      collection: 'Collection 15',
      imageB64: 'base64-encoded-image-1',
    },
  
    {
      name: 'Podcast 16',
      artist: 'Artist 16',
      collection: 'Collection 16',
      imageB64: 'base64-encoded-image-1',
    },
  
    {
      name: 'Podcast 17',
      artist: 'Artist 17',
      collection: 'Collection 17',
      imageB64: 'base64-encoded-image-1',
    },
  
    {
      name: 'Podcast 18',
      artist: 'Artist 18',
      collection: 'Collection 18',
      imageB64: 'base64-encoded-image-1',
    },
  ];



  return (
    <div>
            <HeaderBar />

     <header>
         {/* <nav>
          <div className="left-nav">
          <img className="home-logo-button" src={logo} alt="Home Icon" />
          <div className="search-bar">
            <input className="search-input" placeholder="Search..." type="text" />
            <img className="search-button" src={searchIcon} alt="Search Icon" />
          </div>
          <div className="right-nav">
            <b>LOGIN</b>
            <b>SIGN UP</b>
          </div>
          </div>
         
          <div className="nav-line"></div>
        </nav>
        <h1 className="header-title">Discover New Or Familiar Podcasts</h1>*/}
             <h1 className="header-title">Discover New Or Familiar Podcasts</h1>

      </header> 

      <div className="sections-container">
        <h2 className="section-title">Top Podcasts</h2>
        <div className="section">
          {renderPodcastViewerForSection(0, podcastData)}
        </div>
      </div>

      <div className="sections-container">
        <h2 className="section-title">Recommended For You</h2>
        <div className="section">
          {renderPodcastViewerForSection(1, podcastData)}
        </div>
      </div>

      <div className="sections-container">
        <h2 className="section-title">Categories</h2>
        <div className="section">
          {renderPodcastViewerForSection(2, podcastData)}
        </div>
      </div>
    </div>
  );
}

export default HomePage;