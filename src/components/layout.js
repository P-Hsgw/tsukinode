import React, { useState } from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"


const Layout = ({ children }) => {

  const [mode, setMode] = useState(true)
  
  const getMode = () => {
    setMode(!mode)
  }


  return (
    <div className={mode && "dark"}>
      <Header handleClick={getMode}/>
        <main className="font-serif bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-50 ">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
