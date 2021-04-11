import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import Footer from './Footer';

function Login() {

    const [dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                localStorage.setItem("name", JSON.stringify(result.user));

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            }).catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://raw.githubusercontent.com/hareesh-r/comebackalums2.0/master/src/image/com%20back%20logo.png" alt="come back logo here" />
                <h1>ComeBack</h1>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In with<img src="https://img.icons8.com/plasticine/2x/google-logo.png" alt="Google" />
            </Button>
            <Footer />
        </div>
    )
}

export default Login
