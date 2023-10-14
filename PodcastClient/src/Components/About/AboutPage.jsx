import React from "react";
import SoundBarrierLogo from "../Assets/SoundBarrierLogo.png";
import Waves from "../Assets/Waves.png";
import { HeaderBar } from "../Common/Common";

const AboutPage = () => {
  const coders = [
    "Ralph Constantin",
    "Ryan Squire",
    "Gavin Guerrette",
    "Agnita Paul",
    "Noor Al Najar",
    "Vibhuti Sahdev",
    "Eden Tuck",
    "Saeed Alsabawi",
    "Nick Goudsbloem",
    "Kareem Idris",
    "Tyler Salari",
    "Kieran Primeau",
  ];

  const wavesArray = new Array(15).fill(0);

  return (
    <div>
      <HeaderBar />
      <div style={styles.container}>
        <h1 style={styles.title}>About Us</h1>
        <img src={SoundBarrierLogo} alt="Podcast Logo" style={styles.logo} />
        <br />
        <div style={styles.description}>
          <div style={styles.row1}>
            <div style={styles.column}>
              <h2>Discover and Share Unique Voices</h2>
              Sound Barrier isn't just another social media platform; it's a
              revolution in the world of podcasts. Dive deep into a vast library
              of voices and stories waiting to be heard.
            </div>
            <div style={styles.column}>
              <h2>For the Creators</h2>
              Unleash your voice! Upload your audio podcast and start reaching
              listeners in seconds. We believe in giving creators the freedom
              they deserve, which means fewer hoops to jump through and more
              voices to be heard.
            </div>
            <div style={styles.column}>
              <h2>For the Listeners</h2>
              Find new favorites. Explore a world of content uploaded by users
              just like you. Whether you're into storytelling, news, or
              educational content, there's always something fresh waiting for
              you.
            </div>
          </div>
          <div style={styles.row2}>
            <div style={styles.twoColumn}>
              <h2>Safety and Community First</h2>
              While we pride ourselves on freedom, we also take safety
              seriously. We review user-reported content and ensure that
              anything violating our policies is addressed properly. Sound
              Barrier's mission is to create an environment that's both
              liberating for creators and safe for its community.
            </div>
            <div style={styles.twoColumn}>
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
          <img key={index} src={Waves} alt="Waves" style={styles.waves} />
        ))}
        <br />
        <h2>Our Coders</h2>
        <ul style={styles.codersList}>
          {coders.map((coder) => (
            <li key={coder} style={styles.coderName}>
              {coder}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "2%",
    textAlign: "center",
  },
  title: {
    color: "#333",
    fontSize: "2em",
  },
  logo: {
    width: "250px",
    height: "auto",
  },
  codersList: {
    listStyleType: "none",
    padding: 0,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  coderName: {
    width: "26%",
    boxSizing: "border-box",
    padding: "10px",
    fontSize: "1.2em",
    textAlign: "center",
  },
  row1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "1%",
  },
  row2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "1.5rem",
    marginLeft: "5%",
    marginRight: "5%",
  },
  column: {
    marginLeft: "2%",
    marginRight: "2%",
  },
  twoColumn: {
    marginTop: "1%",
    marginLeft: "5%",
    marginRight: "5%",
  },
  description: {
    marginLeft: "25%",
    marginRight: "25%",
  },
  waves: { width: "100px" },
};

export default AboutPage;
