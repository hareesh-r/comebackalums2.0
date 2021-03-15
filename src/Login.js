import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css";

function Login() {
    const signIn = () => {
        // clever stuff
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="http://comeback-alums.ml/com%20back%20logo.png" alt="come back logo here"/>
                <h1>
                    ComeBack
                </h1>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
