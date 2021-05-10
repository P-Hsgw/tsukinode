import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import styled from 'styled-components'
import Toggle from "react-toggle"
import scrollTo from "gatsby-plugin-smoothscroll"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faMoon, faTimes } from "@fortawesome/free-solid-svg-icons"
import { Sun } from '@styled-icons/bootstrap'

const GraySun = styled(Sun)`
  color: #1F2937;
`


const MenuLink = ({
  target,
  children,
  textColor,
  hoverColor,
  desktopVisibility,
  mdVisibility,
  textSize,
  cursorType,
  darkModeColor,
}) => {
  return (
    <p
      onClick={() => scrollTo(`#${target}`)}
      className={`text-${textColor} hover:text-${hoverColor} ${desktopVisibility} md:${mdVisibility} text-${textSize} ${cursorType} dark:text-${darkModeColor}`}
    >
      {children}
    </p>
  )
}

const Menu = ({ burger, click }) => {
  return (
    <>
      <div
        className={`h-screen fixed inset-0 z-40 ${burger ? "block" : "hidden"}`}
        onClick={click}
      ></div>
      <div
        className={` bg-gray-800 dark:bg-gray-300 h-screen w-6/12 fixed right-0 opacity-95 z-50 transition-all md:hidden ${
          burger ? "mr-0" : "-mr-96"
        }`}
      >
        <FontAwesomeIcon
          icon={faTimes}
          className="absolute right-7 top-4 text-gray-50 dark:text-gray-800 cursor-pointer"
          size="2x"
          onClick={click}
        />
        <ul className="flex flex-col justify-center items-center h-full space-y-6">
          <li>
            <MenuLink
              target="about"
              textColor="gray-50"
              hoverColor="gray-300"
              darkModeColor="gray-800"
              desktopVisibility="list-item"
            >
              ABOUT
            </MenuLink>
          </li>

          <li>
            <MenuLink
              target="focus"
              textColor="gray-50"
              hoverColor="gray-300"
              darkModeColor="gray-800"
              desktopVisibility="list-item"
            >
              FOCUS
            </MenuLink>
          </li>
          <li>
            <MenuLink
              target="contact"
              textColor="gray-50"
              hoverColor="gray-300"
              darkModeColor="gray-800"
              desktopVisibility="list-item"
            >
              CONTACT
            </MenuLink>
          </li>
        </ul>
      </div>
    </>
  )
}

const Header = ( {handleClick }) => {
  const [burger, setBurger] = useState(false)
  const [colorChange, setColorChange] = useState(false)
  const changeNavColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true)
    } else {
      setColorChange(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", changeNavColor)
  })

  const toggleBurger = () => {
    setBurger(!burger)
  }
  return (
    <>
      <header
        className={`font-serif fixed w-screen md:bg-gray-50 dark:bg-gray-800 transition duration-500 z-40 ${
          colorChange && "bg-gray-600 "
        }`}
      >
        <ul className="flex items-center">
          <li
            className={`mr-auto ml-6 mt-4 mb-6 transition duration-500 dark:text-gray-50 text-gray-800 ${
              colorChange && "text-gray-50 transition duration-500"
            } `}
          >
            <p
              className={`text-3xl ${
                colorChange && "text-gray-50 transition duration-500"
              } md:text-gray-800 md:dark:text-gray-50`}
            >
              TSUKINODE
            </p>
          </li>
          <li className="mt-4 mb-6 mr-6">
            <Toggle onClick={handleClick} icons={{checked: <FontAwesomeIcon icon={faMoon} className="text-gray-500 pb-1"/> , unchecked: <GraySun />  }} />
          </li>
          <li className="mt-2 mb-6 invisible md:visible"></li>
          <li className="mr-6 mt-2 mb-6 hidden md:list-item">
            <MenuLink target="about">ABOUT</MenuLink>
          </li>
          <li className="mr-6 mt-2 mb-6 hidden md:list-item">
            <MenuLink target="focus">FOCUS</MenuLink>
          </li>
          <li className="mt-2 mb-6 invisible md:visible">
            <MenuLink target="contact">CONTACT</MenuLink>
          </li>
          <li className="mr-6 mt-4 mb-6 visible md:invisible">
            {!burger && (
              <FontAwesomeIcon
                icon={faBars}
                size="2x"
                className={`cursor-pointer  dark:text-gray-50 ${
                  colorChange
                    ? "text-gray-50 hover:text-gray-200"
                    : "text-blue-500 hover:text-blue-800"
                }`}
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

MenuLink.propTypes = {
  target: PropTypes.string,
  children: PropTypes.string.isRequired,
}

MenuLink.defaultProps = {
  textColor: "blue-500",
  hoverColor: "blue-800",
  desktopVisibility: "hidden",
  mdVisibility: "list-item",
  textSize: "3xl",
  cursorType: "cursor-pointer",
  darkModeColor: "gray-50",
}

export default Header
