import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'


const IndexPage = () => (
  <div className="container h-screen flex justify-center items-center">
    <div>
      <p className="text-4xl md:text-5xl">We promote things</p>
      <p className="text-4xl md:text-5xl">With Love </p> 
      <p className="text-4xl md:text-5xl">And Passion<FontAwesomeIcon icon={faMoon} className="animate-pulse text-yellow-300"  /></p>
    </div>
  </div>
)




export default IndexPage
