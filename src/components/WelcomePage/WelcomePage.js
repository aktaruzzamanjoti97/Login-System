import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const WelcomePage = () => {

    let history = useHistory();

    const handleClick = () => {
        history.push("/")
    }

    return (
        <div className="container">
            <div className="m-5 p-5">
                <div className="text-center row">
                    <h1>Welcome To You</h1>
                    <h1 style={{fontWeight: '800'}} className="text-warning">DOOF</h1>
                    <div className="my-5">
                        <h3>Our aim to keep you smile </h3>
                        <h5>Your Journey Starts from here</h5>
                    </div>
                    <h3 className="text-success">Thanks for being with us</h3>
                    <div className="my-2">
                    <Button onClick={handleClick} style={{width: '300px'}} className="text-center" variant="contained" color="secondary">Back to Home page</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;