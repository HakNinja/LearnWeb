import React from 'react'
import { HiMenuAlt4, HiX, HiUserCircle } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss'
import Logo from '../../assets/logo1.png';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from '../../context/Context'



const Navbar = () => {

  const { user, logout } = useAuth0()
  const [toggle, setToggle] = useState(false)

  const [isOpen, setIsOpen] = useState(false);
  // console.log(user)

  const { userD, setUserD } = useAuth()
  const navigate = useNavigate()


  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  // console.log(user)

  // useEffect(() => {
  //   const myuser = JSON.parse(localStorage.getItem("UserData"));
  //   if (myuser !== null && myuser !== undefined) {
  //     setUser(myuser);
  //     // console.log(myuser.name);
  //   }
  // }, []);
  // console.log(userD)
  let User
  if (userD) {
    User = JSON.parse(userD)
  }
  // console.log(User.name)

  const handleLogout = (e) => {
    // console.log("logout")
    localStorage.removeItem("UserData")
    setUserD("")
    navigate("/")

  }



  return (
    <nav className='navbar colorGradient'>
      <div className='navbar-logo'>
        <Link to="/"><img src={Logo} alt="logo" className='opacity-90' /></Link>
      </div>
      <ul className='navbar-links'>
        {['Home', 'Courses', 'Feeds', 'Resume', 'About us'].map((items) =>
          <li className='app__center' key={`link-${items}`}>
            <div />
            <NavLink to={`/${items}`} className={({ isActive }) =>
              isActive ? ' font-bold border-b-4 border-pink-400' : ''} > {items} </NavLink>
          </li>
        )}
        <div class="d-grid gap-2 d-md-flex justify-content-md-start" style={{ marginLeft: "10rem", marginBottom: "0rem" }}>
          {user ? <>
            <div className="relative inline-block text-left" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div>
                <button
                  type="button"
                  className="flex items-center text-gray-600 focus:outline-none focus:text-gray-800"
                >
                  <HiUserCircle className="w-14 h-14 mr-2 ml-4 fill-white" />
                  <span className="text-white text-lg">Jack Mishra</span>
                </button>
              </div>

              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    {user ? <button class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><Link class="nav-link" to={`/dashboard/`}>Dashboard</Link></button> : userD ? <button class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><Link class="nav-link" to={`/dashboard`}>Dashboard</Link></button> : ''}
                    {user ? <button onClick={(e) => { logout() }} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><Link class="nav-link" to="/">Logout</Link></button> : userD ? <button onClick={handleLogout} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><Link class="nav-link" to="/loginnew">Logout</Link></button> : ''}
                  </div>
                </div>
              )}
            </div>
          </> : userD ? <>
            <div className="relative inline-block text-left" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div>
                <button
                  type="button"
                  className="flex items-center text-gray-600 focus:outline-none focus:text-gray-800"
                >
                  <HiUserCircle className="w-14 h-14 mr-2 ml-4 fill-white" />
                  <span className="text-white text-lg">{User.name}</span>
                </button>
              </div>

              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    {user ? <button class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><Link class="nav-link" to={`/dashboard/`}>Dashboard</Link></button> : userD ? <button class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><Link class="nav-link" to={`/dashboard`}>Dashboard</Link></button> : ''}
                    {user ? <button onClick={(e) => { logout() }} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><Link class="nav-link" to="/">Logout</Link></button> : userD ? <button onClick={handleLogout} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><Link class="nav-link" to="/loginnew">Logout</Link></button> : ''}
                  </div>
                </div>
              )}
            </div>
          </> : <button class=" btn btn-light" style={{marginLeft:"-7rem", padding:"8px 25px"}}><Link class="nav-link" to="/loginnew">Login</Link></button>
          }
        </div>

      </ul>

      <div className='navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['Home', 'Courses', 'Roadmap', 'About us'].map((items) =>
                <li key={items}>
                  <NavLink to={`/${items}`} onClick={() => setToggle(false)}  > {items} </NavLink>
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
