import React from 'react'
import Laxminarayan_Vyas_Resume from '../../assets/Laxminarayan_Vyas_Resume.pdf'
import './header.css';
const CTA = () => {
  return (
    <div className='cta'>
        {/* <a href={Laxminarayan_Vyas_Resume} download className='btn'>Download CV</a> */}
        <a href="https://drive.google.com/uc?export=download&id=1M99mvMId0o6H7VyCeHLJQU0KitztfOrJ" 
   className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA