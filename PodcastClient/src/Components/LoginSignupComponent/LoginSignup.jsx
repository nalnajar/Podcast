import "./LoginSignup.css";
import React, { useState, useEffect } from "react";
import user from "../Assets/person.png";
import email from "../Assets/email.png";
import password from "../Assets/password.png";
import google from "../Assets/google.png";
import facebook from "../Assets/facebook.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const initialValue = { username: "", email: "", password: "" };
  const initialValuesLogin = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValue);
  const [formValuesLogin, setFormValuesLogin] = useState(initialValuesLogin);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showSuccessMessageLogin, setShowSuccessMessageLogin] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormValuesLogin({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(formValues); //added these for backend to view the data that is parsed
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault(); //test comment
    setFormErrors(validateLogin(formValuesLogin));
    setIsSubmit(true);
    console.log(formValuesLogin); //added these for backend to view the data that is parsed
  };

  useEffect(() => {
    if (
      Object.keys(formErrors).length === 0 &&
      isSubmit &&
      action === "Sign Up"
    ) {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    } else if (
      Object.keys(formErrors).length === 0 &&
      isSubmit &&
      action === "Login"
    ) {
      setShowSuccessMessageLogin(true);
      setTimeout(() => {
        setShowSuccessMessageLogin(false);
      }, 2000);
    }
  }, [formErrors, isSubmit]);

  const validate = (values) => {
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
  };

  const validateLogin = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    return errors;
  };

  return (
    <div className="container">
      {showSuccessMessage && (
        <div className="ui message success">Signed up successfully</div>
      )}
      {showSuccessMessageLogin && (
        <div className="ui message success">Logged in successfully</div>
      )}

      <div className="header">
        <div className="text">{action}</div>
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
        <p className="altLogin">Or {action} Using</p>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <img src={user} alt="" />
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p className="errorText">{formErrors.username}</p>

          {action === "Login" ? (
            <div></div>
          ) : (
            <>
              <div className="input">
                <img src={email} alt="" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <p className="errorText">{formErrors.email}</p>
            </>
          )}

          <div className="input">
            <img src={password} alt="" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p className="errorText">{formErrors.password}</p>
        </form>
      </div>
      {action === "Sign Up" ? (
        <div className="submitbutton-container">
          <button className="submit submitButton" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      ) : (
        <div className="submitbutton-container">
          <button className="submit submitButton" onClick={handleSubmitLogin}>
            Submit
          </button>
        </div>
      )}

      {action === "Sign Up" ? (
        <div className="forgot-password">
          Already a Member? Click{" "}
          <span
            onClick={() => {
              setAction("Login");
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

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Signup
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
