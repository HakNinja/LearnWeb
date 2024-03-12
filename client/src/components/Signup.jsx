import React, { useState } from 'react'
import { AiOutlineLock } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate, useParams } from "react-router-dom"
import './Signup.css'


import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'


const Signup = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [cpassword, setcpassword] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const navigate = useNavigate()

    const params = useParams()
    const { role } = params
    console.log(typeof (role))


    // const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const [type1, setType1] = useState('password');
    const [icon1, setIcon1] = useState(eyeOff);


    const [messages, setMessages] = useState({
        number: false,
        specialChar: false,
        uppercase: false,
        lowercase: false,
        length: false
    });





    const handleToggle2 = () => {
        if (type1 === 'password') {
            setIcon1(eye);
            setType1('text')
        } else {
            setIcon1(eyeOff)
            setType1('password')
        }
    }

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }

    const handleChange = (e) => {
        if (e.target.name === 'name') {
            setname(e.target.value)
        }
        else if (e.target.name === 'email') {
            setemail(e.target.value)
        }
        else if (e.target.name === 'password') {


            const inputValue = e.target.value;
            setpassword(e.target.value)

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



        }
        else if (e.target.name === 'cpassword') {
            setcpassword(e.target.value)
        }
        else if (e.target.name === 'phoneNumber') {
            setphoneNumber(e.target.value.replace(/\D/g, ''))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
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
                    setemail("")
                    setname("")
                    setpassword("")
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
                    setemail("")
                    setname("")
                    setpassword("")
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
                    navigate(`/loginnew`)
                }, 800);
            }
        }
    }
    return (
        <div>
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
            <div className="min-h-screen flex items-start  justify-center py-24 px-4 sm:px-6 lg:px-8 bg-pink-50">

                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className=" text-center text-3xl font-bold tracking-tight text-gray-900">
                            Sign Up to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <Link to={`/Login/${role}`} className="font-medium text-pink-600 hover:text-pink-500">
                                Login
                            </Link>
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />

                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Name
                                </label>
                                <input
                                    onChange={handleChange}
                                    value={name}
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    onChange={handleChange}
                                    value={email}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>

                            <div className='relative'>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    onChange={handleChange}
                                    value={password}
                                    id="password"
                                    name="password"
                                    type={type}
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                                    placeholder="Password"
                                />
                                <span className="flex justify-around items-center" onClick={handleToggle}>
                                    <Icon className="absolute mr-10" icon={icon} size={24} style={{ marginTop: "-37px", marginRight: "-400px" }} />
                                </span>


                                <div className='compare showpasswd compareleft'>
                                    {messages.number && (
                                        <p style={{ color: 'red' }}>Password should contain at least one number.</p>
                                    )}
                                    {messages.specialChar && (
                                        <p style={{ color: 'red' }}>Password should contain at least one special character.</p>
                                    )}
                                    {messages.uppercase && (
                                        <p style={{ color: 'red' }}>Password should contain at least one uppercase letter.</p>
                                    )}
                                    {messages.lowercase && (
                                        <p style={{ color: 'red' }}>Password should contain at least one lowercase letter.</p>
                                    )}
                                    {messages.length && (
                                        <p style={{ color: 'red' }}>Password should contain at least eight character.</p>
                                    )}

                                </div>

                            </div>



                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Confirm Password
                                </label>
                                <input
                                    onChange={handleChange}
                                    value={cpassword}
                                    id="cpassword"
                                    name="cpassword"
                                    type={type1}
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                                    placeholder="Confirm Password"
                                />
                                <span className="flex justify-around items-center relative" onClick={handleToggle2}>
                                    <Icon className="absolute mr-10" icon={icon1} size={24} style={{ marginTop: "-37px", marginRight: "-400px" }} />
                                </span>
                            </div>



                            <div>
                                <label htmlFor="phoneNumber" className="sr-only">
                                    Phone Number
                                </label>
                                <input
                                    onChange={handleChange}
                                    value={phoneNumber}
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="text"
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                                    placeholder="Phone Number"
                                />
                            </div>
                        </div>





                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <AiOutlineLock className="h-5 w-5 text-white group-hover:text-pink-400" />
                                </span>
                                Sign Up
                            </button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Signup
