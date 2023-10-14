import { Component } from "react";
import { Link } from "react-router-dom";
import "./Common.css";

class LinkSB extends Component {
  render() {
    //This will require a bunch of css styling without the imports of react native components.
    //Keep in mind, we can extend the Component class and create our own with React-Native base code.
    return (
      <Link
        className="CommonButton"
        style={{
          display: "block",
          width: "fit-content",
          float: this.props.float ?? "left",

          margin: 1,
          marginRight: this.props.marginRight ?? 1,
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 10,
          paddingRight: 10,
          borderRadius: 10,
          textDecoration: "none",
          color: "inherit",
        }}
        to={this.props.to}
      >
        {this.props.text}
      </Link>
    );
  }
}

class HeaderBar extends Component {
  //Log in/Sign up Buttons will be replaced with a label component for the user logged in
  render() {
    return (
      <div id="Header">
        <LinkSB text="Home" to="/Home" marginRight={"10px"} />
        <LinkSB text="About" to="/About" />
        <LinkSB text="Sign Up" to="/Signup" float="right" />
        <LinkSB text="Log in" to="/Log-in" float="right" marginRight={"10px"} />
      </div>
    );
  }
}

export { LinkSB as ButtonSB, HeaderBar };
