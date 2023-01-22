import React from 'react';
import './Card.css';
const Card = ({img_src,release,title}) => {
    return (
        <>
            <div className='outer_card'>
                <div className='img_card'><img src={img_src} alt={title}/></div>
                <div className='decs-div'>
                    <span className='netflix-lable'>NETFLIX ORIGINAL SERIES</span><br/>
                    <span className='title-name'>{title}</span><br/>
                    <div className='release-date'>{release}</div>
                </div>
            </div>
        </>
      )
}

export default Card
