import React from 'react'
import { socials, footers } from '../../constant'

const Footer = () => {
    return (
        <>
            <div id="footer" className='flex-center'>
                <picture className='pattern-footer'>
                    <source media="(min-width:78px)" srcSet='/images/bg-pattern-footer-desktop.svg' />
                    <img src="/images/bg-pattern-footer-mobile.svg" alt="" />
                </picture>
                <img src="/images/logo.svg" alt="" />
                <ul className='socials'>
                    {socials.map(({ imgPath, index }) => (
                        <li key={index}>
                            <img src={imgPath} alt="" />
                        </li>
                    ))}
                </ul>
                <hr />

                <div>
                    <ul>
                        {footers.map(({ id, title, details }) => (
                            <li key={id} className='lists'>
                                <h3>{title}</h3>
                                <div>
                                    {details.map((item, index) => (
                                        <p key={index}>{item}</p>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer
