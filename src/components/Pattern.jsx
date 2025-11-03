import React from 'react'

const Pattern = () => {
  return (
    <>
      <div id='pattern' className='flex-center'>
        <picture className='pattern-right'>
            <source media="(min-width: 768px)" srcSet="/images/bg-pattern-how-we-work-desktop.svg"/>
            <img 
                src="/images/bg-pattern-how-we-work-mobile.svg" alt="image-intro" />
        </picture>
        <h1>Find out more about how we work</h1>
        <button className='button'>HOW WE WORK</button>
      </div>
    </>
  )
}

export default Pattern
