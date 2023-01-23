import React from 'react'
import name from './ss-name.png'
import logo from './ss-logo.png'

export default function Header() {
  return (
    <div className="header">
        <img src={logo} alt="logo" className="ss-logo"/>
        <img src={name} alt="name" className="ss-name"/>
    </div>
  )
}
