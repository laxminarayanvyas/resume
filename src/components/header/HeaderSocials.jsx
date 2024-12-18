import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import './header.css';

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/laxminarayan-vyas-a190101b9/" target="_blank"><BsLinkedin/> </a>
        <a href="https://github.com/laxminarayanvyas" target="_blank"><FiGithub/></a>
        <a href="https://api.whatsapp.com/send?phone=919725813305" target="_blank"><FaWhatsapp/> </a>
    </div>
  )
}

export default HeaderSocials