import React, { useState } from "react";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Header = () => {

  const [burger, setBurger] = useState(false)

  const openBurger = () => {
    setBurger(!burger)
  }

  return (
  <header className="font-serif fixed w-screen">
    <ul className="flex">
      <li className="mr-auto ml-6 mt-2 mb-6">
        <p className="text-3xl">TSUKINODE</p>
      </li>
      <li className="mr-6 mt-2 mb-6 hidden md:list-item">
        <p
          className="text-blue-500 hover:text-blue-800 hidden md:list-item text-2xl"
          href="#"
        >
          PORTFOLIO
        </p>
      </li>
      <li className="mr-6 mt-2 mb-6 hidden md:list-item">
        <p
          className="text-blue-500 hover:text-blue-800 hidden md:list-item text-2xl"
        >
          ABOUT
        </p>
      </li>
      <li className="mt-2 mb-6 invisible md:visible">
        <p
          className="text-blue-500 hover:text-blue-800 hidden md:list-item text-2xl" 
        >
          CONTACT
        </p>
      </li>
      <li className="mr-6 mt-2 mb-6 visible md:invisible">
      <FontAwesomeIcon icon={faBars} size="2x" className="text-yellow-400 hover:text-yellow-500 cursor-pointer" onClick={openBurger} />
      </li>

    </ul>
  </header>
  )
}

export default Header
