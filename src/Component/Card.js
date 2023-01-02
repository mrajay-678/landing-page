import React from 'react'
import './Card.css'

export function Card({img_src,link,title}) {
  return (
    <>
        <div className='outer_card'>
            <div className='img_card'><img src={img_src} alt={title}/></div>
            <div className='decs-div'>
                <span className='netflix-lable'>NETFLIX ORIGINAL SERIES</span><br/>
                <span className='title-name'>{title}</span><br/>
                <div className='watch-now'><a href={link}  rel="noreferrer" target="_blank">WATCH NOW</a></div>
            </div>
        </div>
    </>
  )
}

