import React, { useState } from 'react'
import { AiOutlineLock } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate, useParams } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const { loginWithRedirect } = useAuth0()
    // console.log(user)
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()
    const params = useParams()
    const { role } = params
    console.log(role)
    const handleChange = (e) => {

        if (e.target.name === 'email') {
            setemail(e.target.value)
        }
        else if (e.target.name === 'password') {
            setpassword(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { email, password }
        const res = await fetch("http://127.0.0.1:5001/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        let response = await res.json();
        setemail("")
        setpassword("")
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
            setTimeout(() => {
                navigate("/")
            }, 800);
        } else {
            toast.error(response.error, {
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

    return (
        <>
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
                            Sign in to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <Link to="/signup" className="font-medium text-pink-700 hover:text-pink-500">
                                SignUp
                            </Link>
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    onChange={handleChange}
                                    id="email"
                                    value={email}
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    onChange={handleChange}
                                    id="password"
                                    value={password}
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">


                            <div className="text-sm">
                                <Link to="/forgot" className="font-medium text-pink-700 hover:text-pink-500">
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <AiOutlineLock className="h-5 w-5 text-white group-hover:text-pink-400" />
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                    <div>
                        <button
                            onClick={(e) => loginWithRedirect()}
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <FaGoogle className="h-5 w-5 text-white group-hover:text-pink-400" />
                            </span>
                            Login with Redirect
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
