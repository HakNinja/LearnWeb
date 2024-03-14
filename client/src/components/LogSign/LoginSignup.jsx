import React, { useState, useEffect } from 'react'



import { AiOutlineLock } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import { FaGoogle } from "react-icons/fa";
import { useAuth } from '../../context/Context'



import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'


import './LoginSignup.css'
// import { singin, signup } from '../../assets'

const LoginSignup = () => {
    const [name, setname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [cpassword, setcpassword] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [isSignUpMode, setIsSignUpMode] = useState(false);


    const { loginWithRedirect } = useAuth0()
    const { role, logIn } = useAuth()

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff)

    const [type1, setType1] = useState('password');
    const [icon1, setIcon1] = useState(eyeOff);

    const [messages, setMessages] = useState({
        number: false,
        specialChar: false,
        uppercase: false,
        lowercase: false,
        length: false
    });
    useEffect(() => {
        if (document.getElementById('mymsg').innerText === "") {
            document.getElementById('mymsg').style.display = "None"
        }
    });

    const navigate = useNavigate()

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }
    const handleToggle2 = () => {
        if (type1 === 'password') {
            setIcon1(eye);
            setType1('text')
        } else {
            setIcon1(eyeOff)
            setType1('password')
        }
    }
    const handleChange = (e) => {
        if (e.target.name === 'password') {
            console.log("hi")
            const inputValue = e.target.value;
            setPassword(e.target.value)

            const containsNumber = /\d/.test(inputValue);
            const containsSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(inputValue);
            const containsUppercase = /[A-Z]/.test(inputValue);
            const containsLowercase = /[a-z]/.test(inputValue);
            const containsLength = inputValue.length >= 8;

            setMessages({
                number: !containsNumber,
                specialChar: !containsSpecialChar,
                uppercase: !containsUppercase,
                lowercase: !containsLowercase,
                length: !containsLength
            });

            if (document.getElementById('mymsg').innerText === "") {
                document.getElementById('mymsg').style.display = "Block"
            }
        }
    }


    const handleSignInSubmit = async (e) => {
        e.preventDefault();
        // Handle sign in form submission
        const data = { email, password }
        // console.log(data)
        if (role === 2) {
            console.log(data, role)
            const res = await fetch("http://127.0.0.1:5001/user/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            let response = await res.json();

            setPassword("")
            if (response.success) {
                toast.success('Your are successfully logged in', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                // console.log(response.user)
                const A = JSON.stringify(response.user)
                logIn(A, role)
                setTimeout(() => {
                    navigate("/")
                }, 800);
            } else {
                toast.error(response.message, {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
        else if (role === 1) {
            const res = await fetch("http://127.0.0.1:5001/teacher/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            let response = await res.json();
            setPassword("")
            if (response.success) {
                toast.success('Your are successfully logged in', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                const A = JSON.stringify(response.user)
                logIn(A, role)
                setTimeout(() => {

                    navigate("/")
                }, 800);
            } else {
                toast.error(response.message, {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } else {
            toast.error("invalid login", {
                position: "bottom-left",
                autoClose: 799,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                navigate(`/loginnew`)
            }, 800);
        }
    };

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        const data = { name, email, password, cpassword, phoneNumber }



        function isValidEmail(email) {


            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email)

            // return false; // The email does not contain any valid domain
        }

        function isValidPassword(password) {
            // Regular expression to match passwords with at least one special character, one number, one capital letter, and one lowercase letter
            var regex = /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

            return regex.test(password);
        }

        if (!isValidEmail(email)) {
            toast.error('Invalid Email', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }

        else if (!isValidPassword(password)) {
            toast.error('Invalid Password', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }



        else if (password !== cpassword) {
            toast.error('Password and confirm password must be same', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }

        else if (phoneNumber.length !== 10) {
            toast.error('Invalid Phone Number', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }

        else {
            if (role === '2') {
                const res = await fetch(`http://127.0.0.1:5001/user/adduser`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                let response = await res.json();
                // console.log(data)
                // let response = { "success": true }

                if (response.success) {
                    toast.success('Your account have been created', {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setEmail("")
                    setname("")
                    setPassword("")
                    setcpassword("")
                    setTimeout(() => {
                        toggleMode()
                    }, 800);

                } else {
                    toast.error(response.message, {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            }
            else if (role === '1') {
                const res = await fetch(`http://127.0.0.1:5001/teacher/addteacher`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                let response = await res.json();
                // console.log(data)
                // let response = { "success": true }

                if (response.success) {
                    toast.success('Your account have been created', {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setEmail("")
                    setname("")
                    setPassword("")
                    setcpassword("")
                    setTimeout(() => {
                        navigate(`/login/${role}`)
                    }, 800);

                } else {
                    toast.error(response.message, {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            } else {
                toast.error("invalid Signup", {
                    position: "bottom-left",
                    autoClose: 799,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setTimeout(() => {
                    toggleMode()
                }, 800);
            }
        }
    };

    const toggleMode = () => {
        setIsSignUpMode(!isSignUpMode);
    };

    return (
        <div className=' flex justify-center content-center mt-5 mb-5 '>
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className={`LoginSignup-container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
                <div className="signin-signup">
                    <form onSubmit={handleSignInSubmit} className="sign-in-form">
                        <h2 className="LoginSignup-title">Sign in</h2>
                        <div className="LoginSignup-input-field">
                            <i className="fas fa-user"></i>
                            <input
                                // name='email'
                                // id='email'
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="LoginSignup-input-field">
                            <i className="fas fa-lock"></i>
                            <input
                                type={type}
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="flex justify-around items-center" onClick={handleToggle}>
                                <Icon className="absolute mr-10" icon={icon} size={24} style={{ marginTop: "-5px", marginRight: "75px" }} />
                            </span>
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
                                placeholder="name"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                            />
                        </div>
                        <div className="LoginSignup-input-field">
                            <i className="fas fa-envelope"></i>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="LoginSignup-input-field">
                            <i className="fas fa-lock"></i>
                            <input
                                type={type}
                                name='password'
                                id='password'
                                placeholder="Password"
                                value={password}
                                onChange={handleChange}
                            />
                            <span className="flex justify-around items-center" onClick={handleToggle}>
                                <Icon className="absolute mr-10" icon={icon} size={24} style={{ marginTop: "-5px", marginRight: "75px" }} />
                            </span>
                            <div className='flex justify-around items-center' id='mymsg'>
                                <div className='absolute mr-10 compareleft compare' style={{ marginTop: "25px", marginLeft: "-350px", padding: '0', borderRadius: '6px' }}>
                                    {messages.number && (
                                        <p style={{ color: '#444', padding: '0', margin: '0' }}>At least one number.</p>
                                    )}
                                    {messages.specialChar && (
                                        <p style={{ color: '#444', padding: '0', margin: '0' }}>At least one special character.</p>
                                    )}
                                    {messages.uppercase && (
                                        <p style={{ color: '#444', padding: '0', margin: '0' }}>At least one uppercase letter.</p>
                                    )}
                                    {messages.lowercase && (
                                        <p style={{ color: '#444', padding: '0', margin: '0' }}>At least one lowercase letter.</p>
                                    )}
                                    {messages.length && (
                                        <p style={{ color: '#444', padding: '0', margin: '0' }}>At least eight character.</p>
                                    )}
                                </div>

                            </div>
                        </div>
                        <div className="LoginSignup-input-field">
                            <i className="fas fa-lock"></i>
                            <input
                                type={type1}
                                placeholder="Confirm Password"
                                value={cpassword}
                                onChange={(e) => setcpassword(e.target.value)}
                            />
                            <span className="flex justify-around items-center" onClick={handleToggle2}>
                                <Icon className="absolute mr-10" icon={icon1} size={24} style={{ marginTop: "-5px", marginRight: "75px" }} />
                            </span>
                        </div>
                        <div className="LoginSignup-input-field">
                            <i className="fas fa-envelope"></i>
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChange={(e) => setphoneNumber(e.target.value)}
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
                        <img src="signin" alt="" className="image" />
                    </div>
                    <div className="panel right-panel">
                        <div className="LoginSignup-content">
                            <h3>New to LearnWeb?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium dolor, eos incidunt minima iure?</p>
                            <button className="LoginSignup-btn" id="sign-up-btn" onClick={toggleMode}>Sign up</button>
                        </div>
                        <img src="signup" alt="" className="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup
