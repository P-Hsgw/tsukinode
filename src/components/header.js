import React, { useState } from "react"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Menu = ({ burger, click }) => {
  return burger ? (
    <>
    <div className="h-screen fixed inset-0 z-40 filter grayscale blur-md contrast-200"  onClick={click} >
    </div>
      <div className="bg-yellow-600 h-screen w-6/12 fixed right-0 z-50 opacity-95 ">
      <FontAwesomeIcon icon={faTimes} className="absolute right-6 top-2 text-yellow-900 cursor-pointer" size="2x" onClick={click} />
        <ul className="flex flex-col justify-center items-center h-full space-y-6">

          <li>
          <p
              className="text-blue-500 hover:text-blue-800  text-2xl"
              href="#"
            >
              ABOUT
            </p>
          </li>
          <li>
          <p
              className="text-blue-500 hover:text-blue-800  text-2xl"
              href="#"
            >
              OUR FOCUS
            </p>
          </li>
          <li>
          <p
              className="text-blue-500 hover:text-blue-800  text-2xl"
              href="#"
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
            <p
              className="text-blue-500 hover:text-blue-800 hidden md:list-item text-2xl"
              href="#"
            >
              ABOUT
            </p>
          </li>
          <li className="mr-6 mt-2 mb-6 hidden md:list-item">
            <p className="text-blue-500 hover:text-blue-800 hidden md:list-item text-2xl ">
              OUR FOCUS
            </p>
          </li>
          <li className="mt-2 mb-6 invisible md:visible">
            <p className="text-blue-500 hover:text-blue-800 hidden md:list-item text-2xl">
              CONTACT
            </p>
          </li>
          <li className="mr-6 mt-2 mb-6 visible md:invisible">
            {!burger && <FontAwesomeIcon
              icon={faBars}
              size="2x"
              className="text-yellow-400 hover:text-yellow-500 cursor-pointer"
              onClick={toggleBurger}
            />}
          </li>
        </ul>
      </header>

      <Menu burger={burger} click={toggleBurger} />
    </>
  )
}

export default Header
