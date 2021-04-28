import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const IndexPage = () => (
  <div className="container h-screen flex justify-center items-center">
    <div>
      <p className="text-5xl">We promote things</p>
      <p className="text-5xl">With Love <FontAwesomeIcon icon={faHeart} className="animate-pulse text-yellow-300" /></p> 
      <p className="text-5xl">And Passion</p>
    </div>
  </div>
)

export default IndexPage
