import React from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div id='navbar'>
      <div className="title">
        <h2>Selling</h2>
      </div>
      <div className="links">
        <NavLink to={'/'}>HOME</NavLink>
        <Link>about</Link>
        <Link>contact</Link>
        <NavLink to={'/add'}>ADD</NavLink>
        <NavLink to={'/basket'}>BASKET</NavLink>
        <NavLink to={'/wish'}>WISH</NavLink>
      </div>
    </div>
  )
}

export default Navbar