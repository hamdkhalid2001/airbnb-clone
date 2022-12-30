import React from 'react'

function Card(props) {
    let badgeText = ""
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.online){
        badgeText = "Online"
    }
    return (
        <div className='card'>
        <div className='img' style={{
            backgroundImage: `url(${require(`../images/${props.image}`)}`
            }}>
            {
                badgeText && <div className='status'>{badgeText}</div>
            }
        </div>
        <div className='details'>
            <p>{props.rating} <span className='gray'>({props.reviewCount}).{props.country} </span></p>
            <p>{props.title}</p>
            <p className='price'>From ${props.price} <span className='price-span'>/ person</span></p>
        </div>
        </div>
    )
}

export default Card
