import { HeaderBar } from "../Common/Common";
import React, { useEffect, useState } from "react";

const CodersComponent = () => {
  const [shuffledCoders, setShuffledCoders] = useState([]);

  const coders = [
    { name: "agnifiraz", githubName: "agnifiraz" },
    { name: "kareem823", githubName: "kareem823" },
    { name: "Lunebin", githubName: "Lunebin" },
    { name: "nickGoudsbloem", githubName: "nickGoudsbloem" },
    { name: "notleopard", githubName: "notleopard" },
    { name: "R3GENERATion", githubName: "R3GENERATion" },
    { name: "SaeedSab101", githubName: "SaeedSab101" },
    { name: "Shiro-N3ko", githubName: "Shiro-N3ko" },
    { name: "Tylesala", githubName: "Tylesala" },
    { name: "vibhutisahdev", githubName: "vibhutisahdev" },
    { name: "nalnajar", githubName: "nalnajar" },
  ];

  useEffect(() => {
    const shuffledArray = [...coders].sort(() => Math.random() - 0.5);
    setShuffledCoders(shuffledArray);
  }, []);

  return (
    <div style={styles.mainContainer}>
      <HeaderBar />
      <div style={styles.container}>
        <h2 style={styles.coderTitle}>Our Coders</h2>
        <div style={styles.cardContainer}>
          {shuffledCoders.map((coder) => (
            <div key={coder.name} style={styles.card}>
              <a
                href={`https://github.com/${coder.githubName}`}
                style={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`https://github.com/${coder.githubName}.png`}
                  alt={coder.name}
                  style={styles.avatar}
                />
                <span style={styles.name}>{coder.name}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    fontFamily: "Arial, sans-serif",
  },
  container: {
    maxWidth: "1440px",
    margin: "0 auto",
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    marginTop: "80px",
  },
  coderTitle: {
    textAlign: "center",
    color: "#333",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    background: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s",
    cursor: "pointer",
    ":hover": {
      transform: "scale(1.05)",
    },
  },
  avatar: {
    width: "100%",
    height: "auto",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  },
  link: {
    display: "block",
    padding: "10px",
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
  },
  name: {
    display: "block",
    padding: "10.0px",
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
  },
};

export default CodersComponent;
