import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types"

import { AnchorLink } from "gatsby-plugin-anchor-links";


const Menu = ({ burger, click }) => {
  return burger ? (
    <>
    <div className="h-screen fixed inset-0 z-40"  onClick={click} >
    </div>
      <div className="bg-yellow-300 h-screen w-6/12 fixed right-0 z-50 opacity-95 ">
      <FontAwesomeIcon icon={faTimes} className="absolute right-4 top-2 text-blue-800 cursor-pointer" size="2x" onClick={click} />
        <ul className="flex flex-col justify-center items-center h-full space-y-6">

          <li>
          <p
              className=" hover:text-blue-800  text-2xl cursor-pointer"
              
            >
              ABOUT
            </p>
          </li>
          <li>
          <p
              className=" hover:text-blue-800  text-2xl cursor-pointer"
              
            >
             FOCUS
            </p>
          </li>
          <li>
          <p
              className=" hover:text-blue-800  text-2xl cursor-pointer"
              
            >
              CONTACT
            </p>
          </li>
        </ul>
      </div>
      </>
  ) : (
    <></>
  )
}

const Header = () => {
  const [burger, setBurger] = useState(false)

  const toggleBurger = () => {
    setBurger(!burger)
    console.log(burger)
  }

  return (
    <>
      <header className="font-serif fixed w-screen">
        <ul className="flex">
          <li className="mr-auto ml-6 mt-2 mb-6">
            <p className="text-3xl">TSUKINODE</p>
          </li>
          <li className="mr-6 mt-2 mb-6 hidden md:list-item">
            <AnchorLink to="#about" title="about"><p
              className="text-blue-500 hover:text-blue-800 hidden md:list-item text-2xl cursor-pointer"
            >
              ABOUT
            </p></AnchorLink >
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
          <li className="mr-6 mt-2 mb-6 visible md:invisible">
            {!burger && <FontAwesomeIcon
              icon={faBars}
              size="2x"
              className="text-blue-500 hover:text-blue-800 cursor-pointer"
              onClick={toggleBurger}
            />}
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
