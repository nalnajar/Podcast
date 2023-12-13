import React from "react";
import { Link } from "react-router-dom";
import GooglePicker from "./GooglePicker";
import "./Common.css";
import LoginSignup from "../LoginSignupComponent/LoginSignup";
import SoundBarrier from "../Assets/SoundBarrierLogo2.png";

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
  var selectedData = { url: "", embeded: "" };
  const callbk = (data) => {
    selectedData = { url: data.url, embeded: data.embeded };
  };
  return (
    <div id="Header">
      <Link to="/Home">
        <div className="ButtonAdjust adjust">
          <img src={SoundBarrier} alt="Home" className="test" />
        </div>
      </Link>
      <p color="cyan">{selectedData.url}</p>
      <LoginSignup />
    </div>
  );
}

/*
<GooglePicker //please feel free to move, and the keys should be secrets retrieved from the server.
        callback={callbk}
        //token currently temp from OAuth Playground. Visit https://developers.google.com/oauthplayground to get started. Until we have OAuth2 credintials provided
        token="ya29.a0AfB_byAa-kmj9XqHARaqq22ur4rpzFjDdJizYijw0ygXwuMMvNTUwNpHtscz31Xr-VbZPgExU-GHrQQ6EnuDC6JDk6Cq9ZyZ0FdZ3Q7yMC7BdLNvNu6U42cJloUVpI_EMcKzbkeO1RZnhY5hPHKD5YPhohHIfG9XTBOTaCgYKAdASARASFQHGX2MiuYxXk9kGHZTQLFuzwNlc1Q0171"
        clientId="soundbarrier-f3c9e"
        developerKey="AIzaSyAzcwUpMma4jhndCfDvYa6TqigD1FNoV3E" //later to be called with our server API
        />
*/

export { ButtonSB as LinkSB, HeaderBar };
