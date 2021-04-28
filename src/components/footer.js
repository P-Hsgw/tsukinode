import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGit, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <footer className="text-center">Website created by Patryk Hasegawa. <a href="#"><FontAwesomeIcon icon={faGithub} className="ml-2"/></a> <a href="#"><FontAwesomeIcon icon={faLinkedinIn} className="ml-2"/></a> </footer>
)

export default Footer