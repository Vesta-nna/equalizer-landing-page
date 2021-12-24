import React from "react"

import logo from "../img/logo.svg"

const Footer = () => (
  <footer>
    <img alt="Logo Equalizer" src={logo} />
    <div className="support">
      All rights reserved © Equalizer 2021<br/>
      Have any problems? Contact us via social media or email us at <b>equalizer@example.com</b><br/>
    </div>
    <div className="socials">
      <div className="facebook"></div>
      <div className="instagram"></div>
      <div className="twitter"></div>
    </div>
  </footer>
)

export default Footer
