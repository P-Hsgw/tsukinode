import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'


const IndexPage = () => (
  <div className="container h-screen flex justify-center items-center ">
    <div>
      <p className="text-4xl md:text-5xl">We promote things</p>
      <p className="text-4xl md:text-5xl">With Love </p> 
      <p className="text-4xl md:text-5xl">And Passion</p>
    </div>
    <div className="sticky top-3 md:relative"><FontAwesomeIcon icon={faMoon} className="animate-pulse text-yellow-300" size="3x"/></div>
  </div>
)




export default IndexPage
