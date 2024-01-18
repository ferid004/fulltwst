import React, { useState } from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
  const [isOpen, setisOpen] = useState(true)
  return (
    <div id='navbar'>
      <div className="dev">
        <div className="title">
          <h2>Selling</h2>
        </div>
        
        <div className="links">
          <NavLink className={"navlik"} to={'/'}>HOME</NavLink>
          <Link className={"navlik"} >about</Link>
          <Link className={"navlik"} >contact</Link>
          <NavLink className={"navlik"} to={'/add'}>ADD</NavLink>
          <NavLink className={"navlik"} to={'/basket'}>BASKET</NavLink>
          <NavLink className={"navlik"} to={'/wish'}>WISH</NavLink>
        </div>
      </div>
      <div className="mobile">
        <div className="title">
          <h2>Selling</h2>
        </div>
        <div className="icon" onClick={() => setisOpen(!isOpen)}>
        <i className={`fa-solid fa-${isOpen?'bars':'xmark'}`}></i>
        </div>
        <div className={`${isOpen ? "links" : 'open'}`}>
          <NavLink className={"navlik"} to={'/'}>HOME</NavLink>
          <Link className={"navlik"} >about</Link>
          <Link className={"navlik"} >contact</Link>
          <NavLink className={"navlik"} to={'/add'}>ADD</NavLink>
          <NavLink className={"navlik"} to={'/basket'}>BASKET</NavLink>
          <NavLink className={"navlik"} to={'/wish'}>WISH</NavLink>
        </div>
      </div>
    </div>

  )
}

export default Navbar