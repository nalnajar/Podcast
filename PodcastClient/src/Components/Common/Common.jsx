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
          padding: 5,
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
        <LinkSB text="Home" to="/Home" />
        <LinkSB text="Sign Up" to="/Signup" float="right" />
        <LinkSB text="Log in" to="/Log-in" float="right" />
      </div>
    );
  }
}

export { LinkSB as ButtonSB, HeaderBar };
