import React from 'react'
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import A from "../components/a"

const Header = () => {
  return <header class="site-header">
          <nav class="navbar navbar-light" style={{padding: "10px"}}>
            <a class="navbar-brand" href="#" style={{
              textDecoration: "none",
              float: "left"
            }}>
              <img style={{marginBottom: "5px"}}
                src="https://elect.in.th/wp-content/uploads/2018/10/site-logo.png"/>
              <div class="motto" style={{marginTop: "0px"}}>In VOTE We Trust</div>
            </a>
            <div class="ml-auto d-flex navbar-more" style={{
              float: "right",
              margin: "5px 0",
            }}>
              <div class="social">
                <A href="https://www.facebook.com/electinth">
                  <FontAwesomeIcon icon={faFacebookF}/>
                </A>
                <A href="https://twitter.com/electinth">
                  <FontAwesomeIcon icon={faTwitter}/>
                </A>
              </div>
            </div>
            <div style={{clear: "both"}}></div>
        </nav>
      </header>
}

export default Header