import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PersonData = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [pincode, setPincode] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [npassword, setNpassword] = useState('')

    const handleChange = async (e) => {

        if (e.target.name == 'name') {
            setName(e.target.value)
        }
        else if (e.target.name == 'phone') {
            setPhone(e.target.value)
        }
        else if (e.target.name == 'pincode') {
            setPincode(e.target.value)
        }
        else if (e.target.name == 'address') {
            setAddress(e.target.value)
        }
        else if (e.target.name == 'password') {
            setPassword(e.target.value)
        }
        else if (e.target.name == 'cpassword') {
            setCpassword(e.target.value)
        }
        else if (e.target.name == 'npassword') {
            setNpassword(e.target.value)
        }
    }

    const handleUserSubmit = () => {
        console.log("hi")
    }

    return (
        <div className='constainer  p-24 bg-pink-50'>

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
            <h1 className='text-2xl text-center font-bold'>Update your Account</h1>
            <h2 className='text-xl mx-auto font-semibold mb-4'>1. Customer Details.</h2>
            <div className="mx-auto flex">
                <div className="px-2 w-1/2">
                    <label htmlFor="name"
                        className="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text"
                        id="name" name="name"
                        onChange={handleChange}
                        value={name}
                        className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="px-2 w-1/2">
                    <label htmlFor="email"
                        className="leading-7 text-sm text-gray-600">Email(cannot be updated)</label>
                    <input type="email"
                        id="email" name="email"
                        readOnly={true}
                        value={email}
                        className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div className="px-2 w-full">
                <label htmlFor="address"
                    className="leading-7 text-sm text-gray-600">Address</label>
                <textarea id="address"
                    name="address"
                    cols='30' rows='2'
                    onChange={handleChange}
                    value={address}
                    className="w-full  bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <div className="mx-auto flex">
                <div className="px-2 w-1/2">
                    <label htmlFor="phone"
                        className="leading-7 text-sm text-gray-600">Phone</label>
                    <input type="text"
                        id="phone"
                        name="phone"
                        placeholder='10 Digit - Phone Number'
                        onChange={handleChange}
                        value={phone}
                        className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="px-2 w-1/2">
                    <label htmlFor="pincode"
                        className="leading-7 text-sm text-gray-600">PinCode</label>
                    <input type="text"
                        id="pincode"
                        name="pincode"
                        onChange={handleChange}
                        value={pincode}
                        className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <button onClick={handleUserSubmit} className='m-2 flex ml-2 mt-4 p-8 text-white bg-pink-500 border-0 py-2 focus:outline-none hover:bg-pink-700 rounded text-sm' >Update Details</button>


            {/* <h2 className='text-xl mx-auto font-semibold my-8'>2. Update Password.</h2>
            <div className="mx-auto flex">
                <div className="px-2 w-1/2">
                    <label htmlFor="password"
                        className="leading-7 text-sm text-gray-600">Password</label>
                    <input type="password"
                        id="password" name="password"
                        onChange={handleChange}
                        value={password}
                        className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>


                <div className="px-2 w-1/2">
                    <label htmlFor="npassword"
                        className="leading-7 text-sm text-gray-600">New Password</label>
                    <input type="password"
                        id="npassword" name="npassword"
                        onChange={handleChange}
                        value={npassword}
                        className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="px-2 w-1/2">
                    <label htmlFor="cpassword"
                        className="leading-7 text-sm text-gray-600">Confirm New Password</label>
                    <input type="password"
                        id="cpassword" name="cpassword"
                        onChange={handleChange}
                        value={cpassword}
                        className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>

            </div>
            <button onClick={handlePassword} className='m-2 flex ml-2 mt-4 p-8 text-white bg-pink-500 border-0 py-2 focus:outline-none hover:bg-pink-700 rounded text-sm' >Change Password</button> */}


        </div>
    )
}

export default PersonData
