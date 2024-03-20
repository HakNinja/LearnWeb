import React from 'react'
import './LoginNew.scss'
import { useNavigate } from "react-router-dom"
import { useAuth } from '../../context/Context'

const LoginNew = () => {
    const { setRole, role } = useAuth()
    const navigate = useNavigate()
    const handleInstructerLogin = () => {
        setRole(1);
        navigate('/loginsignup')
    }

    const handleStudentLogin = () => {
        setRole(2);
        console.log(role)
        navigate('/loginsignup')
    }

    return (
        <>
            <div className="login-Container min-h-[45vh] ">
                <div className="instructor-login">
                    <h2>For Instructor</h2>
                    <div className='test'>  <p>We are the market–leading technical interview platform to identify and hire developers with the right skills</p> </div>

                    <button class=" btn btn-light login" onClick={handleInstructerLogin}>Login Sign</button>


                </div>
                <div className="learner-login ">
                    <h2>For Learner</h2>
                    <div className='test'>  <p>Join over 21 million developers, practice coding skills, prepare for interviews, and get hired.</p> </div>
                    <button class=" btn btn-light login" onClick={handleStudentLogin}>Login Sign</button>

                </div>
            </div>
        </>
    )
}

export default LoginNew