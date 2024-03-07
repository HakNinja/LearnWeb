import React from 'react'
import './LoginNew.scss'

const LoginNew = () => {
    return (
        <>
            <div className="login-Container">
                <div className="instructor-login">
                    <h2>For Instructor</h2>
                    <div className='test'>  <p>We are the market–leading technical interview platform to identify and hire developers with the right skills</p> </div>

                    <button>Login</button>

                    <div className='test'>  <p>Don't have an account? <br />
                        Sign up.</p> </div>
                </div>
                <div className="learner-login">
                    <h2>For Learner</h2>
                    <div className='test'>  <p>Join over 21 million developers, practice coding skills, prepare for interviews, and get hired.</p> </div>
                    <button>Login</button>
                    <div className='test'>  <p>Don't have an account? <br />
                        Contact sales or Get free trial.</p> </div>
                </div>
            </div>
        </>
    )
}

export default LoginNew