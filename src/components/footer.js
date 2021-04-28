import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <footer className="text-center bg-gray-50">Website created by Patryk Hasegawa. <a href="https://github.com/P-Hsgw" target="blank"><FontAwesomeIcon icon={faGithub} className="ml-2"/></a> <a href="https://www.linkedin.com/in/patryk-hasegawa" target="blank"><FontAwesomeIcon icon={faLinkedinIn} className="ml-2"/></a> </footer>
)

export default Footer