import React, { useState } from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"



const Layout = ({ children }) => {
  // const [mode, setMode] = useState(false)
  
  // const getMode = (buttonMode) => {
  //   setMode(buttonMode)
  //   console.log()
  // }
// if mode dark else ""
  return (
    <div className="dark">
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
