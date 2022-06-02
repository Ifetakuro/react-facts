import React from "react"
import logo from '../images/logo192.png'

export default function Navbar(props) {
    return (
      <nav className={props.darkMode ? 'dark' : ''}>
        <img src={logo} alt="logo"/>
        <h3>ReactFacts</h3>
        <div className='toggler'>
          <p className="toggle-light">Light</p>
          <div onClick={props.toggleMode} className="toggle-slide" >
            <div className="toggle-slide-circle"></div>
          </div>
          <p className="toggle-dark">Dark</p>
        </div>
      </nav>

    )
}