import React from 'react'
import './LoginNew.scss'
import { useNavigate } from "react-router-dom"
import { useAuth } from '../../context/Context'

const LoginNew = () => {
    const { setRole, role } = useAuth()
    const navigate = useNavigate()
    const handleInstructerLogin = () => {
        setRole(1);
        navigate('/login')
    }
    const handleInstructerSignup = () => {
        setRole(1);
        navigate('/signup')
    }
    const handleStudentLogin = () => {
        setRole(2);
        console.log(role)
        navigate('/login')
    }
    const handleStudentSignup = () => {
        setRole(2);
        console.log(role)
        navigate('/signup')
    }
    return (
        <>
            <div className="login-Container">
                <div className="instructor-login">
                    <h2>For Instructor</h2>
                    <div className='test'>  <p>We are the market–leading technical interview platform to identify and hire developers with the right skills</p> </div>

                    <button class=" btn btn-light login" onClick={handleInstructerLogin}>Login</button>

                    <div className='test'>  <p>Don't have an account? <br />
                        <button class=" btn btn-light signup" onClick={handleInstructerSignup}>SignUp</button></p> </div>
                </div>
                <div className="learner-login">
                    <h2>For Learner</h2>
                    <div className='test'>  <p>Join over 21 million developers, practice coding skills, prepare for interviews, and get hired.</p> </div>
                    <button class=" btn btn-light login" onClick={handleStudentLogin}>Login</button>
                    <div className='test'>  <p>Don't have an account? <br />
                        <button class=" btn btn-light signup" onClick={handleStudentSignup}>SignUp</button></p> </div>
                </div>
            </div>
        </>
    )
}

export default LoginNew