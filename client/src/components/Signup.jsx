import React, { useState } from 'react'
import { AiOutlineLock } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom"


const Signup = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [instituteName, setInstituteName] = useState("")
    const navigate = useNavigate()


    const handleChange = (e) => {
        if (e.target.name === 'name') {
            setname(e.target.value)
        }
        else if (e.target.name === 'email') {
            setemail(e.target.value)
        }
        else if (e.target.name === 'password') {
            setpassword(e.target.value)
        }
        else if (e.target.name === 'city') {
            setCity(e.target.value)
        }
        else if (e.target.name === 'state') {
            setState(e.target.value)
        }
        else if (e.target.name === 'country') {
            setCountry(e.target.value)
        } else if (e.target.name === 'phoneNumber') {
            setphoneNumber(e.target.value)
        } else if (e.target.name === 'instituteName') {
            setInstituteName(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { name, email, password, city, state, country, phoneNumber, instituteName }
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
        setemail("")
        setname("")
        setpassword("")
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
            setTimeout(() => {
                navigate(`/login`)
            }, 800);
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
                            <Link to="/Login" className="font-medium text-pink-600 hover:text-pink-500">
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

                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    onChange={handleChange}
                                    value={password}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="mx-auto flex">
                                <div className=" w-1/2">

                                    <input type="text"
                                        id="city" name="city"
                                        onChange={handleChange}
                                        value={city}
                                        placeholder='City'
                                        className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className=" w-1/2">

                                    <input type="text"
                                        id="state" name="state"
                                        onChange={handleChange}
                                        value={state}
                                        placeholder="State"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="mx-auto flex">
                                <div className=" w-1/2">

                                    <input type="text"
                                        id="country" name="country"
                                        onChange={handleChange}
                                        value={country}
                                        placeholder='country'
                                        className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className=" w-1/2">

                                    <input type="text"
                                        id="phoneNumber" name="phoneNumber"
                                        onChange={handleChange}
                                        value={phoneNumber}
                                        placeholder="phoneNumber"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="Institute" className="sr-only">
                                    Institute Name
                                </label>
                                <input
                                    onChange={handleChange}
                                    value={instituteName}
                                    id="instituteName"
                                    name="instituteName"
                                    type="text"
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                                    placeholder="Institute Name"
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
