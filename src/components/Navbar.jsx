import React, { useState } from 'react'
import { navLinks } from '../../constant';

const Navbar = () => {
  const [isOpen, setOpen] = useState(null);
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="" />
        <button className='md:hidden'
        onClick={()=>setOpen(!isOpen)}
        >
                <img src={isOpen ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"} alt="" />
        </button>
          {/* <div className={`navbar-menu ${isOpen ? "translate-y-20" : "-translate-y-full"}`}> */}
          <div className={`navbar-menu ${isOpen ? "translate-y-20" : "-translate-y-full"}`}>

            <ul>
              {navLinks.map(({id, title})=>(
                <li key={id} className="list-menu">{title}</li>
              ))}
              <button className='button-menu'>VIEW PLANS</button>
            </ul>
            <img className="pattern-mobile-nav md:hidden" src="/images/bg-pattern-mobile-nav.svg" alt=""/>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
