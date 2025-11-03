import React from 'react'
import { contentLists } from '../../constant'

const Content = () => {
  return (
    <>
    <div id='content'>
        <hr/>
        <h1>We're different</h1>
        <ul>
            {contentLists.map(({id, icon, title, description})=>(
                <li key={id}>
                    <div className='flex-center'>
                        <img src={icon} alt="icon"/>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}

export default Content

