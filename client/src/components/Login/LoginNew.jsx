import React from 'react'
import './LoginNew.scss'
import { useNavigate } from "react-router-dom"
import { useAuth } from '../../context/Context'

const LoginNew = () => {
    const { setRole, role } = useAuth()
    const navigate = useNavigate()
    const handleInstructer = () => {
        setRole(1);
        // console.log(role)
        // const check = document.getElementById()
        navigate('/login')
    }
    const handleStudent = () => {
        setRole(2);
        console.log(role)
        navigate('/login')
    }
    return (
        <>
            <div className="login-Container">
                <div className="instructor-login">
                    <h2>For Instructor</h2>
                    <div className='test'>  <p>We are the market–leading technical interview platform to identify and hire developers with the right skills</p> </div>

                    <button class=" btn btn-light login" onClick={handleInstructer}>Login</button>

                    <div className='test'>  <p>Don't have an account? <br />
                        <button class=" btn btn-light signup">SignUp</button></p> </div>
                </div>
                <div className="learner-login">
                    <h2>For Learner</h2>
                    <div className='test'>  <p>Join over 21 million developers, practice coding skills, prepare for interviews, and get hired.</p> </div>
                    <button class=" btn btn-light login" onClick={handleStudent}>Login</button>
                    <div className='test'>  <p>Don't have an account? <br />
                        <button class=" btn btn-light signup">SignUp</button></p> </div>
                </div>
            </div>
        </>
    )
}

export default LoginNew