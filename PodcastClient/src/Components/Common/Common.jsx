import React from "react";
import { Link } from "react-router-dom";
import "./Common.css";
import LoginSignup from "../LoginSignupComponent/LoginSignup";

function ButtonSB(props) {
  return (
    <button
      className="CommonButton"
      style={{
        display: "block",
        width: "fit-content",
        float: props.float ?? "left",
        margin: 1,
        marginRight: props.marginRight ?? 1,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
      }}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

function HeaderBar() {
  return (
    <div id="Header">
      <Link to="/Home">
        <ButtonSB text="Home" marginRight={"10px"} />
      </Link>
      <Link to="/About">
        <ButtonSB
          text="About"
          onClick={() => {
            /* Add your click handler here */
          }}
        />
      </Link>
      <LoginSignup />
    </div>
  );
}

export { ButtonSB as LinkSB, HeaderBar };
