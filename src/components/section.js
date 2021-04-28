import React from "react"
import PropTypes from "prop-types"

export const Section = ({children}) => {
  
  return(
    <div className="section bg-{prop}">
      {children}
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
}
