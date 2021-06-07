import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./LoginPage.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useHistory } from "react-router";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const LoginPage = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    error: "",
    success: false,
  });
  const [newUser, setNewUser] = useState(false);


  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if ((e.target.name === "password")) {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if ((e.target.name === "confirmPassword")) {
      const isConfirmPasswordValid = e.target.value.length > 6;
      const isConfirmPasswordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isConfirmPasswordValid && isConfirmPasswordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  const handleSubmit = (e) => {
    // console.log(data);
    if (newUser && user.password !== user.confirmPassword) {
      alert("Password is incorrect");
    }
    if (newUser && user.email && user.password === user.confirmPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          //Signed in
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
    history.push("/welcomePage")
  };

  const handleClick = () => {
    history.push("/forgotPass")
  }

  return (
    <div className="container">
      <h1 className="m-5 text-warning">DOOF</h1>
      <div className="row">
        <div className="col-md-7 offset-md-1">
          <h3>{newUser ? "Sign Up" : "Log In"}</h3>

          <div>
            <form onSubmit={handleSubmit}>
              {newUser && (
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    onBlur={handleBlur}
                    name="newUser"
                    type="text"
                    placeholder="Enter Your Name"
                  />
                </div>
              )}{" "}
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                onBlur={handleBlur}
                placeholder="email"
                className="form-control"
                required
              />
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                onBlur={handleBlur}
                placeholder="password"
                className="form-control"
                required
              />
              {newUser && (
                <div>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    name="confirmPassword"
                    type="password"
                    onBlur={handleBlur}
                    placeholder="password"
                    className="form-control"
                    required
                  />
                </div>
              )}
              <br />
              {newUser ? <Button
                style={{ backgroundColor: "yellow" }}
                type="submit"
                className="form-control"
              >
                Signup
              </Button> :
              <Button
              style={{ backgroundColor: "yellow" }}
              type="submit"
              className="form-control"
            >
              Login
            </Button>
              }
              <br />
              <br />
            </form>
            {user.success ? (
              <p className="text-success">
                User {newUser ? "Created" : "Logged In"} Successfully
              </p>
            ) : (
              <p className="text-danger">{user.error}</p>
            )}
            {newUser && (
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => setNewUser(!newUser)}
                  style={{ fontWeight: "700", cursor: "pointer" }}
                >
                  Log in
                </span>
              </p>
            )}
            {!newUser && (
              <p>
                
                Don't have an account yet?{" "}
                <span
                  onClick={() => setNewUser(!newUser)}
                  style={{ fontWeight: "700", cursor: "pointer" }}
                >
                  Sign Up
                </span>
              </p>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="forgot-pass">
            <small onClick={handleClick} style={{cursor: 'pointer'}}>Forgot Password?</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
