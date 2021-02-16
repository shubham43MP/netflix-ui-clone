import React, { useEffect, useState } from "react"
import "./Navbar.css"

const Navbar = () => {
  const [show, handleShow] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener("scroll")
    }
  }, [])
  return (
    <div className={`navbar ${show && "navbar_black"}`}>
      <img
        className="navbar_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <div className="navbar_buttons">
        <button className="navbar_button navbar_join_now" type="submit">
          JOIN NOW
        </button>
        <button className="navbar_button navbar_sign_in" type="submit">
          SIGN IN
        </button>
      </div>
    </div>
  )
}

export default Navbar
