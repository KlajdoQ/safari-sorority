import React from 'react'
import name from './ss-name.png'
import logo from './ss-logo.png'
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="header">
        <img src={logo} alt="logo" className="ss-logo"/>
        <img src={name} alt="name" className="ss-name"/>
        <nav className="list">
          <Link className="navLinks" to="/">
            <p className='listItem'>View Animals</p>
          </Link>
          <Link className="navLinks" to="/pictures">
            <p className="listItem">Pictures</p>
          </Link>
          <Link className="navLinks" to="/new">
            <p className="listItem">Add Animal</p>
          </Link>
        </nav>
    </div>
  )
}
