import React from "react"
import PropTypes from "prop-types"

const Card = ({title, firstParagraph, secondParagraph}) => {
  return (
  <div className="container lg:w-2/6 lg:min-h-2/4 shadow-md overflow-hidden flex-shrink">
  <p className="text-5xl m-16">{title}</p>
  <p className="m-16">{firstParagraph}</p>
  <p className="m-16">{secondParagraph}</p>
  </div>
  )
}

const Section = ({children, sectionColor, sectionID}) => {
  return(
    <div className={`section bg-${sectionColor} h-screen flex justify-center items-center`} id={sectionID}>
      {children}
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.node,
  sectionColor: PropTypes.string,
  sectionID: PropTypes.string.isRequired
}

Card.propTypes = {
  title: PropTypes.string,
  firstParagraph: PropTypes.string,
  secondParagraph: PropTypes.string.isRequired
}


export { Card, Section }