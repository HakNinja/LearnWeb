import React from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss'
import { LWLogo } from '../../assets';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom"



const Navbar = () => {

  const [toggle, setToggle] = useState(false)


  return (
    <nav className='navbar colorGradient'>
      <div className='navbar-logo'>
        <Link to="/"><img src={LWLogo} alt="logo" className='opacity-90' /></Link>
      </div>
      <ul className='navbar-links'>
        {['Home', 'Courses', 'Roadmap', 'About us'].map((items) =>
          <li className='app__center' key={`link-${items}`}>
            <div />
            <NavLink to={`/${items}`} className={({ isActive }) =>
              isActive ? 'bg-red-500 font-bold' : ''}> {items} </NavLink>
          </li>
        )}
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
              {['Home', 'Recipes', 'About'].map((items) =>
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
