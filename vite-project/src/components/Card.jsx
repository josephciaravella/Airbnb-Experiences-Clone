import React from 'react'

import star from '../../assets/images/star.png'


export default function Card (props) {

    let badgeText
    if (props.exp.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.exp.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className='card-container'>
        {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img className='card-katie' src={`../../assets/images/${props.exp.coverImg}`} alt='' />

            <div className='card-star-container'>
                <img className='card-star' src={star} alt="" />
                <span>{props.exp.stats.rating}</span>
                <span className="gray">({props.exp.stats.reviewCount}) • </span>
                <span className="gray"> {props.exp.location}</span>
            </div>
            <h2 className='card-title'>{props.exp.title}</h2>
            <p className='card-price'><span className="bold">From ${props.exp.price}</span> / person</p>
        </div>
    )
}