import React from "react";
import { Button } from '@material-ui/core';

const ForgotPass = () => {

    const handleClick = () => {
        alert("Email sent successfully");
    }

  return (
    <div>
      <div className="container">
        <div className="m-5 p-5">
          <div className="text-center row">
            <h1 style={{ fontWeight: "800" }} className="text-warning">
              DOOF
            </h1>
            <div className="my-5">
              <h5>To reset your password</h5>
              <h5>Submit your email</h5>
            </div>
            <div className="col-md-4 mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
              />
            </div>
            <div className="mt-4">
              <Button
                onClick={handleClick}
                style={{ width: "300px" }}
                className="text-center"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
