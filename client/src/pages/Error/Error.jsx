import React, {useState, useEffect} from 'react'
import { walking, ele } from '../../assets'
import './Error.scss'
import {Link} from 'react-router-dom'

const Error = () => {

  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowDiv(true);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [showDiv]);


  return (
    <div>
      <div className="background-image-conatiner">
        <div className="background-image"></div>
        <img src={walking} alt="walking-man" className='walking-man' />
        {showDiv && ( <p className='text-box'>
          <span style={{fontSize:"2.4rem",color:"#416A9B", fontWeight:600, lineHeight:"2"}}>Whoops!</span> <br />
          <span style={{fontSize:"1.2rem", fontWeight:600}}>Seems like you're lost, <br />
          This road will not lead to your destination </span> <br />
          <span style={{fontStyle:'italic', color:"#A4275E",fontWeight:600, lineHeight:"2"}}> Don't worry we'll take you to your destination. </span>
        </p>

        )}
        {showDiv && (
       <Link to={"/home"}> <button className='button-box'>Change Your Road Here</button> </Link>
        )}
        {showDiv && (
        <img src={ele} alt="" className='ele' />
        )}
      </div>
    </div>
  )
}

export default Error