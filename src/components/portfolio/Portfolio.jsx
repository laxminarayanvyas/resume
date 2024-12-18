import React from 'react'
import mfa from '../../assets/mfa.jpg'
import cms from '../../assets/cms.png'
import dashboard from '../../assets/dashboard.png'
import ems from '../../assets/ems.jpg'

import './portfolio.css'

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      image: mfa,
      title: 'Multi Factor Authentication',
      description: 'A secure multi-factor authentication system that adds an extra layer of security to your applications.',
      github: null,
      demo: 'https://drive.google.com/file/d/1kyiEFUDgfhv96lq76fIASEVoRHseYWhK/view?usp=drive_link'
    },
    {
      id: 2,
      image: dashboard,
      title: 'Live Dashboard',
      description: 'A real-time dashboard to visualize data, track metrics, and monitor your system in an interactive way.',
      github: null,
      demo: 'https://drive.google.com/file/d/1Jwxyh8sNF8-2cIqOlypo_qzX3qo2s5sH/view?usp=drive_link'
    },
    {
      id: 3,
      image: cms,
      title: 'College Management System',
      description: 'A comprehensive system to manage college operations such as student records, courses, and staff details.',
      github: 'https://bitbucket.org/Laxminarayan_vyas/repository2/src/master/',
      demo: null
    }
  ]
  return (
    <section id='portfolio'>
      <h4>My Recent Work</h4>
      <h1>Portfolio</h1>

      <div className="container portfolio__container">
        {
          projects.map(({ id, image, title,description, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p className="portfolio__item-description">{description}</p>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }


      </div>
    </section>
  )
}

export default Portfolio