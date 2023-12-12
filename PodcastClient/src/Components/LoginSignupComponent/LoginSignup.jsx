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
      showSuccessMessageRegister: false,
      showSuccessMessageLogin: false,
      showFailedMessageRegister: false,
      showFailedMessageLogin: false,
      isModalOpen: false,
      isAuthenticated: false,
      isDropdownOpen: false,
      isUploadModalOpen: false,
      selectedFile: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  clearfields() {
    this.setState({ username: "", password: "", email: "" });
  }

  handleLoginButtonClick = () => {
    this.clearfields();
    this.setState({ action: "Login", isModalOpen: true });
  };

  handleSignUpButtonClick = () => {
    this.clearfields();
    this.setState({ action: "Sign Up", isModalOpen: true });
  };

  async handleSubmit(e) {
    e.preventDefault();
    const formErrors = this.validate({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    });

    if (Object.values(formErrors).every((error) => error === "")) {
      this.setState({
        formErrors: formErrors,
        isSubmit: true,
      });

      try {
        const response = await axios.post("http://localhost:8081/register", {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        });

        console.log(response);

        if (response.status === 200) {
          this.setState({
            showSuccessMessageRegister: true,
          });
          console.log("registration successful");
          setTimeout(() => {
            this.setState({ showSuccessMessageRegister: false });
          }, 5000);
          setTimeout(() => {
            this.setState({ isModalOpen: false });
          }, 5000);
        }
      } catch (error) {
        console.error("An error occurred during registration:", error);
        this.setState({ showFailedMessageRegister: true });
        console.log("registration unsuccessful");
        setTimeout(() => {
          this.setState({ showFailedMessageRegister: false });
        }, 5000);
      }
    } else {
      this.setState({
        formErrors: formErrors,
        isSubmit: false,
      });
    }
  }

  async handleSubmitLogin(e) {
    e.preventDefault();
    const formErrors = this.validateLogin({
      username: this.state.username,
      password: this.state.password,
    });

    if (Object.values(formErrors).every((error) => error === "")) {
      this.setState({
        formErrors: formErrors,
        isSubmit: true,
      });

      try {
        const response = await axios.post("http://localhost:8081/login", {
          username: this.state.username,
          password: this.state.password,
        });

        console.log(response);
        console.log(response.config.data);

        if (response.status === 200) {
          localStorage.setItem("username", this.state.username);
          console.log("username: ", response.data.username);

          window.location.reload(true);
          window.location.href = "/Home";

          this.setState({
            showSuccessMessageLogin: true,
            isModalOpen: true,
            isAuthenticated: true,
          });
          console.log("login successful");
          setTimeout(() => {
            this.setState({ showSuccessMessageLogin: false });
          }, 5000);
        }
      } catch (error) {
        console.error("An error occurred during login:", error);
        this.setState({ showFailedMessageLogin: true });
        console.log("login failed");
        setTimeout(() => {
          this.setState({ showFailedMessageLogin: false });
        }, 5000);
      }
    } else {
      this.setState({
        formErrors: formErrors,
        isSubmit: false,
      });
    }
  }

  handleLogout() {
    localStorage.removeItem("username");

    this.setState({
      isAuthenticated: false,
      username: "",
      password: "",
      email: "",
    });

    window.location.reload(true);
    window.location.href = "/Home";
  }

  handleUpload = () => {
    this.setState({
      isUploadModalOpen: true,
    });

    console.log("Upload clicked");
    console.log();
  };

  handleFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  componentDidMount() {
    const username = localStorage.getItem("username");
    if (username) {
      this.setState({ isAuthenticated: true, username: username });
    }
  }

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

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));

    console.log("Is clicked");
  };

  render() {
    return (
      <div className="CommonButtonAdjust">
        {this.state.isAuthenticated ? (
          <div>
            <button className="CommonButton" onClick={this.toggleDropdown}>
              Welcome, {this.state.username}!
            </button>
            {this.state.isDropdownOpen && (
              <div className="dropdownContent">
                <p onClick={this.handleUpload}>Upload</p>
                <p>View Profile</p>
                <p>Manage Account</p>
                <p onClick={this.handleLogout}>Logout</p>
              </div>
            )}
          </div>
        ) : (
          <div className="">
            <button
              onClick={this.handleSignUpButtonClick}
              className="CommonButton"
            >
              Sign Up
            </button>
            <button
              onClick={this.handleLoginButtonClick}
              className="CommonButton"
            >
              Log In
            </button>
          </div>
        )}
        <Modal
          open={this.state.isUploadModalOpen}
          onClose={() => this.setState({ isUploadModalOpen: false })}
          center
        >
          <input type="file" onChange={this.handleFileChange}></input>
          <button>Upload</button>
        </Modal>
        <Modal
          open={this.state.isModalOpen}
          onClose={() => this.setState({ isModalOpen: false })}
        >
          <div className="container">
            {this.state.showSuccessMessageRegister && (
              <div className="ui message success">Signed up successfully</div>
            )}
            {this.state.showFailedMessageRegister && (
              <div className="ui message failed">Account Already Exists</div>
            )}
            {this.state.showSuccessMessageLogin && (
              <div className="ui message success">Logged in successfully</div>
            )}
            {this.state.showFailedMessageLogin && (
              <div className="ui message failed">
                Username or Password incorrect
              </div>
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
              <form
                onSubmit={
                  this.state.action === "Sign Up"
                    ? this.handleSubmit
                    : this.handleSubmitLogin
                }
              >
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
                <div className="forgot-password clickThis forgotCSS">
                  {" "}
                  Forgot Password?
                </div>
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
                  className="clickThis"
                  onClick={() => {
                    this.setState({ action: "Login" });
                  }}
                >
                  Here
                </span>{" "}
              </div>
            ) : (
              <div className="forgot-password">
                Don't have an account? Click{" "}
                <span
                  className="clickThis"
                  onClick={() => {
                    this.setState({ action: "Sign Up" });
                  }}
                >
                  Here
                </span>{" "}
                to register.
              </div>
            )}
          </div>
        </Modal>
      </div>
    );
  }
}

export default LoginSignup;
