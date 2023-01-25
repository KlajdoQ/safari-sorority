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
          <Link to="/">
            View Animals
          </Link>
          <Link to="/search">
            Search
          </Link>
          <Link to="/new">
            Add Animal
          </Link>
        </nav>
    </div>
  )
}
