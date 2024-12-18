import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
  return (
    <div>
      <div className='TOP__one'>
        <div>
          <header>
            <div className="container header_container">
              <h3>Hello I'm</h3>
              <h1>Laxminarayan Vyas</h1>
              <h1 className="text-light">Java Backend Developer</h1>
              <CTA />
              <div>
                <HeaderSocials />
              </div>
            </div>
          </header>

        </div>
        <div>
          <div>
            <div className="me">
              <img src="https://github.com/Adam-pw/Adam-pw/raw/main/animation_500_kxa883sd.gif"
                alt="animation" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header