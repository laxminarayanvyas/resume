import React, { useState } from 'react'
import { AiFillHome } from "react-icons/ai";
import { LuContact } from "react-icons/lu";
import { MdHomeRepairService } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { BiBook } from "react-icons/bi";
import './nav.css'

const Nav = () => {

  const [activeNav, setactiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setactiveNav('#')}><AiFillHome/></a>
      <a href="#about"><FcAbout/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#contact"> <LuContact/> </a>
    </nav>
  )
}

export default Nav