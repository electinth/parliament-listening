import React from 'react'
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from "gatsby"

// @todo #2 social buttons are quite large while initially loading.

const Header = () => {
  return <header className="site-header">
          <nav className="navbar navbar-light" style={{padding: "10px"}}>
            <Link to="/" style={{float: "left"}}>
              <img className="navbar-logo" src="https://elect.in.th/wp-content/uploads/2018/10/site-logo.png"/>
              <div className="navbar-motto">In VOTE We Trust</div>
            </Link>
    
            <div className="navbar-pages" style={{float: "left"}}>
              <Link to="/">แอบฟังเสียงรัฐสภา</Link>
              <Link to="/about">เกี่ยวกับเรา</Link>
            </div>
    
            <div className="ml-auto d-flex navbar-more" style={{
              float: "right",
              margin: "5px 0",
            }}>
              <div className="social" style={{fontSize: "1rem"}}>
                <a href="https://www.facebook.com/electinth">
                  <FontAwesomeIcon icon={faFacebookF}/>
                </a>
                <a href="https://twitter.com/electinth">
                  <FontAwesomeIcon icon={faTwitter}/>
                </a>
              </div>
            </div>
            <div style={{clear: "both"}}></div>
        </nav>
      </header>
}

export default Header
