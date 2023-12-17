import React from 'react'
import logo from '../assets/logo.svg'
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";


const Header = () => {
  return (
    <header>
      <div className="head-logo-container">
        <div className="head-logo-icon">
          <a href="">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="head-logo-name">
          <span>
            La mejor PRE VIRTUAL
            <br />
            FF.AA & PNP / IESTPFFAA
          </span>
      </div>
      </div>     
      <div className="head-media-container">
        <span>
          Siguenos en:         
        </span>
        <a href="https://www.facebook.com/" target='blank'>
          <FaFacebookF style={{height:'30px', width:'28px', color:'#FFFFFF'}}/>
        </a>
        <a href="" target='blank'>
          <FaInstagram style={{height:'30px', width:'28px', color:'#FFFFFF'}}/>
        </a>
        <a href="" target='blank'>
          <FaTiktok style={{height:'30px', width:'28px', color:'#FFFFFF'}}/>
        </a>
        <a href="" target='blank'>
          <FaYoutube style={{height:'30px', width:'28px', color:'#FFFFFF'}}/>
        </a>
      </div>
    </header>
  )
}

export default Header