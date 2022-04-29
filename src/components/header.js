import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = () => (
  <header className="header" style={{
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#FAF7F0"
  }}>
    <div className="header__left" style={{
    }}>
      <h1 style={{
        margin: 0,
        fontSize: 20
      }}>
      </h1>
    </div>
    <div className="header__right">
      <ul style={{
        display: "flex",
        listStyle: "none",
      }}>
        {/* <Link>
          <li className="header-link">About</li>
        </Link>
         <Link>
          <li className="header-link">Works</li>
        </Link>
         <Link>
          <li className="header-link">Contact</li>
        </Link> */}
      </ul>
    </div>

  </header>
)

const linkList = [
  {
    id: 1,
    title: "Work"
  }
];

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header