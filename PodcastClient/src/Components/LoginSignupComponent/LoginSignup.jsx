import React from "react";
import user from "../Assets/person.png";
import email from "../Assets/email.png";
import password from "../Assets/password.png";
import google from "../Assets/google.png";
import facebook from "../Assets/facebook.png";
import { Modal } from "react-responsive-modal";
import axios from "axios";
import "react-responsive-modal/styles.css";
import "./LoginSignup.css";

class LoginSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: "Sign Up",
      username: "",
      email: "",
      password: "",
      formErrors: {},
      isSubmit: false,
      showSuccessMessage: false,
      showSuccessMessageLogin: false,
      isModalOpen: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  handleLoginButtonClick = () => {
    this.setState({ action: "Login", isModalOpen: true });
  };

  handleSignUpButtonClick = () => {
    this.setState({ action: "Sign Up", isModalOpen: true });
  };

  async handleSubmit(e) {
    e.preventDefault();
    this.setState({
      formErrors: this.validate({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      }),
    });
    this.setState({ isSubmit: true });
    const response = await axios.post("http://localhost:8081/register", {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    });
    if (response.status === 200) {
      this.setState({ showSuccessMessage: true, isModalOpen: false });
    } else {
      this.setState({ showSuccessMessage: false });
    }
  }

  async handleSubmitLogin(e) {
    //test commente.preventDefault();
    this.setState({
      formErrors: this.validateLogin({
        username: this.state.username,
        password: this.state.password,
      }),
      isSubmit: true,
    });
    const response = await axios.post(
      "http://localhost:8081/login", //this should be hashed then encrypted before call right?
      { username: this.state.username, password: this.state.password }
    );
    if (response.status === 200) {
      this.setState({ showSuccessMessage: true, isModalOpen: false });
    } else {
      this.setState({ showSuccessMessage: false });
    }
  }
  //replace useEffect
  componentDidMount() {}
  componentDidUpdate() {}

  validate(values) {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format: '@' required";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    return errors;
  }

  validateLogin(values) {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    return errors;
  }
  render() {
    return (
      <div>
        <button onClick={this.handleSignUpButtonClick} className="CommonButton">
          Sign Up
        </button>
        <button onClick={this.handleLoginButtonClick} className="CommonButton">
          Log In
        </button>

        <Modal
          open={this.state.isModalOpen}
          onClose={() => this.setState({ isModalOpen: false })}
        >
          <div className="container">
            {this.state.showSuccessMessage && (
              <div className="ui message success">Signed up successfully</div>
            )}
            {this.state.showSuccessMessageLogin && (
              <div className="ui message success">Logged in successfully</div>
            )}

            <div className="header">
              <div className="text">{this.state.action}</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              <div className="alt-login">
                <div className="facebook">
                  <img src={facebook} alt="" />
                </div>
                <div className="google">
                  <img src={google} alt="" />
                </div>
              </div>
              <p className="altLogin">Or {this.state.action} Using</p>
              <form onSubmit={this.handleSubmit}>
                <div className="input">
                  <label>
                    <img src={user} alt="" />
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="User Name"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </div>
                <p className="errorText">{this.state.formErrors.username}</p>

                {this.state.action === "Login" ? (
                  <div></div>
                ) : (
                  <>
                    <div className="input">
                      <img src={email} alt="" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </div>
                    <p className="errorText">{this.state.formErrors.email}</p>
                  </>
                )}

                <div className="input">
                  <img src={password} alt="" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <p className="errorText">{this.state.formErrors.password}</p>
              </form>
            </div>
            {this.state.action === "Sign Up" ? (
              <div className="submitbutton-container">
                <button
                  className="submit submitButton"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </div>
            ) : (
              <div className="submitbutton-container">
                <button
                  className="submit submitButton"
                  onClick={this.handleSubmitLogin}
                >
                  Submit
                </button>
              </div>
            )}

            {this.state.action === "Sign Up" ? (
              <div className="forgot-password">
                Already a Member? Click{" "}
                <span
                  onClick={() => {
                    this.state.setState({ action: "Login" });
                  }}
                >
                  Login
                </span>{" "}
                Below!
              </div>
            ) : (
              <div className="forgot-password">
                Lost Password? <span>Click Here!</span>
              </div>
            )}
          </div>
        </Modal>
      </div>
    );
  }
}

export default LoginSignup;
