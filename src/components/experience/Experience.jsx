import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs";
import { FaCss3, FaJava } from "react-icons/fa6";
import { SiCplusplus, SiHibernate, SiHtml5, SiJavascript } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { FaGitlab } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h4>What Skills I Have</h4>
      <h1 style={{ marginBottom: '2rem' }}>My Experience</h1>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <SiHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
            <FaReact className='experience__details-icon'/>
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/* ENd of frontend */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <FaJava className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsFiletypeSql className='experience__details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiHibernate className='experience__details-icon'/>
              <div>
                <h4>Hibernate</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaGitlab className='experience__details-icon'/>
              <div>
                <h4>Git</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <SiCplusplus className='experience__details-icon'/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience