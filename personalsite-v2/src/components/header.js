import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="innerHeader">
        {/* <div className="logo">
          <Link to="/">BDG</Link>
        </div> */}
        <div className="navigation">
          <nav>
            <a href="https://www.linkedin.com/in/brian-francis-de-guzman/">LinkedIn</a>
            <a href="https://github.com/BrianFrancisDG">GitHub</a>
            {/* <Link to="/contact">Contact</Link> */}
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
