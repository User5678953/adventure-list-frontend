import React from "react"

const PhotoCardImg = ({photos}) => {
    return (
        <img 
            src={photos[0].imageURL}
            className="photo-card-img"
            alt={photos[0].description}
        />
    )
}

export default PhotoCardImg

