import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import scrollTo from "gatsby-plugin-smoothscroll"
// If burger true change visibility 

const Menu = ({ burger, click }) => {

  return (
    <>
      <div className={`h-screen fixed inset-0 z-40 ${burger ? "block" : "hidden"}`} onClick={click}></div>
      <div className={` bg-yellow-300 h-screen w-6/12 fixed right-0 opacity-95 z-50 transition-all md:hidden ${burger ? "mr-0" : "-mr-96"}`}>
        <FontAwesomeIcon
          icon={faTimes}
          className="absolute right-7 top-4 text-blue-800 cursor-pointer"
          size="2x"
          onClick={click}
        />
        <ul className="flex flex-col justify-center items-center h-full space-y-6">
          <li role="link" onClick={() => scrollTo("#about")}>
            <p className=" hover:text-blue-800  text-2xl cursor-pointer">
              ABOUT
            </p>
          </li>

          <li>
            <p className=" hover:text-blue-800  text-2xl cursor-pointer">
              FOCUS
            </p>
          </li>
          <li>
            <p className=" hover:text-blue-800  text-2xl cursor-pointer">
              CONTACT
            </p>
          </li>
        </ul>
      </div>
    </>
  )
}

const Header = () => {
  const [burger, setBurger] = useState(false)
  const [colorChange, setColorChange] = useState(false)
  const changeNavColor = () => {
    if(window.scrollY >= 80){
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", changeNavColor);
})
  

  const toggleBurger = () => {
    setBurger(!burger)
  }
  return (
    <>
    
      <header className={`font-serif fixed w-screen md:bg-transparent transition duration-500 ${colorChange && "bg-gray-600"}`}>
        <ul className="flex">
          <li className={`mr-auto ml-6 mt-4 mb-6 transition duration-500 ${colorChange && "text-gray-50 transition duration-500"} md:text-gray-800`}>
            <p className="text-3xl">TSUKINODE</p>
          </li>
          <li className="mr-6 mt-2 mb-6 hidden md:list-item">
            <p
              onClick={() => scrollTo("#about")}
              className="text-blue-500 hover:text-blue-800 hidden md:list-item text-2xl cursor-pointer" role="link">
              ABOUT
            </p>
          </li>
          <li className="mr-6 mt-2 mb-6 hidden md:list-item">
            <p className="text-blue-500 hover:text-blue-800 hidden md:list-item text-2xl cursor-pointer">
              FOCUS
            </p>
          </li>
          <li className="mt-2 mb-6 invisible md:visible">
            <p className="text-blue-500 hover:text-blue-800 hidden md:list-item text-2xl cursor-pointer">
              CONTACT
            </p>
          </li>
          <li className="mr-6 mt-4 mb-6 visible md:invisible">
            {!burger && (
              <FontAwesomeIcon
                icon={faBars}
                size="2x"
                className= {`hover:text-blue-800 cursor-pointer  ${colorChange ? "text-gray-50" : "text-blue-500"}`}
                onClick={toggleBurger}
              />
            )}
          </li>
        </ul>
      </header>

      <Menu burger={burger} click={toggleBurger} />
    </>
  )
}

Menu.propTypes = {
  burger: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
}

export default Header
