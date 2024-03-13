import React, { useState } from 'react'
import './LoginSignup.css'
import { singin, signup } from '../../assets'

const LoginSignup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isSignUpMode, setIsSignUpMode] = useState(false);

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        // Handle sign in form submission
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        // Handle sign up form submission
    };

    const toggleMode = () => {
        setIsSignUpMode(!isSignUpMode);
    };

    return (
        <div className={`LoginSignup-container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
            <div className="signin-signup">
                <form onSubmit={handleSignInSubmit} className="sign-in-form">
                    <h2 className="LoginSignup-title">Sign in</h2>
                    <div className="LoginSignup-input-field">
                        <i className="fas fa-user"></i>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="LoginSignup-input-field">
                        <i className="fas fa-lock"></i>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <input type="submit" value="Login" className="LoginSignup-btn" />
                    <p className="account-text">Don't have an account? <button type="button" id="sign-up-btn2" onClick={toggleMode}>Sign up</button></p>
                </form>

                <form onSubmit={handleSignUpSubmit} className="sign-up-form">
                    <h2 className="title">Sign up</h2>
                    <div className="LoginSignup-input-field">
                        <i className="fas fa-user"></i>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="LoginSignup-input-field">
                        <i className="fas fa-envelope"></i>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="LoginSignup-input-field">
                        <i className="fas fa-lock"></i>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <input type="submit" value="Sign up" className="LoginSignup-btn" />
                    <p className="account-text">Already have an account? <button type="button" id="sign-in-btn2" onClick={toggleMode}>Sign in</button></p>
                </form>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="LoginSignup-content">
                        <h3>Member of LearnWeb?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium dolor, eos incidunt minima iure?</p>
                        <button className="LoginSignup-btn" id="sign-in-btn" onClick={toggleMode}>Sign in</button>
                    </div>
                    <img src="signin.png" alt="" className="image" />
                </div>
                <div className="panel right-panel">
                    <div className="LoginSignup-content">
                        <h3>New to LearnWeb?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium dolor, eos incidunt minima iure?</p>
                        <button className="LoginSignup-btn" id="sign-up-btn" onClick={toggleMode}>Sign up</button>
                    </div>
                    <img src="signup.png" alt="" className="image" />
                </div>
            </div>
        </div>
    )
}

export default LoginSignup
