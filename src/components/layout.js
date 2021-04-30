import React, { useState } from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

// On click update mode and send mode to layout

// const DarkMode = ({clicked}) => {
  // const [mode, setMode] = useState(false)

//   const toggleMode = () => {
//     setMode(!mode)
//   }

//   return (
//     <button className="text-gray-50" onClick={[clicked]; console.log(blabla)}>CLICK ME</button>
//   )
// }

const Layout = ({ children }) => {



  return (
    <div>
      <Header />
        <main className="font-serif bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-50 ">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
