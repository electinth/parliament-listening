import React from 'react'
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'

// @todo #2 social buttons are quite large while initially loading.

const Header = () => {
  return <header className="site-header">
          <nav className="navbar navbar-light" style={{padding: "10px"}}>
            <a className="navbar-brand" href="#" style={{
              textDecoration: "none",
              float: "left"
            }}>
              <img style={{marginBottom: "5px"}}
                src="https://elect.in.th/wp-content/uploads/2018/10/site-logo.png"/>
              <div className="motto" style={{marginTop: "0px"}}>In VOTE We Trust</div>
            </a>
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