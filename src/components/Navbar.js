import React from "react"
import logo from '../images/logo192.png'

export default function Navbar() {
    return (
      <nav>
        <img src={logo} alt="logo"/>
        <h3>ReactFacts</h3>
        <h4>React Course - Project 1</h4>
      </nav>

    )
}