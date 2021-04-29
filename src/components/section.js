import React from "react"
import PropTypes from "prop-types"

const Section = ({children, sectionColor, sectionID}) => {

  return(
    <div className={`section bg-${sectionColor} h-screen flex justify-center items-center`} id={sectionID}>
      {children}
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.node,
  sectionColor: PropTypes.string.isRequired,
  sectionID: PropTypes.string.isRequired
}

export default Section