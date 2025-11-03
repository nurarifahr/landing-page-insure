import React from 'react'

const Header = () => {
  return (
    <>
    <div id='header'>
      <picture>
        <source media="(min-width: 768px)" srcSet="/images/image-intro-desktop.jpg"/>
        <img 
            src="/images/image-intro-mobile.jpg" alt="image-intro" />
      </picture>
      <div className='flex-center'>
        <picture className='pattern-intro-left'>
            <source media="(min-width: 768px)" srcSet="/images/bg-pattern-intro-left-desktop.svg"/>
            <img 
                src="/images/bg-pattern-intro-left-mobile.svg" alt="image-intro" />
        </picture>
        <h1>Humanizing your insurance.</h1>
        <p>Get your life insurance coverage easier and faser. We blend our expertise and technology to help you find the pan that's right for you. Ensure you and your loved ones are protected.</p>
        <button className='button'>VIEW PLANS</button>
        <picture className='pattern-intro-right'>
            <source media="(min-width: 768px)" srcSet="/images/bg-pattern-intro-right-desktop.svg"/>
            <img 
                src="/images/bg-pattern-intro-right-mobile.svg" alt="image-intro" />
        </picture>
      </div>
    </div>
    </>
  )
}

export default Header
