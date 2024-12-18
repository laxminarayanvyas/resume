import React from 'react'
import './about.css'
import photo from '../../assets/photo-bg.png'
import { FaAward } from 'react-icons/fa6';
import { SiCodingninjas } from "react-icons/si";
import { FaRegFileCode } from "react-icons/fa6";


const About = () => {
  return (
    <section id='about'>
      <h4>Get to know</h4>
      <h1>About me</h1>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={photo} alt="About photo" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className='about_card'>
              <FaRegFileCode className='about_icon' />
              <h5>Projects</h5>
              <small>3+ completed</small>
            </article>
            <article className='about_card'>
              <SiCodingninjas className='about_icon' />
              <h5>DSA</h5>
              <small>200+ Problems</small>
            </article>

          </div>
            <p>Hi! I'm a passionate Java Developer with experience in building RESTful APIs, implementing backend services, and working with frameworks like Spring Boot. I started my career by working on dynamic projects such as dashboard development, multi-factor authentication, and data integration using technologies like WebSockets, SFTP, and SQL databases.</p>

            <p>In my journey so far, I've explored different areas of software development, from creating real-time dashboards to contributing to projects involving C++ libraries and Node.js-based services. While my core expertise lies in Java and Spring Boot, I'm always eager to learn new technologies and improve my skills.</p>

            <p>I'm enthusiastic about solving problems, writing clean and efficient code, and continuously growing as a developer. Whether it's building scalable APIs, working with databases, or tackling new challenges, I'm committed to delivering value through my work.</p>

          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About