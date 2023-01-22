import React from 'react'
import name from './ss-name.png'
import logo from './ss-logo.png'
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="header">
        <img src={logo} alt="logo" className="ss-logo"/>
        <img src={name} alt="name" className="ss-name"/>
        <nav>
          <Link className="navLinks" to="/">
            View Animals
          </Link>
          <Link className="navLinks" to="/pictures">
            Pictures
          </Link>
          <Link className="navLinks" to="/new">
            Add Animal
          </Link>
        </nav>
    </div>
  )
}
