import React from 'react'
import { MdEmail } from "react-icons/md"; 
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import './contact.css';

const Contact = () => {
  return (
    <section id='contact'>
      <h4>Get In Touch</h4>
      <h1>Contact Me</h1>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>laxminarayanvyas077@gmail.com</h5>
            <a href="mailto:dummy@gmail.com" target='__blank'>send a message</a>
          </article>
          <article className="contact__option">
            <FaGithub className='contact__option-icon'/>
            <h4>Github</h4>
            <h5>Laxminarayan Vyas</h5>
            <a href="https://github.com/laxminarayanvyas" target='__blank'>send a message</a>
          </article>
          <article className="contact__option">
            <FaLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Laxminarayan Vyas</h5>
            <a href="https://www.linkedin.com/in/laxminarayan-vyas-a190101b9/" target='__blank'>send a message</a>
          </article>
        </div>
        {/* end of contact options */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows={7} placeholder='Enter Your Message' required></textarea>
          <button type='reset' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact