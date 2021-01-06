import React from "react";
import { Link } from 'gatsby'

// Header
const Nav = () => {
    return (
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
    )
  }

export default Nav