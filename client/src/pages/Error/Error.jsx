import React from 'react'
import {walking} from '../../assets'
import './Error.scss'

const Error = () => {
  return (
    <div>
        <div className="background-image-conatiner">
        <div className="background-image"></div>
        <img src={walking} alt="walking-man" className='walking-man' />
    </div>
    </div>
  )
}

export default Error