import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";

const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo" />
      <form action="" className="login-form">
        <h2>{currState}</h2>
        {currState === "Sign Up" ? (
          <input
            type="text"
            placeholder="user name"
            className="form-input"
            required
          />
        ) : null}
        <input
          type="email"
          placeholder="Email Address"
          className="form-input"
          required
        />
        <input
          type="password"
          placeholder="password"
          className="form-input"
          required
        />
        <button type="submit">
          {currState === "Sign Up" ? "Create account" : "Login now"}
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of a use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          {currState === "Sign Up" ? (
            <p className="login-toggle">
              Already have an account{" "}
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create a account{" "}
              <span onClick={() => setCurrState("Sign Up")}>click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
