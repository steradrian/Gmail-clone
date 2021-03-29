import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

function Login() {

    const dispatch = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider).then(({ user }) => {
            dispatchEvent(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
            }))
        }).catch(error => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-16.png" alt="" />

                <div className="login__text">
                    <span className="login__g">G</span>
                    <span className="login__m">M</span>
                    <span className="login__a">A</span>
                    <span className="login__i">I</span>
                    <span className="login__l">L</span>
                    <span className="login__g"> C</span>
                    <span className="login__m">L</span>
                    <span className="login__a">O</span>
                    <span className="login__i">N</span>
                    <span className="login__l">E</span>
                </div>

                <Button className="login__button" onClick={signIn}>Log in with Gmail</Button>
            </div>
        </div>
    )
}

export default Login
