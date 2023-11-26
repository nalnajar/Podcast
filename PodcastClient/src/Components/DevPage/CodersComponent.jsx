import { HeaderBar } from "../Common/Common";
import React from "react";

const CodersComponent = () => {
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

  return (
    <div>
      <HeaderBar />
      <div style={styles.container}>
        <h2 style={styles.coderTitle}>Our Coders</h2>
        <div>
          <ul style={styles.codersList}>
            {coders.map((coder) => (
              <li key={coder} style={styles.coderName}>
                {coder}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
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
  coderTitle: {
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
};

export default CodersComponent;
