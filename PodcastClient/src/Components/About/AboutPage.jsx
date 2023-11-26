import React from "react";
import SoundBarrierLogo from "../Assets/SoundBarrierLogo.png";
import Waves from "../Assets/Waves.png";
import { HeaderBar } from "../Common/Common";
import "./AboutPage.css";

const AboutPage = () => {
  const wavesArray = new Array(15).fill(0);

  return (
    <div>
      <HeaderBar />
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <img src={SoundBarrierLogo} alt="Podcast Logo" className="about-logo" />
        <br />
        <div className="about-description">
          <div className="about-row1">
            <div className="about-column">
              <h2>Discover Voices</h2>
              Sound Barrier isn't just another social media platform; it's a
              revolution in the world of podcasts. Dive deep into a vast library
              of voices and stories waiting to be heard.
            </div>
            <div className="about-column">
              <h2>For the Creators</h2>
              Unleash your voice! Upload your audio podcast and start reaching
              listeners in seconds. We believe in giving creators the freedom
              they deserve, which means fewer hoops to jump through and more
              voices to be heard.
            </div>
            <div className="about-column">
              <h2>For the Listeners</h2>
              Find new favorites. Explore a world of content uploaded by users
              just like you. Whether you're into storytelling, news, or
              educational content, there's always something fresh waiting for
              you.
            </div>
          </div>
          <div className="about-row2">
            <div className="about-twoColumn">
              <h2>Safety and Community First</h2>
              While we pride ourselves on freedom, we also take safety
              seriously. We review user-reported content and ensure that
              anything violating our policies is addressed properly. Sound
              Barrier's mission is to create an environment that's both
              liberating for creators and safe for its community.
            </div>
            <div className="about-twoColumn">
              <h2>Why Choose Us</h2>
              We're not just another podcast platform; we're a community. With
              an interface designed for ease of use, unmatched features, and a
              commitment to engaging our users, Sound Barrier stands apart.
            </div>
          </div>
        </div>
        <br />
        <br />
        {wavesArray.map((_, index) => (
          <img key={index} src={Waves} alt="Waves" className="about-waves" />
        ))}
        <br />
      </div>
    </div>
  );
};

export default AboutPage;
