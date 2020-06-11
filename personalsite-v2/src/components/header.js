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
            <Link to="/about">LinkedIn</Link>
            <Link to="/work">GitHub</Link>
            {/* <Link to="/contact">Contact</Link> */}
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
