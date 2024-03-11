import React from 'react'
import './LoginNew.scss'
import { Link } from "react-router-dom"

const LoginNew = () => {
    return (
        <>
            <div className="login-Container">
                <div className="instructor-login">
                    <h2>For Instructor</h2>
                    <div className='test'>  <p>We are the market–leading technical interview platform to identify and hire developers with the right skills</p> </div>

                    <button class=" btn btn-light"><Link class="nav-link" to="/login/1">Login</Link></button>

                    <div className='test'>  <p>Don't have an account? <br />
                        <button class=" btn btn-light"><Link Link class="nav-link" to="/signup/1">SignUp</Link></button></p> </div>
                </div>
                <div className="learner-login">
                    <h2>For Learner</h2>
                    <div className='test'>  <p>Join over 21 million developers, practice coding skills, prepare for interviews, and get hired.</p> </div>
                    <button class=" btn btn-light"><Link class="nav-link" to="/login/2">Login</Link></button>
                    <div className='test'>  <p>Don't have an account? <br />
                        <button class=" btn btn-light"><Link class="nav-link" to="/signup/2">SignUp</Link></button></p> </div>
                </div>
            </div>
        </>
    )
}

export default LoginNew