import React from "react";
import { Link } from "react-router-dom";
import './navBar.css'

const NavBar = () => {
  return (
    <header>
        <div id = 'logo'>
            Sleep Tracker
        </div>
        <div id = 'links'>
            <Link id="link" to = '/'>Home</Link>
            <Link id="link" to = '/create'>Create</Link>
        </div>
    </header>
  )
}

export default NavBar