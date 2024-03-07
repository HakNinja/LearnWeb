import React from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss'
import { Logo } from '../../assets';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";




const Navbar = () => {

  const { user, logout } = useAuth0()
  const [toggle, setToggle] = useState(false)


  return (
    <nav className='navbar colorGradient'>
      <div className='navbar-logo'>
        <Link to="/"><img src={Logo} alt="logo" className='opacity-90' /></Link>
      </div>
      <ul className='navbar-links'>
        {['Home', 'Courses', 'Roadmap', 'About us'].map((items) =>
          <li className='app__center' key={`link-${items}`}>
            <div />
            <NavLink to={`/${items}`} className={({ isActive }) =>
              isActive ? ' font-bold border-b-4 border-red-500' : ''} > {items} </NavLink>
          </li>
        )}
        <div class="d-grid gap-2 d-md-flex justify-content-md-start" style={{ marginLeft: "10rem", marginBottom: "5rem" }}>
          {user ? <button onClick={(e) => logout()} class=" btn btn-light"><Link class="nav-link" to="/">Logout</Link></button> : (<><button class=" btn btn-light"><Link class="nav-link" to="/login">Login</Link></button>
            <button class=" btn btn-light"><Link class="nav-link" to="/signup">SignUp</Link></button></>)}
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
