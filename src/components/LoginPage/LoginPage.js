import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./LoginPage.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [user, setUser] = useState({
    name: "",
    email: "",
    error: "",
    success: false,
  });
  const [newUser, setNewUser] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    if (newUser && user.password !== user.confirmPassword) {
      alert("Password is incorrect");
    }
  };

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if ((e.target.name = "password")) {
      const isPasswordValid = e.target.value.length > 7;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if ((e.target.name = "confirmPassword")) {
      const isConfirmPasswordValid = e.target.value.length > 7;
      const isConfirmPasswordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isConfirmPasswordHasNumber && isConfirmPasswordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  return (
    <div className="container">
      <h1 className="m-5 text-warning">DOOF</h1>
      <div className="row">
        <div className="col-md-7 offset-md-1">
          <h3>{newUser ? "Sign Up" : "Log In"}</h3>
          <>
            {!newUser && (
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="email">Email</label>
                  <input
                    {...register("email")}
                    type="email"
                    onBlur={handleBlur}
                    placeholder="email"
                    className="form-control"
                    required
                  />
                  <label htmlFor="email">Password</label>
                  <input
                    {...register("password")}
                    type="password"
                    onBlur={handleBlur}
                    placeholder="password"
                    className="form-control"
                    required
                  />
                  <br />
                  <Button
                    style={{ backgroundColor: "yellow" }}
                    type="submit"
                    className="form-control"
                  >
                    Login
                  </Button>{" "}
                  <br />
                  <br />
                </form>
                <p>
                  Don't have an account yet?{" "}
                  <span
                    onClick={() => setNewUser(!newUser)}
                    style={{ fontWeight: "700", cursor: "pointer" }}
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            )}
            {newUser && (
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="email">Email</label>
                  <input
                    {...register("email")}
                    type="email"
                    onBlur={handleBlur}
                    placeholder="email"
                    className="form-control"
                    required
                  />
                  <label htmlFor="email">Password</label>
                  <input
                    {...register("password")}
                    type="password"
                    onBlur={handleBlur}
                    placeholder="password"
                    className="form-control"
                    required
                  />
                  <label htmlFor="email">Confirm Password</label>
                  <input
                    {...register("confirmPassword")}
                    type="password"
                    onBlur={handleBlur}
                    placeholder="Confirm Password"
                    className="form-control"
                    required
                  />
                  <br />
                  <Button
                    style={{ backgroundColor: "yellow" }}
                    type="submit"
                    className="form-control"
                  >
                    Sign Up
                  </Button>{" "}
                  <br />
                  <br />
                </form>
                <p>
                  Already Have an account?{" "}
                  <span
                    onClick={() => setNewUser(!newUser)}
                    style={{ fontWeight: "700", cursor: "pointer"}}
                  >
                    Login
                  </span>
                </p>
              </div>
            )}
          </>
        </div>
        <div className="col-md-3">
          <div className="forgot-pass">
            <small>Forgot Password?</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
