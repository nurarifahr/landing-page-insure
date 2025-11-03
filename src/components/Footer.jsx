import React from 'react'
import { socials } from '../../constant'

const Footer = () => {
  return (
    <>
        <div id="footer" className='flex-center'>
            <img src="/images/logo.svg" alt="" />
            <ul>
                {socials.map(({imgPath})=>(
                    <li>
                        <img src={imgPath} alt="" />
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <ul>
                <li>
                    <div>

                    </div>
                </li>
            </ul>
        </div> 
    </>
  )
}

export default Footer
