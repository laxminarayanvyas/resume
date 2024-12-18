import React from 'react'

const temp = () => {
  return (
    <div>
      <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Laxminarayan Vyas</h1>
          <h1 className="text-light">Java Backend Developer</h1>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <img src="https://github.com/Adam-pw/Adam-pw/raw/main/animation_500_kxa883sd.gif"
              alt="animation" />
          </div>

          <a href="#contact" className='scroll_down'>Scroll down</a>
        </div>
      </header>
    </div>
  )
}

export default temp