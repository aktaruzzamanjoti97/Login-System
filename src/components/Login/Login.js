import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import loginBar from "../images/loginbar.png";
import LoginPage from "../LoginPage/LoginPage";

const Login = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
         <LoginPage />
        </div>
        <div className="col-md-6">
          <div style={{ height: "700px" }} className="login-bg">
            <div className="d-flex flex-row-reverse">
              <Button
                className="my-5 mx-5 btn"
                style={{
                  backgroundColor: "yellow",
                  width: "120px",
                  fontWeight: "600",
                }}
              >
                test
              </Button>
            </div>
            <div>
              <h3 className="d-flex justify-content-end mx-5">
                Unlock Your Stuck Revenue
              </h3>
              <p className="mt-3 mx-5">
                <span className="d-flex flex-row-reverse">
                  We help you unlock the true potential connect with your
                  customers to
                </span>
                <span className="d-flex flex-row-reverse">
                  understand the rights and wrongs with your product.
                </span>
              </p>
            </div>
            <div className="text-center -mt-5">
              <img style={{ width: "450px" }} src={loginBar} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
