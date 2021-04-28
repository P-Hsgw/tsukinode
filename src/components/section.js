import React from "react"
import PropTypes from "prop-types"

const Section = ({children, sectionColor}) => {

  return(
    <div className={`section bg-${sectionColor} h-96`}>
      {children}
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.node,
  sectionColor: PropTypes.string.isRequired
}

export default Section