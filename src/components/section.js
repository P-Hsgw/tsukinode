import React from "react"
import PropTypes from "prop-types"

const Card = ({ title, firstParagraph, secondParagraph }) => {
  return (
    <div className="container lg:w-2/6 lg:min-h-2/4 shadow-lg overflow-hidden flex-shrink dark:bg-gray-900">
      <p className="text-5xl m-16">{title}</p>
      <p className="m-16">{firstParagraph}</p>
      <p className="m-16">{secondParagraph}</p>
    </div>
  )
}

const Box = ( { title, firstParagraph }) => {
  return (
    <>
      <div className="max-w-md py-4 px-8 bg-white dark:bg-gray-900 shadow-lg rounded-lg my-5 mr-10 ml-10">
        <div>
          <h2 className="text-3xl m-5">{title}</h2>
          <p className="m-8">
            {firstParagraph}
          </p>
        </div>
      </div>
    </>
  )
}

const Section = ({ children, sectionColor, sectionID }) => {
  return (
    <div
      className={`section bg-${sectionColor} dark:bg-gray-800 min-h-screen flex justify-center items-center flex-wrap`}
      id={sectionID}
    >
      {children}
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.node,
  sectionColor: PropTypes.string,
  sectionID: PropTypes.string.isRequired,
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  firstParagraph: PropTypes.string.isRequired,
  secondParagraph: PropTypes.string,
}

Box.propTypes = {
  title: PropTypes.string.isRequired,
  firstParagraph: PropTypes.string.isRequired
}

export { Card, Section, Box }
