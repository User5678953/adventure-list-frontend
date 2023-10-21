import React from "react"

// // IMPORT STYLE
// import "../styles/cards.scss"

const AdvCardImg = ({photos}) => {
    return (
        <img 
            src={photos[0].imageURL}
            className="adventure-card-img"
            alt={photos[0].description}
        />
    )
}

export default AdvCardImg   