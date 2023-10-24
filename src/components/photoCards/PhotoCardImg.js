import React from "react"

const PhotoCardImg = ({photos}) => {
    return (
        <img 
            src={photos.imageURL}
            className="photo-card-img"
            alt={photos.description}
        />
    )
}

export default PhotoCardImg

