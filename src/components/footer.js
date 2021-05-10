import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <footer className="dark:text-gray-50 text-center bg-gray-50 dark:bg-gray-800 pt-5">
    Website created by Patryk Hasegawa.{" "}
    <a href="https://github.com/P-Hsgw" target="blank">
      <FontAwesomeIcon
        icon={faGithub}
        className="ml-2 dark:text-gray-50 hover:text-yellow-400"
      />
    </a>{" "}
    <a href="https://www.linkedin.com/in/patryk-hasegawa" target="blank">
      <FontAwesomeIcon
        icon={faLinkedinIn}
        className="ml-2 dark:text-gray-50 hover:text-yellow-400"
      />
    </a>{" "}
  </footer>
)

export default Footer
